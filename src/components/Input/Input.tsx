import React, { useEffect, useState } from 'react';
import { InputParams } from '../../utils/types';
import { useAppDispatch } from '../../redux/hooks';
import { editTrainCharacteristics } from '../../redux/trainsSlice';
import './Input.scss';

const Input: React.FC<InputParams> = ({
  initValue,
  name,
  line,
  minValue = 0,
  isFloat = false,
}) => {
  const [value, setValue] = useState<number>(initValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  useEffect(() => {
    dispatch(
      editTrainCharacteristics({
        line,
        characteristic: name,
        value,
      })
    );
  }, [dispatch, line, name, value]);

  return (
    <td>
      <input
        className={`input ${isNaN(value) || value < 0 ? 'input_error' : ''}`}
        type="number"
        name={name}
        min={minValue}
        step={isFloat ? 0.01 : 1}
        value={value}
        onChange={(e) => {
          setValue(
            isFloat
              ? parseFloat(e.target.value.replace(/^0+/, ''))
              : parseInt(e.target.value.replace(/^0+/, ''))
          );
        }}
      />
    </td>
  );
};

export default Input;
