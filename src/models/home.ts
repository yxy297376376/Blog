import { Effect } from 'dva';
import { Reducer } from 'react';
import { ActionType } from './connect'

type StateType = {
  dataSource: any[]
}

export type HomeType = {
  nameSpace: 'home';
  state: StateType;
  effects: {
    getHomeList: Effect;
  },
  reducers: {
    handleSave: Reducer<StateType, ActionType<any>>;
  }
}

const HomeModel: HomeType = {
  nameSpace: 'home',
  state: {
    dataSource: []
  },
  effects: {
    *getHomeList({ payload, callback }, { call }) {
      // const res = yield call()
    }
  },
  reducers: {
    handleSave(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}

export default HomeModel
