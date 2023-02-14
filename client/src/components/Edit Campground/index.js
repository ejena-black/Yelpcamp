import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";






const Edit = () => {

    const { campground_id } = useParams()
    const {data: campground, isPending, error} =  useFetch(`http://localhost:4000/api/campgrounds/${ campground_id }`)
    const navigate = useNavigate()
    // States
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [sendingError, setSendingError] = useState(null)

    useEffect(() => {
        if(campground !== null){
            setName(campground.name);
            setImage(campground.image);
            setDescription(campground.description)
        }
    }, [campground])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const campground = { name, image, description };

        setIsSending(true);
        const response = await fetch(`http://localhost:4000/api/campgrounds/${ campground_id }`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(campground)
        })
        const json = await response.json()

        if(!response.ok){
            setIsSending(false)
            setSendingError(json.error)
        }
        if(response.ok){
            setIsSending(false)
            setSendingError(null)
            navigate('/')
            console.log('Created')
        }

        // fetch(`http://localhost:4000/api/campgrounds/${ campground_id }`/* changed url */,{
        //     method: 'PATCH',
        //     headers: { 'Content-Type': 'application/json'},
        //     body: JSON.stringify(campground)
        // }).then(() => {
        //     console.log('Campground Updated')/* dev---- to be removed later */
        //     navigate(-1)
        //     setIsSending(false)
        // })
    }

    

    return(
        <div>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div>}
            { campground && (
                <div>
                    <form
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <label htmlFor="camp_name">Campground Name</label>
                        <input
                            name="name"
                            id="camp_name"
                            type='text'
                            required
                            value={ name }
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="camp_image">Campground Image</label>
                        <input
                            name="image"
                            id="camp_image"
                            type='text'
                            required
                            value={ image }
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <label htmlFor="camp_description">Campground Description</label>
                        <textarea
                            name="description"
                            id="camp_description"
                            type='text'
                            required
                            value={ description }
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        { !isSending && <button>Update Campground</button> }
                        { isSending && <button disabled>Updating Campground... </button> }
                    </form>
                </div>
            )}
        </div>
    )
}

export default Edit