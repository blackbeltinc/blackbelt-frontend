// code based on https://blog.wick.technology/pwa-install-prompt/

import { useShouldShowPrompt } from './useShouldShowPrompt';

export function useIOSInstallPrompt(): [boolean, () => void] {
  const isIOS = (): boolean => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      if (navigator.standalone) {
        return false;
      }
    }
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const [userShouldBePrompted, handlePromptDismissed] = useShouldShowPrompt();
  const iOSInstallPrompt = isIOS() && userShouldBePrompted;

  return [iOSInstallPrompt, handlePromptDismissed];
}
