import axios from "axios";
import jwtAxios from "../util/jwtUtil";

export const  API_SERVER_HOST = 'http://localhost:8080';

const prefix =  `${API_SERVER_HOST}/api/todo`;

export const select = async (id) => {
    const res = await jwtAxios.get(`${prefix}/${id}`);
    return res.data;

}

export const selectAll = async (pageParam) => {

    const {page, size} = pageParam;

    const res = await jwtAxios.get(`${prefix}/list`, {params:{page, size}});

    return res.data;
}

export const postAdd = async (todoObj) => {
    const res = await jwtAxios.post(`${prefix}/`, todoObj);

    return res.data;
}

export const deleteOne = async (id) => {
    const res = await jwtAxios.delete(`${prefix}/${id}`);
    return res.data;
}

export const putOne = async (todo) => {
    const res = await jwtAxios.put(`${prefix}/${todo.todoId}`, todo);
    return res.data;
}