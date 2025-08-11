'use client';

import { ApolloProvider as _ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';
import { client } from './apolloClient';

export const ApolloProvider = ({ children }: PropsWithChildren) => {
	return <_ApolloProvider client={client}>{children}</_ApolloProvider>;
};
