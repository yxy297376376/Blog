
import type { HomeType } from './home';

export type Loading = {
  global: boolean;
  effects: Record<DispatchType[keyof DispatchType], boolean | undefined>;
  models: {
    [key in string]: any
  }
}

type ConnectModels = {
  home: HomeType
}

type OperationType = {
  [K in keyof ConnectModels]: keyof (ConnectModels[K]['effects'] &
    ConnectModels[K]['reducers']);
}

export interface Action<T = any> {
  type: T
}

export interface ActionType<T> extends Action {
  payload: T;
}

export type DispatchType = {
  [K in keyof ConnectModels]: `${ConnectModels[K]['nameSpace']}/${OperationType[K]}`
}

export type Dispatch<P = any, C = (params?: any) => void> = (action: {
  type: DispatchType[keyof DispatchType];
  payload?: P;
  callback?: C,
  [key: string]: any
}) => void;
