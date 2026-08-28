import {Users} from 'lucide-react'
import {useLanguage} from '../context/LanguageContext'
import {MapLink} from './GoogleMap'
import InstagramIcon from './InstagramIcon'
import Logo from './Logo'

export default function Footer(){
  const {copy}=useLanguage()
  const links=[[copy.nav.home,'#home'],[copy.nav.about,'#about'],[copy.nav.detection,'#detection'],[copy.nav.dual,'#dual-purpose'],[copy.nav.contact,'#contact']]

  return <footer className="bg-ink px-5 py-14 text-white md:px-10"><div className="mx-auto grid max-w-[1360px] gap-12 md:grid-cols-3"><div><Logo/><p className="mt-5 max-w-xs text-sm leading-6 text-white/50">{copy.slogan.join(' ')}</p></div><nav className="grid grid-cols-2 gap-3 text-sm text-white/60">{links.map(([label,href])=><a key={href} href={href} className="hover:text-white">{label}</a>)}</nav><div className="text-sm text-white/60"><a href="tel:+381641855765" className="block hover:text-white">+381 64 185 5765</a><a href="mailto:info@avalapolicedogs.com" className="mt-2 block hover:text-white">info@avalapolicedogs.com</a><MapLink className="mt-2 block hover:text-white">Belgrade, Serbia</MapLink><div className="mt-5 flex items-center gap-4"><a href="https://www.instagram.com/avala_police_dogs_k9_serbia/" target="_blank" rel="noreferrer" aria-label="Avala Police Dogs K9 Serbia on Instagram" className="inline-flex items-center gap-2 transition hover:text-white"><InstagramIcon size={18}/><span>Avala Police Dogs · K9 Serbia</span></a><a href="#" aria-label="Facebook" className="transition hover:text-white"><Users size={18}/></a></div></div></div><div className="mx-auto mt-14 flex max-w-[1360px] flex-col gap-2 border-t border-white/10 pt-6 text-[.68rem] uppercase tracking-[.12em] text-white/35 sm:flex-row sm:justify-between"><p>{copy.footer.rights}</p><p>{copy.footer.region}</p></div></footer>
}
