import { useState } from 'react';
import './codeCountry.scss';

import { codeData } from './baseCode';
// import PhoneInput from "react-phone-number-input";

export const CodeCountry = ({ onChangeCode }) => {
  const initial = { code: '380', country: 'Ukraine (Україна)' };
  const [search, setSearch] = useState([]);
  const [code, setCode] = useState(initial.code);
  // const [country, setCountry] = useState(initial.country)
  const [touch, setTouch] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // selectCode()
  };
  const codeTouch = () => {
    setTouch(true);
    setSearch(codeData);
  };
  const codeClose = () => {
    setTouch(false);
  };
  const codeSearch = e => {
    const res = codeData.filter(
      value =>
        value.country.toLowerCase().includes(e.target.value.toLowerCase()) ||
        value.code.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearch(res);
  };

  const selectCode = el => {
    el.stopPropagation();
    setCode(el.target.value);
    onChangeCode('+' + el.target.value);
    setTouch(false);
  };

  return (
    <div className="">
      <div className="container-code-country">
        {!touch && (
          <div className="block__code-input border-hover-input " onClick={codeTouch}>
            <label className="label-code-input">Код страны</label>
            <input type="tel" defaultValue={`+${code}`} maxLength="7" className="code-input " />
          </div>
        )}

        {touch && (
          <div className=" modal__backdrop ">
            <div className="modal__body">
              <div className="modal__body-block">
                <div className="modal__body-block-label">
                  <label className="label-modal-input">Выберите код страны</label>
                  <div className="modal__body-block2">
                    <button className="modal__close" onClick={codeClose}></button>
                  </div>
                </div>
                <div className="modal__body-input border-hover-input ">
                  <input
                    type="tel"
                    maxLength="15"
                    onChange={codeSearch}
                    className="code-input "
                    onSubmit={handleSubmit}
                  />
                </div>
                <div className="modal__container-ul scroll-container">
                  {search.map((item, index) => (
                    <div key={index} className="modal__body-container-ul ">
                      <ul className="modal__body-ul">
                        <li className="modal__body-li " onClick={selectCode} value={item.code}>
                          {item.country} <p></p>
                          {item.code}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
