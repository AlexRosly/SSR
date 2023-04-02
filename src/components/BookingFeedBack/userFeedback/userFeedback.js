import { useState } from 'react';
import { testUsersPosts } from '../testArrPostComments';
import { UserFeedbackItems } from './userFeedbackItems';

const UsersFeedback = () => {
  const [arrUsersFeedback] = useState(testUsersPosts);

  // const onClickLike = id => {
  //   setArrUsersFeedback(prevState =>
  //     prevState.map(item =>
  //       item.id === id
  //         ? { ...item, like: !item.like, likeCount: !item.like ? item.likeCount++ : item.likeCount-- }
  //         : item
  //     )
  //   );
  // };

  return (
    <ul >
      {arrUsersFeedback.map((obj, index) => (
        <UserFeedbackItems key={obj.id} {...obj} />
      ))}
    </ul>
  );
};
export default UsersFeedback;
