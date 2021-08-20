import { takeLastest } from 'redux-saga';
import * as actions from './../actions'

function* fetchPostSaga(action) {

}

function* mySaga() {
    yield takeLastest(actions.getPosts.getPostRequest, fetchPostSaga)
}

export default mySaga