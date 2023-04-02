// import { useState } from "react";
// import { useDispatch } from "react-redux";

import MoreText from 'assets/icons/common/on.svg';
import SmallText from 'assets/icons/common/off.svg';
// import locationIcon from "assets/icons/common/location.svg";

// import cardActions from "../../redux/userCard/userCard-actions";
import s from './Description.module.scss';

const Description = ({ id, street, description, isShowText, onToggleElement }) => {
  const descByParagraph = description.a;
  const smallDescription = descByParagraph.slice(0, 232).concat('...');

  return (
    <section className={s.container}>
      <div>
        {/* title block */}
        <div className={s.locationContainer}>
          <svg className={s.location} width="13" height="18" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 0C2.91028 0 0 2.53755 0 5.66832C0 8.28351 4.53688 15.4679 6.03003 17.7614C6.23723 18.0795 6.76277 18.0795 6.96997 17.7614C8.46312 15.4679 13 8.28351 13 5.66832C13 2.53755 10.0895 0 6.5 0ZM6.5 7.68867C5.02482 7.68867 3.82894 6.6458 3.82894 5.35937C3.82894 4.07258 5.02482 3.02971 6.5 3.02971C7.97518 3.02971 9.17106 4.07258 9.17106 5.35937C9.17106 6.6458 7.97518 7.68867 6.5 7.68867Z" />
          </svg>

          {/* <img src={locationIcon} className={} /> */}
          <h2 className={s.title}>{street}</h2>
        </div>
        {/* text block */}
        <div>
          <div className={s.desc}>
            <p> {(isShowText && smallDescription) || description.a}</p>
            <br />
            <p> {isShowText || description.b}</p>
          </div>
          {/* button open more text*/}
          <button type="button" onClick={() => onToggleElement(id)} className={s.btn}>
            <div>
              {isShowText ? (
                <img src={MoreText} className={s.link} alt="Show more" />
              ) : (
                <img src={SmallText} className={s.activeLink} alt="more" />
              )}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Description;
