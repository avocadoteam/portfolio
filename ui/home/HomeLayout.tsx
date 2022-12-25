import Image from 'next/image';
import { homeStyle } from './styles.css';

export const HomeLayout = () => {
  return (
    <div className={homeStyle.content}>
      <div className={homeStyle.img}>
        <Image src="/logo.svg" width={30} height={34} alt="Avocado team logo" />
      </div>

      <div className={homeStyle.card}></div>
    </div>
  );
};
