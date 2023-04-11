import { Flex, Link } from '@chakra-ui/react'
import React from 'react'

export default function MoreResults() {
  return (
    <Flex borderRadius={10} bg={'#eeeeee'} w={'98%'} justifyContent={'center'} py={2} px={3} m={'35px auto'}>
        <Link _hover={{color:'#c45404', textDecor:'underline'}} fontWeight={'bold'} fontSize={'18px'} color={'#007185'}>Todos los Resultados</Link>
    </Flex>
  )
}
