import { useState } from 'react'
import React, { useRef } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Modal'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const [history,setHistory] = useState( {
    id : 0,
    content : ''
  })

  const historyId = useRef(0);

  return (
    <>
      <div>
      <button onClick={() => setModalOpen(true)}>
          history
        </button>
        </div>
        <div ref={modalBackground} onClick={e => {
          if (e.target === modalBackground.current) {
            setModalOpen(false);
          }
        }
        }>
          
        </div>
    </>
  )
}

export default App
