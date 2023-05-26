import axios from "axios"
import { BASE_URL } from "./base_URL"

//get all datas
export const getAllDatas = async()=>{
     let globalData;
    await axios.get(`${BASE_URL}`)
    .then((res)=>{
     globalData = res.data
    })
    return globalData
}

//get datas by id

export const getDatasID = async(id)=>{
     let globalData;
     await axios.get(`${BASE_URL}/${id}`)
     .then((res)=>{
          globalData = res.data
     })
     return globalData
}

//delete

export const deleteDatasByID = async(id)=>{
     await axios.delete(`${BASE_URL}/${id}`)
}

//post

export const postDataByID = async(payload)=>{
     await axios.post(`${BASE_URL}`,payload)
}