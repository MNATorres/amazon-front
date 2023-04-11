import { Box, Flex, Text } from '@chakra-ui/react';
import LinkMenu from './LinkMenu';
import TitleLinks from './TitleLinks';
import { Checkbox } from '@chakra-ui/react';

export default function MenuMain() {
  return (
    <Box borderRight={'2px solid #dddddd'} px={4}>
      <Box>
        <TitleLinks title='Departamento' />
        <LinkMenu title='Herramienta y Mejora del hogar' />
        <LinkMenu title='Industria y ciencia' />
        <LinkMenu title='Hogar y cocina' />
        <LinkMenu title='Jardin y Exteriores' />
        <LinkMenu title='Electrónicos' />
        <LinkMenu title='Productos y suministros de oficina' />
        <LinkMenu title='Servicios para el Hogar' />
        <LinkMenu title='Aparatos' />
        <LinkMenu title='Belleza' />
        <LinkMenu title='Bebé' />
        <LinkMenu title='Instrumentos Musicales' />
        <LinkMenu title='Auto' />
        <LinkMenu title='Mascotas' />
        <LinkMenu title='Ropa, Calzados y Joyería' />
        <LinkMenu title='Música' />
        <LinkMenu title='Videojuegos' />
      </Box>
      <Box>
        <TitleLinks title='Amazon Prime' />
        <Flex _hover={{color: "#c45404"}} marginBottom={-1}>
          <Checkbox />
          <Text mx={1} fontWeight={'500'} fontSize={'14px'}>Envío Gratis</Text>
        </Flex>
        <LinkMenu title='Todos los clientes obtienen Envío GRATIS en pedidos de más de $25 enviados por Amazon' />
      </Box>
      <Box>
        <TitleLinks title='Preferencia de envío' />
        <Flex>
          <Checkbox />
          <img src="https://www.nicepng.com/png/full/115-1159983_amazon-prime-logo-prime-amazon.png" alt="prime" width={'50px'} style={{marginLeft: '5px'}} />
        </Flex>
      </Box>
    </Box>
  )
}
