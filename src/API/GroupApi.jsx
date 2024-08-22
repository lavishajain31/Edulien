// src/api/groupAPI.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

// Set up the headers with the token for authorization
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Create a new group
export const createGroup = async (groupData, token) => {
  setAuthToken(token);
  const response = await axios.post(`${API_URL}/groups`, groupData);
  return response.data;
};

// Get all groups
export const getAllGroups = async (token) => {
  setAuthToken(token);
  const response = await axios.get(`${API_URL}/groups`);
  return response.data;
};

// Get a single group by ID
export const getGroupById = async (groupId, token) => {
  setAuthToken(token);
  const response = await axios.get(`${API_URL}/groups/${groupId}`);
  return response.data;
};

// Update a group
export const updateGroup = async (groupId, groupData, token) => {
  setAuthToken(token);
  const response = await axios.put(`${API_URL}/groups/${groupId}`, groupData);
  return response.data;
};

// Delete a group
export const deleteGroup = async (groupId, token) => {
  setAuthToken(token);
  const response = await axios.delete(`${API_URL}/groups/${groupId}`);
  return response.data;
};
// Join a group
export const joinGroup = async (groupId, token) => {
  setAuthToken(token);
  const response = await axios.post(`${API_URL}/groups/${groupId}/join`);
  return response.data;
};

