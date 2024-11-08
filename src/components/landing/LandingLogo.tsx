'use client';

import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player';
import logo from '@public/json/netflix-lottie.json';

export const LandingLogo = () => {
  const router = useRouter();

  return (
    <Lottie
      animationData={logo}
      style={{ width: '100%' }}
      play
      loop={false}
      onComplete={() => router.push('/main')}
    />
  );
};
