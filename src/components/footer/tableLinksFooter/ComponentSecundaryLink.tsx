import { Text, Flex, Link } from '@chakra-ui/react'

interface PropsComponentSecundaryLink {
  title: string;
  description: string
}

export default function ComponentSecundaryLink({ title, description }: PropsComponentSecundaryLink) {
  return (
    <Link>
      <Flex fontSize={'12px'} flexDir={'column'} px={5} m={3}>
        <Text fontWeight={'bold'} color={'#DDDDDD'}>{title}</Text>
        <Text color={'#999999'}>{description}</Text>
      </Flex>
    </Link >
  )
}
