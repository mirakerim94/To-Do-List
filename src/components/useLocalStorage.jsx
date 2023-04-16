import { useState, useEffect } from "react";

function useLocalStorage(key, initial) {
  const [localValue, setLocalValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initial;
    } catch (error) {
      console.log(error);
      return initial;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(localValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localValue]);

  return [localValue, setLocalValue];
}

export default useLocalStorage;
