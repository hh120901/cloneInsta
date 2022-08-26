import React from "react";
import Modal from "react-modal";
import {useState} from 'react';
import './Login.css'

Modal.setAppElement("#root");
function LoginBtn() {
    function openLoginModal() {
        setMOpen(true);
      }
      function closeLoginModal() {
        setMOpen(false);
      }
    const [mOpen, setMOpen] = useState(false)

  return (
    <div className="test__modal">
      <button className="btn__login" onClick={openLoginModal}>
        Login
      </button>
      <div className="MyModal">
        <Modal
            className="hi"
            isOpen={mOpen}
            onRequestClose={closeLoginModal}
            contentLabel="Example Modal"
        >
        <div className="div__form">
            <h2 className="login__title">LOGIN</h2>
            <hr />
            <form className="form__login">
            <div className="form__group">
                <span>Username:</span>
                <input placeholder="Username" />
            </div>
            <div className="form__group">
                <span>Gmail:</span>
                <input placeholder="Gmail" />
            </div>
            <div className="form__group">
                <span>Password:</span>
                <input placeholder="password" />
            </div>
            </form>
            <hr />
            <button className="close__btn" onClick={closeLoginModal} >close</button>
        </div>   
        </Modal>
      </div>
    </div>
  );
}
export default LoginBtn;
