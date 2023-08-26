import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { Link, useNavigate } from 'react-router-dom'
import logo3 from '../assets/image/logo3.png'
import '../assets/Styles/Signin.css'
Link


 

const Signin = () => {
    
    const Navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    const [err, seterr] = useState(null)

  
    
    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    let length = new RegExp(`(?=.{8,})`);


    // useEffect(() => {
    //     if(!details) {
    //         setLoading(true)
    //     }

    //     console.log(loading);
    // }, [details])
    
    // const test =()=>{
       
    // }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: (values) => {
          

            if(loading) {
                Navigate('/loader')
            }
        
        else{
            //  compare what the user type to register to what is he type to log in
            // if(values.email && values.password){
                    // getting all user info first for comparison, formy is where every user info are stored
                const data = JSON.parse(localStorage.getItem("formy"));
                    // see if it match
                const findUser = data?.find(user=> user?.email === values.email && user?.password === values.password )
                if(findUser){
                    // console.log(findUser)
                    localStorage.setItem("userIndex", findUser)
                    Navigate('/dashboard', { state: {findUser}}) 
                 
            } 
            else{
                seterr("incorrect details")
            }
        } 

        
    },

        validationSchema: Yup.object({
            email: Yup.string().required("This field is required").email("You must enter an email address"),
            password: Yup.string().matches(lower, "Must include lowercase letter").matches(upper, "Must include uppercase letter").matches(number, "Must include a number").matches(length, "Must not be less than 8 characters")
            .required("This field is required")
        })
    })

    // console.log(formik.touched);
   
    return (
        <>
    <section id='section' className='border'>
        
        <div className="container">
        <div className="row">
        
            <div id='login' className="col-lg-6 px-3 shadow bg-light mx-auto">
                <h1 id='log' className='text-center'>LOGIN</h1>

                <form action="" onSubmit={formik.handleSubmit}>
                    <div className='my-4'>
                        <input type="text" placeholder='email' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"} name='email' />
                        <small className='text-danger'>{formik.touched.email && formik.errors.email}</small>
                    </div>

                    <div className='my-4'>
                        <input type="text" placeholder='password' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"} name='password' />
                        <small className='text-danger'>{formik.touched.password && formik.errors.password}</small>
                    </div>

                    <button id='button' type='submit' className='btn fs-4 text-light fw-bold rounded w-100 my-2'>Submit</button>
                    </form>
                    <div className="d-flex">
                    <p id='mem' className='fs-5'>Not a member?</p> 
                    <span ><Link className='text-decoration-none fs-5 text-light mb-3 btn bg-dark' id='up' to="/Signup">Sign up now</Link></span>
                    </div>
                
                {
                    err ? <p className='text-danger fw-bold'>{err}</p> : null
                }
                </div>
                
                </div>
                </div>
    </section>
       
        </>
    )
}

export default Signin