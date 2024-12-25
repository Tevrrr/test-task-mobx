import { FC, ReactNode } from 'react';

import styles from './wrapper.module.css';
import Navbar from '../../ordinary/navbar';

interface WrapperProps {
	children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Navbar />
			{children}
		</div>
	);
};

export default Wrapper;
