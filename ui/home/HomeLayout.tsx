import Image from 'next/image';
import { CaptCard } from './CaptCard';
import { CopyRight } from './CopyRight';
import { CounterCard } from './CounterCard';
import { HotCard } from './HotCard';
import { PlusPlusCard } from './PlusPlusCard';
import { homeStyle } from './styles.css';
import { WelcomeCard } from './WelcomeCard';
import { WorkCard } from './WorkCard';

export const HomeLayout = () => {
  return (
    <div className={homeStyle.content}>
      <div className={homeStyle.img}>
        <Image src="/logo.svg" width={30} height={34} alt="Avocado team logo" />
      </div>

      <WelcomeCard />
      <div className={homeStyle.contentGrid}>
        <PlusPlusCard />
        <HotCard />
      </div>
      <div className={homeStyle.contentGrid}>
        <CaptCard />
        <CounterCard />
      </div>
      <div className={homeStyle.contentGrid}>
        <WorkCard />
        <CopyRight />
      </div>
    </div>
  );
};
