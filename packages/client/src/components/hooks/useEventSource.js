import { useEffect } from 'react';

const useEventSource = (url, handler) => {
  useEffect(() => {
    const eventSource = new EventSource(url, { withCredentials: true });
    eventSource.onmessage = (e) => {
      handler(JSON.parse(JSON.parse(e.data).payload));
    };

    return () => {
      eventSource.close();
    };
  }, [handler, url]);
};
export default useEventSource;
