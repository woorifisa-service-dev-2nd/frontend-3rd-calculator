function Modal({isOpen,closeModal}) {
<div>
            <p>리액트로 모달 구현하기</p>
            <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
              모달 닫기
            </button>
          </div>
}

export default Modal;