
export default function PokemonSelectField(pokemonList: any){
    return (
        <select>
            {
                pokemonList.pokemonList.map((x: object) => <option value={Object.values(x)[0]} key={Object.values(x)[0]}>{Object.keys(x)}</option>)
            }
        </select>
    );
}