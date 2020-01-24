import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import * as service from '~/services/checkin';

import { Types, checkInSuccess, checkInFailure } from './index';

export function* createOrListCheckIn({ payload }) {
  const { id, newList } = payload;

  try {
    if (!newList) {
      const response = yield call(service.checkinList, id);

      const checkIns = response.data;

      yield put(checkInSuccess(checkIns));
    } else {
      yield call(service.checkinCreate, id);
      const response = yield call(service.checkinList, id);

      const checkIns = response.data;

      yield put(checkInSuccess(checkIns));
    }
  } catch (err) {
    Alert.alert('Falha na requisição', err.response.data.error);
    yield put(checkInFailure());
  }
}

export default all([takeLatest(Types.CHECKIN_REQUEST, createOrListCheckIn)]);
