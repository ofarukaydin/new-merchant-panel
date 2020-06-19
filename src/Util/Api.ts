import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
});

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJhZG1pbmFkbWluIiwiZW1haWwiOiJmYXJ1a0BlZGFraWsuY29tIiwianRpIjoiMWRkNjI3YTAtMTQ5My00YjRiLWJkYTgtMjQ4YjRkNWM0M2NmIiwiTWVyY2hhbnRCcmFuY2hJZCI6IiIsIk1lcmNoYW50SWQiOiIxIiwiQ2FycmllcklkIjoiIiwibmJmIjoxNTkyNTcwMzk1LCJleHAiOjE1OTMwMDIzOTUsImlhdCI6MTU5MjU3MDM5NX0.Bv4bO7nms8t8nT8kxXaEFs2NYcMOooIgVmgWq9yF82M';
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API_URL;

Api.defaults.headers.common.Authorization = 'Bearer ' + token;

export default Api;
