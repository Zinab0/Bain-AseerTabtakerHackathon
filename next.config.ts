
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyDUhK_nRhFBSl3xfOzzKW-jeiDyr9rVFnI",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "asir-connect.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "asir-connect",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "asir-connect.firebasestorage.app",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "78913698870",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:78913698870:web:dc305996d49bd3a364ac97",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'postimg.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'asir-connect.firebasestorage.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
