import {createStore} from 'redux';

export default function(reducers) {

    const store = createStore(reducers);

    return store;
}
