import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    console.log(window.scrollY)
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence >
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-fuchsia-500/20 hover:bg-fuchsia-500/30 transition-colors duration-200"
          // 初始状态
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          // 进入时放大
          animate={{
            opacity: 1,
            scale: 1,
          }}
          // 退出时缩小
          exit={{
            opacity: 0,
            scale: 1,
          }}
          // 鼠标长按缩小
          whileTap={{
            scale: 0.8,
          }}
          // 鼠标悬浮放大
          whileHover={{
            opacity: 1,
            scale: 1.2,
          }}
          onClick={scrollToTop}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
