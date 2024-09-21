import { useParams } from "react-router-dom";

export default function PokemonProject() {

	let {pokemonNumber} = useParams();

    return (
        <div>
            <h1>Pokemon Project</h1>
            <p>Here is a list of Pokemon:</p>
            <ul>
                <li>Bulbasaur</li>
                <li>Charmander</li>
                <li>Squirtle</li>
            </ul>
			{pokemonNumber && <h1>Pokemon number is {pokemonNumber}</h1>}
			
        </div>
    );
}