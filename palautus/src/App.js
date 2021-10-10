import axios from 'axios';
import {useState,useEffect} from 'react'
import './App.css';

const URL = 'https://api.kanye.rest/';

function App(){
  const [quote, setQuote] = useState('');
useEffect(()=> {
  axios.get(URL)
    .then((response)=>{
      setQuote(response.data.quote)
    }).catch (error => {
      alert(error);
    });
},[])

return (
  <div style={{margin:50}}>
    <h1>Kanye Rest</h1>
    <h3>{quote}</h3>
    <button onClick={() => window.location.reload(false)}>New Kanye Quote!</button>
  </div>
)
}
export default App;