import React from 'react';
import { Input } from '@chakra-ui/react';

export default function InputHeader() {
  return (
    <React.Fragment>
      <Input display={{ base: 'none', md: 'unset', lg: 'unset', xl: 'unset' }} borderLeftRadius={{ base: '7px', md: '0', lg: '0', xl: '0' }} borderRightRadius={'0'} bg={"white"} placeholder='Buscar Amazon' />
      <Input display={{ base: 'unset', md: 'none', lg: 'none', xl: 'none' }} borderLeftRadius={{ base: '7px', md: '0', lg: '0', xl: '0' }} borderRightRadius={'0'} fontSize={'14px'} bg={"white"} placeholder='Buscar en Smart Home: Iluminación' />
    </React.Fragment>
  )
}
