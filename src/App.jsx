import './App.css'
import { Button } from './components/button.jsx'

function exibirMensagem() {
  alert('Parabéns, agora você é Corinthiano!');
}

function App() {

  return (
    <>
      <Button texto='Ver meu Time' mensagem={exibirMensagem} />
    </>
  )
}

export default App
