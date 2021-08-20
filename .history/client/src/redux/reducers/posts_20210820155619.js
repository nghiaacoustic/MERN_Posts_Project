import { INIT_STATE } from "../../constants";
import { getPosts } from "../actions";

export default function postsReducers(state = INIT_STATE, action) {
    switch(action.type){
        case getPosts.getPostsRequest()
    }
    return {...state}
}