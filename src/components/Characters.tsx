import React from "react";

interface Character {
	id: number;
	name: string;
	img_url: string;
}

interface CharactersProps {
	characters: Character[];
}

const Characters = ({ characters }: CharactersProps) => {
	return (
		<ul>
			{characters.map((character) => {
				return (
					<li key={character.id}>
						<h3>{character.name}</h3>
						<img
							width={150}
							src={character.img_url}
							alt={`Image of ${character.name}`}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default Characters;
