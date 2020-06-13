const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
})

const registerUser = async (user) => {
    try {
        const {data} = await instance.post('/users',{
            name: user.name,
            age: user.age,
            email: user.email,
            password: user.password
        })
        return data;
    } catch (e) {
        console.error('---error registering users--',e);
      throw e;
    }
}

const login = async (user) => {
    try {
     const {data} = await instance.post('/login', {
         email: user.email,
         password: user.password
     })

     return data;
    } catch (e) {
    console.error('---error login users--',e);
      throw e;
    }
}

const fetchUsers = async () => {
try {
    const {data} = await instance.get('/users');
    return data;
} catch (e) {
console.error('---error fetching users--',e);
      throw e;
}
}



module.exports = {registerUser, fetchUsers, login};