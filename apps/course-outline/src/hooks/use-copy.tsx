'use client'

import * as React from 'react'
import { toast } from 'sonner'

export const useCopy = (text?: string) => {
  const [isCopied, setIsCopied] = React.useState(false)

  async function copy(text: string) {
    try {
      setIsCopied(true)
      await navigator.clipboard.writeText(text)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      toast('failed to copy', {
        action: {
          label: 'retry',
          onClick: async () => {
            setIsCopied(true)
            await navigator.clipboard.writeText(text)
            setTimeout(() => setIsCopied(false), 2000)
          },
        },
        duration: 5000,
        position: 'top-right',
      })
    }
  }

  return { isCopied, copy }
}
