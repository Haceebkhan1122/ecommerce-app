import axios from 'axios';


const loginUrl = 'http://localhost:3000/v1/user/Login';
export const userLogin = frmData=>{
    return new Promise (async (resolve, reject) => {
        try{
            const res = await axios.post(loginUrl, frmData);
            console.log(res);
            resolve(res.data);
        }
        catch(error){
            console.log(error.message);
            reject(error)
        }
    })
}