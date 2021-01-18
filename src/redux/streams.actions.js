import StreamsActionTypes from "./streams.types";

export const addStream = (stream) => ({
  type: StreamsActionTypes.ADD_STREAM,
  payload: stream,
});

export const removeStream = (stream) => ({
  type: StreamsActionTypes.REMOVE_STREAM,
  payload: stream,
});
