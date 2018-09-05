import { GloablModelState } from './global.d';
import { Effect } from 'dva';
import { Reducer } from 'redux';
export type GloablModelState = {
  collapsed: boolean;
  notices: any[];
}

export type GlobalModal = {
  namespace: 'global',
  state: GloablModelState,
  effects: {
    fetchNotices: Effect;
    clearNotices: Effect;
  },
  reducers: {
    changeLayoutCollapsed: Reducer<any>;
    saveNotices: Reducer<any>;
    saveClearedNotices: Reducer<any>;
  };
}

