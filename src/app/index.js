import React, {useState} from 'react';
import {render} from 'react-dom';

function App () {
    const [input, setInput] = useState({});
    const handleInput = (e) =>{
        e.preventDefault()
        setInput({
            name: "works!"
        })
        let config ={
                method: "POST",
                body: JSON.stringify(input),
                headers:{
                    'Content-Type': 'application/json'
                 }
            }
            fetch('/add-public',config)
            .then(res => console.log(res.json()))
            .catch(error => console.error(error))
    }
        return(
            <>
                <h1>Hello World</h1>
                <form>
                    <label htmlFor="name" >Nombre</label>
                    <input name="name" />
                    <input type="button" onClick={handleInput}/>
                </form>
            </>
        )
}
render(<App/>, document.getElementById('app'))