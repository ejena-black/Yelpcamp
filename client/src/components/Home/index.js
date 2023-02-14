import useFetch from '../../hooks/useFetch'
import Catalogue from '../Catalogue';


const Home = () => {

    const { data, isPending, error} = useFetch('http://localhost:4000/api/campgrounds')

    return(
        <div>
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div> }
            { data && <Catalogue campgrounds={data}/> }
        </div>
    )
}

export default Home