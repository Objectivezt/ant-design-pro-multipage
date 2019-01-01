import '@babel/polyfill';
import 'url-polyfill';
import dva, { DvaOption, DvaInstance, Model } from 'dva';
import { Extend } from './utils/misc';
import createHistory from 'history/createHashHistory';
import createLoading from 'dva-loading';

import 'moment/locale/zh-cn';
import './rollbar';
import './styles/index.css';
import './index.less';

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

const initConfig: DvaOption = {
  history: createHistory(),
};

const app: App = dva(initConfig);

export const getStore = (): ReduxStore => {
  return app._store as ReduxStore; // 强制转换
};
app.use(createLoading());
app.model(require('./models/global.ts').default);
app.router(require('./router').default);
app.start('#root');

export default app._store; // eslint-disable-line
