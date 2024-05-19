export interface Schedule {
  Id: number
  Name: string
  Description: string
  CreateDate: string
  LastUpdateDate: string
  TimeInDay: string
  ThumbnailUrl: string
  Type: number
}

export interface ScheduleResponse {
  Code: number
  Message: string
  Data: Array<Schedule>
}

export interface ScheduleRequest {
  type: number | null
  districtId: number | null
  subCategoryIds: Array<number> | null
}
