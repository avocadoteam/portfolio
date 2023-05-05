import { TextField, themeStyles } from '@sensearena/ui';
import { useCallback, useState } from 'react';

const rubToUsdt = 82;
const eurToUsdt = 0.906995;
const rubToEur = 84.77;

export const CalcLayout = () => {
  const [data, setData] = useState<{ game_price: number; add_to_price: number }>({
    add_to_price: 0,
    game_price: 0,
  });

  const calculate = useCallback(() => {
    const priceInEUR = (data.game_price / rubToUsdt) * eurToUsdt - 2;
    const priceInEURAdd = ((data.add_to_price * data.game_price + data.game_price) / rubToUsdt) * eurToUsdt - 2;

    const priceInRub = data.game_price - priceInEUR * rubToEur + data.game_price;
    const priceInRubAdd = priceInRub - data.game_price + data.add_to_price * data.game_price + data.game_price;
    return {
      priceInEUR,
      priceInRub,
      priceInEURAdd,
      priceInRubAdd,
    };
  }, [data]);

  return (
    <div>
      <TextField
        label="Цена игры"
        type="number"
        name="game_price"
        value={data.game_price}
        onChange={e =>
          setData(d => ({
            ...d,
            game_price: Number(e.target.value),
          }))
        }
      />
      <TextField
        label="Наценка (0.15)"
        type="number"
        name="add_to_price"
        value={data.add_to_price}
        onChange={e =>
          setData(d => ({
            ...d,
            add_to_price: Number(e.target.value),
          }))
        }
      />
      Результат после конвертации rub - usdt - eur (к стоимости добавляется сумма которая теряется после конвертации):{' '}
      <span className={themeStyles.redTitle}>{calculate().priceInRub}</span>
      <br />
      <br />
      Результат c наценкой: <span className={themeStyles.redTitle}>{calculate().priceInRubAdd}</span>
      <br />
      <br />
      Разница с наценкой: <span className={themeStyles.redTitle}>{calculate().priceInRubAdd - data.game_price}</span>
    </div>
  );
};
