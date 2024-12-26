// 引入 Tailwind 样式
import '../styles/global.css'
// 引入切口按钮
import { CutCornerButton } from '../components/CutCornerButton'

export const HeaderSection = () => {
  return (
    // 吸顶
    // backdrop-blur-lg: 模糊背景
    // 这个lg是blur-lg的缩写，表示模糊程
    // backdrop-blur-sm: 模糊背景
    // backdrop-blur-md: 模糊背景
    // backdrop-blur-xl: 模糊背景
    // backdrop-blur-2xl: 模糊背景
    // backdrop-blur-3xl: 模糊背景
    // backdrop-blur-4xl: 模糊背景
    // backdrop-blur-5xl: 模糊背景
    <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg z-10">
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
            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
