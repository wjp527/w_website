import React, { useState, useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import './css/index.css'

// 手形图标组件，用于表示交互的手势
const Hand = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="hand" ref={ref}>
      {' '}
      {/* 用于手形的容器 */}
      <img src="/assets/FormInteraction/hand.png" alt="hand" /> {/* 手形图片 */}
    </div>
  )
})

// 表单行组件，负责显示每一行的输入框及其动画效果
interface RowProps {
  label: string // 输入框的标签
  ifFinish: number // 输入框是否完成标记
  onFocus: (ele: HTMLInputElement) => void // 聚焦事件处理函数
  onBlur: (ele: HTMLInputElement) => void // 失焦事件处理函数
}

const Row: React.FC<RowProps> = ({ label, ifFinish, onFocus, onBlur }) => {
  const inputRef = useRef<HTMLInputElement>(null) // 引用当前行的输入框

  return (
    <div className="row" data-text={label}>
      {' '}
      {/* 包裹输入框和选择框的容器 */}
      <input
        ref={inputRef} // 输入框的引用
        className="row_input"
        if-finish={String(ifFinish)} // 设置是否完成的标记
        onFocus={() => inputRef.current && onFocus(inputRef.current)} // 聚焦事件
        onBlur={() => inputRef.current && onBlur(inputRef.current)} // 失焦事件
      />
      {/* SVG 勾选框，用于表示完成状态 */}
      <svg className="row_selectbox" width="125" height="92" viewBox="0 0 125 92">
        <path d="M19,21H85V87H19V21Z" /> {/* 矩形框 */}
        <path d="M14,42L40,78l71-64" /> {/* 勾选路径 */}
      </svg>
    </div>
  )
}

// 主组件，包含表单行和交互逻辑
const FormInteraction: React.FC = () => {
  // 表单数据，每一行为一个输入框
  const [rows] = useState([
    { label: 'your name', ifFinish: 0 },
    { label: 'your age', ifFinish: 0 },
    { label: 'your gender', ifFinish: 0 },
    { label: 'your email', ifFinish: 0 },
  ])

  const handRef = useRef<HTMLDivElement>(null) // 引用手形组件
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null) // GSAP 时间线
  const [offsetDistance, setOffsetDistance] = useState(0) // 手形与输入框的垂直偏移

  // 初始化 GSAP 时间线
  useEffect(() => {
    setTimeline(gsap.timeline()) // 创建 GSAP 时间线实例
  }, [])

  // 计算手形初始位置
  const resize = useCallback(() => {
    if (!handRef.current) return // 如果手形组件未加载，直接返回

    // 获取第一个输入框和选择框的 DOM 信息
    const firstInput = document.querySelector('.row_input')
    const firstSelectBox = document.querySelector('.row_selectbox')
    if (!firstInput || !firstSelectBox) return

    // 计算选择框的高度和输入框的垂直偏移
    const selectBoxRect = firstSelectBox.getBoundingClientRect()
    const inputRect = firstInput.getBoundingClientRect()

    const newOffsetDistance = selectBoxRect.height / 3
    setOffsetDistance(newOffsetDistance) // 更新偏移距离

    // 设置手形的大小和位置
    handRef.current.style.height = `${selectBoxRect.height * 5}px`
    handRef.current.style.left = `${selectBoxRect.left}px` // 水平对齐选择框
    handRef.current.style.top = `${inputRect.top - handRef.current.offsetHeight / 2 + newOffsetDistance + window.scrollY}px` // 垂直对齐输入框
  }, [])

  // 处理输入框聚焦事件
  const handleFocus = useCallback(
    (ele: HTMLInputElement) => {
      if (!timeline || !handRef.current) return

      const inputRect = ele.getBoundingClientRect()
      const selectBoxRect = ele.nextElementSibling?.getBoundingClientRect()
      if (!selectBoxRect) return

      // 更新手形的位置到当前输入框
      timeline.to(handRef.current, {
        top: `${inputRect.top - handRef.current.offsetHeight / 2 + offsetDistance + window.scrollY}px`, // 垂直位置
        left: `${selectBoxRect.left}px`, // 水平位置对齐选择框
        duration: 0.4,
        ease: 'linear',
      })
    },
    [timeline, offsetDistance]
  )

  // 处理输入完成时的动画
  const inputFinishAnimate = (ele: HTMLInputElement) => {
    if (!timeline || !handRef.current) return
    const svg = ele.nextElementSibling as SVGElement // 获取对应的选择框
    timeline
      .to(handRef.current, {
        rotate: '5deg',
        x: '3%',
        y: '7%',
        duration: 0.2,
        ease: 'linear',
        onStart: () => {
          svg.classList.add('row_selectbox_finish') // 添加完成样式
        },
      })
      .to(handRef.current, {
        rotate: '-2deg',
        x: '9%',
        y: '-6%',
        duration: 0.2,
        ease: 'linear',
      })
      .to(handRef.current, {
        rotate: 0,
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'linear',
      })
  }

  // 处理取消完成时的动画
  const inputUnfinishAnimate = (ele: HTMLInputElement) => {
    if (!timeline || !handRef.current) return
    const svg = ele.nextElementSibling as SVGElement
    timeline
      .to(handRef.current, {
        x: '-25%',
        y: '10%',
        duration: 0.3,
        ease: 'linear',
      })
      .to(handRef.current, {
        x: 0,
        y: 0,
        duration: 0.2,
        ease: 'linear',
        onStart: () => {
          svg.classList.remove('row_selectbox_finish') // 移除完成样式
        },
      })
  }

  // 处理输入框失焦事件
  const handleBlur = (ele: HTMLInputElement) => {
    const ifFinish = parseInt(ele.getAttribute('if_finish') || '0') // 获取是否完成的标记
    if (ele.value !== '' && !ifFinish) {
      // 如果输入框有内容且未完成
      ele.setAttribute('if_finish', '1')
      inputFinishAnimate(ele)
    }
    if (ele.value === '' && ifFinish) {
      // 如果输入框内容为空且已完成
      ele.setAttribute('if_finish', '0')
      inputUnfinishAnimate(ele)
    }
  }

  // 组件加载和窗口大小改变时重新计算位置
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 等待 DOM 完全加载
      setTimeout(resize, 100)
      window.addEventListener('resize', resize)
      return () => {
        window.removeEventListener('resize', resize)
      }
    }
  }, [resize])

  return (
    <div className="form-interaction-container">
      {' '}
      {/* 表单交互的容器 */}
      {rows.map((row, index) => (
        <Row key={index} label={row.label} ifFinish={row.ifFinish} onFocus={handleFocus} onBlur={handleBlur} />
      ))}
      <Hand ref={handRef} /> {/* 渲染手形组件 */}
    </div>
  )
}

export default FormInteraction
