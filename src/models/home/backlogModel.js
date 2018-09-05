// import { backlogModelState } from './backlogModel';

import { queryBacklog } from '../../services/home/backlogService'

export default {
  namespace: 'backlogModel',

  state: {
    cardList:[],
  },

  effects: {
    *filterList({ payloadMain }, { call, put }) {
      const res = yield call(queryBacklog, payloadMain);
      const { data } = res;
        yield put({
          type: 'saveList',
          payloadMain: {
            cardList: data.cardList,
          }
        });
    },
  },

  reducers: {
    saveList(state, { payloadMain }) {
      return {
        ...state,
        ...payloadMain,
      };
    },
  },
};
