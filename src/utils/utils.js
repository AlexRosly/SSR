import { useEffect } from "react";

export function useOuterCloser(ref, callback) {
  useEffect(() => {
    function handleClickOuter(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOuter);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOuter);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
