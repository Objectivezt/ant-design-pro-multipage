import { queryUserList } from '../../services/setting/userManagerService';

export default {
  namespace: 'userManagerModel',

  state: {
    resList: [],
    resTotle:0,
  },

  effects: {
    *filterList({ payloadMain }, { call, put }) {
      const res = yield call(queryUserList,payloadMain);
      yield put({
        type: 'saveList',
        payloadMain: {
          resList: res.list,
          resTotle: res.totle,
        },
      });
    },
  },

  reducers: {
    saveList(state, action) {
      return {
        ...state,
        list: action.payloadMain,
      };
    },
  },
};
