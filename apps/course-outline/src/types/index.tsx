export type CourseOutline = {
  id: string
  createdAt: string
  createdBy: string

  title: string
  outline: string
}

export type ApiErrorResponse = {
  message: string
  randomizer: number
}
