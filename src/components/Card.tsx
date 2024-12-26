import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { TextButton } from './TextButton'

export const Card = (
  // ComponentPropsWithoutRef: 组件的属性，不包含 ref 的属性
  props: ComponentPropsWithoutRef<'div'> & {
    color?: string
    buttonText?: string
  }
) => {
  const { color, buttonText, className, children } = props
  return (
    <div className={twMerge('relative z-0 p-8 md:p-10', className)}>
      {/*
      右上角发光部分
      模糊背景: 
      blur-lg: 模糊 20px
      opacity-0: 透明度 0
      group-hover:opacity-100: 当鼠标悬浮在元素上时，透明度变为 100
      transition duration-300: 过渡效果，持续时间 300ms
  */}
      <div className={twMerge('absolute size-16 rounded-xl top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300  bg-fuchsia-500', color == 'lime' && 'bg-lime-500', color == 'cyan' && 'bg-cyan-500', color == 'violet' && 'bg-violet-500')}></div>
      <div className={twMerge('absolute size-16 rounded-xl  top-1.5 right-1.5 -z-10  transition duration-300 bg-fuchsia-500', color == 'lime' && 'bg-lime-500', color == 'cyan' && 'bg-cyan-500', color == 'violet' && 'bg-violet-500')}></div>
      {/* 
      [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]:
      225deg: 角度
      transparent: 透明
      transparent_40px: 透明 40px
      black_40px: 黑色 40px 
      右上角的部分会被剪切掉

      左上角: 315度
      右上角: 225度
      右下角: 135度
      左下角: 45度
  */}
      <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>

      <div>{children}</div>

      <div className="flex justify-between mt-4">
        <TextButton color={color}>{buttonText || 'Click here'}</TextButton>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-zinc-600   group-hover:text-zinc-400 transition duration-300 -translate-x-2 group-hover:translate-x-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </div>
    </div>
  )
}
