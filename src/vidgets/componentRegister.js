import { lazy } from 'react';

export default {
  ImageVidget: lazy(() => import('./components/ImageVidget')),
  TextValidationVidget: lazy(() => import('./components/TextValidationVidget')),
  TextVidget: lazy(() => import('./components/TextVidget')),
};