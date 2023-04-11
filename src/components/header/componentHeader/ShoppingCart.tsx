import { Button } from '@chakra-ui/react';
import { BsCart4 } from 'react-icons/bs';
import {
    Box,
    Flex,
    Text,
} from '@chakra-ui/react';

export default function ShoppingCart() {
    return (
        <Button p={{base: '3px', md: '10px', lg: '20px', xl: '20px'}} display={'flex'} fontSize={'16px'} bg={'none'} colorScheme='teal' size='lg'>
            <BsCart4 style={{  margin: '3px', fontSize:'24px' }} />
            <Text display={{ base: 'none', md: 'unset', lg: 'unset', xl: 'unset' }}>Carrito</Text>
            
        </Button>
    )
}
