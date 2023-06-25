"use client"
import React from 'react'
import { TextInput } from '@mantine/core'

const CustomerFillField:React.FC<FieldProps> = ({
    placeholder,label,form
}) => {
  return (
   <TextInput
    placeholder={placeholder}
    label={<p className='font-semibold text-xs 2xl:text-sm'>{label}</p>}
    radius={"md"}
    {...form}
    
   />
  )
}

export default CustomerFillField

type FieldProps ={
    label:string,
    placeholder:string,
    form:any
}