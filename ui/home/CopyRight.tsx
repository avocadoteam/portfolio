import { AvoTeam } from '../svgs/AvoTeam';
import { tp } from '../theme/typography.css';
import { homeStyle } from './styles.css';

export const CopyRight = () => {
  return (
    <div className={homeStyle.copyWrap}>
      <AvoTeam className={homeStyle.rotation} />
      <p className={tp({ variant: 'copy', m: 't1' })}>© avocado, {new Date().getFullYear()}</p>
    </div>
  );
};
