import { CreateCourseOutline } from '../components';
import { createOutline } from '../actions';

export default async function Index() {
  return <CreateCourseOutline action={createOutline} />;
}
