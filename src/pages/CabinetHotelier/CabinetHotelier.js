// import { Footer } from 'components/Common/Footer';
// import { ListLocation } from '../../components/list/listLocation';
// import { List } from '../../components/list/list';
// import { ListRent } from '../../components/list/listRent';
//import NavbarSideMenu from 'components/SideMenu/navbar';
import InfoComponentPrime from 'components/primeCabinetComponent/InfoComponent/InfoComponentPrime';

import scss from './CabinetHotelier.module.scss';

const CabinetHotelier = () => {
	return (
		<>
			<div className={scss.cabinetHotelierContainer}>
				<InfoComponentPrime />
				{/* <Link to={ROOT}>Home</Link> */}
				{/* <h2>Cabinet Hotelier</h2> */}
				{/* <List />
        <ListLocation />
        <ListRent /> */}
				{/* <NavbarSideMenu /> */}
			</div>
			{/* <Footer /> */}
		</>
	);
};

export default CabinetHotelier;
