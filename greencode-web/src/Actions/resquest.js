import axios from 'axios';

const api = axios.create({
    baseURL: "http://3.211.16.250"
  });

export const signIn = (user) => {
    return api.post('/login', user)
}

export const signUp = (user) => {
    return api.post('/signup', user)
}

export const summary = (user) => {
    console.log("----- XPTO: REQUEST SUMMARY:", user)
    return api.post("/transacoes", user)
}

export const balance = () => {
    // return api.get("/usuario/pontos")
}