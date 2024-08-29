import React from 'react';
import { ThunkAction } from 'redux-thunk';
import { addGenre, GenresType, selectedCategory } from '../../../types/generalTypes';
import {  genresAPI } from '../../api/genresAPI';
import { AppStateType, InfernActionType } from '../store';
import { CHOOSE_GENRE, GET_CATEGORIES, SELECTED_CATEGORY } from '../variables/actionsType';


type initialStateType = {
    genres: Array<GenresType>
    genre: addGenre
}

const initialState:initialStateType = {
    genres: [],
    genre: {name: ''}
}

const filterReducer = (state=initialState, action:ActionCreatorType):initialStateType => {
    switch(action.type) {
        case GET_CATEGORIES:
            return{
                ...state,
                genres: action.genres
            }

        case SELECTED_CATEGORY:
            return{
                ...state,
                genre: action.genre
            }

        default:
            return state
    }
}

type ActionCreatorType = InfernActionType<typeof actions>

const actions = {
    getAllGenres: (genres: Array<GenresType>) => ({
        type: GET_CATEGORIES,
        genres
    } as const),
    setGenre: (genre: addGenre) => ({
        type: SELECTED_CATEGORY,
        genre
    } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatorType>


export const getAllGenres = ():ThunkType => async (dispatch) => {
    const response = await genresAPI.getAllGenres()
    dispatch(actions.getAllGenres(response.data))
}

export const createGenre = (genre: addGenre):ThunkType => async (dispatch) => {
    const response = await genresAPI.createGenre(genre)
    dispatch(actions.setGenre(response.data))
}

export default filterReducer;