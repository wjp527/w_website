import type { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
/**
 * 绘制一个圆形
 * @param props
 * @returns
 */
export const Circle = (props: ComponentPropsWithoutRef<'div'> & { animate?: boolean }) => {
  const { children, className, animate = false, ...rest } = props

  {
    /* 
      outline: 轮廓
      outline-2: 轮廓宽度
      -outline-offset-2: 轮廓偏移
      outline-fuchsia-500: 轮廓颜色
    */
  }
  return (
    <div className={twMerge('size-[240px] bg-transparent-600 rounded-full flex flex-column justify-center items-center relative', className)}>
      {/* 
        绘制一个圆形边框旋转动画[360°]
        animate: 动画
        transition: 动画配置

        ease: 动画类型
        duration: 动画持续时间
        repeat: 动画重复次数
      */}
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          ease: 'linear',
          duration: 15,
          repeat: Infinity,
        }}
        className={twMerge('absolute inset-0 rounded-full outline outline-1 outline-offset-2 outline-fuchsia-500/30 border-4 border-transparent', animate && 'border-t-fuchsia-500/30')}
      ></motion.div>
      {children}
    </div>
  )
}
