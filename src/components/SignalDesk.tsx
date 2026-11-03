import { useMemo, useState } from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Search, Sparkles } from 'lucide-react'
import { accounts, trend } from '../data/accounts'
import type { Account, Status } from '../types'
const tone: Record<Status, string> = { Hot: 'bg-rose-50 text-rose-700', Warm: 'bg-amber-50 text-amber-700', Cold: 'bg-slate-100 text-slate-600' }
const PAGE = 6
export default function SignalDesk() {
  const [q, setQ] = useState(''); const [ind, setInd] = useState('All'); const [desc, setDesc] = useState(true)
  const [page, setPage] = useState(0); const [sel, setSel] = useState<Account>(accounts[0])
  const industries = ['All', ...Array.from(new Set(accounts.map(a => a.industry)))]
  const rows = useMemo(() => accounts.filter(a => (ind === 'All' || a.industry === ind) && a.name.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => (desc ? b.intent - a.intent : a.intent - b.intent)), [q, ind, desc])
  const pages = Math.max(1, Math.ceil(rows.length / PAGE)); const view = rows.slice(page * PAGE, page * PAGE + PAGE)
  const stats: [string, string | number][] = [['Accounts', accounts.length], ['High intent', accounts.filter(a => a.status === 'Hot').length],
    ['Pipeline', `$${accounts.reduce((s, a) => s + a.pipeline, 0)}k`], ['Engagement', '83%']]
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5 sm:p-6" aria-label="SignalDesk interactive demo">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{stats.map(([l, v]) => (
        <div key={l} className="rounded-xl bg-paper p-4"><p className="text-xs text-slate-500">{l}</p><p className="text-2xl font-bold">{v}</p></div>))}</div>
      <div className="mt-4 h-40 rounded-xl bg-paper p-3"><ResponsiveContainer width="100%" height="100%"><AreaChart data={trend}>
        <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6D4AE8" stopOpacity={0.35}/><stop offset="100%" stopColor="#6D4AE8" stopOpacity={0}/></linearGradient></defs>
        <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12}/><YAxis hide domain={[0, 100]}/><Tooltip/>
        <Area dataKey="engagement" stroke="#6D4AE8" strokeWidth={2} fill="url(#g)"/></AreaChart></ResponsiveContainer></div>
      <div className="mt-4 grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="flex flex-wrap gap-2">
            <label className="relative flex-1"><span className="sr-only">Search accounts</span><Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400"/>
              <input value={q} onChange={e => { setQ(e.target.value); setPage(0) }} placeholder="Search accounts" className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm"/></label>
            <select aria-label="Industry" value={ind} onChange={e => { setInd(e.target.value); setPage(0) }} className="rounded-lg border border-slate-200 px-3 text-sm">{industries.map(i => <option key={i}>{i}</option>)}</select>
          </div>
          <div className="mt-3 overflow-x-auto"><table className="w-full text-left text-sm"><thead className="text-xs text-slate-500"><tr>
            <th className="py-2">Account</th><th>Industry</th>
            <th><button onClick={() => setDesc(!desc)} className="font-semibold">Intent {desc ? '↓' : '↑'}</button></th><th>Status</th></tr></thead>
            <tbody>{view.map(a => (<tr key={a.id} onClick={() => setSel(a)} className={`cursor-pointer border-t border-slate-100 hover:bg-paper ${sel.id === a.id ? 'bg-indigo-50/60' : ''}`}>
              <td className="py-2.5 font-medium"><button onClick={() => setSel(a)}>{a.name}</button></td><td className="text-slate-600">{a.industry}</td><td>{a.intent}</td>
              <td><span className={`rounded-full px-2 py-0.5 text-xs font-medium ${tone[a.status]}`}>{a.status}</span></td></tr>))}</tbody></table>
            {rows.length === 0 && <p className="py-8 text-center text-sm text-slate-500">No accounts match. Clear the search or choose another industry.</p>}</div>
          <div className="mt-2 flex items-center justify-between text-sm text-slate-500"><span>Page {page + 1} of {pages}</span>
            <span className="flex gap-2"><button disabled={page === 0} onClick={() => setPage(page - 1)} className="rounded border px-3 py-1 disabled:opacity-40">Previous</button>
            <button disabled={page >= pages - 1} onClick={() => setPage(page + 1)} className="rounded border px-3 py-1 disabled:opacity-40">Next</button></span></div>
        </div>
        <aside className="rounded-xl bg-paper p-4 lg:col-span-2" aria-live="polite">
          <h4 className="font-bold">{sel.name}</h4><p className="text-xs text-slate-500">{sel.industry} · {sel.employees} employees · ${sel.pipeline}k pipeline</p>
          <p className="mt-3 text-xs font-semibold text-slate-500">Buying signals</p>
          <ul className="mt-1 space-y-2">{sel.signals.map(s => (<li key={s.topic} className="text-sm"><div className="flex justify-between"><span>{s.topic}</span><span className="text-slate-500">{s.when}</span></div>
            <div className="mt-1 h-1.5 rounded bg-slate-200"><div className="h-1.5 rounded bg-gradient-to-r from-brand to-violet" style={{ width: `${s.strength}%` }}/></div></li>))}</ul>
          <div className="mt-4 rounded-lg bg-white p-3 text-sm"><p className="flex items-center gap-1 font-semibold text-violet"><Sparkles className="h-4 w-4"/>Recommended action</p><p className="mt-1">{sel.action}</p></div>
        </aside>
      </div></div>)
}
