import { useTranslation } from 'react-i18next';

import './Reviews.scss';
import defaultBG from '../Assents/image/Vector.jpg';

export default function Reviews({ backgroundImage = defaultBG }) {
	const { t } = useTranslation('common');

	const background = ` linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(96, 96, 96, 0.305) 50.83%, rgba(56, 56, 56, 0.43) 71.67%, rgba(0, 0, 0, 0.44) 100%), url(${backgroundImage})`;

	return (
		<div className="reviews__section">
			<div className="reviews__bg" style={{ backgroundImage: background }}>
				<p className="reviews">{t('reviews')}</p>
			</div>
			<div className="reviews__block">
				<p className="reviews__messages">{t('noReviewsYet')} </p>
			</div>
		</div>
	);
}
