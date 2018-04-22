import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import SongReducers from './SongReducers';
import AuthReducers from './AuthReducer';


const rootReducer = combineReducers({
    songs: SongReducers,
    users: AuthReducers
});
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(
    rootReducer
);

export default store;