import { Text, Flex,Box } from '@chakra-ui/react'
import { IoMdArrowDropup } from "react-icons/io";

export default function TopOfPage() {
  return (
    <Flex color={'#FFF'}
      bg={'#37475a'}
      flexDirection={'column'}
      alignItems={'center'}
      py={3} fontSize={13}
      _hover={{ backgroundColor: '#485769', cursor: 'pointer' }}
      w={'100%'}
    >
      <Box display={{base:'unset', md:'none', lg:'none', xl:'none'}}><IoMdArrowDropup style={{fontSize:'20px'}} /></Box>
      <Text>Inicio de Página</Text>
    </Flex>
  )
}
