import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * 标签
 * @param props
 * @returns
 */
export const Tag = (
  props: ComponentPropsWithoutRef<'div'> & {
    color?: string
  }
) => {
  const { children, color = 'fuchsia-500', className } = props
  return (
    <div
      className={twMerge(
        'px-3 py-1.5 uppercase font-heading font-black tracking-wider text-xs   rounded-full inline-flex',

        color === 'lime' && 'bg-lime-500/15 text-lime-500',
        color === 'fuchsia' && 'bg-fuchsia-500/15 text-fuchsia-500',
        color === 'cyan' && 'bg-cyan-500/15 text-cyan-500',
        color === 'violet' && 'bg-violet-500/15 text-violet-500',
        className
      )}
    >
      {children}
    </div>
  )
}
