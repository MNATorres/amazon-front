import { Button } from '@chakra-ui/react'
import React from 'react'

export default function ButtonNavMain({ children }: { children: React.ReactNode }) {
    return (
        <Button borderRadius={0} fontSize={'14px'} h={'39px'} bg={'none'} colorScheme='teal' size='md'>
            {children}
        </Button>
    )
}
