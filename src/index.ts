import '@babel/polyfill';
import 'url-polyfill';
import dva, { DvaOption } from 'dva';
import { ReduxStore, App } from './index.d';
import createHistory from 'history/createHashHistory';
// user BrowserHistory
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';

import 'moment/locale/zh-cn';
import './rollbar';
//本地字体
import './styles/index.css';
import './index.less';
// 1. Initialize
// const app = dva({
//   history: createHistory(),
// });


const initConfig: DvaOption = {
  history: createHistory(),
};

// if (config.env === 'local') {
//   initConfig.onAction = createLogger();
// }
const app: App = dva(initConfig);

export const getStore = (): ReduxStore => {
  return app._store as ReduxStore; // 强制转换
};


// 2. Plugins
app.use(createLoading());

// 3. Register global model
app.model(require('./models/global.ts').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store; // eslint-disable-line
