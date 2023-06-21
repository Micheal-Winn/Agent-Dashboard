"use client"
import React, { useState } from 'react'
import { Divider, Menu, Navbar } from '@mantine/core'
import NavLinkGroup from './nav.link.group'
import UserProfileButton from './user.profile.button'
import { useMediaQuery } from '@mantine/hooks'

const Sidebar = ({children}:any) => {
  const [active,setActive] = useState("1")
  const mediumScreen = useMediaQuery('(min-width:62em)')

  return (
    <nav className='h-screen'>
       <section className='hidden sm:block'>
        <Navbar width={{ xs:188,sm: 188 ,md:230,lg:230,xl:300}} p={mediumScreen ? "xs" : "xs"}>
          <Navbar.Section>
          <h1 className='md:text-xl lg:text-3xl font-bold text-blue-700 mb-2'>Smart Save</h1>
          <Divider size={"xs"} className='my-4'/>
          </Navbar.Section>
          <Navbar.Section grow>
             <NavLinkGroup activeStatus={active} setActiveStatus={(str:string)=>setActive(str)}/>
          </Navbar.Section>
          <Navbar.Section>
            <UserProfileButton setActiveStatus={(str:string)=>setActive(str)}/>
          </Navbar.Section>
        </Navbar>
       </section>
    </nav>
  )
}

export default Sidebar