import axios from '../common/apiConfig';
export const fetchList = async (queryParams:string=""): Promise<any> => {
  return axios.get(`/?${queryParams}`);
};

