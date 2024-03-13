import { Label, Wrapper, Input, Textarea, Button } from '@betastudents/ui';

export default async function Index() {
  return (
    <Wrapper as="main">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Generate course outline
      </h2>

      <form className="w-full flex flex-col gap-8 max-w-4xl mt-12">
        <div className="space-y-2">
          <Label htmlFor="name">Course Name</Label>
          <Input name="name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Course Outline</Label>
          <Textarea rows={12} id="content" required />
        </div>

        <Button className="w-full self-end max-w-md bg-blue-500">
          Generate
        </Button>
      </form>
    </Wrapper>
  );
}
