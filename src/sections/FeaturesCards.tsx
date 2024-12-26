import { twMerge } from 'tailwind-merge'
import { TextButton } from '../components/TextButton'
import { Card } from '../components/Card'
// 卡片数据
const cardData = [
  {
    id: 0,
    title: 'OJ判题系统',
    description: 'OJ = Online Judge 在线判题评测系统,用户可以选择题目，在线做题，编写代码并且提交代码；系统会对用户提交的代码，根据我们出题人设置的答案，来判断用户的提交结果是否正确 ACM(程序设计赛)，也还是需要依赖判题系统来检测参赛者的答案是否合理',
    image: '../../public/assets/images/pill.png',
    color: 'fuchsia',
  },
  {
    id: 1,
    title: 'BI数据分析系统',
    description: 'OJ = Online Judge 在线判题评测系统,用户可以选择题目，在线做题，编写代码并且提交代码；系统会对用户提交的代码，根据我们出题人设置的答案，来判断用户的提交结果是否正确 ACM(程序设计赛)，也还是需要依赖判题系统来检测参赛者的答案是否合理',
    image: '../../public/assets/images/cuboid.png',
    color: 'lime',
  },
  {
    id: 2,
    title: 'API开放平台',
    description: 'OJ = Online Judge 在线判题评测系统,用户可以选择题目，在线做题，编写代码并且提交代码；系统会对用户提交的代码，根据我们出题人设置的答案，来判断用户的提交结果是否正确 ACM(程序设计赛)，也还是需要依赖判题系统来检测参赛者的答案是否合理',
    image: '../../public/assets/images/cone.png',
    color: 'cyan',
  },
  {
    id: 3,
    title: '伙伴匹配系统',
    description: 'OJ = Online Judge 在线判题评测系统,用户可以选择题目，在线做题，编写代码并且提交代码；系统会对用户提交的代码，根据我们出题人设置的答案，来判断用户的提交结果是否正确 ACM(程序设计赛)，也还是需要依赖判题系统来检测参赛者的答案是否合理',
    image: '../../public/assets/images/icosahedron.png',
    color: 'violet',
  },
]

export const FeaturesCardsSection = () => {
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading text-center text-4xl font-bold md:text-5xl lg:text-6xl">Tell me about my project</h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map(item => {
              return (
                <Card key={item.id} color={item.color} className="max-w-xs md:max-w-md">
                  <div className="flex justify-center -mt-20">
                    <div className="inline-flex relative">
                      {/* 
      
                        图片阴影: 
      
                        详细讲解: [mask-image:radial-gradient(closest-side,black,transparent)] 
                        结合了 渐变 和 遮罩图像（mask-image）功能
                        mask-image: 遮罩图像
                        radial-gradient(): 径向渐变 （从中心向外扩展的渐变）
                        closest-side: 渐变从圆的中心开始，向圆的边缘扩展   
                        中心部分变得完全可见（黑色），而周围部分则变得透明
    
                    */}
                      <div
                        className="absolute w-full h-4 top-[calc(100%+16px)] bg-zinc-900/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]
                    group-hover:bg-zinc-950/30 transition duration-300
                    "
                      ></div>

                      {/* 
                    group-hover:-translate-y-6 transition duration-300: 
                    group-hover: 当鼠标悬浮在元素上时，添加的类
                    -translate-y-6: 向下移动 6px
                    transition duration-300: 过渡效果，持续时间 300ms
                    鼠标触碰的适合没有生效，必须要鼠标进行点击，才有效果，怎么回事
                    
                    */}
                      <img className="size-36 group-hover:-translate-y-6 transition duration-300" src={item.image} alt="pill" />
                    </div>
                  </div>
                  <h3 className="font-bold text-3xl text-center  mt-12">{item.title}</h3>
                  <p className="text-lg mt-4 text-zinc-400">{item.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className=" bg-zinc-950 inline-flex gap-4 rounded-full p-1">
            {cardData.map((_, i) => {
              return <div key={i} className="size-2.5 bg-zinc-500 rounded-full m-2"></div>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
