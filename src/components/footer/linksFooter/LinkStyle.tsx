import { Link } from '@chakra-ui/react';

export default function LinkStyle({titleLink} : {titleLink: string}) {
  return (
    <Link my={1} _hover={{textDecor:'underline'}}>{titleLink}</Link>
  )
}
