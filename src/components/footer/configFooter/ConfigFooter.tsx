import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import ButtonConfigFooter from './ButtonConfigFooter'

export default function ConfigFooter() {
  return (
    <Flex w={'100%'} bg={{base:'#131a22', md:'#131a22', lg:'#232f3e',xl:'#232f3e'}} borderTop={'1px solid #3a4553'} m={'0 auto'} justifyContent={'center'} >
        <Flex maxW={'1000px'} py={8} px={{base: 0, md: 0, lg:'50px', xl:'50px'}} justifyContent={'center'}>
          <Image mx={10} display={{base: 'none', md:'none', lg:'unset', xl:'unset'}} objectFit={'contain'} w={'76px'} src='https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695' alt='Logo Amazon' />
          <Flex flexWrap={'wrap'} justifyContent={'center'}>
            <ButtonConfigFooter>
              Español
            </ButtonConfigFooter>
            <ButtonConfigFooter>
              $ USD - dólar estadounidense
            </ButtonConfigFooter>
            <ButtonConfigFooter>
              Estados Unidos
            </ButtonConfigFooter>
          </Flex>
        </Flex>
    </Flex>
  )
}
