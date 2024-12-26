import { useState } from 'react';

export const useCopy = (delay: number = 200) => {
	const [isCopied, setIsCopied] = useState(false);

	const onCopy = async (value: string) => {
		await navigator.clipboard.writeText(value);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, delay);
	};
	return { isCopied, onCopy };
};
