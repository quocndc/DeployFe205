export interface SelectDataBox {
  label: string
  data: Array<SelectData>
  onSelection: (value: string | number) => void
}

export interface SelectData {
  name: string
  value: string | number
}
