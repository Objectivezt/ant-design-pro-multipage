import Rollbar from 'rollbar';

// Track error by rollbar.com
if (location.host === 'XXXXXXX') {
  Rollbar.init({
    accessToken: 'XXXXXX',
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
      environment: 'production',
    },
  });
}
