// 引入切口按钮
import { CutCornerButton } from '../components/CutCornerButton'
// 引入描边组件
import { Hexagon } from '../components/Hexagon'
import { Circle } from '../components/Circle'

// 引入动画库
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const HeroSection = () => {
  // 思路：
  // 1. 创建一个ref对象，用于获取icosahedron元素，用于获取滚动进度
  // 2. 使用useScroll钩子，获取滚动进度
  // 3. 使用useTransform钩子，将滚动进度转换为旋转角度
  // 大图标
  const icosahedronRef = useRef(null)

  // 小图标
  const cubeRef = useRef(null)
  const cuboidRef = useRef(null)
  const torusRef = useRef(null)

  // 使用useScroll钩子，获取滚动进度
  // offset: 滚动进度范围
  // ['start end', 'end start']: 滚动进度范围为[0, 1]
  // 大图标
  const { scrollYProgress } = useScroll({
    target: icosahedronRef,
    offset: ['start end', 'end start'],
  })

  // 小图标
  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ['start end', 'end start'],
  })

  // 使用useTransform钩子，将滚动进度转换为旋转角度
  // useTransform参数的含义
  // 第一个参数：滚动进度
  // 第二个参数：滚动进度范围 [0, 1] 0: 开始，1: 结束
  // 第三个参数：旋转角度范围 [30, -45] 30: 开始，-45: 结束
  // 大图标
  const icosahedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45])

  // 小图标
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -50])
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -20])
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [30, -50])

  return (
    // 在tailwind中，section标签可以用于表示一个独立的区块，比如页眉、页脚、侧边栏等
    // overflow-x-clip: 溢出部分裁剪
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        {/* tracking-wider: 字间距 */}
        <p className="uppercase text-center text-zinc-500 font-extrabold tracking-wider ">Rapidly build modern websites.</p>
        {/*
          font-extrabold: 字体加粗
          font-black: 字体加粗 
          font-heading: 字体
          text-center: 文本居中
          text-4xl: 字体大小
          mt-6: 上外边距   
        */}
        <h1 className="font-extrabold font-heading text-center text-5xl mt-6 md:text-6xl lg:text-7xl max-w-3xl mx-auto">Rapidly build modern websites.</h1>
        {/* 
         max-w-xl mx-auto: 最大宽度为1024px，水平居中
        */}
        <p className="text-center text-zinc-400 my-4 text-xl md:text-2xl max-w-xl lg:text-3xl mx-auto">“Tailwind “Tailwind CSS CSS is is the the only only framework </p>

        {/* 
          绘制一个切口按钮
         */}
        <div className="flex justify-center my-6">
          <CutCornerButton className="inline-flex" children="Get Started" />
        </div>

        <div className="flex justify-center  mt-24 ">
          {/* 
            绘制两个六边形
          */}
          <div className="inline-flex relative z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Hexagon className="size-[1100px]" size={1100} duration={15} />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Hexagon className="size-[1800px]" size={1800} reverse={true} duration={60} />
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
              <Circle className="absolute left-[200px] top-[-890px]" animate={true}>
                <motion.img
                  ref={cubeRef}
                  style={{
                    rotate: cubeRotate,
                  }}
                  src="../../public/assets/images/cube.png"
                  alt="cube"
                  className="size-[200px]"
                />
              </Circle>
            </div>

            {/* 
              绘制一个长方体
            */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Circle className="absolute left-[-600px] top-[-50px]">
                <motion.img
                  ref={cuboidRef}
                  style={{
                    rotate: cuboidRotate,
                  }}
                  src="../../public/assets/images/cuboid.png"
                  alt="cuboid"
                  className="size-[200px]"
                />
              </Circle>
            </div>

            {/* 
              绘制一个圆环
           */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Circle className="absolute left-[180px] top-[280px]">
                <motion.img
                  ref={torusRef}
                  style={{
                    rotate: torusRotate,
                  }}
                  src="../../public/assets/images/torus.png"
                  alt="torus"
                  className="size-[200px]"
                />
              </Circle>
            </div>

            <motion.div
              className="inline-block"
              ref={icosahedronRef}
              style={{
                rotate: icosahedronRotate,
              }}
            >
              {/* 
              详细解释className里面的属性
              absolute: 绝对定位
              w-[calc(100%+100px)]: 宽度为父元素宽度的100%加上100px
              max-w-none: 最大宽度为none
              -z-10: z-index为-10 【z-index: 0 表示元素在正常层级，-10 表示元素在更低的层级】

              top-1/2: 顶部为父元素高度的一半
              left-1/2: 左边为父元素宽度的一半 
              -translate-x-1/2: 向左移动父元素宽度的一半【反方向】
              -translate-y-1/2: 向下移动父元素高度的一半【反方向】
      
              saturate-[10%]: 饱和度为10%
              brightness-[4%]: 亮度为4%
              hut-rotate-[240deg]: 旋转240度
          */}
              <img
                src="../../public/assets/images/icosahedron.png"
                alt="icosahedron"
                className="
          absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hut-rotate-[240deg]"
              />
              <img src="../../public/assets/images/icosahedron.png" alt="icosahedron" className="w-[500px]" />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-24 md:mt-40  gap-4">
          <div className="w-5 h-10 outline outline-2 outline-fuchsia-500/50 rounded-full flex justify-center">
            <motion.div
              // 动画
              // 动画属性
              animate={{
                translateY: 12,
                opacity: 0,
              }}
              // 动画选项
              transition={{
                duration: 2,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-1 h-3 bg-fuchsia-500/50 rounded-full mt-1"
            ></motion.div>
          </div>
          <p className="text-zinc-500 font-extrabold uppercase tracking-wider">Scroll to learn more</p>
        </div>
      </div>
    </section>
  )
}
