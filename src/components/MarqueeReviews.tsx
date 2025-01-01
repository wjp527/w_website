import { cn } from '@/lib/utils'
import Marquee from '@/components/Marquee/index'
import { Button } from '@/components/ui/moving-border'

/**
 * 绘制一个滚动条，里面包含多个卡片，每个卡片包含一个头像、名字、用户名和评论内容
 */

const reviews = [
  {
    id: 0,
    name: 'HTML5+CSS3+JS',
    username: '@zhangsan',
    body: '前端三件套',
    img: 'https://img2.baidu.com/it/u=3487389706,2091384896&fm=253&fmt=auto&app=138&f=JPEG?w=899&h=500',
  },
  {
    id: 1,
    name: 'TS',
    username: '@lisi',
    body: '界面设计非常直观，使用起来很方便。',
    img: 'https://img2.baidu.com/it/u=648247815,3161686023&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500',
  },
  {
    id: 2,
    name: 'Vue',
    username: '@wangwu',
    body: '客户支持很及时，解决问题很专业。',
    img: 'https://img1.baidu.com/it/u=4029442780,4055247755&fm=253&fmt=auto?w=1403&h=800',
  },
  {
    id: 3,
    name: 'React',
    username: '@zhaoliu',
    body: '性价比很高，推荐给所有需要的人。',
    img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  },
  {
    id: 4,
    name: 'Node.js',
    username: '@qianba',
    body: '性价比很高，推荐给所有需要的人。',
    img: 'https://img1.baidu.com/it/u=686066312,3715924167&fm=253&fmt=auto&app=138&f=PNG?w=816&h=500',
  },
  {
    id: 5,
    name: 'Tailwind',
    username: '@zhouqi',
    body: '性价比很高，推荐给所有需要的人。',
    img: 'https://img1.baidu.com/it/u=744158005,167535057&fm=253&fmt=auto&app=138&f=JPEG?w=1030&h=500',
  },
  {
    id: 6,
    name: 'Astro',
    username: '@zhouqi',
    body: '性价比很高，推荐给所有需要的人。',
    img: 'https://avatar.vercel.sh/zhouqi',
  },
  {
    id: 7,
    name: 'SpringBoot',
    username: '@zhouqi',
    body: '性价比很高，推荐给所有需要的人。',
    img: 'https://img0.baidu.com/it/u=3416236557,1190216834&fm=253&fmt=auto?w=661&h=395',
  },
  {
    id: 8,
    name: 'Nacos',
    username: '@zhouqi',
    body: '性价比很高，推荐给所有需要的人。',
    img: 'https://img0.baidu.com/it/u=3671460108,1082343560&fm=253&fmt=auto&app=138&f=JPEG?w=806&h=362',
  },
  {
    id: 9,
    name: 'RabbitMQ',
    username: '@zhouqi',
    body: '性价比很高，推荐给所有需要的人。',
    img: 'https://img0.baidu.com/it/u=3988711307,4153840162&fm=253&fmt=auto&app=138&f=JPEG?w=673&h=377',
  },
  {
    id: 10,
    name: 'ES',
    username: '@zhouqi',
    body: '性价比很高，推荐给所有需要的人。',
    img: 'https://img0.baidu.com/it/u=2092563211,198168772&fm=253&fmt=auto&app=138&f=JPEG?w=760&h=490',
  },
  {
    id: 11,
    name: 'Docker',
    username: '@zhouqi',
    body: '性价比很高，推荐给所有需要的人。',
    img: 'https://img2.baidu.com/it/u=4239709976,182987782&fm=253&fmt=auto&app=138&f=JPEG?w=836&h=500',
  },
]

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2))
const secondRow = reviews.slice(Math.ceil(reviews.length / 2))

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
  return (
    <div className="mx-4">
      {' '}
      {/* 添加间距 */}
      <figure className={cn('relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4', 'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]', 'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]')}>
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt={name} src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white">{name}</figcaption>
            <p className="text-xs font-medium text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
      </figure>
    </div>
  )
}

export default function MarqueeReviews() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl  mb-12 text-white font-heading font-black tracking-wider">技术栈</h2>
        <Button
          containerClassName="w-full h-[500px] p-0"
          className="p-0 h-full bg-black-100" // 添加黑色背景
          borderClassName="bg-[radial-gradient(var(--fuchsia-500)_40%,transparent_60%)]" // 修改为紫红色描边
          duration={6000}
        >
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black-500">
            <div className="w-full py-4">
              <Marquee pauseOnHover className="[--duration:10s]">
                <div className="flex">
                  {firstRow.map(review => (
                    <ReviewCard key={review.id} {...review} />
                  ))}
                </div>
              </Marquee>
            </div>

            <div className="w-full py-4">
              <Marquee reverse pauseOnHover className="[--duration:10s]">
                <div className="flex">
                  {secondRow.map(review => (
                    <ReviewCard key={review.id} {...review} />
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </Button>

  
      </div>
    </section>
  )
}
