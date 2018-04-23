import Axiosinstance from './AxiosInstance';
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
        await Axiosinstance.post(`${BASE_URL}/songs`, data)
        .then(response=>{
            dispatch(Add_song(response));
            document.getElementById("CloseAddModal").click();
            notify.show(response.data.message, 'success', 3000)
        }).catch(error=>{
            if(error.response){
                notify.show(error.response.data.messages.artist, 'error', 4000)

            }else if(error.request){
                notify.show('Request errored', 'error', 4000)
            }
        });
    }
}

// Fetch action
export const FetchSongAction=(data)=>{
    return async (dispatch)=>{
        await Axiosinstance.get(`${BASE_URL}/songs`, data)
        .then(response=>{
            dispatch(SetSongs(response));
            notify.show(response.data.message, 'success', 3000)
        }).catch(error=>{
            notify.show('error occured', 'error', 3000)
        });
    }
}