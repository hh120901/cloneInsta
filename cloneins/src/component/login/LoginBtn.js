// import React, { useEffect } from "react";
import Modal from "react-modal";
import { useState } from "react";
import "./Login.css";
import { auth } from '../../firebase/firebase.js';
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


Modal.setAppElement("#root");
function LoginBtn(userLogin) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function openLoginModal() {
    setMOpen(true);
  }
  function closeLoginModal() {
    setMOpen(false);
  }
  const [mOpen, setMOpen] = useState(false);
  // SignUp
  const clearForm = ()=>{
    setEmail('');
    setPassword('');
    setMOpen(false);
  }
  var handleSubmit = (e)=>{
    console.log("Submited")
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user.displayName ===''){
          updateProfile(auth.currentUser, {
            displayName: username
          }).then(() => {
            console.log("updateSuccess",username);
          }).catch((error) => {
            // An error occurred
            // ...
          });
        }
        console.log("Signin Success!!!");
        return user;
      })
      
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  }
  const login = ()=>{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login Success!");
        console.log(user.displayName);
        // Update Username when login
          if(user.displayName === ''){
            updateProfile(auth.currentUser, {
              displayName: username
            }).then(() => {
              console.log("updateSuccess",username);
            }).catch((error) => {
              // An error occurred
              // ...
            });
          }
        return user;
      })
      .then((user)=>{
        setUsername(user.displayName);
        userLogin.parentCallback(user.displayName);
        clearForm();
      })
      .catch((error) => {
      const errorMessage = error.message;
      window.alert(errorMessage);
    });


  }
  
  return (
      <div className="test__modal">
        <button className="btn__login" onClick={openLoginModal}>
          {username ? username: "Login"}
        </button>
        <div className="MyModal">
          <Modal
            className="hi"
            isOpen={mOpen}
            onRequestClose={closeLoginModal}
            contentLabel="Example Modal"
          >
            <div className="div__form">
              <h2 className="login__title">DREAMGRAM</h2>
              <hr />
              <div className="form__body">
                <form className="form__login">
                  <div className="form__group">
                    <span>Username:</span>
                    <input placeholder="Username" 
                      value={username}
                      onChange={e=>setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <span>Gmail:</span>
                    <input 
                      placeholder="Gmail" 
                      value={email}
                      onChange={e=>setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <span>Password:</span>
                    <input placeholder="password" 
                      value={password}
                      onChange={e=>setPassword(e.target.value)}
                    />
                  </div>
                </form>
              </div>

              <hr />
              <div className="form__footer">
                <button className="submit__btn" type="submit" onClick={login}>
                    Login
                </button>
                <button className="submit__btn" type="submit" onClick={handleSubmit}>
                  SignIn
                </button>
                <button className="close__btn" onClick={closeLoginModal}>
                  Close
                </button>
                
              </div>
            </div>
          </Modal>
        </div>
      </div>
  );
}


export default LoginBtn;
