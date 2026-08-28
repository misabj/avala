import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { ButtonLink, Feature, Heading, fade } from './ui'

const serviceImages = [
  { src: '/images/proba%20samo.00_01_24_05.Still002.jpg', alt: 'Working dog completing an obstacle with its handler' },
  { src: '/images/pas.jpg', alt: 'Handler directing a dog during professional working-dog training' },
]

export function Brand() {
  const { copy } = useLanguage()
  return <section id="brand" className="section-pad bg-paper"><motion.div {...fade}><p className="max-w-5xl text-[clamp(2.7rem,6vw,6.5rem)] font-semibold leading-[.98] tracking-[-.06em]">{copy.slogan[0]}<br /><span className="text-olive">{copy.slogan[1]}</span></p></motion.div></section>
}

export function VideoSection() {
  return <section aria-label="AVALA Police Dogs video" className="bg-paper px-5 pb-20 md:px-10 md:pb-28"><motion.div {...fade} className="mx-auto aspect-video max-w-[1280px] overflow-hidden bg-ink shadow-[0_28px_90px_rgba(20,30,24,.16)]"><iframe title="AVALA Police Dogs" src="https://player.vimeo.com/video/896977672?h=9a05bfd76d&title=0&byline=0&portrait=0" className="h-full w-full border-0" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" allowFullScreen /></motion.div></section>
}

export function About() {
  const { copy } = useLanguage()
  return <section id="about" className="bg-white"><div className="section-pad grid gap-14 lg:grid-cols-2 lg:items-start"><div><Heading eye={copy.about.eye} title={copy.about.title} /><div className="mt-10 space-y-5">{copy.about.p.map(text => <motion.p {...fade} key={text} className="body-lg">{text}</motion.p>)}</div></div><motion.figure {...fade} className="overflow-hidden bg-ink lg:sticky lg:top-28"><img src="/images/pas1.jpg" alt="AVALA handler directing a working dog during training" className="aspect-video w-full object-cover object-center" loading="lazy" /></motion.figure></div></section>
}

export function Services() {
  const { copy } = useLanguage()
  return <section id="services" className="section-pad bg-paper"><Heading eye={copy.services.eye} title={copy.services.title} /><motion.div {...fade} className="mt-8 max-w-3xl space-y-5"><p className="body-lg">{copy.services.p}</p><p className="body-lg">{copy.services.quality}</p></motion.div><div className="mt-14 grid gap-5 lg:grid-cols-2">{copy.services.cards.map(([num, title, desc, cta], index) => <a key={title} href={index ? '#dual-purpose' : '#detection'} className="media-card group overflow-hidden bg-ink text-white"><div className="aspect-video overflow-hidden"><img src={serviceImages[index].src} alt={serviceImages[index].alt} className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]" loading="lazy" /></div><div className="p-7 md:p-10"><span className="text-xs font-bold tracking-[.2em] text-sand">{num}</span><h3 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-white/70">{desc}</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.13em] text-sand">{cta}<ArrowUpRight size={16} /></span></div></a>)}</div></section>
}

export function Detection() {
  const { copy } = useLanguage()
  return <section id="detection" className="bg-white"><div className="section-pad"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Heading eye={copy.detection.eye} title={copy.detection.title} /><div>{copy.detection.p.map(text => <p key={text} className="body-lg mb-5">{text}</p>)}</div></div><h3 className="mt-20 text-xl font-semibold">{copy.detection.sub}</h3><ul className="mt-5 grid gap-x-9 md:grid-cols-2 lg:grid-cols-3">{copy.detection.items.map(item => <Feature key={item}>{item}</Feature>)}</ul><motion.p {...fade} className="mt-14 max-w-4xl border-l-4 border-sand pl-7 text-2xl font-medium leading-snug md:text-3xl">{copy.detection.final}</motion.p></div></section>
}

export function Gsp() {
  const { copy } = useLanguage()
  return <section className="grid bg-paper lg:grid-cols-[1.1fr_.9fr]"><div className="relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-[640px]"><img src="/images/proba%20samo.00_02_02_13.Still003.jpg" alt="Working dog moving with focus during detection training" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" /><div className="absolute bottom-0 right-0 bg-sand p-5 text-ink md:p-8"><strong className="block text-4xl tracking-[-.06em] md:text-7xl">95%+</strong><span className="mt-1 block max-w-40 text-[.6rem] font-bold uppercase tracking-[.14em] md:mt-2 md:text-xs">{copy.gsp.stat}</span></div></div><div className="section-pad !mx-0 !max-w-none flex flex-col justify-center"><Heading eye={copy.gsp.eye} title={copy.gsp.title} /><div className="mt-10 space-y-5">{copy.gsp.p.map(text => <p className="body-lg" key={text}>{text}</p>)}</div></div></section>
}

export function Dual() {
  const { copy } = useLanguage()
  return <section id="dual-purpose" className="relative overflow-hidden bg-ink text-white"><div className="relative aspect-video overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%] lg:aspect-auto"><img src="/images/proba%20samo.00_01_02_10.Still011.jpg" alt="Controlled professional working-dog training with a handler" className="h-full w-full object-cover object-center opacity-90 lg:opacity-50" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/45 lg:to-transparent" /></div><div className="section-pad relative z-10"><div className="max-w-3xl"><Heading eye={copy.dual.eye} title={copy.dual.title} light />{copy.dual.p.map(text => <p className="mt-6 max-w-2xl text-base leading-8 text-white/65" key={text}>{text}</p>)}</div><h3 className="mt-16 text-xl font-semibold">{copy.dual.sub}</h3><ul className="mt-5 grid max-w-5xl gap-x-9 md:grid-cols-2 lg:grid-cols-3">{copy.dual.items.map(item => <Feature key={item}>{item}</Feature>)}</ul><p className="mt-12 max-w-3xl border-l-2 border-sand pl-6 text-lg leading-8 text-white/75">{copy.dual.final}</p></div></section>
}

export function Process() {
  const { copy } = useLanguage()
  return <section className="section-pad bg-paper"><Heading eye={copy.process.eye} title={copy.process.title} /><ol className="mt-16 grid lg:grid-cols-5">{copy.process.steps.map(([title, desc], index) => <motion.li {...fade} key={title} className="relative border-l border-olive/40 py-1 pb-10 pl-7 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-7 lg:pt-8"><span className="absolute -left-[5px] top-0 h-[9px] w-[9px] bg-olive lg:-top-[5px] lg:left-0" /><span className="text-xs font-bold tracking-[.18em] text-olive">{String(index + 1).padStart(2, '0')}</span><h3 className="mt-3 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{desc}</p></motion.li>)}</ol></section>
}

export function FinalCta() {
  const { copy } = useLanguage()
  return <section className="relative overflow-hidden bg-forest px-5 py-24 text-center text-white md:py-32"><div className="absolute inset-0 fine-grid" /><motion.div {...fade} className="relative mx-auto max-w-5xl"><h2 className="section-title">{copy.slogan[0]}<br /><span className="text-sand">{copy.slogan[1]}</span></h2><p className="mx-auto mt-6 max-w-2xl text-white/65">{copy.cta.text}</p><div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><ButtonLink href="#contact" light>{copy.cta.button}</ButtonLink><a href="tel:+381641855765" className="px-6 py-3 text-sm font-bold text-white underline decoration-white/25 underline-offset-8">{copy.cta.call}</a></div></motion.div></section>
}
