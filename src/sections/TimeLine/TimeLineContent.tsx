import React, { useRef } from 'react'
import { TracingBeam } from '../../components/TimeLine/TracingBeam'
import { motion, useScroll, useTransform } from 'framer-motion'
const dummyContent = [
  {
    title: '初步进入计算机的世界',
    description: <></>,
    badge: '初识计算机',
    image: '/assets/TimeLine/1.png',
  },
  {
    title: '梦开始的地方!',
    description: (
      <>
        <p>开始接触 HTML、CSS 和 JavaScript 的基础知识。通过在线教程和实践项目， 逐步掌握了前端开发的基本技能。开始使用 React 框架进行开发，并学习了 现代前端开发工具和工作流程。</p>
        <p>参与了多个实际项目的开发，积累了宝贵的实战经验。同时也在社区中分享 经验，帮助其他开发者解决问题。</p>
      </>
    ),
    badge: '学习历程',
    image: '/assets/TimeLine/2.png',
  },
  {
    title: '进入工作室',
    description: (
      <>
        <p>曾经和伙伴参加省级Web比赛，获得了省二。</p>
      </>
    ),
    badge: '比赛经历',
    image: '/assets/TimeLine/3.png',
  },
  {
    title: '带队经历',
    description: (
      <>
        <p>之后曾和老师一起带队参加比赛</p>
      </>
    ),
    badge: '带队经历',
    image: '/assets/TimeLine/4.png',
  },
  {
    title: '项目历程',
    description: (
      <>
        <p>和朋友一起开发过不少项目，积累了不少项目经验，如: 在线教育平台，运动小程序，体育赛事直播平台，积分商城，等等</p>
      </>
    ),
    badge: '学习历程',
    image: '/assets/TimeLine/5.png',
  },
  {
    title: '项目经验积累',
    description: (
      <>
        <p>自己也抽空学习了不少技术栈。比如后端的Java，MySQL，Redis，SpringBoot，RabbitMQ，Nacos，ES等等,也独立写了写了一些项目</p>
      </>
    ),
    badge: '项目实践',
    image: '/assets/TimeLine/6.png',
  },
  {
    title: '新的一年',
    description: (
      <>
        <p>希望自己不断学习，积累项目经验，提升自己！！！</p>
      </>
    ),
    badge: '项目实践',
    image: '/assets/TimeLine/7.png',
  },
  // 可以继续添加更多内容...
]

export const TimeLineContent = () => {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 w-full ">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">{item.badge}</h2>

            <p className="text-xl mb-4 font-bold">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <motion.img
                  src={item.image}
                  alt="timeline thumbnail"
                  className="rounded-lg mb-10 w-full h-auto"
                  whileHover={{
                    scale: 1.05,
                    filter: 'brightness(1.1)',
                    transition: { duration: 0.3, ease: 'easeInOut' },
                  }}
                  whileTap={{ scale: 0.95 }} // 点击时的效果
                />
              )}
            </div>
            <div className="text-neutral-200">
              {item.description}  {/* 将 p 标签改为 div */}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}
