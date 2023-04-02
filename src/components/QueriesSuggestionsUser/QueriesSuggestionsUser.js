import React, { useState } from 'react';
import { CustomSelect } from './CustomSelect/CustomSelect';
import { SendBlock } from './SendBlock/SendBlock';
import { NotSendBlock } from './NotSendBlock/NotSendBlock';
import './QueriesSuggestionsUser.scss';
import { UserCardTest } from './UserCardTest/UserCardTest';
import closeModal from './icons/close.svg';
import AllRoomsInTheHotel from 'components/primeCabinetComponent/InfoComponent/AllRoomsInTheHotel';

const testRoomArr = [
	{ 1: { single: 1, double: 0 } },
	{ 1: { single: 2, double: 0 } },
	{ 1: { single: 1, double: 0 }, 2: { single: 0, double: 1 } },
	{ 1: { single: 0, double: 2 }, 2: { single: 0, double: 2 } },
	{ 1: { single: 1, double: 2 } },
	{ 1: { single: 1, double: 2 } },
	{ total: 10, free: 10 },
];

const testArrayData = [
	{
		rooms: testRoomArr[0],
		location: '1234567891112ssssssss',
		lastBlock: 0,
		travelWork: true,
		guestHostel: true,
		priceNight: '12345678',
		animal: 'smallDog',
	},
	{
		rooms: testRoomArr[1],
		priceNight: '1234567',
		animal: 'mediumDog',
	},
	{
		rooms: testRoomArr[6],
		lastBlock: 1,
		guestHostel: true,
		countNight: '110',
		animal: 'largeDog',
		hostel: true,
	},
	{
		rooms: testRoomArr[3],
		travelWork: true,
		priceNight: '123456',
		countNight: '13',
		animal: 'raccoon',
	},
	{
		rooms: testRoomArr[2],
		priceNight: '12345678666',
		animal: 'cat',
	},
	{
		rooms: testRoomArr[4],
		lastBlock: 0,
		travelWork: true,
		countNight: '130',
		animal: 'notPredator',
	},
];

export const QueriesSuggestionsUser = ({ hotels }) => {
	const [testActive, setTestActive] = useState(false);
	const [open, setOpen] = useState(false);
	const [indexCard, setIndexCard] = useState(0);

	const onClickUserCard = index => {
		setIndexCard(index);
		setOpen(true);
	};

	return (
		<div className="queriesSuggestionsUser">
			<CustomSelect />
			<div className="container-test">
				{testArrayData.map((card, index) => {
					return (
						<UserCardTest
							key={index}
							rooms={card.rooms}
							location={card.location}
							lastBlock={card.lastBlock}
							travelWork={card.travelWork}
							guestHostel={card.guestHostel}
							priceNight={card.priceNight}
							animal={card.animal}
							index={index}
							onClickCard={onClickUserCard}
							hostel={card.hostel}
						/>
					);
				})}
				<button className="button-test" onClick={() => setTestActive(!testActive)}>
					Перемикач тимчасовий
				</button>
			</div>
			<SendBlock active={testActive} />
			{!testActive && <NotSendBlock />}
			{testActive && (
				<di className="container-test">
					<UserCardTest
						lastBlock={2}
						travelWork={true}
						rooms={{ 2: { single: 1, double: 0 } }}
						priceNight="123456"
						countNight="13"
						animal="raccoon"
					/>
					<UserCardTest
						rooms={{ total: 10, free: 8 }}
						lastBlock={2}
						priceNight={12345678666}
						guestHostel={true}
						animal="cat"
						hostel={true}
					/>
					<UserCardTest lastBlock={2} travelWork={true} countNight="130" animal="notPredator" />
				</di>
			)}
			{open && (
				<div className="modal">
					<div className="modal-wrapper">
						<div>
							<UserCardTest
								rooms={testArrayData[indexCard].rooms}
								location={testArrayData[indexCard].location}
								lastBlock={testArrayData[indexCard].lastBlock}
								travelWork={testArrayData[indexCard].travelWork}
								guestHostel={testArrayData[indexCard].guestHostel}
								priceNight={testArrayData[indexCard].priceNight}
								animal={testArrayData[indexCard].animal}
								hostel={testArrayData[indexCard].hostel}
							/>
							<div className="modal-test">
								<p className="modal-test__title">Подходящие варианты бронирования:</p>
								{hotels.map(({ bedOptions }) => {
									return <AllRoomsInTheHotel allRooms={bedOptions} HTC={false} />;
								})}
							</div>
						</div>
						<img
							src={closeModal}
							alt="Ops"
							className="modal-button-close"
							onClick={() => {
								setOpen(false);
							}}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
