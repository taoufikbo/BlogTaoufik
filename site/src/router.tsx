import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Roadmap } from './components/Roadmap';
import { Topic } from './pages/Topic';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Roadmap />,
        },
        {
          path: 'docs/:slug',
          element: <Topic />,
        },
      ],
    },
  ],
  {
    basename: '/BlogTaoufik',
  }
);
