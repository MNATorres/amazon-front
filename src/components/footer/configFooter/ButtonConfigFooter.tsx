import { Button } from '@chakra-ui/react'
import React, { Children } from 'react'

export default function ButtonConfigFooter({children}: {children: React.ReactNode}) {
  return (
    <Button px={{base: 5, md:7, lg:5, xl:5}} fontSize={{base: 15, md: 15, lg:'unset', xl:'unset'}} h={'34px'} mx={2} bg={'unset'} border={{base: 'none', md: 'none', lg:'1px solid #FFF', xl:'1px solid #FFF'}} _hover={{background:'unset'}}>
        {children}
    </Button>
  )
}
