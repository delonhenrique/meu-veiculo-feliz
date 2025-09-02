import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.f232f1a4b3ac4f48925dbdd9b2f63cc0',
  appName: 'A Lovable project',
  webDir: 'dist',
  server: {
    url: 'https://f232f1a4-b3ac-4f48-925d-bdd9b2f63cc0.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1E40AF',
      showSpinner: false
    }
  }
};

export default config;