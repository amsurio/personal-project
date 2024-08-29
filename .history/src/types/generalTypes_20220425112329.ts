import React from 'react';

//                                  BOOKS-REDUCER GENERAL TYPES

export type bookType = {
    id: number,
    name: string,
    author: string,
    description: string,
    price: number,
    image: string,
    rating: number,
    genreId: number,
}

export type createBookType = {
    name: ()=>void,
    author: string,
    description: string,
    price: number,
    image: string,
    genreId: number
}

export type userType ={
    id?: number,
    email?: string,
    password?: string,
    role?: string
}

export type selectedCategory = {
    id?: number,
    name?: string
}

export type addGenre = {
    name: string
}

export type GenresType = {
    id: number
    name: string
}