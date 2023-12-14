import React from 'react'
function Modal({isOpen,content, closeModal}) {
return (
    <div className={'modal-container'} style={{ display: isOpen ? "block" : "none" }}>
        <div className="border-2 border-solid border-black bg-blue-500 h-10">{content}
        <button className={'modal-close-btn'} onClick={closeModal}>Close</button>
        </div>
    </div>
)
}

export default Modal;