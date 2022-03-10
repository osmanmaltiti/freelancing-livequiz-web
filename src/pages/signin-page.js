import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Validate from '../components/validators';
import SignInFunctions from '../functions/signin-function';
import '../styles/App.css';

const SignIn = () => {
    const [ toggle, setToggle ] = useState(false);

    const render = () => {
      const state = toggle ? <SignUp/> : <Login/>;
      const toggleButton = toggle ? 
                         "Already registered? Sign In here" :
                         "Don't have an account? Sign Up"
      return { state, toggleButton }
    }
    const { state, toggleButton } = render();
  
    return (
      <div id='main-signin' className='w-screen h-screen flex flex-col bg-blue-50 md:bg-lightblue overflow-y-auto scrollbar-thin'>
          <div style={{backgroundColor: '#ffffffab'}} className= 'flex flex-col flex-grow w-full py-6 m-auto items-center gap-8 lg:w-[70%] xl:w-[50%] lg:flex-grow-0'>
          <h1 className='text-5xl font-bold'>Live Quiz</h1>
            { state }
            <button className='toggle-button m-auto mb-2 hover:text-cyan-500' 
            onClick={ () => setToggle(!toggle) }>{ toggleButton }</button>
          </div>
      </div>
    )
}

export default SignIn;

const Login = () => {
    const navigate = useNavigate();
    const { validateLogin } = Validate();
    const { signin } = SignInFunctions();
  
    const formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validate: validateLogin,
      onSubmit: (values) => {
        signin(values);
      }
    });
  
    return (
        <form className='w-full flex flex-col mx-auto justify-center px-12 gap-4 py-4 m-4 sm:w-4/5 md:w-[80%]' 
        onSubmit = {formik.handleSubmit}>
          <h2 className='text-3xl font-semibold'>Log in</h2>
          <label htmlFor="FirstName" className='w-full relative self-start m-0'>
            <p className='font-medium text-lg'>Email</p>
            <input 
                className='pl-2 w-full h-10 m-0 border-black border rounded-sm' 
                id='email'
                name='email'
                type='email' 
                placeholder='Email Address'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            { formik.errors.email ? <div className='absolute right-2 top-10 text-xl text-red-500 italic'>{formik.errors.email}</div>: null }
          </label>
          <label htmlFor="FirstName" className='w-full relative self-start m-0 text-lg'>
            <p className='font-medium text-lg'>Password</p>
            <input 
                className='pl-2 w-full h-10 m-0 border-black border rounded-sm' 
                id='password'
                name='password'
                type='password' 
                placeholder='Password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            { formik.errors.password ? <div className='text-xl absolute right-2 top-10 text-red-500 italic'>{formik.errors.password}</div>: null }
          </label>
          {/* EXTRAS */}
          <label htmlFor="extras" className='w-full self-start m-0 text-sm flex flex-row items-center col-span-2 justify-between'>
            <span className='flex flex-row items-center gap-1'>
              <input type='checkbox'/>
              <p>Remember Me</p>
            </span>
            <span>
              <button>Forgotten password?</button>
            </span>
            { formik.errors.Confirm ? <div className='text-xl text-red-500 italic'>{ formik.errors.Confirm }</div> : null }
          </label>
          {/* SUBMIT BUTTON */}
          <button className='bg-green-500 text-white py-1 px-8 mt-4 rounded-sm w-full 
          border-2 border-solid border-green-500
          hover:border-2 hover:border-solid col-span-2'
          type='submit'>Log In</button>
        </form>
    )
};


