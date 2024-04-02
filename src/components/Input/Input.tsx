import React, { memo, useEffect, useState } from 'react';
import { InputParams } from '../../utils/types';
import { useAppDispatch } from '../../redux/hooks';
import { editTrainCharacteristics } from '../../redux/trainsSlice';
import './Input.scss';

const Input: React.FC<InputParams> = memo(
  ({ initValue, name, line, minValue = 0, isFloat = false }) => {
    const [value, setValue] = useState(initValue);
    const dispatch = useAppDispatch();

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
          className={`input ${isNaN(value) ? 'input_error' : ''}`}
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
  }
);

export default Input;
