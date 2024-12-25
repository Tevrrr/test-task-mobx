import { FC } from 'react';
import style from './controlPanel.module.css';
import Select from '../../ui/select';

interface ControlPanelProps {}

const ControlPanel: FC<ControlPanelProps> = () => {
	return (
		<div className={style.control_panel}>
			<p className={style.control_panel__result}>
				Result: 100 repositories
			</p>
			<Select />
		</div>
	);
};

export default ControlPanel;
