import React, { useState, useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import './css/index.css'

// 手形图标组件
const Hand = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="hand" ref={ref}>
      <img src="/assets/FormInteraction/hand.png" alt="hand" />
    </div>
  )
})

// 表单行组件
interface RowProps {
  label: string
  ifFinish: number
  onFocus: (ele: HTMLInputElement) => void
  onBlur: (ele: HTMLInputElement) => void
}

const Row: React.FC<RowProps> = ({ label, ifFinish, onFocus, onBlur }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="row" data_text={label}>
      <input ref={inputRef} className="row_input" if_finish={String(ifFinish)} onFocus={() => inputRef.current && onFocus(inputRef.current)} onBlur={() => inputRef.current && onBlur(inputRef.current)} />
      <svg className="row_selectbox" width="125" height="92" viewBox="0 0 125 92">
        <path d="M19,21H85V87H19V21Z" />
        <path d="M14,42L40,78l71-64" />
      </svg>
    </div>
  )
}

// 主组件
const FormInteraction: React.FC = () => {
  const [rows] = useState([
    { label: 'your name', ifFinish: 0 },
    { label: 'your age', ifFinish: 0 },
    { label: 'your gender', ifFinish: 0 },
    { label: 'your email', ifFinish: 0 },
  ])
  const handRef = useRef<HTMLDivElement>(null)
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null)
  const [offsetDistance, setOffsetDistance] = useState(0)

  // 初始化 GSAP timeline
  useEffect(() => {
    setTimeline(gsap.timeline())
  }, [])

  // 计算手指初始位置
  const resize = useCallback(() => {
    if (!handRef.current) return
    const firstInput = document.querySelector('.row_input')
    const firstSelectBox = document.querySelector('.row_selectbox')
    if (!firstInput || !firstSelectBox) return

    const selectBoxRect = firstSelectBox.getBoundingClientRect()
    const inputRect = firstInput.getBoundingClientRect()

    const newOffsetDistance = selectBoxRect.height / 3
    setOffsetDistance(newOffsetDistance)

    // 设置手的大小
    handRef.current.style.height = `${selectBoxRect.height * 5}px`

    // 设置手的水平位置（对齐到勾选框）
    handRef.current.style.left = `${selectBoxRect.left}px`

    // 设置手的垂直位置（对齐到第一个输入框）
    handRef.current.style.top = `${inputRect.top - handRef.current.offsetHeight / 2 + newOffsetDistance + window.scrollY}px`
  }, [])

  // 处理输入框聚焦
  const handleFocus = useCallback(
    (ele: HTMLInputElement) => {
      if (!timeline || !handRef.current) return

      const inputRect = ele.getBoundingClientRect()
      const selectBoxRect = ele.nextElementSibling?.getBoundingClientRect()
      if (!selectBoxRect) return

      // 更新手的位置到当前输入框
      timeline.to(handRef.current, {
        top: `${inputRect.top - handRef.current.offsetHeight / 2 + offsetDistance + window.scrollY}px`,
        left: `${selectBoxRect.left}px`, // 确保水平位置对齐到勾选框
        duration: 0.4,
        ease: 'linear',
      })
    },
    [timeline, offsetDistance]
  )

  // 处理输入完成动画
  const inputFinishAnimate = (ele: HTMLInputElement) => {
    if (!timeline || !handRef.current) return
    const svg = ele.nextElementSibling as SVGElement
    timeline
      .to(handRef.current, {
        rotate: '5deg',
        x: '3%',
        y: '7%',
        duration: 0.2,
        ease: 'linear',
        onStart: () => {
          svg.classList.add('row_selectbox_finish')
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

  // 处理取消完成动画
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
          svg.classList.remove('row_selectbox_finish')
        },
      })
  }

  // 处理输入框失焦
  const handleBlur = (ele: HTMLInputElement) => {
    const ifFinish = parseInt(ele.getAttribute('if_finish') || '0')
    if (ele.value !== '' && !ifFinish) {
      ele.setAttribute('if_finish', '1')
      inputFinishAnimate(ele)
    }
    if (ele.value === '' && ifFinish) {
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
      {rows.map((row, index) => (
        <Row key={index} label={row.label} ifFinish={row.ifFinish} onFocus={handleFocus} onBlur={handleBlur} />
      ))}
      <Hand ref={handRef} />
    </div>
  )
}

export default FormInteraction
