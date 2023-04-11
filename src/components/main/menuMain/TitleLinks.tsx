import { Box, Text } from "@chakra-ui/react";


export default function TitleLinks({ title }: { title: string }) {
    return (
        <Box>
            <Text my={2} fontSize={'14px'} fontWeight={'bold'}>{title}</Text>
        </Box>
    )
}
