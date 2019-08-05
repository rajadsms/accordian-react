import { combineReducers } from 'redux';
import accordianReducer from './accordianReducer'

export default combineReducers({
    accordianReducer: accordianReducer
});

//BTW we can directly also add this reducer to the store as we have only one reducer