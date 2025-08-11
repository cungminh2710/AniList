'use client';

import { useState } from 'react';
import { Box, Button, Input, VStack } from '@chakra-ui/react';

export const AuthWallForm = ({
	defaultUsername,
	defaultJobTitle,
}: {
	defaultUsername?: string;
	defaultJobTitle?: string;
}) => {
	const [form, setForm] = useState({ username: defaultUsername ?? '', jobTitle: defaultJobTitle ?? '' });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Set form data to cookie "auth"
		document.cookie = `auth=${encodeURIComponent(JSON.stringify(form))}; path=/`;
    window.location.reload(); // Reload to apply the new auth cookie
	};

	return (
		<Box maxW='md' mx='auto' mt={8}>
			<form onSubmit={handleSubmit}>
				<VStack>
					<Input
						name='username'
						value={form.username}
						onChange={handleChange}
						placeholder='Enter your username'
						autoComplete='off'
					/>
					<Input
						name='jobTitle'
						value={form.jobTitle}
						onChange={handleChange}
						placeholder='Enter your job title'
						autoComplete='off'
					/>
					<Button type='submit' colorScheme='teal' width='full'>
						Submit
					</Button>
				</VStack>
			</form>
		</Box>
	);
};
