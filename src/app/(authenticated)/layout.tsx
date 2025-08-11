import { cookies } from 'next/headers';
import { ApolloProvider } from '../_components/ApolloProvider';
import { AuthWallForm } from '../_components/AuthWall/AuthWallForm';
import { AuthWallProvider } from '../_components/AuthWall/AuthWallProvider';
import { Auth } from '../_components/AuthWall/type';

export default async function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
	const authCookie = (await cookies()).get('auth')?.value;
	let auth: Auth | null = null;

	if (authCookie) {
		try {
			auth = JSON.parse(authCookie);
		} catch (error) {
			console.error('Failed to parse auth cookie:', error);
		}
	}

	if (!auth) {
		return <AuthWallForm />;
	}

	return (
		<AuthWallProvider auth={auth}>
			<ApolloProvider>{children}</ApolloProvider>
		</AuthWallProvider>
	);
}
