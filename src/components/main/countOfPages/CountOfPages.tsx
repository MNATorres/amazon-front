import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function CountOfPages() {
    return (
        <Box borderRadius={8} py={{base:1, md:1, lg:3, xl: 4}} px={{base:1, md:3, lg:7, xl: 10}} my={{base:2, md:3, lg: 5, xl:9}} border={'1px solid #dddddd'}>
            <Flex justifyContent={{base:'center', md:'unset', lg: 'unset', xl:'unset'}} fontSize={{base: '11px', md: '13px', lg: '15px', xl: '16px'}}>
                <Text>1 a 1 de mas de 1 resultados para</Text>
                <Text fontWeight={'bold'} mx={2} color={'#c45404'}>Smart Home: Iluminación</Text>
            </Flex>
        </Box>
    )
}
