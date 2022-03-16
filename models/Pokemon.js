import mongoose from 'mongoose'

const pokemonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        
    }
)

const Pokemon = mongoose.model("Pokemon", pokemonSchema)
export default Pokemon