import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import trainsApi from '../api/TrainsApi';
import { Train, TrainsState } from '../utils/types';

export const getTrains = createAsyncThunk<
  Train[],
  void,
  { rejectValue: string }
>('trains/getTrains', async () => {
  try {
    return await trainsApi.getTrains();
  } catch (error) {
    return error;
  }
});

const initialState: TrainsState = {
  trains: [],
  selectedTrain: { name: '', description: '', characteristics: [] },
  editedTrain: { name: '', description: '', characteristics: [] },
  isLoading: false,
  isValid: true,
  error: null,
};

const trainsSlice = createSlice({
  name: 'trains',
  initialState,
  reducers: {
    clearState: (state) => {
      state.trains = [];
    },

    selectTrain: (state, action) => {
      state.selectedTrain = action.payload;
      state.editedTrain = action.payload;
    },

    editTrainCharacteristics: (
      state,
      action: {
        payload: { line: number; characteristic: string; value: number };
      }
    ) => {
      const { line, characteristic, value } = action.payload;
      state.isValid = Boolean(value);
      const updatedCharacteristics = [...state.editedTrain.characteristics];
      updatedCharacteristics[line] = {
        ...updatedCharacteristics[line],
        [characteristic]: value,
      };
      state.editedTrain = {
        ...state.editedTrain,
        characteristics: updatedCharacteristics,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrains.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTrains.fulfilled, (state, action) => {
        state.isLoading = false;
        state.trains = action.payload;
      })
      .addCase(getTrains.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || 'Server error';
      });
  },
});

export const { clearState, selectTrain, editTrainCharacteristics } =
  trainsSlice.actions;

export const trainsReducer = trainsSlice.reducer;
