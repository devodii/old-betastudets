'use client'

import { Input, Label, Textarea, Wrapper } from '@betastudents/ui'
import { createOutline } from '../actions/outline'
import { ShareCourseOutline, SubmitButton, Toast } from '.'

const FormRow = ({ children }: React.PropsWithChildren) => {
  return <div className="space-y-2">{children}</div>
}

interface CreateCourseOutlineProps {
  success: string
  error: string
  outlineId: string
}

export const CreateCourseOutline = ({
  success,
  error,
  outlineId,
}: Partial<CreateCourseOutlineProps>) => {
  return (
    <Wrapper as="main">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Generate course outline
      </h2>

      <form
        className="w-full flex flex-col gap-8 max-w-4xl mt-12"
        action={createOutline}
      >
        <FormRow>
          <Label htmlFor="name-of-creator">Your Name</Label>
          <Input name="name-of-creator" required placeholder="Emmanuel Odii" />
        </FormRow>

        <FormRow>
          <Label htmlFor="title">Course Name/Title</Label>
          <Input name="title" required placeholder="Physics" />
        </FormRow>

        <FormRow>
          <Label htmlFor="outline">Course Outline</Label>
          <Textarea rows={12} id="outline" required name="outline" />
        </FormRow>

        <SubmitButton text="Generate" className="w-full self-end" />
      </form>

      {success && (
        <ShareCourseOutline url={`${location.origin}/c/${outlineId}`} />
      )}

      {error && (
        <Toast
          message={'An unexpected error occured'}
          data={{ position: 'top-right', description: 'Please, try again.' }}
        />
      )}
    </Wrapper>
  )
}
