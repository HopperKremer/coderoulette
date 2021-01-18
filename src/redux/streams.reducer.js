import StreamsActionTypes from "./streams.types";
import { addStream, removeStream } from "./streams.actions";
import STREAM_LIST from "./streams.data";

initialState = {
  streams: STREAM_LIST,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case StreamsActionTypes.ADD_STREAM:
      return addStream(state, action);
    case StreamsActionTypes.REMOVE_STREAM:
      return;
    default:
  }
};

export default reducer;
