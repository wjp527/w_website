import { twMerge } from 'tailwind-merge'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

// 卡片数据
const cardData = [
  {
    id: 0,
    title: 'OJ判题系统',
    description: 'OJ = Online Judge 在线判题评测系统,用户可以选择题目，在线做题，编写代码并且提交代码；系统会对用户提交的代码，根据我们出题人设置的答案，来判断用户的提交结果是否正确 ACM(程序设计赛)，也还是需要依赖判题系统来检测参赛者的答案是否合理',
    image: 'https://pic.code-nav.cn/user_avatar/1840273607343382530/thumbnail/tezgKSz2rGsMrnWe.jpg',
    // 技术栈
    techStack: ['React', 'Tailwind', 'Astro'],
    color: 'fuchsia',
    // 立即体验
    experienceImmediately: 'https://github.com/wjp527',
    // 了解更多
    learnMore: 'https://github.com/wjp527',
  },
  {
    id: 1,
    title: 'BI数据分析系统',
    description: 'OJ = Online Judge 在线判题评测系统,用户可以选择题目，在线做题，编写代码并且提交代码；系统会对用户提交的代码，根据我们出题人设置的答案，来判断用户的提交结果是否正确 ACM(程序设计赛)，也还是需要依赖判题系统来检测参赛者的答案是否合理',
    image: 'https://img2.baidu.com/it/u=1020952940,3600657907&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
    // 技术栈
    techStack: ['React', 'Tailwind', 'Astro'],
    color: 'lime',
    // 立即体验
    experienceImmediately: 'https://github.com/wjp527',
    // 了解更多
    learnMore: 'https://github.com/wjp527',
  },
  {
    id: 2,
    title: 'API开放平台',
    description: 'OJ = Online Judge 在线判题评测系统,用户可以选择题目，在线做题，编写代码并且提交代码；系统会对用户提交的代码，根据我们出题人设置的答案，来判断用户的提交结果是否正确 ACM(程序设计赛)，也还是需要依赖判题系统来检测参赛者的答案是否合理',
    image: 'https://pic.code-nav.cn/user_avatar/1840273607343382530/thumbnail/tezgKSz2rGsMrnWe.jpg',
    // 技术栈
    techStack: ['React', 'Tailwind', 'Astro'],
    color: 'cyan',
    // 立即体验
    experienceImmediately: 'https://github.com/wjp527',
    // 了解更多
    learnMore: 'https://github.com/wjp527',
  },
  {
    id: 3,
    title: '伙伴匹配系统',
    description: 'OJ = Online Judge 在线判题评测系统,用户可以选择题目，在线做题，编写代码并且提交代码；系统会对用户提交的代码，根据我们出题人设置的答案，来判断用户的提交结果是否正确 ACM(程序设计赛)，也还是需要依赖判题系统来检测参赛者的答案是否合理',
    image: 'https://img2.baidu.com/it/u=1020952940,3600657907&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800',
    // 技术栈
    techStack: ['React', 'Tailwind', 'Astro'],
    color: 'violet',
    // 立即体验
    experienceImmediately: 'https://github.com/wjp527',
    // 了解更多
    learnMore: 'https://github.com/wjp527',
  },
]

export const FeaturesCardsSection = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)

  const [isHovered, setIsHovered] = useState(false)
  useEffect(() => {
    if (isHovered) return
    // 设置一个定时器，每隔3秒，切换一次卡片
    const timeout = setTimeout(() => {
      setSelectedCardIndex(curr => (curr == cardData.length - 1 ? 0 : curr + 1))
    }, 3000)
    // 返回一个函数，清除定时器
    return () => clearTimeout(timeout)
  }, [selectedCardIndex, isHovered])

  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container  overflow-hidden">
        <h2 className="font-heading text-center text-4xl font-bold md:text-5xl lg:text-6xl">我的项目</h2>
        <div className="mt-36 lg:mt-48 flex ">
          <div className="flex flex-none gap-8  ">
            {cardData.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  className="group w-full px-4 md:px-6"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  animate={{
                    translateX: `calc((-100% - 2rem) * ${selectedCardIndex})`,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'linear',
                  }}
                >
                  <CardContainer className="w-full">
                    {/* 
                      解释: 
                      group/card: 这个类名是用来设置鼠标悬浮时的样式
                      dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]: 这个类名是用来设置鼠标悬浮时的阴影效果
                      dark:bg-black dark:border-white/[0.2]: 这个类名是用来设置卡片背景颜色和边框颜色
                      border-black/[0.1]: 这个类名是用来设置卡片边框颜色
                      w-[90vw] sm:w-[80vw] md:w-[20vw]: 这个类名是用来设置卡片宽度
                      h-auto rounded-xl p-4 sm:p-6 border bg-gray-50: 这个类名是用来设置卡片内边距、圆角、边框颜色和背景颜色
                    */}
                    <CardBody
                      className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
      dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
      w-[90vw] sm:w-[80vw]    md:w-[60vw] lg:w-[30vw]
      h-auto rounded-xl p-4 sm:p-6 border   "
                    >
                      {/* 主标题 */}
                      <CardItem translateZ="50" className="text-xl sm:text-2xl font-bold text-white-600 dark:text-white">
                        {item.title}
                      </CardItem>

                      {/* 副标题/描述 */}
                      <CardItem as="p" translateZ={60} className="text-neutral-300 text-sm max-w-sm mt-4 dark:text-neutral-300">
                        {item.description}
                      </CardItem>

                      {/* 图片展示 */}
                      <CardItem translateZ={100} className="w-full mt-6" onClick={() => setSelectedCardIndex(index)}>
                        <img src={item.image} className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="3D效果展示" />
                      </CardItem>

                      {/* 特性列表 */}
                      <CardItem translateZ={80} className="mt-6 grid grid-cols-2 gap-4">
                        {item.techStack.map((tech, index) => {
                          return (
                            <div key={index} className="flex items-center gap-2">
                              <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="  text-sm text-neutral-300 dark:text-fuchsia-300">{tech}</span>
                            </div>
                          )
                        })}
                      </CardItem>

                      {/* 标签/技术栈 */}
                      <CardItem translateZ={70} className="mt-6 flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs bg-emerald-100 text-emerald-600 rounded-full">React</span>
                        <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Tailwind</span>
                        <span className="px-3 py-1 text-xs bg-purple-100 text-purple-600 rounded-full">Astro</span>
                      </CardItem>

                      {/* 按钮组 */}
                      <CardItem translateZ={90} className="mt-8 flex items-center justify-between gap-4">
                        <button className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold" onClick={() => window.open(item.experienceImmediately, '_blank')}>
                          立即体验
                        </button>
                        <button className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-sm font-bold" onClick={() => window.open(item.learnMore, '_blank')}>
                          了解更多 →
                        </button>
                      </CardItem>

                      {/* 底部信息 */}
                      <CardItem translateZ={60} className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                            <div>
                              <p className="text-sm font-medium text-neutral-300 dark:text-neutral-200">作者名称</p>
                              <p className="text-xs text-neutral-300">2024.03.14</p>
                            </div>
                          </div>
                        </div>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className=" bg-zinc-950 inline-flex gap-4 rounded-full p-1">
            {cardData.map((_, i) => {
              return <div key={i} onClick={() => setSelectedCardIndex(i)} className={twMerge('size-2.5 bg-zinc-500 rounded-full m-2 cursor-pointer', selectedCardIndex == i ? 'bg-zinc-300' : 'bg-zinc-500')}></div>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
