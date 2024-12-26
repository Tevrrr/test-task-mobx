import { FC, useRef, useState } from 'react';
import style from './search.module.css';
import { getRepositories } from '../../../api/repository';
import { useOutsideClick } from '../../../hook/useOutsideClick';
import { useThrottle } from '../../../hook/useThrottle';
import { useSearch } from '../../../hook/useSearch';

export interface Hint {
	value: string;
	id: number;
}

const Search: FC = () => {
	const [hints, setHints] = useState<Hint[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const searchRef = useRef<HTMLDivElement | null>(null);

	const { setSearch, search } = useSearch();
	const [searchValue, setSearchValue] = useState(search || '');

	useOutsideClick(searchRef, isOpen, () => setIsOpen(false));
	useThrottle(
		() => {
			setSearch(searchValue);
			if (!searchValue) {
				setHints([]);
			}
			if (searchValue && isOpen) {
				getRepositories({ query: searchValue, perPage: 5 }).then(
					(result) => {
						if (result.key === 'result') {
							const { items } = result.data;
							setHints(
								items.map((item) => ({
									id: item.id,
									value: item.name,
								}))
							);
							return;
						}
					}
				);
			}
		},
		700,
		[searchValue, isOpen]
	);

	return (
		<div ref={searchRef} className={style.search_container}>
			<input
				onFocus={() => setIsOpen(true)}
				placeholder='Search'
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				className={style.search_input}></input>
			{isOpen && hints.length > 0 && (
				<div className={style.select__down_container}>
					{hints.map((item) => (
						<div
							key={item.id}
							onClick={() => {
								setSearchValue(item.value);
								setIsOpen(false);
							}}
							className={style.down_container__item}>
							{item.value}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Search;
