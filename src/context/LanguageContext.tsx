import {createContext,useContext,type ReactNode} from 'react'
import {en} from '../locales/en'
import type {Copy} from '../locales/types'

type Value={copy:Copy}
const LanguageContext=createContext<Value|null>(null)
const englishCopy={copy:en}

export function LanguageProvider({children}:{children:ReactNode}){
  return <LanguageContext.Provider value={englishCopy}>{children}</LanguageContext.Provider>
}

export function useLanguage(){
  const value=useContext(LanguageContext)
  if(!value)throw new Error('LanguageProvider missing')
  return value
}
