import cloneDeep from 'lodash/cloneDeep';
import curry from 'lodash/fp/curry';

const config = window.localStorage.getItem('openhab-pwa-config') || {};
Object.defineProperties(config, {
  authorization: {
    get() {
      return btoa(`${this.username}:${this.password}`);
    },
    enumerable: true,
  },
});

const set = curry((key, value) => (config[key] = value));

export const setUsername = set('username');
export const setPassword = set('password');
export const setUrl = set('url');

export default () => cloneDeep(config);
