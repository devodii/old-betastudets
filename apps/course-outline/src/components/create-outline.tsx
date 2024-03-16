'use client'

import { Input, Label, Textarea, Wrapper } from '@betastudents/ui'
import { useFormState } from 'react-dom'
import { createOutline } from '../actions/outline'
import { ShareCourseOutline } from './share-outline'
import { SubmitButton } from './submit-button'

import { Toast } from './toast'

const initialState = {
  message: null,
  success: false,
  randomizer: 0,
}

const Row = ({ children }: React.PropsWithChildren) => {
  return <div className="space-y-2">{children}</div>
}

export const CreateCourseOutline = () => {
  const [{ message, success, randomizer }, formAction] = useFormState(
    createOutline,
    initialState
  )

  return (
    <Wrapper as="main">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Generate course outline
      </h2>

      <form
        className="w-full flex flex-col gap-8 max-w-4xl mt-12"
        action={formAction}
      >
        <Row>
          <Label htmlFor="name-of-creator">Your Name</Label>
          <Input name="name-of-creator" required placeholder="Emmanuel Odii" />
        </Row>

        <Row>
          <Label htmlFor="title">Course Name/Title</Label>
          <Input name="title" required placeholder="Physics" />
        </Row>

        <Row>
          <Label htmlFor="outline">Course Outline</Label>
          <Textarea rows={12} id="outline" required name="outline" />
        </Row>

        <SubmitButton text="Generate" className="w-full self-end" />
      </form>

      {success && message && (
        <ShareCourseOutline
          url={`${location.origin}/c/${message}`}
          key={message}
        />
      )}

      {!success && message && (
        <Toast
          message={message}
          key={randomizer}
          data={{ position: 'top-right' }}
        />
      )}
    </Wrapper>
  )
}
