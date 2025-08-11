'use client';

import { AuthWallForm } from '@/app/_components/AuthWall/AuthWallForm';
import { useAuthWall } from '@/app/_components/AuthWall/AuthWallProvider';

export const ProfilePage = () => {
	const { jobTitle, username } = useAuthWall();

	return <AuthWallForm defaultJobTitle={jobTitle} defaultUsername={username} />;
};
