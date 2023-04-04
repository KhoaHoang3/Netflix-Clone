import React from 'react';

interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className='relative mt-8'>
      <input
        value={value}
        type={type}
        onChange={onChange}
        id={id}
        className='block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer'
        placeholder=' '
      />
      <label
        htmlFor='email'
        className='absolute text-md text-zinc-600 dark:text-zinc-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4'
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
