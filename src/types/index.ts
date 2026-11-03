export type Status = 'Hot' | 'Warm' | 'Cold'
export interface Signal { topic: string; strength: number; when: string }
export interface Account { id: number; name: string; industry: string; intent: number; status: Status; pipeline: number; employees: number; signals: Signal[]; action: string }
