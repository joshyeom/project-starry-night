import { useRef, useEffect, useCallback } from "react";

export const useOthersClick = (onClickOthers) => {
  const ref = useRef(null);

  const handleClickOthers = useCallback(
    (event) => {
      const inside = ref.current?.contains?.(event.target);
      if (ref.current && !inside) {
        onClickOthers();
      }
    },
    [onClickOthers, ref]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOthers);

    return () => {
      document.removeEventListener("click", handleClickOthers);
    };
  }, []);

  return ref;
};
