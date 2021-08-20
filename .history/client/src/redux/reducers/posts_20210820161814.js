import { INIT_STATE } from "../../constants";
import { getPosts, getType } from "../actions";

export default function postsReducers(state = INIT_STATE, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest):
            return {
                ...state,
                isLoading: true
            }
        case getType(getPosts.getPost.getPostsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPosts.getPostsFailure):
            return {
                ...state,
                isLoading: false,
            }
    }
    return { ...state }
}