import axios from 'axios';

export const signIn = (user) => {
    axios.post('', user)
        .then(res => {
            console.log(res.data)
        })
        .catch(e => {
            console.log(e);
        })
}