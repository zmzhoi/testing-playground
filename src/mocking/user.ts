import axios from 'axios';

export async function getUser(id: number) {
  // 실제로는 유효하지 않은 end-point.
  const response = await axios.get(`https://example.com/user/${id}`);
  return response.data;
}
