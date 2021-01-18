import {createStore} from 'react-redux'
import reducer from './streams.reducer'

const store = createStore(reducer)

export default store