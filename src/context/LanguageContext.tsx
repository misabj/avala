import { createContext,useContext,useEffect,useMemo,useState,type ReactNode } from 'react'
import { en } from '../locales/en';import { sr } from '../locales/sr';import type { Copy,Lang } from '../locales/types'
type Value={lang:Lang;copy:Copy;setLang:(l:Lang)=>void}
const C=createContext<Value|null>(null)
export function LanguageProvider({children}:{children:ReactNode}){const [lang,setLang]=useState<Lang>(()=>localStorage.getItem('avala-language')==='sr'?'sr':'en');useEffect(()=>{localStorage.setItem('avala-language',lang);document.documentElement.lang=lang},[lang]);const value=useMemo(()=>({lang,copy:lang==='en'?en:sr,setLang}),[lang]);return <C.Provider value={value}>{children}</C.Provider>}
export function useLanguage(){const v=useContext(C);if(!v)throw new Error('LanguageProvider missing');return v}
