import { call, takeLatest} from 'redux-saga/effects';
import * as actions from './../actions';
import * as api from '../../api'

function* fetchPostSaga(action) {
    const posts = yield call(api.fetchPosts);
    console.log(posts)
}

function* mySaga() {
    yield takeLastest(actions.getPosts.getPostRequest, fetchPostSaga)
}

export default mySaga