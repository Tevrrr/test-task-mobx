import { FC } from 'react';
import style from './controlPanel.module.css';
import Select from '../../ui/select';

interface ControlPanelProps {
	title?: string;
}

const ControlPanel: FC<ControlPanelProps> = ({ title = 'Result' }) => {
	return (
		<div className={style.control_panel}>
			<p className={style.control_panel__result}>{title}</p>
			<Select />
		</div>
	);
};

export default ControlPanel;
