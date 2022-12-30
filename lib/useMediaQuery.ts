import { useCallback, useMemo, useSyncExternalStore } from 'react';

export interface Options {
  defaultMatches?: boolean;
  matchMedia?: typeof window.matchMedia;
}

const useMediaQueryNew = (query: string, defaultMatches: boolean, matchMedia: typeof window.matchMedia | null): boolean => {
  const getDefaultSnapshot = useCallback(() => defaultMatches, [defaultMatches]);

  const [getSnapshot, subscribe] = useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {}];
    }

    const mediaQueryList = matchMedia(query);

    return [
      () => mediaQueryList.matches,
      (notify: () => void) => {
        // TODO: Use `addEventListener` once support for Safari < 14 is dropped
        mediaQueryList.addListener(notify);
        return () => {
          mediaQueryList.removeListener(notify);
        };
      },
    ];
  }, [getDefaultSnapshot, matchMedia, query]);
  const match = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  return match;
};

export const useMediaQuery = (queryInput: string, options: Options = {}): boolean => {
  const supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const { defaultMatches = false, matchMedia = supportMatchMedia ? window.matchMedia : null } = options;

  queryInput = queryInput.replace(/^@media( ?)/m, '');

  const match = useMediaQueryNew(queryInput, defaultMatches, matchMedia);

  return match;
};
