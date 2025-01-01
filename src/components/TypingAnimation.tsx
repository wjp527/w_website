import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// 定义组件的属性接口
interface TypingAnimationProps {
  children: string // 要显示的文本内容
  className?: string // 可选的 CSS 类名
  duration?: number // 每个字符的打字间隔（毫秒）
  delay?: number // 开始动画前的延迟时间（毫秒）
  as?: React.ElementType // 要渲染的 HTML 元素类型
  startOnView?: boolean // 是否在进入视图时才开始动画
}

export const TypingAnimation = ({
  children,
  className = '',
  duration = 100,
  delay = 0,
  as: Component = 'div', // 默认渲染为 div 元素
  startOnView = false,
}: TypingAnimationProps) => {
  // 状态管理
  const [text, setText] = useState('') // 当前显示的文本
  const [isTypingComplete, setIsTypingComplete] = useState(false) // 打字动画是否完成

  // 引用管理
  const containerRef = useRef(null) // 容器元素的引用
  const isInView = useInView(containerRef) // 检测元素是否在视图中

  // 打字动画效果
  useEffect(() => {
    // 如果不需要等待进入视图，或者已经在视图中，则开始动画
    if (!startOnView || (startOnView && isInView)) {
      // 设置初始延迟
      const timeout = setTimeout(() => {
        const animate = async () => {
          // 逐字显示文本
          for (let i = 0; i <= children.length; i++) {
            setText(children.slice(0, i)) // 截取文本片段
            // 等待指定时间后继续
            await new Promise(resolve => setTimeout(resolve, duration))
          }
          // 动画完成，设置状态
          setIsTypingComplete(true)
        }
        animate()
      }, delay)

      // 清理函数，组件卸载时清除定时器
      return () => clearTimeout(timeout)
    }
  }, []) // 只依赖空数组，确保动画仅在组件首次挂载时执行

  return (
    // 使用指定的组件类型渲染容器
    <Component ref={containerRef} className={className}>
      {text}
      {/* 光标动画 - 仅在打字未完成时显示 */}
      {!isTypingComplete && (
        <motion.span
          // 光标闪烁动画
          animate={{ opacity: [1, 0] }} // 透明度在 1 和 0 之间变化
          transition={{
            duration: 0.5, // 动画持续时间
            repeat: Infinity, // 无限重复
            repeatType: 'reverse', // 反向重复
          }}
          // 光标样式
          className="inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle"
        />
      )}
    </Component>
  )
}
