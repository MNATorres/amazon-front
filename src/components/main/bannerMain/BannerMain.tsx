import { Box, Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'

export default function BannerMain() {
  return (
    <Flex w={'100%'} justifyContent={'center'}>
      <Image src='https://images-na.ssl-images-amazon.com/images/G/01/SmartHome/Packages/PhilipsHUe2022/1500x300_Hue_CategoryBanner_English.jpg'
      alt='Banner' />
    </Flex>
  )
}
