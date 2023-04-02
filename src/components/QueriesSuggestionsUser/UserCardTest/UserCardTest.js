import iconJack from '../../../assets/images/userRequestCard/Rectangle 14.png';
import classNames from 'classnames';
import { AnimalComponent } from './AnimalComponent/AnimalComponent';
import voman from './icons/voman.svg';
import send from './icons/send.svg';
import sendGreen from './icons/send-green.svg';
import './UserCardTest.scss';
import { IconRoomComponent } from 'components/UserRequestCard/IconRoomComponent';
import { BookingKarma } from 'components/UserRequestCard/BookingKarma';
import { useEffect, useState } from 'react';
import { HostelList } from '../HostelList/HostelList';

const YouWeit = () => {
	return (
		<div className="userCardTest__wrapper-5">
			<img src={voman} alt="voww" />
			<p>
				<span>ожидает</span> предложения бронирования от вас
			</p>
		</div>
	);
};

const YouSendAuto = () => {
	return (
		<div className="userCardTest__wrapper-5">
			<img src={send} alt="voww" />
			<p>
				предложение отправлено <span>автоматически 290 UAH</span>
			</p>
		</div>
	);
};

const YouSend = () => {
	return (
		<div className="userCardTest__wrapper-5">
			<img src={sendGreen} alt="voww" />
			<p>
				предложение отправлено <span>вами лично 290 UAH</span>
			</p>
		</div>
	);
};

const lastBlockArr = [<YouWeit />, <YouSendAuto />, <YouSend />];

export const UserCardTest = ({
	animal,
	countNight = 1,
	priceNight,
	guestHostel = false,
	travelWork = false,
	lastBlock = 1,
	location = 'Рига',
	rooms,
	index = -1,
	hostel = false,
	onClickCard = () => {},
}) => {
	const [toggleKarma, setToggleKarma] = useState(false);
	const [toggleBookingTime, setToggleBookingTime] = useState(false);
	const clickKarmaBlock = e => {
		e.stopPropagation();
		setToggleKarma(!toggleKarma);
	};

	const validPrice = price => {
		if (String(price).length > 8) {
			return Number(String(price).slice(0, 8));
		}

		return price;
	};

	const validNight = night => {
		if (String(night).length > 3) {
			return Number(String(night).slice(0, 3));
		}

		return night;
	};

	useEffect(() => {
		const checkClose = e => {
			const boxTime = document.getElementById('bookingTimeId');
			const click = e.composedPath().includes(boxTime);

			if (toggleKarma) {
				setToggleKarma(false);
			}
			if (!click && toggleBookingTime) {
				setToggleBookingTime(false);
			}
		};

		document.addEventListener('click', checkClose);
		return () => {
			document.removeEventListener('click', checkClose);
		};
	}, [toggleKarma, toggleBookingTime]);

	return (
		<div
			className="userCardTest"
			onClick={() => {
				onClickCard(index);
			}}
		>
			{toggleKarma && (
				<div className="karma-user">
					<BookingKarma />
				</div>
			)}
			<div className="userCardTest__wrapper-1">
				<img className="userCardTest__img" src={iconJack} alt="test" />
				<p className="userCardTest__nickName">Джекі Чан</p>

				<div className="userCardTest__text-wrapper" onClick={clickKarmaBlock}>
					<p className="userCardTest__karma">Booking Karma</p>
					<p className="userCardTest__year">22</p>
				</div>

				{travelWork && (
					<div className="userCardTest__work-wrapper">
						<p className="userCardTest__work">Путешествую по работе</p>
					</div>
				)}
			</div>
			<div
				className="userCardTest__wrapper-2"
				onClick={() => {
					onClickCard(index);
				}}
			>
				<div>
					<p
						className={classNames('userCardTest__location', {
							'userCardTest__location--size-15': location.length > 12,
						})}
					>
						{location}
					</p>
					<span className="userCardTest__range-date">23 мар. 2020 - 29 мар. 2020</span>
				</div>
				<AnimalComponent animal={animal} />
			</div>
			<div
				className="userCardTest__wrapper-3"
				onClick={() => {
					onClickCard(index);
				}}
			>
				<div className="userCardTest__wrapper-3-container">
					<p
						className={classNames('userCardTest__night', {
							'userCardTest__night--size-17': String(countNight).length >= 3,
						})}
					>{`ночей: ${validNight(countNight)}`}</p>
					{priceNight ? (
						<>
							<p className="userCardTest__user-price">Юзер предлагает:</p>
							<p className="userCardTest__night-price">
								<span
									className={classNames({
										'userCardTest__night-price--size-11': String(priceNight).length > 6,
									})}
								>
									{validPrice(priceNight)}
								</span>
								{` UAH  за ночь`}
							</p>
						</>
					) : (
						<p className="userCardTest__wait-offer">Юзер ждет предложения цены от вас</p>
					)}
					{guestHostel && (
						<p
							data-title={`готов быть в
           комнате с соседями`}
							className="userCardTest__guest-hostel"
						>
							ГБВКСС
						</p>
					)}
				</div>
			</div>
			<div className="userCardTest__wrapper-4">
				{hostel ? <HostelList bad={rooms} /> : <IconRoomComponent room={rooms} user={false} />}
			</div>
			<div>{lastBlockArr[lastBlock]}</div>
		</div>
	);
};
