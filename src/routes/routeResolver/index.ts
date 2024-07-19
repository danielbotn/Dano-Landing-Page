import requireAuth from './requireAuth';

export default [
	{
		name: 'about',
		pattern: '/about',
		resolver: requireAuth,
		component: 'About.svelte'
	}
];
