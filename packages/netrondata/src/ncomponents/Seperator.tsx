import React, { type ReactNode } from 'react'
import { cn } from '../nutils/cn'

export default function Seperator(props: {
  className?: string
  children?: ReactNode
  vertical?: boolean
}) {
  if (props.vertical) {
    return <div className="self-stretch border-l" />
  }

  if (props.children) {
    return (
      <div className={cn('my-2 flex flex-row items-center gap-4 px-4', props.className)}>
        <Seperator className="flex-1" />
        {props.children && (
          <>
            <span className="text-xs text-neutral-500">{props.children}</span>
            <Seperator className="flex-1" />
          </>
        )}
      </div>
    )
  }

  return <div className={cn('my-1 h-0.5 w-full rounded-full bg-neutral-400/30', props.className)} />
}
