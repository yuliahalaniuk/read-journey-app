import { RefObject, useEffect, useState } from "react";
import { throttle } from "lodash";

const useScrollUp = (scrollRef?: RefObject<HTMLElement | null>) => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const scrollElement = scrollRef?.current || document.documentElement;

    const handleScroll = throttle(() => {
      const currentScrollY = scrollElement.scrollTop || document.body.scrollTop;

      if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    }, 100);

    const target = scrollRef?.current || window;
    target.addEventListener("scroll", handleScroll);

    return () => {
      target.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [lastScrollY, scrollRef]);

  return { isScrollingUp };
};

export default useScrollUp;
