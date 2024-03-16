'use client'

import * as React from 'react'
import { toast, type ExternalToast } from 'sonner'

interface Props {
  message: string | React.ReactNode
  data?: ExternalToast
}

export const Toast = ({ message, data }: Props) => {
  const showToast = React.useCallback(() => {
    toast(message, {
      ...data,
    })
  }, [message, data])

  React.useEffect(() => {
    showToast()
  }, [showToast])

  return null
}
