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
      // display:flex;
      // justify-content:center;
      // align-items:center;
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

  
    

  
   
    const [mathValue,setMathValue] = useState('Result will be displayed here');

    const mathdata= '<p><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msqrt><mn>2</mn><mi>x</mi></msqrt></math><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>∬</mo><mi>x</mi><mo>.</mo><mi>d</mi><mi>x</mi><mo>+</mo><msubsup><mo>∫</mo><mi>b</mi><mi>a</mi></msubsup><mi>a</mi><mo>+</mo><mi>b</mi><mo>.</mo><mi>d</mi><mi>x</mi></math><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><munder><mi>lim</mi><mrow><mn>1</mn><mo>→</mo><mo>∞</mo></mrow></munder><mfrac><mrow><mo>d</mo><mi>a</mi></mrow><mrow><mo>d</mo><mi>b</mi></mrow></mfrac></math><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>∯</mo><mi>sin</mi><mfenced><mi>x</mi></mfenced></math><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><msub><mi>log</mi><mn>10</mn></msub><mfenced><mn>2</mn></mfenced></math>+<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>∂</mo><mo>∈</mo><mo>≥</mo><mo>∋</mo><mo>∧</mo><mo>∨</mo><mo>∀</mo><mo>¬</mo><mo>∃</mo><mo>∄</mo><mo>△</mo><mo>○</mo><mo>⊙</mo><mo>⊗</mo><mo>≡</mo><mo>≈</mo><mo>⩾</mo><mi mathvariant=\"normal\">π</mi><mo>∂</mo><mo>∞</mo><mo>∆</mo><mo>∅</mo><mo>+</mo><mo>-</mo><mo>±</mo></math><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mfenced close=\"|\" open=\"|\"><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd></mtr><mtr><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd></mtr><mtr><mtd><mi>e</mi></mtd><mtd><mi>f</mi></mtd></mtr></mtable></mfenced><mo>+</mo><mfenced><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd></mtr><mtr><mtd><mi>e</mi></mtd><mtd><mi>f</mi></mtd><mtd><mi>g</mi></mtd><mtd><mi>h</mi></mtd></mtr><mtr><mtd><mi>i</mi></mtd><mtd><mi>j</mi></mtd><mtd><mi>k</mi></mtd><mtd><mi>l</mi></mtd></mtr></mtable></mfenced><mo>+</mo><mfenced close=\"]\" open=\"[\"><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>b</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>e</mi></mtd><mtd><mi>g</mi></mtd></mtr><mtr><mtd><mn>2</mn></mtd><mtd><mn>3</mn></mtd><mtd><mn>4</mn></mtd><mtd><mn>5</mn></mtd><mtd><mn>6</mn></mtd><mtd><mn>7</mn></mtd></mtr></mtable></mfenced></math></p>';

    const math = String.raw`${mathdata}`
    //<MathJax math={math} />
  return (
      <>
        <Container>
            {/* <Box> */}
              {/* <div className="input-text" onClick={() => openModal()}>{mathValue}</div> */}
               {/* <p>{<MathJax math={math} />}</p>  */}
              <EditorpopUp /*showModal={showModal} setShowModal={true}*/ setMathValue={setMathValue} setText={setText} text={text} />
            {/* </Box> */}
            <div className="input-text">{mathValue}</div>
        </Container>
      </>
  );
}

export default App;
