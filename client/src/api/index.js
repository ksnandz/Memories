import axios from 'axios';

const url = 'http://locahost:4000/posts';

export const fetchPosts = () => axios.get(url);