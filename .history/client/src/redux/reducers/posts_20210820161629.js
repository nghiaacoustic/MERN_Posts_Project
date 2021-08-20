import { INIT_STATE } from "../../constants";
import { getPosts, getType } from "../actions";

export default function postsReducers(state = INIT_STATE, action) {
    switch(action.type){
        case getType(getPosts.getPostsRequest()):
    }
    return {...state}
}