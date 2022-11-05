import React from 'react';
import ReactDOM from 'react-dom/client';
import { Material } from './EducationPlatform/pages/Material';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Material practiceId={5} />
  </React.StrictMode>
);

