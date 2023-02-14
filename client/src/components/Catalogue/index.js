import { Link } from "react-router-dom";
import './style.css'



const Catalogue = ({campgrounds}) => {



    return(
        <div className="catalogue-container">
           { campgrounds.map((campground) => (
               <div className="catalogue-preview" key={campground._id}>
                   <img src={campground.image} alt={campground.name}/>
                   <Link to={ `${campground._id}` }><h2>{campground.name}</h2></Link>
                   <p>{campground.description}</p>
               </div>
           ))}
        </div>
    )
}


export default Catalogue