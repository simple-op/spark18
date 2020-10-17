import {createStore} from 'redux';

import {checkReducer} from './reducers/check';

const store = createStore(checkReducer);

export default store;



