import axios from 'axios';
import { notify } from 'react-notify-toast';

const BASE_URL='http://localhost:5000/song'
const ADDSONG = 'addsong'
export const SETSONGS = 'setsongs'

// Action creators
const Add_song=(response)=>{
    return{
        'type':ADDSONG,
        'payload':response.data.message
    }
}

export const SetSongs=(response)=>{
    return{
        'type':SETSONGS,
        'payload':response.data
    }
}
// post Action
export const AddSongAction=(data)=>{
    return async (dispatch)=>{
        await axios.post(`${BASE_URL}/songs`, data)
        .then(response=>{
            dispatch(Add_song(response));
            notify.show(response.data.message, 'success', 3000)
        }).catch(error=>{
            notify.show('error occured', 'error', 3000)
        });
    }
}

// Fetch action
export const FetchSongAction=(data)=>{
    return async (dispatch)=>{
        await axios.get(`${BASE_URL}/songs`, data)
        .then(response=>{
            dispatch(SetSongs(response));
            notify.show(response.data.message, 'success', 3000)
        }).catch(error=>{
            notify.show('error occured', 'error', 3000)
        });
    }
}