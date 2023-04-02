import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import { Suspense, useState } from 'react';
import s from './infoComponentPrime.module.scss';
import hotels from './hotels.json';
import UserCardBooking from './UserCardBooking';
import { ActiveBookingsList } from 'components/BookingPropose/components';
import { QueriesSuggestionsUser } from 'components/QueriesSuggestionsUser/QueriesSuggestionsUser';
import { AddObject } from 'components/AddObject';

export default function LeftBlock() {
	const [showNotice] = useState(false);
	const [showProppose, setShowProppose] = useState(false);

	const [proposeList, setProposeList] = useState([]);
	const [isProposeLoading, setIsProposeLoading] = useState(false);

	const fetchProposes = query => {
		// fetch('https://mydatabase.com/locations/v2/', query)
		//   .then(response => response.json())
		//   .then(response => setProposeList(response))
		//   .catch(err => console.error(err));

		setIsProposeLoading(true);
		// setShowProppose(!showProppose);
		// Making a simulation of fetching data from database

		setTimeout(() => {
			setProposeList(hotels);
			setIsProposeLoading(false);
			setShowProppose(true);
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}, 1000);
	};

	return (
		<>
			{showNotice && <ActiveBookingsList />}
			{proposeList?.length === 0 && !isProposeLoading && (
				<div className={s.left_default_block}>
					<Suspense fallback="">
						<AddObject />
					</Suspense>

					<button className={s.btn__fetch} onClick={fetchProposes}>
						Get Cards
					</button>
				</div>
			)}
			{isProposeLoading && <LoadingSpinner />}
			{showProppose && !showNotice && !isProposeLoading && (
				<>
					<UserCardBooking hotels={proposeList} />
					<QueriesSuggestionsUser hotels={proposeList} />
				</>
			)}
		</>
	);
}
