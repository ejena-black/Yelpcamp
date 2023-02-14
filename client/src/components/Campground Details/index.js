import { Link, useNavigate, useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"



const CampDetails = () => {

    const { campground_id } = useParams();
    const navigate = useNavigate()
    const { data: campground, isPending, error } = useFetch(`http://localhost:4000/api/campgrounds/${ campground_id }`)

    const handleDelete = () => {
        fetch(`http://localhost:4000/api/campgrounds/${ campground_id }`, {
            method: 'DELETE'
        }).then(() =>  {
            navigate('/')
        })
    }

    return(
        <div>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div>}
            { campground && (
                <div>
                    <h1>{ campground.name }</h1>
                    <img src={ campground.image } alt={ campground.name }/>
                    <Link to={`/campgrounds/${campground._id}`}>Go Edit</Link>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            ) }
        </div>
    )
}

export default CampDetails