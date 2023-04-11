import { Box, Flex } from '@chakra-ui/react'; 
import ComponentSecundaryLink from './ComponentSecundaryLink';

export default function TableLinksFooter() {
  return (

    <Flex width={'100%'} justifyContent={'center'} bg={'#131a22'} py={5} display={{base:'none', md:'none', lg: 'flex', xl:'flex'}}>
      <Flex maxW={'1065px'}>
        <Box>
          <ComponentSecundaryLink title='Amazon Music' description='Reproduce millones de Canciones' />
          <ComponentSecundaryLink title='Amazon Busines' description=' Todo para tu Negocio' />
          <ComponentSecundaryLink title='Book Depository' description='Libros con entrega Intl Gratuita' />
          <ComponentSecundaryLink title='IMDb' description='Peliculas, TV y Celebridades' />
          <ComponentSecundaryLink title='Zappos' description='Zapatos y Ropa' />
        </Box>

        <Box>
          <ComponentSecundaryLink title='Amazon Advertising' description='Pedidos de Envío Internacional' />
          <ComponentSecundaryLink title='AmazonGlobal' description='Pedidos de Envío Internacional' />
          <ComponentSecundaryLink title='Box Office Mojo' description='Encuentra películas Datos de taquilla' />
          <ComponentSecundaryLink title='IMDbPro' description='Obtén información de entretenimiento que los profesionales necesitan' />
          <ComponentSecundaryLink title='Ring' description='Casa Inteligente Sistemas de Seguridad' />

        </Box>

        <Box>
          <ComponentSecundaryLink title='6pm' description='Descubre ofertas en marcas de moda' />
          <ComponentSecundaryLink title='Servicios para el Hogar' description='de Amazon Profesionales Elegidos a Mano Garantía de Satisfacción' />
          <ComponentSecundaryLink title='ComiXology' description='Miles de Comics Digitales' />
          <ComponentSecundaryLink title='Kindle Direct Publishing' description='Publica tu libro en papel y digital de manera independiente' />
          <ComponentSecundaryLink title='Wifi eero' description='Video 4K en tiempo real en todas las habitaciones' />
          <ComponentSecundaryLink title='PillPack' description='Pharmacy simplificado' />
        </Box>

        <Box>
          <ComponentSecundaryLink title='AbeBooks' description='Libros, arte & artículos de colección' />
          <ComponentSecundaryLink title='Amazon Ignite' description='Vende tus recursos educativos digitales originales' />
          <ComponentSecundaryLink title='DPReview' description='Fotografía Digital' />
          <ComponentSecundaryLink title='Prime Video Direct' description='Distribución de Video Sin Esfuerzo' />
          <ComponentSecundaryLink title='Blink' description='Seguridad inteligente para todos los hogares' />
        </Box>

        <Box>
          <ComponentSecundaryLink title='ACX' description='Editorial de Audiolibros Hecho Fácil' />
          <ComponentSecundaryLink title='Amazon Web Services' description='Servicios de cómputo en nube escalable' />
          <ComponentSecundaryLink title='Fabric' description='Costura, Acolchado y Tejido' />
          <ComponentSecundaryLink title='Shopbop' description='Diseñador Marcas de Moda' />
          <ComponentSecundaryLink title='Neighbors App' description='Alertas de seguridad y delitos en tiempo real' />
        </Box>

        <Box>
          <ComponentSecundaryLink title='Venda en Amazon' description='Comience una cuenta de venta' />
          <ComponentSecundaryLink title='Audible' description='Escucha Libros e Interpretaciones de Audio Originales' />
          <ComponentSecundaryLink title='Goodreads' description='Análisis de libros y recomendaciones' />
          <ComponentSecundaryLink title='Woot!' description='Descuentos y travesuras' />
          <ComponentSecundaryLink title='Suscríbete con Amazon' description='a los servicios de suscripción de "Discover & try"' />
        </Box>
      </Flex>
    </Flex>
  )
}

