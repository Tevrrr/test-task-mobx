import { MutableRefObject, useEffect } from 'react';

export const useOutsideClick = <T extends HTMLElement>(
	ref: MutableRefObject<T | null>,
	isOpen: boolean,
	outside?: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				outside?.();
			}
		};
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);
};
