import axios from 'axios'
const Url='http://localhost:8000'
export const addItem=async(data)=>{
    try{
          return await axios.post(`${Url}/add`,data)
    }
    catch(e){
        console.log(e.message)
    }
}
export const getItems=async()=>{
    try{
          return await axios.get(`${Url}/get`)
    }
    catch(e){
        console.log(e.message)
    }
}
export const getEditData=async(id)=>{
    try{
          return await axios.get(`${Url}/${id}`)
    }
    catch(e){
        console.log(e.message)
    }
}
export const EditItem=async(data,id)=>{
    try{
          return await axios.post(`${Url}/${id}`,data)
    }
    catch(e){
        console.log(e.message)
    }
}
export const deleteItem=async(id)=>{
    try{
          return await axios.delete(`${Url}/${id}`)
    }
    catch(e){
        console.log(e.message)
    }
}
