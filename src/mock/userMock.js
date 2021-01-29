import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
    
        user:{
            'id': 1,
            'username': 'juliotcentanin',
            'email': 'julio@email.com' ,
            'avatar': '/images/avatar/avatar_1.jpeg'
        }
    } )

mock.onPost('/api/home/login').reply((config) => {

    const {email, password} = JSON.parse(config.data)

    if (email !== 'julio@email.com' || password !== 'admin'){
        return [400, {message: 'E-mail ou senha inválido'}]
    }

    const user = {
        id: 1,
        name: 'Julio Centanin',
        username: 'juliocentanin',
        email: 'julio@email.com',
        avatar: '/images/avatar/avatar_1.jpeg'
    }

    return [200,{user}]
})