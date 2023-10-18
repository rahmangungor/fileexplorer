// src/utils/api.js

import axios from 'axios';

const baseURL = 'https://dmstest.hexaworks.com';

const api = axios.create({
  baseURL,
  headers: {
    'Authorization': '<TOKEN>',
    'Content-Type': 'application/json'
  }
});

const fetchFileOrFolderData = async (id, pageNumber, countPerPage) => {
  try {
    const response = await api.get(`/viewstore/${id}`, {
      params: { pagenumber: pageNumber, countperpage: countPerPage },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching file/folder data:', error);
    throw error;
  }
};

export default fetchFileOrFolderData;