import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'
const items = [['home','Home'],['about','About'],['work','Work'],['process','Design Process'],['contact','Contact']] as const
const ids = items.map(i => i[0]) as string[]
export default function Navbar() {
  const active = useActiveSection(ids); const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-paper/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-extrabold tracking-tight">Siddhartha Goutam</a>
        <ul className="hidden gap-1 md:flex">{items.map(([id, l]) => (
          <li key={id}><a href={`#${id}`} aria-current={active === id ? 'true' : undefined}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${active === id ? 'bg-ink text-white' : 'text-slate-600 hover:text-ink'}`}>{l}</a></li>))}</ul>
        <button className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <ul className="border-t border-slate-200 bg-paper px-5 py-2 md:hidden">{items.map(([id, l]) => (
        <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 font-medium">{l}</a></li>))}</ul>}
    </header>)
}
