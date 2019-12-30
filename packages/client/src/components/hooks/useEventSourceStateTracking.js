import config from '../../functions/config';
import useEventSource from './useEventSource';

const useEventSourceStateTracking = (type, name, handler) => {
  const url = `${config().url}/rest/events?topics=smarthome/${type}/${name}/statechanged`;

  useEventSource(url, (stateChangedEvent) => {
    handler(stateChangedEvent);
  });
};
export default useEventSourceStateTracking;
