"use client"

import React from 'react'
// import Image from 'next/image' 
// import githubUser from "@/public/githubuser.png"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Footer() {

  const router = useRouter()

  function handletoemail(){
    const email = "your-email@example.com";
    
    window.location.href = `mailto:${email}`
  }

  return (
    // <div className='px-48 pt-10 xs:px-10 xs:py-18 xs:text-base md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-2xl 4xl:text-2xl 5xl:text-3xl 6xl:text-4xl sm:py-20 sm:px-8 sm:text-lg md:px-24 lg:px-36 xl:px-40 2xl:px-72 3xl:pr-[26rem] 4xl:pl-[38rem] 4xl:pr-[38rem] 5xl:pl-[61rem] 5xl:pr-[61rem] 6xl:pl-[60rem] 6xl:pr-[60rem] 7xl:pl-[80rem] 7xl:pr-[80rem]'>
    //   <p className='text-center opacity-50 leading-6'>Always open to learn, {"Let's"} have a quick Chat.</p>

    //   <div className='flex justify-center items-center gap-5 xs:py-4 sm:py-4 md:py-4 lg:py-4 xl:py-6 2xl:py-7 3xl:py-8 4xl:py-8'>
    //         <p className='hover:text-cyan-500 cursor-pointer' onClick={() => router.push("/")}>Home</p>
    //         <p className='hover:text-cyan-500 cursor-pointer' onClick={() => router.push("/about")}>About</p>
    //         <p className='hover:text-cyan-500 cursor-pointer' onClick={() => router.push("/projects")}>Project</p>
    //         <p className='hover:text-cyan-500 cursor-pointer' onClick={() => router.push("/blog")}>Blog</p>
    //   </div>

    //   <div className='flex justify-center items-center gap-4 pt-5'>
    //     <Image src={githubUser} alt='User Profile' className='cursor-pointer hover:grayscale w-6 rounded-[50%] xs:w-10 sm:w-12 md:w-14 lg:w-14 xl:w-14 2xl:w-16 3xl:w-14 4xl:w-14 5xl:w-16 6xl:w-16'/>
    //     <p className='font-semibold xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl 3xl:text-3xl 4xl:text-3xl 5xl:text-3xl 6xl:text-4xl'>Manish Sharma</p>
    //   </div>

    //   <div className='flex gap-7 items-center justify-center pt-6 py-6 xs:py-8 sm:py-10 md:py-10 lg:py-10 xl:py-10 2xl:py-10 3xl:py-10 4xl:py-10 5xl:py-10 6xl:py-10'>
    //     <Mail className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 3xl:w-8 3xl:h-8 2xl:w-8 2xl:h-8  4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9 6xl:w-10 6xl:h-10' width={15} height={15} onClick={handletoemail}/>
    //     <GitHubLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 3xl:w-8 3xl:h-8 2xl:w-8 2xl:h-8  4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9 6xl:w-10 6xl:h-10' width={15} height={15} onClick={() => router.push('https://github.com/manishSharma1-dev')}/>
    //     <TwitterLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 3xl:w-8 3xl:h-8 2xl:w-8 2xl:h-8  4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9 6xl:w-10 6xl:h-10' width={15} height={15} onClick={() => router.push('https://x.com/Manish1_sh')}/>
    //     <LinkedInLogoIcon className='text-[18px] cursor-pointer hover:opacity-80 hover:text-cyan-400 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 3xl:w-8 3xl:h-8 2xl:w-8 2xl:h-8  4xl:w-8 4xl:h-8 5xl:w-9 5xl:h-9 6xl:w-10 6xl:h-10' width={15} height={15} onClick={() => router.push('https:///www.linkedin.com/in/manish-sharma111')}/>
    //   </div>
    // </div>

    <footer className='relative overflow-hidden border-t border-white/[0.04] px-48 pt-20 pb-8 xs:px-6 sm:px-8 md:px-48 lg:px-40 xl:px-24 2xl:px-32 3xl:px-40'>

  {/* Big background name */}
  <p className='pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 text-[80px] xs:text-[60px] sm:text-[100px] lg:text-[140px] font-black text-white/[0.03] tracking-tighter whitespace-nowrap'>
    MANISH
  </p>

  {/* Top row */}
  <div className='flex justify-between items-start gap-6 mb-12 xs:flex-col sm:flex-row'>
    <div className='flex flex-col gap-1'>
      <p className='font-semibold text-white text-base xs:text-lg sm:text-xl md:text-2xl'>Manish Sharma</p>
      <p className='text-[11px] sm:text-xs text-white/30 tracking-widest uppercase flex items-center gap-2'>
        <span className='w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] animate-pulse inline-block' />
        Open to work · Delhi NCR
      </p>
    </div>
    <nav className='flex gap-6 items-center pt-1'>
      {/* {['Home', 'Projects', 'About'].map(p => ( */}
      {['Home', 'About'].map(p => (
        <p
          key={p}
          onClick={() => router.push(p === 'Home' ? '/' : `/${p.toLowerCase()}`)}
          className='text-[12px] uppercase tracking-widest text-white/60 hover:text-cyan-400 cursor-pointer transition-colors duration-200'
        >
          {p}
        </p>
      ))}
    </nav>
  </div>

  {/* CTA line */}
  <p className='text-sm sm:text-base md:text-lg text-white/25'>
    Always open to learn —{' '}
    <span className='text-cyan-400'>{"Let's have a quick chat."}</span>
  </p>

  {/* Bottom row */}
  <div className='flex justify-between items-center mt-8 pt-6 border-t border-white/[0.05] xs:flex-col xs:gap-4 sm:flex-row'>
    <p className='text-[11px] text-white/30'>© 2026 Manish Sharma</p>
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
          className='w-8 h-8 flex items-center justify-center border border-white/10 rounded-lg text-white/50 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-200'
        >
          {item.icon}
        </button>
      ))}
    </div>
  </div>

</footer>
  ) 
}
