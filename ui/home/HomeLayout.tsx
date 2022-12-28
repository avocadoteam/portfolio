import Image from 'next/image';
import { PlusPlusCard } from './PlusPlusCard';
import { homeStyle } from './styles.css';
import { WelcomeCard } from './WelcomeCard';

export const HomeLayout = () => {
  return (
    <div className={homeStyle.content}>
      <div className={homeStyle.img}>
        <Image src="/logo.svg" width={30} height={34} alt="Avocado team logo" />
      </div>

      <WelcomeCard />
      <PlusPlusCard />
    </div>
  );
};
