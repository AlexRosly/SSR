import { useEffect, useState } from 'react';
import room1x1 from '../../UserCabinet/BedOptions/image/icon/1x1.png';
import './HostelList.scss';

export const HostelList = ({ bad }) => {
	const [countBad, setCountBad] = useState([]);

	useEffect(() => {
		const rez = [];

		for (let i = 0; i < bad.free; i++) {
			rez.push(room1x1);
		}

		setCountBad(rez);
	}, [bad]);

	return (
		<div className="hostel-list__wrapper">
			{countBad.map(bad => (
				<div className="hostel-list__block">
					<div className="hostel-list__block__test">
						<img className="hostel-list__img" src={bad} alt="ops" />
					</div>
					<p className="hostel-list__title">Односпальная кровать</p>
				</div>
			))}
		</div>
	);
};
