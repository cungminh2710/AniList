'use client';

import { gql, useQuery } from '@apollo/client';
import { Center, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

const CharacterDetailQuery = gql`
	query CharacterDetail($id: ID!) {
		character(id: $id) {
			id
			name
			image
			status
			species
			gender
		}
	}
`;

// Use https://github.com/dotansimha/graphql-code-generator if have more time
// to generate types from the GraphQL schema
type CharacterDetail = {
	id: string;
	name: string;
	image: string;
	status: string;
	species: string;
	gender: string;
};

export const CharacterDetail = ({ id }: { id: string }) => {
	const { data, loading, error } = useQuery(CharacterDetailQuery, {
		variables: { id },
	});

	if (loading) return <Text>Loading...</Text>;
	if (error) return <Text>Error: {error.message}</Text>;

	const character = data.character as CharacterDetail;

	return (
		<Center>
			<Stack>
				<Text>{character.name}</Text>
				<Image src={character.image} alt={character.name} width={400} height={300} objectFit='cover' />

				<Text>Status: {character.status}</Text>
				<Text>Species: {character.species}</Text>
				<Text>Gender: {character.gender}</Text>
			</Stack>
		</Center>
	);
};
