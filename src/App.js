import React,{useState} from 'react'
import './App.css';
import EditorpopUp from './components/editorpopUp';
import MathJax from 'react-mathjax-preview';
import styled from 'styled-components';



function App() {
    const [open, setOpen] = useState(false);
    const [text,setText]  = useState('');
    const [showModal,setShowModal] = useState(false);

    const Container = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
`

const Button = styled.button`
      min-width:100px;
      padding:16px 32px;
      border-radius:4px;
      border:node;
      background:#141414;
      color:#fff;
      font-size:24;
      cursor:pointer;  
`
const Box =styled.div`
      height:500px;
      width:500px;
      border:2px solid #000000;
      display:flex;
      justify-content:center;
      align-items:first;
`

    const openModal = () => {
          setShowModal(prev => !prev)
    }

  
    

    const math = String.raw`
    <p><math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mi>x</mi><mo>+</mo><mi>b</mi></msqrt></math>Hello this is here</p>
    `;  
   
    const [mathValue,setMathValue] = useState('')
    //<MathJax math={math} />
  return (
      <>
        <Container>
            <Box>
              <div className="input-text" onClick={() => openModal()}>{mathValue}</div>
              <EditorpopUp showModal={showModal} setShowModal={setShowModal} setMathValue={setMathValue} setText={setText} text={text} />
            </Box>
        </Container>
      </>
  );
}

export default App;
