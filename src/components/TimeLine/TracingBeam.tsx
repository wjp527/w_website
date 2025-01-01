'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'

interface TracingBeamProps {
  children: React.ReactNode
  className?: string
}

export const TracingBeam = ({ children, className = '' }: TracingBeamProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      // 增加额外的高度来补偿 header 的遮挡
      setSvgHeight(contentRef.current.offsetHeight + 50) // 增加 200px 或根据需要调整
    }
  }, [])

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [150, svgHeight]), // 调整起始位置
    {
      stiffness: 500,
      damping: 90,
    }
  )
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [150, svgHeight - 200]), // 调整起始位置
    {
      stiffness: 500,
      damping: 90,
    }
  )

  return (
    <motion.div ref={ref} className={`relative w-full max-w-4xl mx-auto h-full ${className}`}>
      <div className="absolute -left-4 md:-left-20 top-0">
        {' '}
        {/* 修改 top 值 */}
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow: scrollYProgress.get() > 0 ? 'none' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
          style={{
            marginTop: '100px', // 增加顶部间距
          }}
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? 'white' : 'var(--emerald-500)',
              borderColor: scrollYProgress.get() > 0 ? 'white' : 'var(--emerald-600)',
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
          style={{
            marginTop: '-50px', // 调整 SVG 的位置
          }}
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="pt-24">
        {' '}
        {/* 增加顶部内容间距 */}
        {children}
      </div>
    </motion.div>
  )
}
