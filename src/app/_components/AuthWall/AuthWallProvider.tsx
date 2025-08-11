'use client';

import { createContext, useContext, PropsWithChildren } from 'react';
import { Auth } from './type';

const AuthWallContext = createContext<Auth>({ username: '', jobTitle: '' });

export const AuthWallProvider = ({ auth, children }: PropsWithChildren<{ auth: Auth }>) => {
	return <AuthWallContext.Provider value={auth}>{children}</AuthWallContext.Provider>;
};

export const useAuthWall = (): Auth => {
	const context = useContext(AuthWallContext);
	if (context === null) {
		throw new Error('useAuthWall must be used within an AuthWallProvider');
	}

	return context;
};
