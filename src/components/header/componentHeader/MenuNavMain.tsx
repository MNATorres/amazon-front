import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    RadioGroup,
    Stack,
    Radio,
    Button,
    Text
} from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";


export default function MenuNavMain() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    return (
        <>
            <Button borderRadius={0} fontSize={'14px'} h={'39px'} bg={'none'} colorScheme='blue' onClick={onOpen}>
                <GiHamburgerMenu style={{fontSize: '23px', margin:'0 3px'}} />
                <Text >Todo</Text>               
            </Button>
            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
