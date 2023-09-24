import React, { type LabelHTMLAttributes } from 'react'
import { cn } from '../nutils/cn'

export function Label(props: { className?: string } & LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className={cn('text-neutral-500', props.className)} />
}
