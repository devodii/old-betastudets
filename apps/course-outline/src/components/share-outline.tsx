'use client'
import { CopyIcon, CheckIcon } from '@radix-ui/react-icons'
import * as React from 'react'

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@betastudents/ui'
import { useCopy } from '../hooks/use-copy'

interface Props {
  url: string
  children?: React.ReactNode
}

export function ShareCourseOutline({ url, children: trigger }: Props) {
  const { isCopied, copy } = useCopy(url)

  return (
    <Dialog defaultOpen={true}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Share outline link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={url} readOnly />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={() => copy(url)}
          >
            <span className="sr-only">Copy</span>
            {isCopied ? (
              <CheckIcon className="size-4" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
