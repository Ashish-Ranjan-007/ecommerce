import React, { useState } from 'react'
import Input from '../helpers/Input'
import Dropdown from '../helpers/Dropdown'
import {useFormik} from 'formik'
import { loginVal } from '../validation/Validation'
function Login() {
    // const[input , setInput]=useState({
    //     email:'',
    //     password:'',
    //     type:''
    // })

    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
            type:'',
        },
        validationSchema:loginVal,
        onSubmit:(value)=>{

        }
    })
console.log(formik.values)
console.log(formik.errors)
  return (
   <div className=' h-screen flex justify-center items-center w-full'>
       <div className='flex flex-col gap-3 w-full max-w-[600px]  '>
        <h1 className='font-bold uppercase text-2xl tracking-widest text-center my-5'>Login</h1>
       {/* <Input
        type={"eamil"}
        placeholder={"Email"}
        value={input.email}
        name={"email"}
        onValueChange={(value)=>{setInput({...input, username:email})}}
        /> */}
        <Input
        type={"text"}
        placeholder={"Email"}
        value={formik.values.email}
        name={"email"}
        onValueChange={(e)=>{formik.handleChange(e)}}
        />
        <input type="text" name='email' onChange={formik.handleChange} value={formik.values.email}/>
         {/* {formik.touched.email && formik.errors.email ?  <span className='text-red-600'>{formik.errors.email}</span> : null } */}
        {/* <Input
        type={"password"}
        placeholder={"Password"}
        value={input.password}
        name={"password"}
        onValueChange={(value)=>{setInput({...input, password:value})}}
        />
        <Dropdown
            categoryLable={"Login Type"}
            category={['Seller','Admin']}
            dropDownStyle={'w-full max-w-full'}
            onCategoryChange={(value)=>{setInput({...input, type:value})}}
        /> */}
        <button className='bg-blue-600 py-3 px-10 text-white'>Login</button>
       </div>
   </div>
  )
}

export default Login