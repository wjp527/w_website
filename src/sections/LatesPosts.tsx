import type { CollectionEntry } from 'astro:content'
import { Card } from '../components/Card'
import { getPostColorFromCategory } from '../utils/postUtils'
import { Tag } from '../components/Tag'
import { CutCornerButton } from '../components/CutCornerButton'
import { twMerge } from 'tailwind-merge'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
export const LatesPosts = (props: { lastestPosts: CollectionEntry<'blog'>[] }) => {
  const { lastestPosts } = props
  const targetRef = useRef(null)
  const { scrollYProgress: targetScrollYProgress } = useScroll({
    target: targetRef,
    // ✨✨✨['{目标元素位置} {视口位置}', '{目标元素位置} {视口位置}']
    offset: ['start end', 'start center'],
  })
  const marginTop = useTransform(targetScrollYProgress, [0, 1], [0, 64])
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-4 md:text-5xl lg:text-6xl">Latest post</h2>
          <p className="text-xl lg:text-2xl text-zinc-400 text-center mb-8">阿八八八八八</p>
        </div>
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8 ">
            {lastestPosts.map((item, index) => (
              <Card key={index} color={getPostColorFromCategory(item.data.category)} className={twMerge('max-w-xs md:max-w-md group', (index === 1 || index === 3) && 'md:hidden')} buttonText="Read more">
                <Tag color={getPostColorFromCategory(item.data.category)}>{item.data.category}</Tag>
                <h3 className="font-heading font-black text-3xl mt-3">{item.data.title}</h3>
                <p className="text-lg text-zinc-400 mt-6">{item.data.description}</p>
              </Card>
            ))}
          </div>

          <motion.div
            ref={targetRef}
            style={{
              marginTop: marginTop,
            }}
            className="hidden md:flex flex-col gap-8 md:mt-16 "
          >
            {lastestPosts.map((item, index) => (
              <Card key={index} color={getPostColorFromCategory(item.data.category)} className={twMerge('max-w-xs md:max-w-md group', (index === 0 || index === 2) && 'md:hidden')} buttonText="Read more">
                <Tag color={getPostColorFromCategory(item.data.category)}>{item.data.category}</Tag>
                <h3 className="font-heading font-black text-3xl mt-3">{item.data.title}</h3>
                <p className="text-lg text-zinc-400 mt-6">{item.data.description}</p>
              </Card>
            ))}
          </motion.div>
        </div>
        {/* <div>
          <div>Build your next idea even faster.</div>
          <h3>How to build a website in 2024</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>

          <div>
            <button>Read more</button>
            <div>arrow</div>
          </div>
        </div> */}
        <div className="flex justify-center mt-16">
          <CutCornerButton className="inline-flex" children="View all posts" />
        </div>
      </div>
    </section>
  )
}
