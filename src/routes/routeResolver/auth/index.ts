export const getAccessToken = (): string | null => {
	return sessionStorage.getItem('accessToken');
};

export const getRefreshToken = (): string | null => {
	return sessionStorage.getItem('refreshToken');
};
