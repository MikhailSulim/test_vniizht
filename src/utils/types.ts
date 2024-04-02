export interface TrainCharacteristics {
  speed: number;
  force: number;
  engineAmperage: number;
}

export interface Train {
  name: string;
  description: string;
  characteristics: TrainCharacteristics[];
}

export interface TrainsState {
  trains: Train[];
  selectedTrain: Train;
  editedTrain: Train;
  isValid: boolean;
  isLoading: boolean;
  error: null | string;
}

export interface InputParams {
  line: number;
  name: string;
  initValue: number;
  minValue?: number;
  isFloat?: boolean;
}
