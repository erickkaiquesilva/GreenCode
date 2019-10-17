export const signInMock = (user) => {
    return new Promise((resolve, reject) => setTimeout(() => { 
        resolve({ 
            nome: 'erick silva',
            email: 'erick@gmail.coms'
 })}, 2000))
}