'use client'
import React from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import githubUser from "@/public/manish1.jpeg"
import { Mail } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Page() {

  const router = useRouter()

  function handletoemail(){
    const email = "your-email@example.com";
    
    window.location.href = `mailto:${email}`
  }

  return (    
    <div className="bg-black min-h-screen text-white py-10 xs:px-10 sm:px-12 md:px-24 lg:px-36 xl:px-40 2xl:px-72 3xl:pl-[26rem] 3xl:pr-[26rem] 4xl:pl-[38rem] 4xl:pr-[38rem] 5xl:pl-[50rem] 5xl:pr-[50rem] 6xl:pl-[60rem] 6xl:pr-[60rem] 7xl:pl-[80rem] 7xl:pr-[80rem]">

  <div className='flex flex-col gap-16'>

    {/* Top — image + social */}
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1 w-fit'>
        <Image
          src={githubUser}
          alt='Manish Sharma'
          className='rounded-lg object-cover
            w-40 h-40
            xs:w-40 xs:h-40
            sm:w-52 sm:h-52
            md:w-56 md:h-56
            lg:w-60 lg:h-60
            xl:w-64 xl:h-64
            2xl:w-72 2xl:h-72
            5xl:w-80 5xl:h-80'
        />
        <p className='bg-cyan-400 w-full h-[2px] mt-1' />
        <p className='bg-cyan-400 w-1/2 mt-1 h-[0.8px]' />
        <p className='bg-cyan-400 w-1/4 mt-1 h-[0.7px]' />
      </div>

      <div className='flex items-center gap-3'>
        {[
          { icon: <Mail className='w-4 h-4 sm:w-5 sm:h-5' />, action: handletoemail },
          { icon: <GitHubLogoIcon className='w-4 h-4 sm:w-5 sm:h-5' />, action: () => router.push('https://github.com/trydevemanish') },
          { icon: <TwitterLogoIcon className='w-4 h-4 sm:w-5 sm:h-5' />, action: () => router.push('https://x.com/Manish1_sh') },
          { icon: <LinkedInLogoIcon className='w-4 h-4 sm:w-5 sm:h-5' />, action: () => router.push('https://www.linkedin.com/in/manish-sharma111') },
        ].map((item, i) => (
          <button
            key={i}
            onClick={item.action}
            className='w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-white/10 rounded-lg text-white/30 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-200'
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>

    {/* Bio */}
    <div className='flex flex-col gap-10'>

      {/* Name + status */}
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-semibold tracking-tight'>
          Manish Sharma
        </h1>
        <p className='text-xs sm:text-sm text-white/30 uppercase tracking-widest flex items-center gap-2'>
          <span className='w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse inline-block' />
          Final year CS · Open to SDE roles · Available for freelance
        </p>
      </div>

      {/* About paragraphs */}
      <div className='flex flex-col gap-6 text-white/50 leading-relaxed
        text-sm xs:text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-xl 5xl:text-2xl 6xl:text-3xl'>

        <p>
          {"I'm"} a full-stack developer who has shipped production apps across web and mobile —
          from a{' '}
          <span className='text-white/80'>real-time multiplayer chess platform</span>
          {' '}to an{' '}
          <span className='text-white/80'>AI-powered food tracking app.</span>
          {' '}I work across the full stack with React, Next.js, Node.js, Django, and PostgreSQL,
          and I care about building things that actually work, not just look good in a README.
        </p>

        <p>
          {"I've"} just given my final year exams and {"I'm"} actively looking for an{' '}
          <span className='text-cyan-400'>SDE or full-stack developer role.</span>
          {' '}{"I'm"} also open to freelance projects — {"I've"} already built and deployed
          a client project using React, Express.js, MongoDB, and Nginx on Hostinger.
        </p>

        <p>
          When {"I'm"} not coding {"I'm"} on the basketball court or going down a YouTube rabbit hole on some new tech.
        </p>

      </div>

      {/* Tags */}
      <div className='flex flex-wrap gap-2'>
        {['React', 'Next.js', 'Node.js', 'Django', 'PostgreSQL', 'TypeScript', 'WebSocket', 'React Native'].map(tag => (
          <span
            key={tag}
            className='text-[10px] sm:text-xs text-cyan-400 border border-cyan-400/20 rounded-full px-3 py-1 uppercase tracking-widest'
          >
            {tag}
          </span>
        ))}
      </div>

    </div>

    {/* Footer */}
    <footer className='relative overflow-hidden border-t border-white/[0.04] pt-16 pb-8'>

      <p className='pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 text-[80px] sm:text-[100px] lg:text-[140px] font-black text-white/[0.03] tracking-tighter whitespace-nowrap'>
        MANISH
      </p>

      <div className='flex justify-between items-start gap-6 mb-12 xs:flex-col sm:flex-row'>
        <div className='flex flex-col gap-1'>
          <p className='font-semibold text-white text-base sm:text-xl md:text-2xl'>Manish Sharma</p>
          <p className='text-[11px] sm:text-xs text-white/30 tracking-widest uppercase flex items-center gap-2'>
            <span className='w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse inline-block' />
            Open to work · Delhi NCR
          </p>
        </div>
        <nav className='flex gap-6 items-center pt-1'>
          {[['Home', '/'], ['Projects', '/projects'], ['About', '/about']].map(([label, path]) => (
            <p
              key={label}
              onClick={() => router.push(path)}
              className='text-[11px] uppercase tracking-widest text-white/30 hover:text-cyan-400 cursor-pointer transition-colors duration-200'
            >
              {label}
            </p>
          ))}
        </nav>
      </div>

      <p className='text-sm sm:text-base text-white/25'>
        Always open to learn —{' '}
        <span className='text-cyan-400'>{"Let's have a quick chat."}</span>
      </p>

      <div className='flex justify-between items-center mt-8 pt-6 border-t border-white/[0.05] xs:flex-col xs:gap-4 sm:flex-row'>
        <p className='text-[11px] text-white/15'>© 2026 Manish Sharma</p>
        <div className='flex items-center gap-3'>
          {[
            { icon: <Mail className='w-3.5 h-3.5' />, action: handletoemail },
            { icon: <GitHubLogoIcon className='w-3.5 h-3.5' />, action: () => router.push('https://github.com/trydevemanish') },
            { icon: <TwitterLogoIcon className='w-3.5 h-3.5' />, action: () => router.push('https://x.com/Manish1_sh') },
            { icon: <LinkedInLogoIcon className='w-3.5 h-3.5' />, action: () => router.push('https://www.linkedin.com/in/manish-sharma111') },
          ].map((item, i) => (
            <button
              key={i}
              onClick={item.action}
              className='w-8 h-8 flex items-center justify-center border border-white/10 rounded-lg text-white/30 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-200'
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>

    </footer>

  </div>
</div>
  )
}