export interface ITicket {
  id: number,
  title: string,
  description?: string
}

export interface IColumn {
  id: number,
  title: string,
  tickets: ITicket[]
}
