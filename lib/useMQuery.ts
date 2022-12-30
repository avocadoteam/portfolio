import { useEffect, useState } from 'react';
import { useMediaQuery } from './useMediaQuery';

/**
 * Makes additional update on mount
 */
export const useMQuery = (queryInput: string) => {
  const mqResult = useMediaQuery(queryInput);
  const [mqValue, setMQValue] = useState(false);

  useEffect(() => {
    setMQValue(mqResult);
  }, [mqResult]);

  return mqValue;
};
