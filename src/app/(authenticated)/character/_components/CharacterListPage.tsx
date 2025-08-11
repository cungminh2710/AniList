'use client';

import { gql, useQuery } from '@apollo/client';
import { Button, ButtonGroup, CloseButton, Container, Dialog, Group, Portal, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const CharacterListQuery = gql`
	query CharacterList($page: Int) {
		characters(page: $page) {
			info {
				prev
				next
			}
			results {
				id
				name
				status
				species
				gender
				image
			}
		}
	}
`;

// Use https://github.com/dotansimha/graphql-code-generator if have more time
// to generate types from the GraphQL schema
// For now, we will use a simple type definition for the episode
type Character = {
	id: string;
	name: string;
	status: string;
	species: string;
	gender: string;
	image: string;
};

export const CharacterListPage = ({ page = 1 }: { page?: number }) => {
	const { data, loading, error } = useQuery(CharacterListQuery, {
		variables: { page },
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<Container>
			<ul>
				{data.characters.results.map((character: Character) => (
					<Group asChild key={character.id} m={2} direction='column'>
						<li>
							<Dialog.Root>
								<Dialog.Trigger asChild>
									<Button p={2}>{character.name}</Button>
								</Dialog.Trigger>
								<Portal>
									<Dialog.Backdrop />
									<Dialog.Positioner>
										<Dialog.Content p={5}>
											<Dialog.Header>
												<Dialog.Title>{character.name}</Dialog.Title>
											</Dialog.Header>
											<Dialog.Body>
												<Image src={character.image} alt={character.name} width={400} height={300}/>

												<Text>Status: {character.status}</Text>
												<Text>Species: {character.species}</Text>
												<Text>Gender: {character.gender}</Text>
											</Dialog.Body>
											<Dialog.Footer>
												<Button p={2} asChild>
													<Link href={`/character/${character.id}`}>View Character</Link>
												</Button>
											</Dialog.Footer>
											<Dialog.CloseTrigger asChild>
												<CloseButton size='sm' />
											</Dialog.CloseTrigger>
										</Dialog.Content>
									</Dialog.Positioner>
								</Portal>
							</Dialog.Root>
						</li>
					</Group>
				))}
			</ul>
			<Text m={2} p={3}>
				Page: {page}
			</Text>
			<ButtonGroup>
				<Button m={2} p={4} disabled={!data.characters.info.prev} asChild>
					<Link href={`/character?page=${data.characters.info.prev}`}>Previous Page</Link>
				</Button>
				<Button m={2} p={4} disabled={!data.characters.info.next} asChild>
					<Link href={`/character?page=${data.characters.info.next}`}>Next Page</Link>
				</Button>
			</ButtonGroup>
		</Container>
	);
};
