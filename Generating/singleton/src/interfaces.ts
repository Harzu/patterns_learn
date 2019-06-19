export interface Human {
  name: string
  age: number
}

export interface IPerson {
  getHuman(): Human
  setHuman(newName: string, newAge: number): void
}