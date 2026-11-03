import { motion, useReducedMotion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Navbar from './components/Navbar'
import SignalDesk from './components/SignalDesk'

const LINKEDIN = 'https://www.linkedin.com/in/siddhartha-goutam-ba7578376'
const GITHUB =  'https://github.com/goutamsidharth287'
const EMAIL = 'goutamsidharth287@gmail.com' 
const badges = ['React', 'TypeScript', 'JavaScript', 'CSS', 'Figma']
const skills: Record<string, string[]> = {
  Frontend: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  Design: ['Figma', 'Wireframing', 'Prototyping', 'Responsive Design', 'Design Systems', 'User-Centered Design'],
  'Backend & Tools': ['Java', 'SQL', 'Git', 'GitHub', 'REST APIs'] }
const principles = [['Clarity over complexity', 'Show what matters; hide the rest until it is needed.'],
  ['Consistency creates familiarity', 'Reuse patterns so people learn an interface once.'],
  ['Every interaction should have a purpose', 'If a hover, click or motion changes nothing, remove it.'],
  ['Design should solve real problems', 'Start from the user’s task, not the component library.']]
const journey = ['Dashboard', 'Account list', 'Account details', 'Intent signals', 'Recommended action']
const pains = ['Hard to spot high-intent accounts', 'Information overload', 'Poor visibility into engagement', 'Time-consuming account research']
const goals = ['Simplify account discovery', 'Improve information hierarchy', 'Make key signals visible', 'Reduce navigation', 'Support faster decisions']

const Wrap = ({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`mx-auto max-w-6xl px-5 py-20 ${className}`}>{children}</section>)
const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">{children}</h2>
const Card = ({ title, children, tag }: { title: string; children: React.ReactNode; tag?: string }) => (
  <article className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-slate-900/5">
    <div className="flex items-start justify-between gap-3"><h3 className="font-bold">{title}</h3>{tag && <span className="shrink-0 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-brand">{tag}</span>}</div>
    <div className="mt-2 text-sm leading-relaxed text-slate-600">{children}</div></article>)

export default function App() {
  const reduce = useReducedMotion()
  return (<>
    <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
    <Navbar />
    <main>
      <Wrap id="home" className="pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium text-slate-500">Frontend Engineer | React Developer | UI/UX Enthusiast</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">Design-minded engineer. Building experiences that matter.</h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">I’m Siddhartha Goutam, a frontend developer passionate about transforming complex ideas into intuitive, beautiful and functional digital experiences.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-brand">Explore my work</a>
              <a href="#contact" className="rounded-full border border-slate-300 px-6 py-3 font-semibold transition hover:border-ink">Let’s connect</a></div>
          </motion.div>
          <div className="relative rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-8 ring-1 ring-slate-200" aria-hidden="true">
            <div className="space-y-3 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100"><div className="h-3 w-1/3 rounded bg-slate-200"/><div className="h-20 rounded-xl bg-gradient-to-r from-brand/20 to-violet/30"/><div className="flex gap-3"><div className="h-12 flex-1 rounded-lg bg-slate-100"/><div className="h-12 flex-1 rounded-lg bg-slate-100"/></div></div>
            <div className="mt-5 flex flex-wrap gap-2">{badges.map((b, i) => (
              <motion.span key={b} animate={reduce ? {} : { y: [0, -5, 0] }} transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold shadow ring-1 ring-slate-200">{b}</motion.span>))}</div>
          </div></div>
      </Wrap>

      <Wrap id="about">
        <H2>Thoughtful design, backed by strong engineering.</H2>
        <div className="mt-8 grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 text-slate-600 lg:col-span-3">
            <p>I’m a Computer Science Engineering student interested in building digital products that combine thoughtful design with strong engineering.</p>
            <p>My interests lie at the intersection of frontend development, product design and user experience. I enjoy understanding how users interact with applications and translating those insights into intuitive interfaces.</p>
            <p>I believe great frontend development is not just about making things work; it’s about making them simple, accessible and enjoyable to use.</p></div>
          <ul className="flex flex-wrap content-start gap-2 lg:col-span-2">{['Frontend Engineering', 'Product Design', 'UI/UX', 'Design Systems', 'Interactive Interfaces'].map(t => (
            <li key={t} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium">{t}</li>))}</ul></div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">{Object.entries(skills).map(([k, v]) => (
          <Card key={k} title={k}><ul className="flex flex-wrap gap-1.5">{v.map(s => <li key={s} className="rounded-md bg-paper px-2.5 py-1 text-xs font-medium text-ink">{s}</li>)}</ul></Card>))}</div>
      </Wrap>

      <Wrap id="work">
        <H2>SignalDesk: turning complex account signals into smarter business decisions.</H2>
        <p className="mt-4 max-w-2xl text-slate-600">A conceptual B2B SaaS dashboard that helps sales and marketing teams identify high-intent accounts, understand engagement and prioritize opportunities. It runs on local mock data; search, filter, sort, paginate and select an account below.</p>
        <div className="mt-8"><SignalDesk /></div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">{['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Framer Motion'].map(t => <span key={t} className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-brand">{t}</span>)}
          <a href="#" className="ml-auto font-semibold text-brand underline">Source code (add repo link)</a></div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Card title="SAP Workforce Fatigue Management" tag="Implemented">A web application for managing workforce information and monitoring fatigue-related data. Built with SAP UI5 / Fiori: forms, data management and CRUD operations.</Card>
          <Card title="MedKey" tag="Concept">A conceptual medical information management app that organizes patient records and makes key information accessible through QR-based identification. Focus: healthcare technology and information organization.</Card></div>
      </Wrap>

      <Wrap id="process">
        <H2>How I designed SignalDesk.</H2>
        <p className="mt-4 max-w-2xl text-slate-600">This case study reflects my own product thinking. No formal user research or usability testing has been done yet.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card title="Problem">Sales teams struggle to prioritize potential customers because information is scattered and there’s too much of it.</Card>
          <Card title="Audience">Sales representatives, marketing managers and business development teams.</Card>
          <Card title="Pain points"><ul className="list-disc pl-4">{pains.map(p => <li key={p}>{p}</li>)}</ul></Card>
          <Card title="Design goals"><ul className="list-disc pl-4">{goals.map(p => <li key={p}>{p}</li>)}</ul></Card>
          <Card title="Key decisions">The table and detail panel share one screen so reps never lose context. Status uses color plus a text label for accessibility. One recommended action per account keeps the next step obvious.</Card>
          <Card title="Next steps">Backend integration, real-time data, user testing and advanced personalization.</Card></div>
        <ol className="mt-10 flex flex-col gap-3 md:flex-row md:items-center" aria-label="User journey">{journey.map((j, i) => (
          <li key={j} className="flex items-center gap-3"><span className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">{j}</span>{i < journey.length - 1 && <span className="hidden text-slate-400 md:inline" aria-hidden="true">→</span>}</li>))}</ol>
        <div className="mt-20"><H2>Good design isn’t just how it looks. It’s how naturally it works.</H2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">{principles.map(([t, d]) => <Card key={t} title={t}>{d}</Card>)}</div></div>
      </Wrap>

      <Wrap id="contact">
        <div className="rounded-3xl bg-ink p-10 text-white sm:p-16">
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">Have an interesting idea? Let’s build something meaningful.</h2>
          <div className="mt-8 flex flex-wrap gap-3">{[[Mail, 'Email', EMAIL], [Linkedin, 'LinkedIn', LINKEDIN], [Github, 'GitHub', GITHUB]].map(([Icon, l, h]) => {
            const I = Icon as typeof Mail; return <a key={l as string} href={h as string} className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold transition hover:bg-white/20"><I className="h-4 w-4" />{l as string}</a> })}</div></div>
      </Wrap>
    </main>
    <footer className="py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Siddhartha Goutam</footer>
  </>)
}
