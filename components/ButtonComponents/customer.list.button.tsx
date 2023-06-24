"use client"
import React, { ReactNode } from 'react'


const Button:React.FC<ButtonProps> = ({
    text,
    icon,
    bg,
    textColor,
    border,
    padding,
    handler,
    disabled,
    type
}) => {
  return (
    <button
      {...{ type }}
      onClick={handler}
      className={`flex items-center gap-2 ${bg} ${textColor} ${border} ${padding} text-sm font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer`}
      aria-label="Customise options"
      disabled={disabled}
    >
      {icon}
      <p>{text}</p>
    </button>
  )
}

export default Button

type ButtonProps = {
    text:string,
    icon?:ReactNode,
    bg:string,
    textColor:string,
    border?:string,
    padding?:string,
    handler?:()=>void,
    disabled?:boolean,
    type?:"button" | "submit" | "reset"
}