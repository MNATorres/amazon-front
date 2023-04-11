import {
    Box,
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

import { TbMapPin } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";
import MenuInput from './MenuInput';
import InputHeader from './InputHeader';
import ButtonInputSearch from './ButtonInputSearch';
import ButtonHeader from './ButtonHeader';
import UserAccount from './UserAccount';
import MenuMovil from './MenuMovil';



export default function Navigation() {

    return (
        <Box >
            <Flex
                bg={{base:'#232f3f',sm: '#232f3f',lg:'#131921',xl:'#131921'}}
                color={'white'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 2 }}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                justifyContent={'space-between'}
                flexDir={{ base: 'column', md: 'row' }}
                minWidth={'350'}
                alignItems={'center'}
            >

                <Flex w={{ base: '100%', md: 'unset', lg: 'unset', xl: 'unset' }} justifyContent={'space-between'} alignItems={'center'}>
                    <Flex alignItems={'center'}>
                        <Box display={{ base: 'unset', md: 'none', lg: 'none', xl: 'none' }}>
                            <MenuMovil />
                        </Box>
                        <Box w={{ base: "21%", md: 'unset', lg: 'unset', xl: 'unset' }}>
                            <a href="https://www.amazon.com/-/es/gp/browse.html?node=21217035011&ref_=nav_em_sh_lighting_0_2_7_3"><img src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695" alt="Logo" style={{ width: "100px", minWidth: "80px", maxHeight: "30.13px" }} /></a>
                        </Box>
                    </Flex>
                    <Box display={{ base: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                        <UserAccount />
                    </Box>
                </Flex>

                <Flex display={{ base: 'none', md: 'none', lg: 'flex', xl: 'flex' }} >
                    <ButtonHeader>
                        <Box m={'10px 0 0 0'}>
                            <TbMapPin style={{ color: "white", fontSize: '20px' }} />
                        </Box>
                        <Box textAlign={'start'}>
                            <Text color={'#CCCCCC'} fontSize={"12px"}>Enviar a</Text>
                            <Text >Argentina</Text>
                        </Box>
                    </ButtonHeader>
                </Flex>

                <Flex mx={'5px'} w={{ base: '100%', md: '60%', lg: '60%', xl: '60%' }} color={"#111"}>
                    <MenuInput />
                    <InputHeader />
                    <ButtonInputSearch />
                </Flex>

                <Flex display={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} color={"#111"} mx={'1px'}>
                    <UserAccount />
                </Flex>

            </Flex>


        </Box>
    );
}






