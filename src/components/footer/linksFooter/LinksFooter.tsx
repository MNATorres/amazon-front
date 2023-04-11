import { Box, Flex, Text, Link } from '@chakra-ui/react'
import React from 'react'
import LinkFooterMovil from './LinkFooterMovil'
import LinkStyle from './LinkStyle'

export default function LinksFooter() {
  return (
    <Flex bg={'#232f3e'} width={'100%'} justifyContent={'center'}>
      <Flex w={'100%'} maxW={'1000px'} justifyContent={'space-between'} py={5} display={{ base: 'none', md: 'none', lg: 'flex', xl: 'flex' }}>

        <Flex flexDirection={'column'} maxW={'15%'}>
          <Text fontWeight={'bold'}>Conócenos</Text>
          <LinkStyle titleLink='Trabaja en Amazon' />
          <LinkStyle titleLink='Blog' />
          <LinkStyle titleLink='Acerca de Amazon' />
          <LinkStyle titleLink='Relaciones con los Inversionistas' />
          <LinkStyle titleLink='Dispositivos Amazon' />
          <LinkStyle titleLink='Amazon Science' />
        </Flex>

        <Flex flexDirection={'column'}>
          <Text fontWeight={'bold'}>Gana Dinero con Nosotros</Text>
          <LinkStyle titleLink='Vender productos en Amazon' />
          <LinkStyle titleLink='Vende en Amazon Busines' />
          <LinkStyle titleLink='Programa de Afiliados' />
          <LinkStyle titleLink='Anuncia tus Productos' />
          <LinkStyle titleLink='Publica tu Libro en Kindle' />
          <LinkStyle titleLink='Habilita un Amazon Hub' />
          <LinkStyle titleLink='Ver más Gana Dinero con Nosotros' />
        </Flex>

        <Flex flexDirection={'column'}>
          <Text fontWeight={'bold'}>Productos de Pago en Amazon</Text>
          <LinkStyle titleLink='Compra con Puntos' />
          <LinkStyle titleLink='Recarga tu Saldo' />
          <LinkStyle titleLink='Conversor de Divisas de Amazon' />
        </Flex>

        <Flex flexDirection={'column'} maxW={'15%'}>
          <Text fontWeight={'bold'}>Podemos Ayudarte</Text>
          <LinkStyle titleLink='Amazon y el COVID-19' />
          <LinkStyle titleLink='Tu Cuenta' />
          <LinkStyle titleLink='Tus Pedidos' />
          <LinkStyle titleLink='Tarifas de Envío y Políticas' />
          <LinkStyle titleLink='Devoluciones y Reemplazos' />
          <LinkStyle titleLink='Administrar Contenido y Dispositivos' />
          <LinkStyle titleLink='Amazon Assistant' />
          <LinkStyle titleLink='Ayuda' />

        </Flex>
      </Flex>

      <Flex w={'100%'} justifyContent={'space-around'} p={3} display={{ base: 'flex', md: 'flex', lg: 'none', xl: 'none' }}>
        <Flex flexDirection={'column'} w={'40%'} >
          <LinkFooterMovil titleLinkMovil='Inicio' />
          <LinkFooterMovil titleLinkMovil='Tus Listas' />
          <LinkFooterMovil titleLinkMovil='Encuentra un regalo' />
          <LinkFooterMovil titleLinkMovil='Tus articulos vistos recientemente' />
          <LinkFooterMovil titleLinkMovil='Devoluciones' />
        </Flex>

        <Flex flexDirection={'column'} w={'40%'} >
          <LinkFooterMovil titleLinkMovil='Tus Pedios' />
          <LinkFooterMovil titleLinkMovil='Tarjetas y Listas de Regalo' />
          <LinkFooterMovil titleLinkMovil='Tu Cuenta' />
          <LinkFooterMovil titleLinkMovil='Vender Productos en Amazon' />
          <LinkFooterMovil titleLinkMovil='Tus retiros y alertas de seguridad del producto' />
          <LinkFooterMovil titleLinkMovil='Atencion al Cliente' />
        </Flex>
        
      </Flex>
    </Flex>
  )
}
