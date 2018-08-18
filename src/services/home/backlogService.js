import request from '../../utils/request';

export async function queryBacklog(params) {
  return request('/home/queryBacklog', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}
