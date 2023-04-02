const root = document.querySelector<HTMLDivElement>('#root');
const modalRoot = document.querySelector<HTMLDivElement>('#modal-root');
const drawer = document.querySelector<HTMLDivElement>('#drawer');

export const getRefs = () => {
  if (!root || !modalRoot || !drawer) {
    throw new Error('Please add div id="root", "modal-root" and "drawer" into index.html');
  }

  return { root, modalRoot, drawer };
};
