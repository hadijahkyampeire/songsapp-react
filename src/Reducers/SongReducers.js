import { SETSONGS} from '../Actions/SongsAction';

export default (state={}, action)=>{
    switch(action.type) {
        case SETSONGS:
        return {
            ...action.payload
        }
        default:
            return state;
    }
}