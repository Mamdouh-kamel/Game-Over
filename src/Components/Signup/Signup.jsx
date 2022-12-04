import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { axiosPost } from '../../Api';
import Styles from './Signup.module.css'
export default function Signup() {

  const [loading, setloading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  let navigate = useNavigate();
  let [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  });

  function getFormData({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  async function sendData(e) {
    setloading(false)
    e.preventDefault();
    let result = await axiosPost(formData, "signup");

    if (result.message === "success") {
      navigate("/signin");
    } else {
      setloading(true);
      setErrorMsg(result.errors);
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
          <h2 className='text-white-50 mt-2 mb-5'>Create Account!</h2>
          {errorMsg ? <div className="alert alert-danger">{errorMsg?.email.message}</div>: ""}

          <form className='' onSubmit={sendData}>
            <div className='d-flex justify-content-between'>
            <label htmlFor="first_name"></label>
            <input onInput={getFormData} className='form-control form-control-sm text-white shadow-none bg-dark border border-dark w-50 me-4' placeholder='First Name' type="text" name="first_name" id="first_name" />

            <label htmlFor="last_name"></label>
            <input onInput={getFormData} className='form-control form-control-sm text-white shadow-none  bg-dark border border-dark w-50' placeholder='Last Name' type="text" name="last_name" id="last_name" />
            </div>

            <label htmlFor="age"></label>
            <input onInput={getFormData} className='form-control form-control-sm text-white shadow-none bg-dark border border-dark w-100' placeholder='Age' type="number" name="age" id="age" />

            <label htmlFor="email"></label>
            <input onInput={getFormData} className='form-control form-control-sm text-white shadow-none bg-dark border border-dark w-100' placeholder='Email' type="email" name="email" id="email" />

            <label htmlFor="password"></label>
            <input onInput={getFormData} className='form-control form-control-sm text-white shadow-none bg-dark border border-dark w-100' placeholder='Password' type="password" name="password" id="password" />

            <button type="submit" name="submitButton" className="btn btn-secondary my-3 text-white submitButton w-100 py-2 btn-user btn-block"><span >{loading? "Create Account": <i className="fas fa-spinner fa-spin fs-5 px-4"></i>}</span></button>
          </form>
          <div className={`${Styles.foot} text-muted border-bottom border-secondary`}>
              <p>This site is protected by reCAPTCHA and the Google <Link href="https://policies.google.com/privacy" className='text-decoration-none'>
                Privacy Policy </Link>and <Link className='text-decoration-none' href="https://policies.google.com/terms">Terms of Service</Link> apply.</p>            
          </div>
          <div className="text-center text-white-50 mt-2">
              <p>Already a member? <Link to="/signin" className='text-decoration-none'>Log In <i className="fas fa-chevron-right small"></i></Link></p>
          </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
