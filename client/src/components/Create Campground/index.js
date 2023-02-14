import { useState } from "react"
import { useNavigate } from "react-router-dom";



const Create = () => {

    const navigate = useNavigate();

    // States
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null)

    // Event Handlers
    const handleSubmit = async (e) => {
        e.preventDefault();
        const campground = { name, image, description };

        setIsPending(true);

        const response = await fetch('http://localhost:4000/api/campgrounds',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(campground)
        })
        const json = await response.json()

        if(!response.ok){
            setIsPending(false)
            setError(json.error)
        }
        if(response.ok){
            setIsPending(false)
            setError(null)
            navigate('/')
            console.log('Created')
        }

        // fetch('http://localhost:4000/api/campgrounds',{
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json'},
        //     body: JSON.stringify(campground)
        // }).then(() => {
        //     console.log('new Campground Added')/* dev---- to be removed later */
        //     setIsPending(false)
        //     navigate('/')
        // })
    }


    return(
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
                { !isPending && <button>Add Campground</button> }
                { isPending && <button disabled>Adding Campground... </button> }
            </form>
        </div>
    )
}


export default Create