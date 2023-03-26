import axios from 'axios'
import { useContext } from 'react';
import { UserContext } from "../App.js";

const { user, setUser } = useContext(UserContext);

const headers = {
  Authorization: "Bearer " + user.token,
};

export const GetClasses = async (user_id) => {
  let response = await axios.get('http://localhost:4000/API/Class/', {headers})
  let data = response.data
  return data
};

export const GetSection = async (class_id) => {
  const data = await axios.get('http://localhost:4000/API/Class/9f55be9f-5ee1-4ae8-aabd-185850577ea5http', {headers})
  return data
};
