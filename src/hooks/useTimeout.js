import { useEffect } from "react";

export function useTimeout(callback, time) {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      callback();
    }, time);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [callback, time]);
}

