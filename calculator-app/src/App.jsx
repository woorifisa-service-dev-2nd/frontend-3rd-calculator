import { useState } from 'react'
import React, { useRef } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Modal from './Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalBackground = useRef();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
    <div className={'btn-wrapper'}>
      <button onClick={openModal}>Open Modal</button>
    </div>
      <Modal isOpen={isModalOpen} content = "" closeModal={closeModal}/>
    </>
  )
}

export default App