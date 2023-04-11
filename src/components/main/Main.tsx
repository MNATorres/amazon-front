import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import BannerMain from './bannerMain/BannerMain'
import CardProduct from './products/CardProduct'
import CountOfPages from './countOfPages/CountOfPages'
import MenuMain from './menuMain/MenuMain'
import MoreResults from './moreResults/MoreResults'

export default function Main() {
  return (
    <Box marginTop={'10px'} >
        <Flex>
            <Box display={{base: 'none', md: 'none', lg:'unset', xl: 'unset' }} minW={'200px'} w={'12%'} className='Menu'>
                <MenuMain />
            </Box>
            <Box minW={'350px'} px={{base:1, md:1, lg:2, xl:4}} w={{base:'100%',md:'100%',lg:'88%',xl:'88%'}} className='BannerProducts'>
                <BannerMain />
                <CountOfPages />
                <CardProduct />
                <MoreResults />
            </Box>
        </Flex>
    </Box>
  )
}
