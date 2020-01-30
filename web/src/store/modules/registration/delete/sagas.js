import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { registrationDelete } from '~/services/registration';
import { listRegistrationRequest } from '../list';
import { requestFailMessage } from '~/util/validation';

import {
  Types,
  deleteRegistrationSuccess,
  deleteRegistrationFailure,
} from './index';

export function* deleteRegistration({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(registrationDelete, id);

    toast.success('Matrícula removida com sucesso');

    yield put(deleteRegistrationSuccess(response.data));
    yield put(listRegistrationRequest(1));
  } catch (err) {
    toast.error(requestFailMessage);
    yield put(deleteRegistrationFailure());
  }
}

export default all([takeLatest(Types.REQUEST, deleteRegistration)]);
