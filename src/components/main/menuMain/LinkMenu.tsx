import { Box, Flex, Text } from '@chakra-ui/react'
import { AiOutlineLeft } from 'react-icons/ai'

export default function LinkMenu({ title }: { title: string }) {
    return (
        <Box my={1} fontWeight={'500'} fontSize={'14px'}>
            <Flex cursor={'pointer'} textAlign={'start'}>
                <AiOutlineLeft style={{ marginTop: '4px' }} />
                <Text _hover={{
                    color: "#c45404"
                }}>{title}</Text>
            </Flex>
        </Box>
    )
}
