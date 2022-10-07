// import React, { useEffect } from "react";
import Modal from "react-modal";
import { useState } from "react";
import "./Login.css";
import { auth } from '../../firebase/firebase.js';
import { getAuth, signOut, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


Modal.setAppElement("#root");
function LoginBtn(userLogin) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkLogin, setCheckLogin] = useState(false);
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
  var handleSignUp = (e)=>{
    console.log("Submited")
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // if(user.displayName ===''){
          updateProfile(auth.currentUser, {
            displayName: username
          }).then(() => {
            console.log("Create username: ",username);
          }).catch((error) => {
            console.log(error.message)
          });
        // }
        console.log("Sign Up Success!!!");
        return user;
      })
      .then(()=>{
        window.alert("Account Created!");

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
        setCheckLogin(true);
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
  //sign out: 
  const logOut =()=>{
    signOut(auth)
    .then(() => {
      setCheckLogin(false)
      userLogin.parentCallback('Login');
      console.log(" Sign Out Successed !");
      setUsername('');
    }).catch((error) => {
      console.log(error.Message)
    });
  }
    
  
  return (
    <div className="test__modal">
      <button className="btn__login" onClick={openLoginModal}>
        {username ? username : "Login"}
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
                  <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              
                
                <div className="form__group">
                  <span>Gmail:</span>
                  <input
                    placeholder="Gmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <span>Password:</span>
                  <input
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
            </div>

            <hr />
            <div className="form__footer">
              {checkLogin ? (
                <button className="submit__btn" type="reset" onClick={logOut}>
                  Sign Out
                </button>
              ) : null}
              {!checkLogin ? (
                <>
                  <button className="submit__btn" type="submit" onClick={login}>
                    Sign In
                  </button>
                  <button
                    className="submit__btn"
                    type="submit"
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </button>
                  <button className="close__btn" onClick={closeLoginModal}>
                    Close
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}


export default LoginBtn;
