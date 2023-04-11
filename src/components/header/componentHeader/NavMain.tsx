import { Box, Flex, Text } from '@chakra-ui/react'
import { TbMapPin } from 'react-icons/tb';
import ButtonNavMain from './ButtonNavMain';
import MenuNavMain from './MenuNavMain';

export default function NavMain() {
    return (
        <Box minW={'350px'} bg={{base: '#364759',md:'#364759',lg:'#232f3e',xl:'#232f3e'}} color={'white'}>
            <Flex display={{ base: 'none', md: 'none', lg: 'flex', xl: 'flex' }} justifyContent={'space-between'}>
                <Flex p={0} >
                    <Box>
                        <MenuNavMain />
                    </Box>
                    <ButtonNavMain>
                        Ofertas del Día
                    </ButtonNavMain>
                    <ButtonNavMain>
                        Servicio al Cliente
                    </ButtonNavMain>
                    <ButtonNavMain>
                        Listas
                    </ButtonNavMain>
                    <ButtonNavMain>
                        Tarjetas de Regalo
                    </ButtonNavMain>
                    <ButtonNavMain>
                        Vender
                    </ButtonNavMain>
                </Flex>

                <Box>
                    <ButtonNavMain>
                        Compra las ofertas de Electrónicos
                    </ButtonNavMain>
                </Box>
            </Flex>

            <Flex p={1} mx={4} display={{ base: 'flex', md: 'no', lg: 'none', xl: 'none' }}>
                <TbMapPin style={{ color: "white", fontSize: '20px' }} />
                <Text >Argentina</Text>
            </Flex>

        </Box>
    )
}
