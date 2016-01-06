// import superagent from 'superagent';
import axios from 'axios';
import config from '../config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (__SERVER__) {
    // Prepend host and port of the API server to the path.
    return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath;
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return '/api' + adjustedPath;
}

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */
class _ApiClient {
  constructor(req) {
    methods.forEach((method) => {
      
      this[method] = (path, { params, data } = {}) => {
        let config = {
          url: formatUrl(path),
          timeout: 20000,
          method: method,
          responseType: 'json'
        };

        if (params) {
          config.params = params;
        }

        if (__SERVER__ && req.get('cookie')) {
          config.headers = { cookie: req.get('cookie') };
        }

        if (data) {
          config.data = data;
        }

        return axios(config);

      };     

    });
      
  }
}

const ApiClient = _ApiClient;

export default ApiClient;
