import { useRef } from 'react'
import { Circle } from '../components/Circle'
import { CutCornerButton } from '../components/CutCornerButton'
import { Hexagon } from '../components/Hexagon'
import { motion, useScroll, useTransform } from 'framer-motion'

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: sectionScrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const sectionRotate = useTransform(sectionScrollYProgress, [0, 1], [45, -45])
  return (
    <section className="py-80 overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={1100} reverse duration={60} />
          </div>
          {/* 
              绘制一个立方体
            */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
            {/* 
                outline: 轮廓
                outline-2: 轮廓宽度
                -outline-offset-2: 轮廓偏移
                outline-fuchsia-500: 轮廓颜色
              */}
            <Circle className="absolute left-[0px] top-[-400px] z-40">
              <motion.img
                style={{
                  rotate: sectionRotate,
                }}
                src="../../public/assets/images/cuboid.png"
                alt="cube"
                className="size-[140px]"
              />
            </Circle>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <Circle className="absolute left-[-630px] top-[-80px] z-40">
              <motion.img
                style={{
                  rotate: sectionRotate,
                }}
                src="../../public/assets/images/cylinder.png"
                alt="cube"
                className="size-[140px]"
              />
            </Circle>
          </div>

          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">Ready to get started?</h2>
          <p className="text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto">Start building using blockchain technology,with Blockforge.</p>
          <div className="flex justify-center mt-12">
            <CutCornerButton className="inline-flex" children="Get Started" />
          </div>
        </div>
      </div>
    </section>
  )
}
