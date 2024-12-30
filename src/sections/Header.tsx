// 引入 Tailwind 样式
import '../styles/global.css'
// 引入切口按钮
import { CutCornerButton } from '../components/CutCornerButton'
import { Hexagon } from '../components/Hexagon'
import { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { AnimatePresence, motion } from 'framer-motion'

const navLink = [
  {
    id: 0,
    title: 'Home',
    href: '/',
  },
  {
    id: 1,
    title: 'Blog',
    href: '/blog',
  },
  {
    id: 2,
    title: 'Careers',
    href: '/careers',
  },
  {
    id: 3,
    title: 'Contact',
    href: '/contact',
  },
]

export const HeaderSection = () => {
  const [isOpen, setIsOpen] = useState(false)

  /**
   * ✨当菜单打开时，禁止滚动
   */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      {/* // 吸顶 // backdrop-blur-lg: 模糊背景 // 这个lg是blur-lg的缩写，表示模糊程 // backdrop-blur-sm: 模糊背景 // backdrop-blur-md: 模糊背景 // backdrop-blur-xl: 模糊背景 // backdrop-blur-2xl: 模糊背景 // backdrop-blur-3xl: 模糊背景 // backdrop-blur-4xl: 模糊背景 // backdrop-blur-5xl: 模糊背景 */}
      <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg z-40">
        <div className="container">
          {/* 
          md:h-28: 当屏幕宽度大于768px时，高度为28px
        */}
          <div className="flex justify-between items-center h-24 md:h-28">
            {/* 左侧内容 */}
            <div>
              <img src="../../public/assets/images/logo.svg" alt="logo" />
            </div>
            {/* 
             右侧内容
             点击后，二条横线 会变为 叉

             hidden: 隐藏
             sm:inline-flex: 当屏幕宽度大于640px时，显示  
             md:inline-flex: 当屏幕宽度大于768px时，显示  
             lg:inline-flex: 当屏幕宽度大于1024px时，显示   
             xl:inline-flex: 当屏幕宽度大于1280px时，显示   
             xxl:inline-flex: 当屏幕宽度大于1536px时，显示   
             inline-flex: 内联块级元素
             flex: 块级元素

          */}

            <div className="flex items-center gap-4">
              <CutCornerButton className="hidden md:inline-flex" children="Get Started" />
              <div className="size-10 relative" onClick={() => setIsOpen(!isOpen)}>
                <div className="absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2">
                  <div className={twMerge('w-5 h-0.5 bg-zinc-300 translate-y-1 duration-300', isOpen && 'rotate-45 translate-y-0 ')}></div>
                </div>
                <div className="absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2">
                  <div className={twMerge('w-5 h-0.5 bg-fuchsia-300 -translate-y-1 duration-300', isOpen && '-rotate-45 translate-y-0 ')}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 菜单 */}
      {/* 
        AnimatePresence: 动画过渡
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            // 初始状态
            initial={{
              opacity: 0,
            }}
            // 动画状态
            animate={{
              opacity: 1,
            }}
            // 退出状态
            exit={{
              opacity: 0,
            }}
            // 动画过渡
            transition={{
              duration: 0.5,
            }}
            className="fixed size-full top-0 left-0 z-30 bg-zinc-900"
          >
            <div className="absolute inset-2 bg-zinc-800 rounded-md mt-24 md:mt-20 z-0">
              <div className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                <Hexagon size={700} />
              </div>
              <div className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
                <Hexagon size={1100} />
              </div>
              <div className="h-full flex justify-center items-center">
                <nav className="flex flex-col items-center gap-12 md:gap-16">
                  {navLink.map((item, index) => (
                    <motion.a
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: 'easeInOut',
                        delay: index * 0.25,
                      }}
                      href={item.href}
                      key={item.id}
                    >
                      <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300"> {item.title}</span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
