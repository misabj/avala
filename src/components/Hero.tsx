import {ArrowDown} from 'lucide-react'
import {motion,useReducedMotion} from 'framer-motion'
import {useLanguage} from '../context/LanguageContext'
import {ButtonLink} from './ui'

export default function Hero(){
  const {copy}=useLanguage()
  const reduceMotion=useReducedMotion()

  return <section id="home" className="relative overflow-hidden bg-ink text-white lg:flex lg:min-h-screen lg:items-stretch">
    <div className="relative mt-20 aspect-video w-full overflow-hidden lg:absolute lg:inset-0 lg:mt-0 lg:aspect-auto">
      <img src="/images/slider.jpg" alt="Professional working-dog training at AVALA Police Dogs" className="h-full w-full object-cover object-center"/>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-black/35 lg:bg-[linear-gradient(90deg,rgba(8,12,10,.92)_0%,rgba(8,12,10,.75)_13%,rgba(8,12,10,.46)_25%,rgba(8,12,10,.16)_43%,rgba(8,12,10,.06)_100%)]"/>
      <div className="absolute inset-0 hidden bg-gradient-to-t from-ink/75 via-transparent to-black/20 lg:block"/>
    </div>

    <div className="relative z-10 w-full px-5 pb-8 pt-9 md:px-10 lg:flex lg:min-h-screen lg:flex-col lg:px-12 lg:pb-12 lg:pt-36 xl:px-16 2xl:px-12">
      <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="max-w-xl lg:mt-auto lg:max-w-[360px] lg:drop-shadow-[0_3px_18px_rgba(0,0,0,.55)]">
        <p className="eyebrow mb-5 !text-sand">{copy.hero.eyebrow}</p>
        <h1 className="text-[clamp(2.7rem,10.5vw,4rem)] font-bold leading-[.93] tracking-[-.06em] lg:text-[clamp(3.1rem,3vw,3.5rem)]">{copy.hero.title[0]}<br/><span className="text-sand">{copy.hero.title[1]}</span></h1>
        <p className="mt-6 max-w-[340px] text-base font-medium leading-relaxed text-white/85">{copy.hero.lead}</p>
        <div className="mt-7 hidden flex-col gap-3 sm:flex sm:flex-row lg:items-start lg:flex-col"><ButtonLink href="#services" light>{copy.hero.primary}</ButtonLink><a href="#contact" className="inline-flex min-h-12 items-center justify-center border border-white/35 px-6 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-ink">{copy.hero.secondary}</a></div>
        <motion.a href="#brand" aria-label={copy.hero.scroll} animate={reduceMotion?undefined:{y:[0,7,0]}} transition={{duration:1.8,repeat:Infinity,ease:'easeInOut'}} className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-sand transition hover:border-sand hover:bg-sand hover:text-ink sm:hidden"><ArrowDown size={17}/></motion.a>
      </motion.div>

      <div className="mt-8 flex items-end justify-between border-t border-white/15 pt-5">
        <p className="max-w-[260px] text-[.62rem] font-bold uppercase tracking-[.2em] text-white/65 sm:max-w-none sm:text-[.68rem] sm:tracking-[.22em]">{copy.slogan.join(' ')}</p>
        <a href="#brand" className="hidden items-center gap-3 text-[.65rem] uppercase tracking-[.18em] text-white/60 sm:flex">{copy.hero.scroll}<ArrowDown size={15}/></a>
      </div>
    </div>
  </section>
}
