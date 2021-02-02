import {useState, useEffect} from 'react'
import axios from 'axios'

function API() {
    const [vetorFatos, setVetorFatos] = useState([])
    
    axios.get('https://cat-fact.herokuapp.com/facts').then(function(param) {
        console.log(parametro.data)
        setVetorFatos(parametro.data)
    }, [])
    return (
        <div>
            <h1>API</h1>
        </div>
    )
}

export default API