import { legacy_createStore } from 'redux'

import Reducer from './Reducer/Reducer'





const initialState=[]
const store=legacy_createStore(Reducer,initialState);
export default store;