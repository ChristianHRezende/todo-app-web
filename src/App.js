import React,{ useState } from 'react'
import InputText from './components/InputText'

function App() {
  
  const [title,setTitle] = useState('')

  const handleTitleChange = (text) =>{
    setTitle(text)
  }

  return (
    <div className="App">
      <h1>Formulário:</h1>
      <InputText 
        label="Titulo:" 
        value={title}
        onValueChange={handleTitleChange}
        />
    </div>
  );
}

export default App;
