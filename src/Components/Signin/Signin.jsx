import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosPost } from '../../Api';
import Styles from '../Signup/Signup.module.css'
export default function Signin() {

  const [loading, setloading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  let navigate = useNavigate();

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function getFormData({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  async function sendData(e) {
    setloading(false);
    e.preventDefault();
    let result = await axiosPost(formData, "signin");
    if (result.message === "success") {
      localStorage.setItem('token', result.token)
      navigate("/Game-Over");
    } else {
      setloading(true);
      setErrorMsg(result.message);
    }
    // console.log(result);
  }
  // console.log(formData);


  return (
    <>
    <div className="container top-sign">
      <div className="row g-0 overflow-hidden my-3">
        <div className={`col-md-6 d-block ${Styles.imge}`}>
        </div>
        <div className={`col-md-6 m-auto text-center ${Styles.register}`}>
          <div className='py-5 px-4'>
          <h2 className='text-white-50 mt-2 mb-5'>Login to Game Over</h2>
          {errorMsg ? <div className="alert alert-danger">{errorMsg}</div>: ""}
          <form className='px-4 text-white' onSubmit={sendData}>

            <label htmlFor="email"></label>
            <input onInput={getFormData} className='form-control text-white shadow-none bg-dark border border-dark w-100' placeholder='Email' type="email" name="email" id="email" />

            <label htmlFor="password"></label>
            <input onInput={getFormData} className='form-control text-white shadow-none bg-dark border border-dark w-100' placeholder='Password' type="password" name="password" id="password" />

            <button type="submit" name="submitButton" className="btn btn-secondary my-3 text-white submitButton w-100 py-2 btn-user btn-block">{loading? "Login": <i className="fas fa-spinner fa-spin fs-5 px-4"></i>}</button>
          </form>
          <div className={`${Styles.foot} text-white-50 border-top border-secondary`}>
              <Link href="" className='text-decoration-none mt-4 d-block'>Forgot Password?</Link>
              <p>Not a member yet? <Link to="/signup" className='text-decoration-none'>Create Account <i className="fas fa-chevron-right small"></i></Link></p>

          </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
