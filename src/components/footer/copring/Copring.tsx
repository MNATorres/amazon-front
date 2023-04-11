import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { AiOutlineCopyright } from 'react-icons/ai'

export default function Copring() {
    return (
        <Box width={'100%'} bg={'#131a22'} padding={5}>
            <Flex alignItems={'center'} flexDirection={'column'}>
            <Link display={{base: 'unset', md: 'none', lg: 'none', xl: 'none'}} p={5} fontSize={15} fontWeight={'600'}>¿Ya eres cliente? Identificate</Link>

                <Flex flexWrap={'wrap'} justifyContent={'center'} fontSize={{base: 13, md: 13, lg: 'unset', xl: 'unset'}}>
                    <Link mx={2}>Condiciones de Uso</Link>
                    <Link mx={2}>Aviso de privacidad</Link>
                    <Link mx={2}>Tus opciones de privacidad de los anuncios</Link>
                </Flex>
                <Flex align={'center'} p={2} >
                    
                    <AiOutlineCopyright style={{margin:'0 3px'}} />
                    Copia de Amazon desarrollada por Matías Torres
                </Flex>
            </Flex>

        </Box>
    )
}
