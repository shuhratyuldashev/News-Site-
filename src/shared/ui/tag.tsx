import MyLink from '@/shared/link';
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button';
import { Hash } from 'lucide-react';
import * as React from 'react'

type PropsTag = {
    isFull: boolean,
    variant: string;
    to: string;
}

const TagEntities: React.FC<React.PropsWithChildren<PropsTag>> = ({ isFull, variant, to, children }) => {
  return( 
    isFull ? <MyLink to={to}><Button className='w-full justify-start' variant={variant}><Hash /> {children}</Button></MyLink>
    : <MyLink to={to}><Badge variant={variant}>{children}</Badge></MyLink>
)}

export default TagEntities