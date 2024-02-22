import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ cep,SetCep] = useState('');
  const [endereco, setEndereco] = useState(null)
  
  const handleBuscaCep = async (event) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if(!response.ok){
        throw new error("Cep dont achado");
      }
      setEndereco(await response.json());
    } catch (error){
      console.error(error);
    }
  }
  return (
    <>
     <div className='receive'>
      <h1>Onde que é?</h1>
      <input type="number" placeholder='Bota o CEP aí'
      value={cep}
      onChange={(e) => setCep (e.target.value)}
      /> <p> </p>

      <button className='button2'>Achar</button> <br /><br />
        
      
      <div className='endereco' >
        {endereco ?(<>
        <p>{JSON.stringify(endereco.logradouro)}</p>
        </>): null}
      </div>
      </div> 
    
     
    </>
  )
}

export default App
