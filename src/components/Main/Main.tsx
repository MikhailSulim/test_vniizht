import React, { useEffect } from 'react';
import './Main.scss';
import { useAppDispatch } from '../../redux/hooks';
import { getTrains, selectTrain } from '../../redux/trainsSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Input from '../Input/Input';

const Main = () => {
  const dispatch = useAppDispatch();
  const trains = useSelector((state: RootState) => state.trains);
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const selectedTrain = useSelector((state: RootState) => state.selectedTrain);
  const editedData = useSelector((state: RootState) => state.editedTrain);
  const isValid = useSelector((state: RootState) => state.isValid);

  const handleSendData = () => {
    console.log(
      [...editedData.characteristics].sort((a, b) => a.speed - b.speed)
    );
  };

  useEffect(() => {
    if (!trains.length) dispatch(getTrains());
  }, [dispatch, trains.length]);

  return (
    <div className="main">
      <div className="main__table">
        <table>
          <caption>Поезда</caption>
          <thead>
            <tr>
              <th>Название</th>
              <th>Описание</th>
            </tr>
          </thead>
        </table>
        <div className="main__table-body">
          <table>
            <tbody>
              {isLoading ? (
                <tr>
                  <td>Загрузка данных...</td>
                </tr>
              ) : (
                trains.map((train, idx) => (
                  <tr
                    key={idx}
                    className="main__tr"
                    onClick={() => dispatch(selectTrain(train))}
                  >
                    <td>{train.name}</td>
                    <td>{train.description}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedTrain.name && (
        <div className="main__table">
          <table>
            <caption>Характеристики</caption>
            <caption>{selectedTrain.name}</caption>
            <thead>
              <tr>
                <th>Ток двигателя, А</th>
                <th>Сила тяги, кН</th>
                <th>Скорость, км/ч</th>
              </tr>
            </thead>
          </table>
          <div className="main__table-body">
            <table>
              <tbody>
                {selectedTrain.characteristics.map((characteristic, idx) => (
                  <tr key={idx}>
                    <Input
                      minValue={1}
                      name="engineAmperage"
                      line={idx}
                      initValue={characteristic.engineAmperage}
                    />
                    <Input
                      minValue={1}
                      isFloat={true}
                      name="force"
                      line={idx}
                      initValue={characteristic.force}
                    />
                    <Input
                      line={idx}
                      name="speed"
                      initValue={characteristic.speed}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              disabled={
                !isValid ||
                (isValid &&
                  JSON.stringify(editedData.characteristics) ===
                    JSON.stringify(selectedTrain.characteristics))
              }
              onClick={handleSendData}
            >
              Отправить данные
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
