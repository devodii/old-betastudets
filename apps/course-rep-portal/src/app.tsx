import * as React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Wrapper } from './components/wrapper';
import { Provider } from './providers/store';

const IndexPage = React.lazy(() => import('./pages/index'));
const DashboardPage = React.lazy(() => import('./pages/dashboard'));
const SignInPage = React.lazy(() => import('./pages/sign-in'));
const CreateCoursePage = React.lazy(() => import('./pages/create-course'));

export function App() {
  return (
    <BrowserRouter>
      <Provider>
        <React.Suspense fallback={<Wrapper>Loading...</Wrapper>}>
          <Routes>
            <Route index element={<IndexPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/dashboard" element={<Outlet />}>
              <Route index element={<DashboardPage />} />
              <Route path="create-course" element={<CreateCoursePage />} />
            </Route>
          </Routes>
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  );
}
