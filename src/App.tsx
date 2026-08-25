import {LanguageProvider} from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import {About,Brand,Detection,Dual,FinalCta,Gsp,Process,Services,VideoSection} from './components/Sections'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return <LanguageProvider><Header/><main><Hero/><Brand/><VideoSection/><About/><Services/><Detection/><Gsp/><Dual/><Process/><FinalCta/><Contact/></main><Footer/></LanguageProvider>
}
