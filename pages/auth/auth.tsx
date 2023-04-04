import Image from 'next/image';
import styles from '@/styles/auth/auth.module.css';
import logo from '@/public/images/logo.png';
import Input from '@/components/input';
import { useState } from 'react';

export default function Auth() {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChangeInput = (evt: any) => {
    const { id, value } = evt.target;
    setFormValue((prevValue) => {
      return {
        ...prevValue,
        [id]: value,
      };
    });
  };
  const handleSubmit = (evt: any) => {
    console.log('formValue', formValue);

    evt.preventDefault();
  };
  return (
    <>
      <div className={styles.background_image}>
        <div className='bg-black w-full h-full lg:bg-opacity-50'>
          <nav className='px-12 py-5'>
            <Image className='h-12 w-56' src={logo} alt='logo_netflix' />
          </nav>
          <div className='flex justify-center'>
            <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full'>
              <h2 className='text-white text-2xl font-semibold'>Sign in</h2>
              <div className='flex flex-col gap-4'>
                <form onSubmit={handleSubmit} action=''>
                  <Input
                    label='Username'
                    id='name'
                    onChange={handleChangeInput}
                    type='text'
                    value={formValue.name}
                  />

                  <Input
                    label='Email'
                    id='email'
                    onChange={handleChangeInput}
                    type='email'
                    value={formValue.email}
                  />

                  <Input
                    label='Password'
                    id='password'
                    onChange={handleChangeInput}
                    type='password'
                    value={formValue.password}
                  />
                  <button
                    type='submit'
                    className='bg-red-500 py-3 text-white font-semibold rounded-md w-full hover:bg-red-700 transition-transform mt-8'
                  >
                    Login
                  </button>
                </form>
              </div>

              <p className='text-center text-neutral-500 mt-12'>
                First time using Netflix ?
                <span className='text-white ml-2 hover:underline cursor-pointer'>
                  Create your account here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
