import {
    Box,
    Flex,
    Text,
} from '@chakra-ui/react';
import { BsCaretDownFill } from 'react-icons/bs';
import ButtonHeader from './ButtonHeader';
import ShoppingCart from './ShoppingCart';
import { AiOutlineRight } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";


export default function UserAccount() {
    return (
        <>
            <Box display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }}>
                <ButtonHeader >
                    <img style={{ width: "25px", margin: '3px' }} src="https://static.vecteezy.com/system/resources/previews/010/870/761/original/american-flag-of-united-states-of-america-png.png" alt="eeuu" />
                    <Text fontWeight={'bold'} fontSize={'16px'}>
                        ES
                    </Text>
                    <BsCaretDownFill style={{ fontSize: '18px', color: "#CCCCCC", marginTop: '5px' }} />
                </ButtonHeader>
            </Box>

            <Box>
                <ButtonHeader>
                    <Box flexDirection={'column'} display={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} >
                        <Text fontSize={'12px'}>
                            Hola, identificate
                        </Text>
                        <Text>
                            Cuenta y Listas
                        </Text>
                    </Box>

                    <Box display={{ base: 'unset', md: 'none', lg: 'none', xl: 'none' }}>
                        <Flex alignItems={'center'}>
                            <Text>Identificate</Text>
                            <AiOutlineRight style={{fontSize: '10px', marginTop: '2px'}} />
                            <FaRegUser style={{fontSize: '24px'}} />
                        </Flex>
                    </Box>

                </ButtonHeader>
            </Box>

            <Box display={{ base: 'none', md: 'none', lg: 'flex', xl: 'flex' }}>
                <ButtonHeader>
                    <Flex flexDirection={'column'}>
                        <Text fontSize={'12px'}>Devoluciones</Text>
                        <Text>y Pedidos</Text>
                    </Flex>
                </ButtonHeader>

            </Box>
            <Box>
                <ShoppingCart />
            </Box>
        </>
    )
}
