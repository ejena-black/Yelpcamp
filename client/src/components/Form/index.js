import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Form = () => {

    const navigate = useNavigate();

    // states
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [isPending, setIsPending] = useState(false);

    // event handlers
    const handleSubmit = async(e) => {
        e.preventDefault()
        const user = { email, password }
        setIsPending(true);

        const response = await fetch('http://localhost:4000/api/user/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        // const json = await response.json()

        if(!response.ok){
            setIsPending(false)
            // setError(json.error)
        }
        if(response.ok){
            setIsPending(false)
            // setError(null)
            navigate('/')
            console.log('logged in')
        }
    }


    return(
        <div>
            <form
                onSubmit={ (e)=>handleSubmit(e) }
            >
                <label htmlFor="form-email">Email</label>
                <input
                    id="form-email"
                    type="email"
                    name="email"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />

                <label htmlFor="form-password">Password</label>
                <input
                    id="form-password"
                    type="password"
                    name="password"
                    value={ password }
                    onChange={ (e) => setPasword(e.target.value) }
                />
                <button>Submit</button>

            </form>
        </div>
    )
}


export default Form