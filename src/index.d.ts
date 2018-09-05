
import dva, { DvaOption, DvaInstance, Model } from 'dva';
import { Extend } from './utils/misc';

export type ReduxStore = {
  getState(arg: any): any;
  dispatch(arg: any): any;
  subscribe(listener: () => void): any;
  replaceReducer(nextReducer: any): any;
};

export type App = Extend<DvaInstance, {
  _store?: ReduxStore;
  _models?: Model[];
}>;