const SignUp = () => {
    const navigate = useNavigate();
    const { validateSignup } = Validate();
    const { signup } = SignInFunctions();
  
    const formik = useFormik({
      initialValues: {
        Firstname: '', Lastname: '', 
        Email: '', Number: '',
        Password: '', Confirm: '',
      },
      validate: validateSignup,
      onSubmit: (values) => {
        signup(values)
      }
    });
  
    return (
        <form 
        className='w-full h-full mx-auto flex flex-col gap-y-3 gap-x-4 px-12 py-4 md:w-[90%]
          lg:grid lg:grid-cols-2 lg:items-center' 
        onSubmit={formik.handleSubmit}>
        <h2 className='text-3xl font-semibold col-span-2'>Register</h2>
        {/* FIRST NAME */}
          <label htmlFor="Firstname" className='w-full relative self-start m-0 flex flex-col gap-1'>
            <p className='text-lg font-medium'>First Name</p>
            <input 
              className='pl-2 w-full h-10 m-0 border-black border rounded-sm'
              id='Firstname'
              name='Firstname'
              value={formik.values.Firstname}
              onChange={formik.handleChange}
              type='text' 
              placeholder='Enter your first name'
            />
            { formik.errors.Firstname ? <div className='text-xl absolute right-2 top-10 text-red-500 italic'>{ formik.errors.Firstname }</div> : null }
          </label>
        {/* LAST NAME */}
          <label htmlFor="Lastname" className='w-full relative self-start m-0 text-sm flex flex-col gap-1'>
            <p className='text-lg font-medium'>Last Name</p>
            <input 
              className='pl-2 w-full h-10 m-0 border-black border rounded-sm'
              id='Lastname'
              name='Lastname'
              value={formik.values.Lastname}
              onChange={formik.handleChange}
              type='text' 
              placeholder='Enter your last name'
            />
            { formik.errors.Lastname ? <div className='text-xl absolute right-2 top-10 text-red-500 italic'>{ formik.errors.Lastname }</div> : null }
          </label>
        {/* EMAIL */}
          <label htmlFor="Email" className='w-full relative self-start m-0 text-sm'>
            <p className='text-lg font-medium'>Email</p>
            <input 
              className='pl-2 w-full h-10 m-0 border-black border rounded-sm'
              id='Email'
              name='Email'
              value={formik.values.Email}
              onChange={formik.handleChange}
              type='email'
              placeholder='Enter your email'
            />
            { formik.errors.Email ? <div className='text-xl absolute right-2 top-10 text-red-500 italic'>{ formik.errors.Email }</div> : null }
          </label>
        {/* NUMBER */}
          <label htmlFor="Number" className='w-full relative self-start m-0 text-sm'>
            <p className='text-lg font-medium'>Phone Number</p>
            <input 
                className='pl-2 w-full h-10 m-0 border-black border rounded-sm'
                id='Number'
                name='Number'
                value={formik.values.Number}
                onChange={formik.handleChange}
                type='tel'
                placeholder='Enter your number'
            />
            { formik.errors.Number ? <div className='text-xl absolute right-2 top-10 text-red-500 italic'>{ formik.errors.Number }</div> : null }
          </label>
        {/* PASSWORD */}
          <label htmlFor="Password" className='w-full relative self-start m-0 text-sm'>
            <p className='text-lg font-medium'>Password</p>
            <input 
              className='pl-2 w-full h-10 m-0 border-black border rounded-sm'
              id='Password'
              name='Password'
              value={formik.values.Password}
              onChange={formik.handleChange}
              type='password' 
              placeholder='Password'
            />
            { formik.errors.Password ? <div className='text-xl absolute right-2 top-10 text-red-500 italic'>{ formik.errors.Password }</div> : null }
          </label>
        {/* CONFIRM PASSWORD */}
          <label htmlFor="Confirm" className='w-full relative self-start m-0 text-sm'>
            <p className='text-lg font-medium'>Confirm Password</p>
            <input 
              className='pl-2 w-full h-10 m-0 border-black border rounded-sm'
              id='Confirm'
              name='Confirm'
              value={formik.values.Confirm}
              onChange={formik.handleChange}
              type='password' 
              placeholder='Confirm Password'
            />
            { formik.errors.Confirm ? <div className='text-sm absolute right-2 top-10 text-red-500 italic'>{ formik.errors.Confirm }</div> : null }
          </label>
          
        {/* SUBMIT BUTTON */}
          <button className='bg-green-500 text-white py-1 px-8 mt-4 rounded-sm w-full 
          border-2 border-solid border-green-500
          hover:border-2 hover:border-solid col-span-2'
          type='submit'>Register</button>
        </form>
    )
  };