import type { Account, Status } from '../types'
const st = (n: number): Status => (n >= 75 ? 'Hot' : n >= 45 ? 'Warm' : 'Cold')
const raw: [string, string, number, number, number][] = [
 ['Northwind Labs','SaaS',91,240,1200],['Brightpath Health','Healthcare',84,180,860],['Aurora Freight','Logistics',77,410,640],
 ['Kestrel Finance','Fintech',72,95,520],['Lumen Retail','Retail',66,300,410],['Helix Robotics','Manufacturing',58,150,380],
 ['Tidewater Energy','Energy',49,520,300],['Pinecone Learning','Education',44,60,210],['Atlas Insurance','Fintech',38,800,190],
 ['Marlow Media','Media',33,45,140],['Cobalt Systems','SaaS',81,210,720],['Verde Foods','Retail',27,120,90]]
const topics = ['Pricing page','ABM platforms','Intent data','CRM integration','Sales analytics']
const actions = ['Book an executive demo this week.','Send a case study from a similar industry.','Loop in the account owner and share pricing.','Nurture with a webinar invite.']
export const accounts: Account[] = raw.map(([name, industry, intent, employees, pipeline], i) => ({
 id: i + 1, name, industry, intent, employees, pipeline, status: st(intent),
 signals: topics.slice(0, 3 + (i % 2)).map((t, j) => ({ topic: t, strength: Math.max(20, intent - j * 12), when: `${j + 1}d ago` })),
 action: actions[intent >= 75 ? i % 2 : 2 + (i % 2)] }))
export const trend = [{ month: 'Jun', engagement: 42 },{ month: 'Jul', engagement: 55 },{ month: 'Aug', engagement: 51 },{ month: 'Sep', engagement: 68 },{ month: 'Oct', engagement: 74 },{ month: 'Nov', engagement: 83 }]
