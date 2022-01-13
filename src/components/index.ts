import { lazy } from 'react';

const Page = lazy(() => import('./Page'));
const Form = lazy(() => import('./Form'));
const Input = lazy(() => import('./Input'));

export default {
  Page,
  Form,
  Input,
};
