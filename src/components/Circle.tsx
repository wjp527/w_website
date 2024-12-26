import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * 绘制一个圆形
 * @param props
 * @returns
 */
export const Circle = (props: ComponentPropsWithoutRef<'div'>) => {
  const { children, className, ...rest } = props

  {
    /* 
      outline: 轮廓
      outline-2: 轮廓宽度
      -outline-offset-2: 轮廓偏移
      outline-fuchsia-500: 轮廓颜色
    */
  }
  return <div className={twMerge('size-[240px] bg-transparent-600 rounded-full flex flex-column justify-center items-center outline outline-1 outline-offset-2 outline-fuchsia-500/30', className)}>{children}</div>
}
