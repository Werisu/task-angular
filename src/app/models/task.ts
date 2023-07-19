export type Tasks = Task[]

export interface Task {
  key?: string
  group: string
  itens?: Iten[]
}

export interface Iten {
  description: string
  tags?: string[],
  filed: boolean
}
