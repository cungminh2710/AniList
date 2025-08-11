import { Header } from '@/app/_components/Header';
import { CharacterDetail } from './_components/CharacterDetail';

export default async function CharacterPageRSC({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id;

	return (
		<>
			<Header heading={`Character ${id}`} />
			<CharacterDetail id={id} />
		</>
	);
}
