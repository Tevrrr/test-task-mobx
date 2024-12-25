import { FC, useEffect, useRef, useState } from 'react';
import style from './select.module.css';
import downArrow from '../../../assets/svg/down.svg';

interface SelectProps {}

const Select: FC<SelectProps> = () => {
	const selectRef = useRef<HTMLButtonElement | null>(null);
	const [isOpen, setIsOpen] = useState(false);

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
			<p>New first</p>
			<img
				className={
					isOpen ? style.select__arrow_open : style.select__arrow
				}
				src={downArrow}
				alt='down arrow'
			/>
			{isOpen && (
				<div className={style.select__down_container}>
					<div className={style.down_container__item}>aaa</div>
					<div className={style.down_container__item}>aaa</div>
					<div className={style.down_container__item}>aaa</div>
					<div className={style.down_container__item}>aaa</div>
					<div className={style.down_container__item}>aaa</div>
					<div className={style.down_container__item}>aaa</div>
				</div>
			)}
		</button>
	);
};

export default Select;
