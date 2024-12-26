export const Footer = () => {
  return (
    <footer className="py-24 bg-zinc-950">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src="/assets/images/logo.svg" alt="logo" className="size-[100px]" />
          </div>
          <nav className="hidden md:flex text-zinc-500 font-heading font-black  gap-12">
            <a href="">Home</a>
            <a href="">Blog</a>
            <a href="">Careers</a>
            <a href="">Contact</a>
          </nav>
        </div>

        <div className="mt-12 md:mt-48 md:flex justify-between items-center">
          <p className="text-zinc-400">&copy; 2024 Blockforge. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="size-[36px] rounded-full bg-zinc-700 flex items-center justify-center">
              <img src="/assets/images/github.svg" alt="github" className="size-[24px]" />
            </div>
            <div className="size-[36px] rounded-full bg-zinc-700 flex items-center justify-center">
              <img src="/assets/images/gitee.svg" alt="gitee" className="size-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
