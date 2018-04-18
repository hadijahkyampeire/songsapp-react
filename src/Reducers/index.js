import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import SongReducers from './SongReducers'


const rootReducer = combineReducers({
    songs: SongReducers
});
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(
    rootReducer
);

export default store;