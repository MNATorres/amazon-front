import { Link } from '@chakra-ui/react'
import React from 'react'

export default function LinkFooterMovil({titleLinkMovil}:{titleLinkMovil: string} ) {
  return (
    <Link m={2}>{titleLinkMovil}</Link>
  )
}
