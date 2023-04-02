/**
 * if true: https://muffinman.io/blog/get-scrollbar-width-in-javascript/
 * if false: answer from stackOverflow
 */
export const getScrollWidth = (elm: HTMLElement) =>
  elm === document.body
    ? window.innerWidth - document.documentElement.clientWidth
    : elm.getBoundingClientRect().width - elm.clientWidth;
