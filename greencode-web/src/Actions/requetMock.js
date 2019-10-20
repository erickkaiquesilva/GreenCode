export const signInMock = (user) => {
    return new Promise((resolve, reject) => setTimeout(() => { 
        resolve({ 
            name: 'Erick Kaique da Silva',
            birthDate: '1996/08/07',
            authentication: true 
 })}, 500))
}

export const summaryMock = (user) => {
    return new Promise((resolve, reject) => setTimeout(() => { 
        resolve({ 
            id_user: 7,
            extract: [{
                recorded_points: '40pts',
                registered_items: '7',
                type: 'Lata Metálica',
                location: 'Av.Paulista 345'
            }]    
 })}, 500))
}

export const balanceMock = (id_user) => {
    return new Promise((resolve, reject) => setTimeout(() => { 
        resolve({ 
            id_user: 7,
            recorded_points: 750,
            recorded_items: 70
 })}, 500))
}