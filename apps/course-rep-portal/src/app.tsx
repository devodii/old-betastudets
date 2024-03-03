import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Wrapper } from './components/wrapper';
import { Provider } from './providers/store';

const DashboardPage = React.lazy(() => import('./pages/dashboard'));
const SignInPage = React.lazy(() => import('./pages/sign-in'));

export function App() {
  return (
    <BrowserRouter>
      <Provider>
        <React.Suspense fallback={<Wrapper>Loading...</Wrapper>}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </Routes>
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  );
}
