import * as React from 'react';

import { Wrapper } from '@betastudents/ui';
import { getOutline } from '../../../actions/outline';

interface Props {
  params: {
    id: string;
  };
}

export default async function CourseOutlinePage({ params }: Props) {
  const outline = await getOutline(params.id);

  console.log({ outline });

  return (
    <Wrapper>
      Course outline page for {params.id}
      <pre>{JSON.stringify(outline)}</pre>
    </Wrapper>
  );
}
