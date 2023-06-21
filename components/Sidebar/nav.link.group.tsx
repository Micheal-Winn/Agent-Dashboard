"use client"

import React from 'react'
import { SibebarLists } from '../utils/DummyData/data'
import { Box, Group, NavLink ,Text, ThemeIcon, Tooltip, UnstyledButton,useMantineTheme} from '@mantine/core'
import Link from 'next/link'
import { IconGauge,IconUser,IconUsersGroup,IconReportAnalytics, IconChevronRight ,IconChevronLeft} from '@tabler/icons-react'
import { useMediaQuery } from '@mantine/hooks'

interface status{
  activeStatus : string,
  setActiveStatus:(str:string)=> void
}

const NavLinkGroup:React.FC<status> = ({activeStatus,setActiveStatus}) => {
    const xsScreen = useMediaQuery('(min-width:36em)')
    const smScreen = useMediaQuery('(min-width:40em)')
    const mdScreen = useMediaQuery('(min-width:48em)')
    const lgScreen = useMediaQuery('(min-width:64em)')
    const xlScreen = useMediaQuery('(min-width:75em)')
    const xl2Screen = useMediaQuery('(min-width:88em)')

  return (
    <section className='flex flex-col'>
      {SibebarLists.map((list)=>(
          <Box key={list.id} className='overflow-hidden rounded-md'>
          <NavLink  active={list.id === activeStatus} variant="filled" label={<Link href={`${list.path}`}>
          <Group spacing={smScreen ? "xs" : "sm"}   className='rounded-md flex' pt={lgScreen ? 4 : mdScreen? 2 : smScreen ? 1 : xsScreen ? 1 : 0} onClick={()=>setActiveStatus(list.id)}>
          {list.leftIcon}<Text className='sm:text-[0.57rem] md:text-[0.6rem] lg:text-[0.7rem] xl:text-sm 2xl:text-base '>{list.name}</Text>
        </Group>
          </Link>}
        rightSection={ list.icon }
        >
            {
              list.nested !== undefined &&
              list.nested.map((nestedLink)=>(
                <div key={nestedLink.id} className=' border-gray-300 rounded-md overflow-hidden'>
                  <Link href={nestedLink.path} className=''>

                    <NavLink label={<Text className='text-[0.6rem] lg:text-[0.7rem] xl:text-sm 2xl:text-base '>{nestedLink.name}</Text>}
                    className="font-semibold text-gray-600"
                    onClick={()=>{
                      setActiveStatus(nestedLink.id)
                      
                    }}
                    active={nestedLink.id === activeStatus}
                    variant='filled'
                    />

                  </Link>
                </div>
              ))
            }
        </NavLink>
        </Box>
      ))}

    </section>
  )
}

export default NavLinkGroup