'use client'

import { cn } from '@/lib/utils'
import { createContext, useState, useContext, useRef, useEffect } from 'react'

// 创建一个上下文来传递鼠标是否进入的状态
const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined)

// 创建一个容器组件，用于包裹卡片组件
export const CardContainer = ({ children, className, containerClassName }: { children?: React.ReactNode; className?: string; containerClassName?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  // 处理鼠标移动事件
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
  }

  // 处理鼠标进入事件
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true)
  }

  // 处理鼠标离开事件
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`
  }

  return (
    // 提供上下文，传递鼠标是否进入的状态
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      {/* 
        容器组件，用于包裹卡片组件
      */}
      <div
        className={cn('py-20 flex items-center justify-center', containerClassName)}
        style={{
          perspective: '1000px',
        }}
      >
        {/* 
          卡片组件，用于包裹卡片内容
        */}
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn('flex items-center justify-center relative transition-all duration-200 ease-linear', className)}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

// 卡片内容组件，用于包裹卡片内容
export const CardBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('h-96 w-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]', className)}>{children}</div>
}

// CardItem作用: 添加动画效果
export const CardItem = ({
  as: Tag = 'div',
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
  [key: string]: any
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter()

  // 监听鼠标是否进入，执行动画
  useEffect(() => {
    handleAnimations()
  }, [isMouseEntered])

  // 执行动画
  const handleAnimations = () => {
    if (!ref.current) return
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
    }
  }

  return (
    <Tag ref={ref} className={cn('w-fit transition duration-200 ease-linear', className)} {...rest}>
      {children}
    </Tag>
  )
}

// 创建一个钩子，用于使用上下文
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (context === undefined) {
    throw new Error('useMouseEnter must be used within a MouseEnterProvider')
  }
  return context
}
