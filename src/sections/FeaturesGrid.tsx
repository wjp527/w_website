// 引入切口按钮
import { CutCornerButton } from '../components/CutCornerButton'
import { TextButton } from '../components/TextButton'
const listItems = ["Whether you're animating UI, SVG or creating immersive WebGL experiences, GSAP has your back.", 'Nice and Easy Easings', 'Add personality to your animations with a huge variety of super plug and play eases or build your own custom curves.']
export const FeaturesGrid = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container  ">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-[328px]">
          <div>
            {/* 
              gap-8: 设置网格项之间的间距
            */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
              <div className="col-span-2">
                <h2 className="text-4xl font-heading font-bold my-4 md:text-5xl lg:text-6xl">Animate anything JS can touch.</h2>
                <p className="text-xl lg:text-2xl text-zinc-400 mb-8">GSAP allows you to effortlessly animate anything JS can touch. Delivering silky-smooth performance and unmatched support so you can focus on the fun stuff.</p>

                <ul className="flex flex-col gap-8">
                  {listItems.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center gap-3">
                        {/* 
                    flex-shrink-0:防止元素在 flex 容器中被压缩,保持固定大小
                  */}
                        <div className="size-8 outline outline-2  outline-fuchsia-500/50 rounded-full inline-flex flex-shrink-0 items-center justify-center">
                          <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                        </div>
                        <span className="text-lg font-bold">{item}</span>
                      </li>
                    )
                  })}
                </ul>

                <div className="flex justify-between items-center mt-12 gap-8">
                  <CutCornerButton className="inline-flex" children="Get Started" />

                  <TextButton color="fuchsia">Click here</TextButton>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative z-0 inline-flex items-center justify-center">
                  <img className="size-96 max-w-none" src="../../public/assets/images/torus-knot.png" alt="" />
                  {/* 
                      scale-x-[-1]: 水平翻转
                  */}
                  <img className="absolute top-3/4 -z-10 scale-x-[-1]" src="../../public/assets/images/hemisphere.png" alt="" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-40">
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute right-0 rotate-12 z-0">
                    <img className="size-96 max-w-none" src="../../public/assets/images/cone.png" alt="" />
                    <img className="absolute top-3/4 -z-10" src="../../public/assets/images/hemisphere.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex flex-col justify-center">
                <h2 className="font-heading text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">Blockforge leads the way.</h2>
                <p className="text-xl text-zinc-400 mb-8">GSAP is the most powerful and flexible animation library on the planet. It's used by over 1,000,000 developers and 100,000 companies to create stunning animations.</p>
                <p className="text-xl text-zinc-400 mb-8">Blockforge charts the course for the future of animation.</p>

                <div className="flex justify-between items-center mt-12 gap-8">
                  <CutCornerButton className="inline-flex" children="Get Started" />

                  <TextButton color="fuchsia">Click here</TextButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
