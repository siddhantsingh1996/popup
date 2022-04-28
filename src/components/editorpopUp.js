import React,{useRef,useEffect,useCallback} from 'react'
import {useSpring,animated} from 'react-spring';
import {
    Dialog,
    DialogContent,
    Button,
    InputBase,
    Box,
    makeStyles,
  } from "@material-ui/core";

import styled from 'styled-components';
import {MdClose} from 'react-icons/md'


import { CKEditor } from '@ckeditor/ckeditor5-react';

import ClassicEditor from 'ckeditor5-classic-with-mathtype';
import MathJax from 'react-mathjax-preview'

const Background = styled.div`
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.8);
      position:fixed;
      display:flex;
      justify-content:center;
      align-items:first;
      margin-top: -125px;
`

{/*  display:grid;
      grid-template-columns: 1fr 1fr; */}

const ModalWrapper = styled.div`
      width:650px;
      height: 480px;
      box-shadow:0 5px 16px rgba(0,0,0,0.2);
      background:#fff;
      color:#000;
      /*position:relative;*
      /*z-index:10;*/
      border-radius:10px; 
      margin-top:40px;
     
`

const ModalImg = styled.img`
      width:100%;
      height:100%;
      border-radius: 10px 0 0 10px;
      background:#000;
`

const ModalContent = styled.div`
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      line-height:1.8;
      color:#141414;
      

      p {
          margin-bottom:1rem;
      }

      button {
           padding:10px 24px;
           background:#141414;
           color:#fff;
           border:none;
      }
`;

 const CloseModalButton = styled(MdClose)`
       cursor:pointer;
       position:absolute;
       top:20px;
       right:20px;
       width:32px;
       height:32px;
       padding:0;
       z-index:10;
 `


export default function EditorpopUp({ showModal, setShowModal, setMathValue,setText,text }) {
    // const handleClose = () => {
    //       setOpen(false);
    // };
       let data;

       const handleClose = () => {
            const math = String.raw`${data}`
            setText(data);
           // setMathValue(<MathJax math={math} />)
            setMathValue(math);
          //  setShowModal(prev => !prev)
       }
  return (
    <>
   
   {/* {showModal ? ( */}
            {/* <Background> */}
           
                <ModalWrapper showModal={showModal}>
                   <ModalContent>
                     <h3>Mathml Conversion</h3>
                   <CKEditor
                    editor={ ClassicEditor }
                   
                    config={{
                      toolbar: {
                          items: [
                              'heading', 'MathType', 'ChemType',
                              '|',
                              'bold',
                              'italic',
                              'link',
                              'bulletedList',
                              'numberedList',
                              'imageUpload',
                              'mediaEmbed',
                              'insertTable',
                              'blockQuote',
                              'undo',
                              'redo'
                          ]
                      },
                  }}


                    data={text}
                    onReady={ editor => {
                      data = editor.getData();
                       
                    } }
                    onChange={ ( event, editor ) => {
                       data = editor.getData();
                       console.log("data",data);
                    } }
                    onBlur={ ( event, editor ) => {
                       // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                       // console.log( 'Focus.', editor );
                    } }
                />
                 <div onClick={handleClose} style={{height:'40px',width:'200px',backgroundColor:'orange',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'8px',color:'#ffffff',marginTop:'1%'}}>Convert to Mathml</div>
                   </ModalContent>
                    {/* <CloseModalButton aria-label='Close modal' onClick={handleClose}/>  */}
                </ModalWrapper>
              
            {/* </Background> */}
        {/* ) :null}        */}
              
         
               
           
    </>
  );
}


/**
 * 
 * 
 * 
 * "<p><math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mo>∫</mo><mi>b</mi><mi>a</mi></msubsup><mi>x</mi><mo>d</mo><mi>x</mi><mo>+</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>y</mi><mo>.</mo><mi>d</mi><mi>y</mi></math></p><p>&nbsp;</p><p><math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mo>∫</mo><mi>b</mi><mi>a</mi></msubsup><mi>x</mi><mo>.</mo><mi>d</mi><mi>x</mi><mo>+</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>y</mi><mo>.</mo><mi>d</mi><mi>y</mi></math></p>"
 */