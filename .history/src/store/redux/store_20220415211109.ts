import React from 'react';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';


const reducerPack = combineReducers({
    
})

type reducerPackType = typeof reducerPack

export type AppStateType = ReturnType<reducerPackType>
export type InfernActionType<T> = T extends { [key:string]: (...args: any[]) => infer U }? U : never

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore

const store = createStore( 
    reducerPack, 
    composeWithDevTools(applyMiddleware(thunkMiddleware))
    )

export default store