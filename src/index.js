import { render } from 'react-dom';
import App from './ui/App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { store } from '@/reducers';

render (<Provider store={store}><App/></Provider>, document.getElementById("root"));

