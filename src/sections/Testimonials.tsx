import { twMerge } from 'tailwind-merge'

const testimonials = [
  {
    id: 0,
    content: 'The user experience is phenomenal, and the support is top-notch. I highly recommend this product!',
    name: 'Erica Wyatt',
    title: 'Product Manager',
    avatarImage: '/assets/images/avatar-cameron-yang.jpg',
  },
  {
    id: 1,
    content: 'The user experience is phenomenal, and the support is top-notch. I highly recommend this product!',
    name: 'Erica Wyatt',
    title: 'Product Manager',
    avatarImage: '/assets/images/avatar-erica-wyatt.jpg',
  },
  {
    id: 2,
    content: 'The user experience is phenomenal, and the support is top-notch. I highly recommend this product!',
    name: 'Erica Wyatt',
    title: 'Product Manager',
    avatarImage: '/assets/images/avatar-harry-bender.jpg',
  },
]

export const Testimonials = () => {
  return (
    <section className="py-20 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map((_, index) => (
            <div>
              {/* 
              blockquote: 引用
              cite: 引用来源
            */}
              <blockquote key={_.id} className={twMerge(index === 2 && 'md:hidden lg:block')}>
                <p className="font-heading text-3xl lg:text-4xl font-black">&ldquo;{_.content}&rdquo;</p>
                <cite className="mt-8 block">
                  <div className="flex gap-3 items-center">
                    <div>
                      <div
                        className="size-16 bg-zinc-700 rounded-full"
                        style={{
                          backgroundImage: `url(${_.avatarImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                      ></div>
                    </div>
                    <div>
                      <div className="text-lg not-italic font-black">{_.name}</div>
                      <div className="text-zinc-400 not-italic">{_.title}</div>
                    </div>
                  </div>
                </cite>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}