import axios from 'axios';

const client = axios.create({
  baseURL: 'process.env.VUE_APP_URL',
});

export default {
  all(params) {
    return client.get('posts', params);
  },
  find(id) {
    return client.get(`posts/${id}`);
  },
  create(data) {
    return client.post('posts', data);
  },
  update(id, data) {
    return client.put(`posts/${id}`, data);
  },
  delete(id) {
    return client.delete(`posts/${id}`);
  },
};