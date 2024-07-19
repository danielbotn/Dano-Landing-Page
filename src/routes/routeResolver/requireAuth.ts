import { getAccessToken, getRefreshToken } from './auth';

const requireAuth = () => {
	const accessToken = getAccessToken();
	const refreshToken = getRefreshToken();

	if (!accessToken || !refreshToken) {
		return {
			redirect: '/login'
		};
	}
};

export default requireAuth;
