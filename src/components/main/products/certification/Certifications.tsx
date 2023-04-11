import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Text,
    Button,
    Image,
    Flex, 
    Link,
    textDecoration
} from '@chakra-ui/react';

import { GrFormDown } from 'react-icons/gr';

//{{base:'flex', md:'unset', lg:'unset', xl:'unset'}}

interface propsCertification {
    titleCertification: string;
    imageCertification: string;
}

export default function Certifications({ titleCertification, imageCertification }: propsCertification) {
    return (
        <Popover isLazy>
            <Flex cursor={'pointer'} marginTop={{base:'2px', md:3, lg:3, xl:3}} alignItems={'center'} _hover={{
                textDecoration: 'underline',
            }}>
                <PopoverTrigger>
                    <Image mr={2} objectFit={'contain'} src={imageCertification} alt={titleCertification} w={5} />
                </PopoverTrigger>

                <PopoverTrigger>
                    <Button h={1} m={0} p={0} bg={'unset'} fontSize={{base:12, md:15, lg:15, xl:15}} _hover={{
                        backgroundColor: 'unset',
                        textDecoration: 'underline'
                    }}>{titleCertification}</Button>
                </PopoverTrigger>
                <PopoverTrigger>
                    <GrFormDown style={{ marginTop: '4.5px' }} />
                </PopoverTrigger>

            </Flex>

            <PopoverContent p={2} color={'#565959'} fontSize={15}>
                <Flex>
                    <Image src='https://m.media-amazon.com/images/I/119eCmXoiWL._SS200_.png' alt='Certificado para humanos' w={10} />
                    <PopoverHeader color={'black'} border={'unset'} fontWeight='semibold'>Certificado para humanos</PopoverHeader>
                </Flex>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <Text>Certified for Humans es smart home hecho fácil. Certificamos productos que son fáciles de conectar a Alexa, confiables con actualizaciones automáticas de software, queridos y con buenas calificaciones de los clientes.</Text>
                </PopoverBody>

                <Flex p={3} borderTop={'1px solid #bbbfbf'}>
                    <Image src='https://m.media-amazon.com/images/I/11hfR5Cq9GL._SS200_.png' alt='Certificado con Alexa' w={10} />
                    <PopoverHeader color={'black'}  borderBottom={'unset'} fontWeight='semibold'>Certificado con Alexa</PopoverHeader>
                </Flex>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <Text>Este producto está certificado por Amazon para funcionar con Alexa. Este producto se puede controlar con tu voz mediante dispositivos compatibles con Alexa integrada, como Amazon Echo y Amazon Tap.</Text>
                </PopoverBody>

                <Flex p={3} borderTop={'1px solid #bbbfbf'}>
                    <Image src='https://m.media-amazon.com/images/I/216-OX9rBaL._SS200_.png' alt='Climate Pledge Friendly' w={10} />
                    <PopoverHeader color={'black'}  borderBottom={'unset'} fontWeight='semibold'>Climate Pledge Friendly</PopoverHeader>
                </Flex>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <Text>Productos con certificaciones confiables de sustentabilidad. <Link _hover={{textDecoration:'unset', color:'#c45404'}} color={'#007185'}>Más información</Link></Text>
                    <Text my={3} fontWeight={'bold'}>Certificación de producto(1)</Text>
                    <Flex alignItems={'center'}>
                        <Image src='https://m.media-amazon.com/images/I/31FqTrWUyTL._SS200_.png' alt='reducing CO2' w={50} />
                        <Link _hover={{textDecoration:'unset', color:'#c45404'}} px={5} color={'#007185'}>Reducing CO2</Link>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
