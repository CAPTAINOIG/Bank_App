import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom'
import '../assets/Styles/Signup.css'
import { FiLoader } from 'react-icons/fi'




const Signup = () => {
    const max = (Math.round(Math.random() * 10000000000));
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    let balance = 1000
    let transact = "e21356765687676778987"

    const Navigate = useNavigate();
    const [loader, setLoader] = useState(false)


    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    let length = new RegExp(`(?=.{8,})`);



    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            phone: "",
            email: "",
            pin: "",
            password: "",
            accountNumber: max,
            amount: 1000,
            date,
            time,
            AdditionalInformation: {
                balance: balance,
                date,
                time,
                transact: transact,
            },

            history: [],

        },
        onSubmit: (values) => {
            setLoader(true)
            // console.log(values);

            if (values) {
                const storage = localStorage.getItem('formy')
                if (storage) {
                    let data = JSON.parse(storage)
                    data.push(values)

                    localStorage.setItem("formy", JSON.stringify(data));
                }
                else {
                    let newData = []
                    newData.push(values)
                    localStorage.setItem("formy", JSON.stringify(newData));
                }

                Navigate('/signin')
            }
            else {
                setLoader(false)
                Navigate('/sign')
            }
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("This field is required"),

            lastname: Yup.string().required("This field is required"),

            phone: Yup.string().matches(/^[\d]{10}$/, "This field is required"),

            email: Yup.string().required("This field is required").email("You must enter an email address"),

            pin: Yup.string().required("This field is required"),

            password: Yup.string().matches(lower, "Must include lowercase letter").matches(upper, "Must include uppercase letter").matches(number, "Must include a number").matches(length, "Must not be less than 8 characters")
                .required("This field is required")
        })
    })
    console.log(formik.touched);
    // console.log(formik.values); formik.errors keeps a list of all the errors u might have made
    return (
        <>
            <div id='sec' className='border'>

                <div id='sign' className="col-lg-5 bg-light shadow rounded px-3 mx-auto">
                    <h1 className='fw-bold text-dark text-center'>REGISTRATION INFO</h1>
                    <form action="" onSubmit={formik.handleSubmit}>

                        <div className='my-3'>
                            <input type="text" placeholder='firstname' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.firstname && formik.errors.firstname ? "form-control is-invalid" : "form-control"} value={formik.values.firstname} name='firstname' />
                            <small className='text-danger'>{formik.touched.firstname && formik.errors.firstname}</small>
                        </div>

                        <div className='my-3'>
                            <input type="text" placeholder='lastname' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.lastname && formik.errors.lastname ? "form-control is-invalid" : "form-control"} value={formik.values.lastname} name='lastname' />
                            <small className='text-danger'>{formik.touched.lastname && formik.errors.lastname}</small>
                        </div>

                        <div className='my-3'>
                            <input type="number" className={formik.touched.phone && formik.errors.phone ? "form-control is-invalid" : "form-control"} placeholder='enter phone number' name='phone' onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />

                            <small className='text-danger'>{formik.touched.phone && formik.errors.phone}</small>
                        </div>

                        <div className='my-3'>
                            <input type="text" placeholder='email' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"} value={formik.values.email} name='email' />
                            <small className='text-danger'>{formik.touched.email && formik.errors.email}</small>
                        </div>

                        <div className='my-3'>
                            <input type="number" placeholder='pin' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.pin && formik.errors.pin ? "form-control is-invalid" : "form-control"} value={formik.values.pin} name='pin' />
                            <small className='text-danger'>{formik.touched.pin && formik.errors.pin}</small>
                        </div>

                        <div className='my-3'>
                            <input type="text" placeholder='password' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"} value={formik.values.password} name='password' />
                            <small className='text-danger'>{formik.touched.password && formik.errors.password}</small>
                        </div>
                        <button type='submit' className='btn btn-dark w-100 text-light fs-5 fw-bold rounded my-3'>
                            {loader ? <FiLoader /> : 'Submit'}
                            </button>
                    </form>
                </div> <br /><br /><br /><br /><br />
            </div>

        </>
    )
}

export default Signup