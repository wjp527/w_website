import type { ComponentPropsWithoutRef } from 'react'

// twMerge: 合并tailwind类名
import { twMerge } from 'tailwind-merge'

// 定义props类型
// ComponentPropsWithoutRef: 组件的props类型，不包含ref
// ComponentPropsWithoutRef<'button'>: 组件的props类型，不包含ref，且是button类型
type Props = ComponentPropsWithoutRef<'button'> & {
  className?: string
  children: React.ReactNode
}

export const CutCornerButton = (props: Props) => {
  const { className, children } = props
  return (
    <button className={twMerge('bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-wide relative hidden md:inline-flex', className)}>
      {/*  
        inset-0: 绝对定位，覆盖整个按钮
        就是top: 0,left: 0,right: 0,bottom: 0
        outline: 轮廓
        outline-2: 轮廓宽度
        -outline-offset-2: 轮廓偏移
        outline-fuchsia-500: 轮廓颜色
        [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]: 详细讲解每一个参数
        linear-gradient(225deg,transparent,transparent_10px,black_10px): 线性渐变
        225deg: 角度
        transparent: 透明
        transparent_10px: 透明度为10px
        black_10px: 颜色为黑色，透明度为10px
    */}
      <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)] "></div>

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 text-fuchsia-500">
        <path d="M0 1H12.2667L23 11.7333V24" stroke="currentColor" stroke-width="2"></path>
      </svg>

      {/* 
        leading-6: 行高
    */}
      <span className="leading-6">{children}</span>
    </button>
  )
}
