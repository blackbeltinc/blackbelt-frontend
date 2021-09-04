// code based on https://blog.wick.technology/pwa-install-prompt/

import dayjs from 'dayjs';
import { useState } from 'react';

export function useShouldShowPrompt(collOffPeriod = 10): [boolean, () => void] {
  function getPromptLastSeenTime(): string {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('installPromptLastSeenTime');
    }
    return null;
  }

  function setPromptLastSeenTime(): void {
    const today = dayjs().toISOString();
    if (typeof window !== 'undefined') {
      localStorage.setItem('installPromptLastSeenTime', today);
    }
  }

  const isMobile: boolean = /iPhone|iPad|iPod|Android|Mobi/i.test(
    navigator.userAgent,
  );

  function getUserShouldBePrompted(): boolean {
    const lastPrompt = dayjs(getPromptLastSeenTime());
    const daysSinceLastPrompt = dayjs().diff(lastPrompt, 'days');
    if (!isMobile) return false;
    return (
      Number.isNaN(daysSinceLastPrompt) || daysSinceLastPrompt > collOffPeriod
    );
  }

  const [userShouldBePrompted, setUserShouldBePrompted] = useState(
    getUserShouldBePrompted(),
  );

  const handlePromptDismissed = (): void => {
    setUserShouldBePrompted(false);
    setPromptLastSeenTime();
  };

  return [userShouldBePrompted, handlePromptDismissed];
}
