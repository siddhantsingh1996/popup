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
      height: 441px;
      box-shadow:0 5px 16px rgba(0,0,0,0.2);
      background:#fff;
      color:#000;
      position:relative;
      z-index:10;
      border-radius:10px; 
      margin-top: 126px;
     
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
            setMathValue(<MathJax math={math} />)
            setShowModal(prev => !prev)
       }
  return (
    <>
   
   {showModal ? (
            <Background>
           
                <ModalWrapper showModal={showModal}>
                   <ModalContent>
                     <h3>Show message</h3>
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
                        // You can store the "editor" and use when it is needed.
                       // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        //const data = editor.getData();
                      //  const math = String.raw`${data}`
                       // setText(data);
                       // setMathValue(<MathJax math={math} />)
                       // console.log( "hello world",{ event, editor, data } );
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
                   </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={handleClose}/> 
                </ModalWrapper>
               
            </Background>
        ) :null}       
              
         
               
           
    </>
  );
}
