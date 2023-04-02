import "./DropDownList.scss";
import SelectBed from "../Assents/image/SelectBed.svg";

export default function DropDownList({ options, changerDescription }) {
  return (
    <div className="ddl__block">
      <div className="ddl__hidline"></div>
      <ul className="ddl__list">
        {options.map((el) => (
          <li
            key={el.id}
            className="ddl__item"
            onClick={() => {
              changerDescription(el.city);
            }}
          >
            <svg className="ddl__icon">
              <use href={`${SelectBed}#location-2`}></use>
            </svg>
            <span className="ddl__city">{el.city}</span>
            <div className="ddl__group">
              <span className="ddl__region">{el.region}</span>
              <span className="ddl__country">{el.country}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
