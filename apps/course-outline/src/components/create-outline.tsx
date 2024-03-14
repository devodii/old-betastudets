import * as React from 'react';
import { Wrapper, Input, Textarea, Button, Label } from '@betastudents/ui';

interface Props {
  action: (formdata: FormData) => void;
}

const Row = ({ children }: React.PropsWithChildren) => {
  return <div className="space-y-2">{children}</div>;
};

export const CreateCourseOutline = ({ action }: Props) => {
  return (
    <Wrapper as="main">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Generate course outline
      </h2>

      <form
        className="w-full flex flex-col gap-8 max-w-4xl mt-12"
        action={action}
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

        <Button className="w-full self-end max-w-md bg-blue-500">
          Generate
        </Button>
      </form>
    </Wrapper>
  );
};
