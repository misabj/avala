export default function Logo({compact=false}:{compact?:boolean}) {
  return <span className={`brand-lockup ${compact?'brand-lockup--compact':''}`} aria-hidden="true">
    <span className="brand-lockup__name">AVΛLΛ</span>
    <span className="brand-lockup__descriptor">POLICE DOGS</span>
  </span>
}
