"use client"
import React from 'react'
import { TextInput } from '@mantine/core'

const CustomerFillField:React.FC<FieldProps> = ({
    placeholder,label,form
}) => {
  return (
   <TextInput
    placeholder={placeholder}
    label={<span className='font-semibold'>{label}</span>}
    radius={"md"}
    {...form}
    required
   />
  )
}

export default CustomerFillField

type FieldProps ={
    label:string,
    placeholder:string,
    form?:any
}