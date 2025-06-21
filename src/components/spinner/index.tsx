import React from 'react'
import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'

function Spinner({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return <LoaderCircle className={cn('animate-spin', className)} />
}

export default Spinner
