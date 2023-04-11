import React from 'react';
import { Button } from '@chakra-ui/react';

export default function ButtonHeader({children} : {children: React.ReactNode}) {
    return (
        <Button p={{base: '3px', md: '10px', lg: '20px', xl: '20px'}} mx={{base: '10px'}} fontSize={"14px"} bg={'none'} colorScheme='teal' size='lg'>
            {children}
        </Button>
    )
}
