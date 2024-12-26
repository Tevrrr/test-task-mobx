import { DependencyList, useEffect } from 'react';

export const useThrottle = (
	props: () => void,
	delay: number,
	dependencyList: DependencyList
) => {
	useEffect(() => {
		const timeout = setTimeout(props, delay);
		return () => {
			clearTimeout(timeout);
		};
	}, dependencyList);
};
