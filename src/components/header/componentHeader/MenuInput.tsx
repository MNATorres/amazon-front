import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';


export default function MenuInput() {
    return (
        <Menu>
            <MenuButton display={{ base: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} borderRightRadius={'0'} w={"20%"} minW={'180px'} fontSize={"12px"} as={Button} rightIcon={<ChevronDownIcon />}>
                Smart Home: Iluminación
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    )
}


