
import React, { ReactNode } from 'react'
import { UseFormRegisterReturn,FieldError} from "react-hook-form"

interface Input{
    register:UseFormRegisterReturn,
    error:FieldError,
    placeholder?:string,
    label:string,
    defaultValue?:string,
    type?:string,
    autoFocus?:boolean,
    icon?:ReactNode,
    pshandler?:()=> void
}

const UserInput = ({register,error,placeholder,label,defaultValue,type,autoFocus,icon,pshandler}:Input) => {
  return (
    <div className='flex flex-col focus-visible:border-gray-100'>
        {/* <label htmlFor={label} className='text-[13px] font-bold text-gray-600'>{label}</label> */}
        <div className='relative'>
        <input
        className='bg-slate-300 relative w-full border-[1px] border-gray-100 mt-2 py-3 md:py-4 lg:py-3 xl:py-4 rounded-3xl px-5 text-xs md:text-sm active:border-gray-200 focus:outline-none focus:border-gray-200 '
        id={label} {...register} defaultValue={defaultValue ?? ''} 
            {...{placeholder,autoFocus,type}}
        />
        {icon && (
            <span onClick={pshandler} className='absolute top-5 md:top-6 right-4 md:right-5 flex items-center cursor-pointer'>
                {icon}
            </span>
        )}
        </div>
        <span className='text-[10px] text-red-500 mt-1 ml-4'>{error?.message?.toString()}</span>
    </div>
  )
}

export default UserInput