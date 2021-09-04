// code based on https://blog.wick.technology/pwa-install-prompt/

import { useState, useEffect } from 'react';
import { useShouldShowPrompt } from './useShouldShowPrompt';

export function useAndroidInstallPrompt() {
  const [installPromptEvent, setInstallPromptEvent] = useState();
  const [userShouldBePrompted, handlePromptDismissed] = useShouldShowPrompt();

  useEffect(() => {
    const beforeInstallPromptHandler = (event) => {
      event.preventDefault();

      if (userShouldBePrompted) {
        setInstallPromptEvent(event);
      }
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    return () =>
      window.removeEventListener(
        'beforeinstallprompt',
        beforeInstallPromptHandler,
      );
  }, [userShouldBePrompted]);

  const handleInstallDeclined = (): void => {
    handlePromptDismissed();
    setInstallPromptEvent(null);
  };

  const handleInstallAccepted = (): void => {
    // @ts-ignore
    installPromptEvent.prompt();

    // @ts-ignore
    installPromptEvent.userChoice.then((choice) => {
      if (choice.outcome !== 'accepted') {
        handlePromptDismissed();
      }
      setInstallPromptEvent(null);
    });
  };

  return [installPromptEvent, handleInstallDeclined, handleInstallAccepted];
}
