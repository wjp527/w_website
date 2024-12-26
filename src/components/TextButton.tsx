import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const TextButton = (props: ComponentPropsWithoutRef<'button'>) => {
  const { children, color, className, ...rest } = props
  return (
    <button
      className={twMerge(
        'uppercase tracking-widest font-bold font-heading text-sm',

        color == 'lime' && 'text-lime-500',
        color == 'cyan' && 'text-cyan-500',
        color == 'violet' && 'text-violet-500',
        color == 'fuchsia' && 'text-fuchsia-500',

        className
      )}
    >
      {children}
    </button>
  )
}
