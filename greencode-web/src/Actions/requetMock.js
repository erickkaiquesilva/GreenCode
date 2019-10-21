export const signInMock = (user) => {
    return new Promise((resolve, reject) => setTimeout(() => { 
        resolve({ 
            id_user: 7,
            name: 'Erick Kaique da Silva',
            birthDate: '1996/08/07',
            authentication: true 
 })}, 500))
}

export const summaryMock = ({ id_user }) => {
    return new Promise((resolve, reject) => setTimeout(() => { 
        resolve({ 
            id_user: 7,
            extract: [{
                recorded_points: '40',
                registered_items: '7',
                type: 'Lata Metálica',
                location: 'Av.Paulista 345',
                id: 1
            },
            {
                recorded_points: '40',
                registered_items: '7',
                type: 'Lata ',
                location: 'Av.Paulista 345',
                id: 2
            },
            {
                recorded_points: '40',
                registered_items: '7',
                type: 'Lata ',
                location: 'Av.Paulista 345',
                id: 2
            },
            {
                recorded_points: '40',
                registered_items: '7',
                type: 'Lata ',
                location: 'Av.Paulista 345',
                id: 2
            }
        ]    
 })}, 500))
}

export const balanceMock = (id_user) => {
    return new Promise((resolve, reject) => setTimeout(() => { 
        resolve({ 
            id_user: 17,
            recorded_points: 450,
            recorded_items: 70
 })}, 500))
}