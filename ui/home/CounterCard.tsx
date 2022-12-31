import { tp } from '../theme/typography.css';
import { homeStyle } from './styles.css';

const numbs = [1, 4, 2, 1, 9, 3, 4];

export const CounterCard = () => {
  return (
    <div className={homeStyle.card({ padding: 'small', height: 'max' })}>
      <div className={homeStyle.counterWrap}>
        <p className={tp({ variant: 'shadow' })}>👀 Наши приложения открыли:</p>

        <div className={homeStyle.numbs}>
          {numbs.map((numb, index) => (
            <div key={index} className={homeStyle.numWrap}>
              {numb}
            </div>
          ))}
        </div>
        <p className={tp({ variant: 'shadow' })}>раз</p>
      </div>
    </div>
  );
};
