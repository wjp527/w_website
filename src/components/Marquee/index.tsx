import { cn } from '@/lib/utils'
import React from 'react'

export interface MarqueeProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  reverse?: boolean
  fade?: boolean
  className?: string
}

/**
 * 滚动组件
 * @param param0
 * @returns
 */
const Marquee = ({ children, direction = 'left', pauseOnHover = false, reverse = false, fade = false, className }: MarqueeProps) => {
  return (
    <div className={cn('group flex overflow-hidden', className)}>
      {/* 主要内容 */}
      <div className={cn('flex shrink-0 gap-4 py-4 [--duration:10s] animate-marquee', pauseOnHover && 'group-hover:[animation-play-state:paused]', reverse && 'animate-marquee-reverse')}>{children}</div>

      {/* 复制一份实现无缝滚动 */}
      <div className={cn('flex shrink-0 gap-4 py-4 [--duration:10s] animate-marquee', pauseOnHover && 'group-hover:[animation-play-state:paused]', reverse && 'animate-marquee-reverse')}>{children}</div>

      {/* 渐变遮罩 */}
      {fade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </>
      )}
    </div>
  )
}

export default Marquee
