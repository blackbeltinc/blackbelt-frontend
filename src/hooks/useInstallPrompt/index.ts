// code based on https://blog.wick.technology/pwa-install-prompt/

import { useIOSInstallPrompt } from './useIOSInstallPrompt';
import { useAndroidInstallPrompt } from './useAndroidInstallPrompt';

export function useInstallPrompt() {
  const [iosInstallPrompt, handleIOSInstallDeclined] = useIOSInstallPrompt();
  const [
    androidInstallPrompt,
    handleAndroidInstallDeclined,
    handleAndroidInstallAccepted,
  ] = useAndroidInstallPrompt();

  return {
    iosInstallPrompt,
    handleIOSInstallDeclined,
    androidInstallPrompt,
    handleAndroidInstallDeclined,
    handleAndroidInstallAccepted,
  };
}
