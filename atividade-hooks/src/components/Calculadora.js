import { useState } from 'react';
import '../App.css';

function Calculadora() {
  
  const [entradaEsq, setEntradaEsq] = useState(0)
  const [entradaDir, setEntradaDir] = useState(0)
  const [resposta, setResposta] = useState(0)
  
  function calculaOperacao(operacao) {
    if (operacao == '+') setResposta(parseInt(entradaEsq) + parseInt(entradaDir))
    else if (operacao == '-') setResposta(entradaEsq - entradaDir)
    else if (operacao == '/') setResposta(entradaEsq / entradaDir)
    else setResposta(entradaEsq * entradaDir)
  }

  const leEntradaEsq = (entrada) => setEntradaEsq(entrada.target.value)
  const leEntradaDir = (entrada) => setEntradaDir(entrada.target.value)

  return (
    <div>
      <h1>Calculadora Velha Simulator</h1>
      <div class="calculadora-container">
        <div className="label">Nº1</div>
        <input type="number" onChange={(entrada) => leEntradaEsq(entrada)} className="calculadora-input"></input>
        <div className="label">Nº2</div>
        <input type="number" onChange={(entrada) => leEntradaDir(entrada)} className="calculadora-input" id="no_2"></input>
          <button onClick={() => calculaOperacao('+')} className="calculadora-botao"> + </button>
          <button onClick={() => calculaOperacao('-')} className="calculadora-botao"> - </button>
          <button onClick={() => calculaOperacao('/')} className="calculadora-botao"> / </button>
          <button onClick={() => calculaOperacao('*')} className="calculadora-botao"> * </button>
        <div className="label">Saída</div>
        <p className="calculadora-output">{resposta}</p>
      </div>
    </div>
  );
}

export default Calculadora;