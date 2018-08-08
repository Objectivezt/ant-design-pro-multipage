import request from '../../utils/request';

export async function queryUserList(params) {
  return request('/setting/queryUserByPage', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}
