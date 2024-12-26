import { FC, useEffect, useRef, useState } from 'react';
import style from './select.module.css';
import downArrow from '../../../assets/svg/down.svg';
import { SORTS } from '../../../consts/sorts';
import { Sort } from '../../../types/interfaces/sort';
import { useSort } from '../../../hook/useSort';

const Select: FC = () => {
	const selectRef = useRef<HTMLButtonElement | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [targetValue, setTargetValue] = useState<Sort | null>(null);
	const { setSort } = useSort();

	const onChangeHandler = (sort: Sort) => () => {
		setTargetValue(sort);
		setSort(sort.value);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				selectRef.current &&
				!selectRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);
	return (
		<button
			ref={selectRef}
			onClick={() => setIsOpen(!isOpen)}
			className={style.select}>
			<p>{targetValue ? targetValue.title : 'Выберите сортировку'}</p>
			<img
				className={
					isOpen ? style.select__arrow_open : style.select__arrow
				}
				src={downArrow}
				alt='down arrow'
			/>
			{isOpen && (
				<div className={style.select__down_container}>
					{SORTS.map((item) => (
						<button
							onClick={onChangeHandler(item)}
							className={style.down_container__item}>
							{item.title}
						</button>
					))}
				</div>
			)}
		</button>
	);
};

export default Select;
