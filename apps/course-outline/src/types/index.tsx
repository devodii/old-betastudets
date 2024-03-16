export type CourseOutline = {
  id: string
  createdAt: string
  createdBy: string

  title: string
  outline: string
}

export type ApiResponse = {
  success: boolean
  message: string
  randomizer?: number
}
