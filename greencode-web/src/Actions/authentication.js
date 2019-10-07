import axios from 'axios';

export const signIn = (user) => {
    axios.post('http://35.171.167.97/login', user)
        .then(res => {
            console.log(res.data)
        })
        .catch(e => {
            console.log(e);
        })
}

export const signUp = (user) => {
    axios.post('http://18.232.61.39/signup', user)
        .then(res => {
            console.log(res.data)
        })
        .catch(e => {
            console.log(e);
        })
}