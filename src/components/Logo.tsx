export default function Logo({compact=false}:{compact?:boolean}) {
  return <img
    src="/images/avala-logo.png"
    alt="AVALA Police Dogs"
    width={1177}
    height={393}
    className={`brand-logo ${compact?'brand-logo--compact':''}`}
  />
}
