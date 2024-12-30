import { useLayoutEffect, useRef, useState, type ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
/**
 * 绘制一个六边形
 * @param props
 * @returns
 */
export const Hexagon = (props: ComponentPropsWithoutRef<'svg'> & { size?: number; reverse?: boolean; duration?: number }) => {
  const { className, size = 800, reverse = false, duration = 15, ...rest } = props
  const pathRef = useRef<SVGPathElement>(null)
  // 获取路径长度
  const [totalPathLength, setTotalPathLength] = useState<number>()

  // useLayoutEffect: 在DOM更新后立即执行，可以获取到最新的DOM
  useLayoutEffect(() => {
    // 获取路径长度
    const pathLength = pathRef.current?.getTotalLength()
    if (!pathLength) return
    // 计算路径长度
    const scalePathLength = (pathLength * size) / 82
    // 设置路径长度
    setTotalPathLength(scalePathLength)
  }, [])
  return (
    // stroke="currentColor": 描边颜色为当前颜色
    // size-[1100px]: 大小为1100px
    // text-fuchsia-500/10: 颜色为fuchsia-500，透明度为10%

    <div className="inline-flex relative">
      <svg
        width="82"
        height="72"
        viewBox="0 0 82 72"
        fill="none"
        stroke="currentColor"
        stroke-width="6"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: size,
          height: size,
        }}
        className={twMerge(' text-fuchsia-500/10 -rotate-6', className)}
      >
        <path
          d="M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z"
          vector-effect="non-scaling-stroke"
          ref={pathRef}
        />
      </svg>
      {totalPathLength && (
        <motion.svg
          width="82"
          height="72"
          viewBox="0 0 82 72"
          fill="none"
          stroke="currentColor"
          stroke-width="6"
          xmlns="http://www.w3.org/2000/svg"
          initial={{
            strokeDashoffset: 0,
          }}
          animate={{
            strokeDashoffset: reverse ? totalPathLength : totalPathLength * -1,
          }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration,
          }}
          style={{
            strokeDasharray: `500 ${totalPathLength - 500}`,
            width: size,
            height: size,
          }}
          className={twMerge('absolute text-fuchsia-500/30 -rotate-6', className)}
        >
          <path
            d="M3.44337 38.5C2.55021 36.953 2.55021 35.047 3.44338 33.5L20.0566 4.72501C20.9498 3.178 22.6004 2.22501 24.3868 2.22501H57.6132C59.3996 2.22501 61.0502 3.178 61.9434 4.72501L78.5566 33.5C79.4498 35.047 79.4498 36.953 78.5566 38.5L61.9434 67.275C61.0502 68.822 59.3996 69.775 57.6132 69.775H24.3867C22.6004 69.775 20.9498 68.822 20.0566 67.275L3.44337 38.5Z"
            vector-effect="non-scaling-stroke"
          />
        </motion.svg>
      )}
    </div>
  )
}
