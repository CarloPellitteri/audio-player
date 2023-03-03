import * as ReactDOM from 'react-dom/client';
import { App } from './pages';

import './styles/index.css';

const entry = document.querySelector('#app');
const root = ReactDOM.createRoot(entry);

root.render(<App />);
