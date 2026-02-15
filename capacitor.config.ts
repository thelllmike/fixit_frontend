import type { CapacitorConfig } from '@capacitor/cli';

const isLive = process.env.LIVE_RELOAD === 'true';

const config: CapacitorConfig = {
  appId: 'com.fixit.app',
  appName: 'FixIt',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    ...(isLive && {
      url: 'http://192.168.1.100:3000',
      cleartext: true,
    }),
  },
  ios: {
    contentInset: 'automatic',
  },
};

export default config;
