import { getPokemonList } from "../lib/PokeApi";
import PokemonSelectField from "../ui/PokemonSelectField";

export default async function pokemonTeamBuilder(){
    //Grab the list of pokemon to use for the pokemon select
    let pokemonlist = await getPokemonList()

    return(
        <main>
            <PokemonSelectField pokemonList = {pokemonlist} />
        </main>
    )
}