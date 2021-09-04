import dynamic from 'next/dynamic';

const InstallPrompt = dynamic(
  () => import('./InstallPrompt').then((m) => m.InstallPrompt),
  {
    ssr: false,
  },
);

export function PWAInstallPrompt() {
  return <InstallPrompt />;
}
