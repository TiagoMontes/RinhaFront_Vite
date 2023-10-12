import { useState } from 'react'
import './App.css'

function App() {
  const [jsonContent, setJSONContent] = useState<boolean>();

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (event: any) => {
      try {
        setJSONContent(JSON.parse(event.target.result));
      } catch (error) {
        console.error('Erro ao analisar o arquivo JSON', error);
        setJSONContent(false);
      }
    };

    reader.readAsText(file);
  };

  return (
    <>
      <div>
        <h1>JSON Tree Viewer</h1>
        <p>Simple JSON Viewer that runs completely on-client. No data exchange </p>
        <input type="file" onChange={handleFileChange} />
        
        {jsonContent && (
          <div className='divbase'>
            <h2>Conteúdo do arquivo JSON:</h2>
              <pre>{JSON.stringify(jsonContent, null, 2)}</pre>
          </div>
        )}

      </div>
    </>
  )
}

export default App
