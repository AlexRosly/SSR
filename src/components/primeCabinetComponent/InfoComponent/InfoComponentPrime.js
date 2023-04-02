import { useState } from 'react';
import RightBlock from './RightBlock';
import LeftBlock from './LeftBlock';
import HeaderWraper from './HeaderWrap';

export default function InfoComponentPrime() {
  const [showContent, setShowContent] = useState('left');

  return (
    <>
      <HeaderWraper setShowContent={setShowContent} showContent={showContent} />
      {showContent === 'left' ? <LeftBlock /> : <RightBlock />}
    </>
  );
}
