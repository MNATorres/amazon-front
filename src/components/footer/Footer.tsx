import { Box, Flex } from '@chakra-ui/react'
import ConfigFooter from './configFooter/ConfigFooter'
import Copring from './copring/Copring'
import LinksFooter from './linksFooter/LinksFooter'
import TableLinksFooter from './tableLinksFooter/TableLinksFooter'
import TopOfPage from './topOfPage/TopOfPage'

export default function Footer() {
  return (
    <Box w={'100%'} fontSize={14} color={'#FFF'} minW={'350px'}>
        <Flex flexDir={'column'} >
            <TopOfPage />
            <LinksFooter />
            <ConfigFooter />
            <TableLinksFooter />
            <Copring />
        </Flex>
    </Box>
  )
}
