import axios from "axios"
import {API_SERVER_HOST} from "./todoApi"
import jwtAxios from "../util/jwtUtil";

const host = `${API_SERVER_HOST}/api/products`

export const postAdd = async (product) => {
    const header = {headers: {'Content-Type': 'multipart/form-data'}}

    const res = await jwtAxios.post(`${host}/`, product, header)

    return res.data
}

export const getList = async (pageParam) => {
    const {page, size} = pageParam
    const res = await jwtAxios.get(`${host}/list`, {params: {page: page, size: size}})
    return  res.data
}

export const getOne = async (productId) => {
    const res = await jwtAxios.get(`${host}/${productId}`)
    return res.data
}

export const deleteOne = async (productId) => {
    const res = await jwtAxios.delete(`${host}/${productId}`)
    return res.data
}

export const putOne = async (productId, product) => {
    const header = {headers: {'Content-Type': 'multipart/form-data'}}

    const res = await jwtAxios.put(`${host}/${productId}`, product, header)

    return res.data
}