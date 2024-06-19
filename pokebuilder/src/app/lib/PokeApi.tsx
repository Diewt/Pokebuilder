//File to handle all the api calls to the pokeAPI: https://pokeapi.co/docs/v2#info

// Grab a list of pokemon names for the drop down select
export async function getPokemonList() {
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const pokeJson = await response.json();
        
        // Potential Issue Going forward if going with paginate idea
        // Mapping the index will give 1-20 everytime and will not be a reliable way of finding the pokemon's index
        const pokemonList = pokeJson.results.map(({name}: typeof pokeJson, index: number) => ({ [name]: (index + 1)}));

        return pokemonList
    }
    catch (error){
        console.log('Fetching error: ', error)
        throw new Error('failed to fetch pokemon list')
    }
}