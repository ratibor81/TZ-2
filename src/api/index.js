import axios from 'axios';

axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const site = axios.create({baseURL: 'https://min-api.cryptocompare.com/data/'});

let api = {
  getData: (payload) =>
    site.get('top/mktcapfull?limit=20&tsym=USD', payload),
};

export default api;
