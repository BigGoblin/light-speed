import { lazy } from 'react';

const Page = lazy(() => import('./Page'));
const Form = lazy(() => import('./Form'));

export default {
  Page,
  Form,
};
