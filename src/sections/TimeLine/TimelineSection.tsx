import { Timeline } from '../../components/TimeLine/Timeline'
import { Image } from 'astro:assets'

export const TimelineSection = () => {
  const data = [
    {
      title: '2019',
      content: (
        <div>
          <p className="text-neutral-200 dark:text-neutral-800 text-xs md:text-sm font-normal mb-4">初识计算机:</p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">✅ Completed React certification</div>
          </div>
        </div>
      ),
    },
    {
      title: '2020',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Started learning web development and design</p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/images/learning-1.webp" alt="learning path" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]" />
            <img src="/assets/images/learning-2.webp" alt="learning path" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]" />
          </div>
        </div>
      ),
    },
    {
      title: '2021',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Started learning web development and design</p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/images/learning-1.webp" alt="learning path" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]" />
            <img src="/assets/images/learning-2.webp" alt="learning path" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]" />
          </div>
        </div>
      ),
    },
    {
      title: '2022',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Started learning web development and design</p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/images/learning-1.webp" alt="learning path" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]" />
            <img src="/assets/images/learning-2.webp" alt="learning path" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]" />
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Started learning web development and design</p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/images/learning-1.webp" alt="learning path" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]" />
            <img src="/assets/images/learning-2.webp" alt="learning path" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]" />
          </div>
        </div>
      ),
    },
    {
      title: '2024',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">Built and launched personal website from scratch</p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/assets/images/project-1.webp" alt="project template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]" />
            <img src="/assets/images/project-2.webp" alt="project template" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]" />
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}
