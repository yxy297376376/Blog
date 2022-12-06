import request from '@/utils/request';

export async function getImages() {
  return request.get('/api/tags')
}
export async function getDetails() {
  return request.get('/api/details')
}
