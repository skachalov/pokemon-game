import { createStore } from 'redux';
import { Reducer } from '../reducer/reducer';

let store = createStore(Reducer);

window.store = store;

export default store;