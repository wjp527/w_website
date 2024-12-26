// 引入切口按钮
import { CutCornerButton } from '../components/CutCornerButton'
// 引入描边组件
import { Hexagon } from '../components/Hexagon'
import { Circle } from '../components/Circle'

export const HeroSection = () => {
  return (
    // 在tailwind中，section标签可以用于表示一个独立的区块，比如页眉、页脚、侧边栏等
    // overflow-x-clip: 溢出部分裁剪
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        {/* tracking-wider: 字间距 */}
        <p className="uppercase text-center text-zinc-500 font-extrabold tracking-wider ">Rapidly build modern websites.</p>
        {/*
          font-extrabold: 字体加粗
          font-black: 字体加粗 
          font-heading: 字体
          text-center: 文本居中
          text-4xl: 字体大小
          mt-6: 上外边距   
        */}
        <h1 className="font-extrabold font-heading text-center text-5xl mt-6 md:text-6xl lg:text-7xl max-w-3xl mx-auto">Rapidly build modern websites.</h1>
        {/* 
         max-w-xl mx-auto: 最大宽度为1024px，水平居中
        */}
        <p className="text-center text-zinc-400 my-4 text-xl md:text-2xl max-w-xl lg:text-3xl mx-auto">“Tailwind “Tailwind CSS CSS is is the the only only framework </p>

        {/* 
          绘制一个切口按钮
         */}
        <div className="flex justify-center my-6">
          <CutCornerButton className="inline-flex" children="Get Started" />
        </div>

        <div className="flex justify-center  mt-24 ">
          {/* 
            绘制两个六边形
          */}
          <div className="inline-flex relative z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Hexagon className="size-[1100px]" />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Hexagon className="size-[1800px]" />
            </div>

            {/* 
              绘制一个立方体
            */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              {/* 
                outline: 轮廓
                outline-2: 轮廓宽度
                -outline-offset-2: 轮廓偏移
                outline-fuchsia-500: 轮廓颜色
              */}
              <Circle className="absolute left-[200px] top-[-900px]">
                <img src="../../public/assets/images/cube.png" alt="cube" className="size-[200px]" />
              </Circle>
            </div>

            {/* 
              绘制一个长方体
            */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Circle className="absolute left-[-600px] top-[-50px]">
                <img src="../../public/assets/images/cuboid.png" alt="cuboid" className="size-[200px]" />
              </Circle>
            </div>

            {/* 
              绘制一个圆环
           */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <Circle className="absolute left-[180px] top-[280px]">
                <img src="../../public/assets/images/torus.png" alt="torus" className="size-[200px]" />
              </Circle>
            </div>

            {/* 
          详细解释className里面的属性
          absolute: 绝对定位
          w-[calc(100%+100px)]: 宽度为父元素宽度的100%加上100px
          max-w-none: 最大宽度为none
          -z-10: z-index为-10 【z-index: 0 表示元素在正常层级，-10 表示元素在更低的层级】

          top-1/2: 顶部为父元素高度的一半
          left-1/2: 左边为父元素宽度的一半 
          -translate-x-1/2: 向左移动父元素宽度的一半【反方向】
          -translate-y-1/2: 向下移动父元素高度的一半【反方向】
   
          saturate-[10%]: 饱和度为10%
          brightness-[4%]: 亮度为4%
          hut-rotate-[240deg]: 旋转240度
          */}
            <img
              src="../../public/assets/images/icosahedron.png"
              alt="icosahedron"
              className="
          absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hut-rotate-[240deg]"
            />
            <img src="../../public/assets/images/icosahedron.png" alt="icosahedron" className="w-[500px]" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-24 md:mt-40  gap-4">
          <div className="w-5 h-10 outline outline-2 outline-fuchsia-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-fuchsia-500/50 rounded-full mt-1"></div>
          </div>
          <p className="text-zinc-500 font-extrabold uppercase tracking-wider">Scroll to learn more</p>
        </div>
      </div>
    </section>
  )
}
