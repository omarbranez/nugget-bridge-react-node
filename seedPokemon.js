import fetch from 'node-fetch'


import connectDB from "./db/connect.js"
import Pokemon from './models/Pokemon.js'

const seedPokemon = async() => {
    try{
        await connectDB(process.env.MONGO_URL)
        await Pokemon.deleteMany()
        const url = "https://pokeapi.co/api/v2/pokemon"
        const response = await fetch(url)
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

seedPokemon()