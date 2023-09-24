import React, { type DetailedHTMLProps, type InputHTMLAttributes } from 'react'
import { cn } from '../nutils/cn'

export function Input(
  props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={cn(
        'rounded border-none p-2 focus:outline-none dark:bg-neutral-900',
        props.className
      )}
    />
  )
}
