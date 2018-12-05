import { createStore } from 'redux';
import reducers from './reducers';

const configureStore = () => {
    const store = createStore(
        reducers
    );

    return store;
};

export const store = configureStore();
