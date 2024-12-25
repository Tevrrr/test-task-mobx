import { FC } from 'react';
import style from './search.module.css';

interface SearchProps {}

const Search: FC<SearchProps> = () => {
	return <input placeholder='Search' className={style.search_input}></input>;
};

export default Search;
