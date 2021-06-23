import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()
  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>

      {(((correct / questions.length) * 100).toFixed(0))<=50 &&
        <h2>Well...</h2>
        }

      {(((correct / questions.length) * 100).toFixed(0))>50 && (((correct / questions.length) * 100).toFixed(0)) <90 &&
        <h2>Okay...</h2>
        }

      {(((correct / questions.length) * 100).toFixed(0))>=90 &&
        <h2>Excellent!</h2>
        }

        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>


        {(((correct / questions.length) * 100).toFixed(0))<=50 &&
        <p className="after-result-p">You gotta do better human</p>
        }

        {(((correct / questions.length) * 100).toFixed(0))>50 && (((correct / questions.length) * 100).toFixed(0)) <90 &&
        <p className="after-result-p">Good, but room for improvement </p>
        }

        {(((correct / questions.length) * 100).toFixed(0))>=90 &&
        <p className="after-result-p">So that's why they call the topper ?</p>
        }


        <button className='close-btn' onClick={closeModal}>
          Try again?
        </button>
      </div>
    </div>
  )
}

export default Modal
