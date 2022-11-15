import * as React from "react";

export function useCurrentWidth() {
  const getWidth = () => window.innerWidth;

  let [width, setWidth] = React.useState(getWidth());

  React.useEffect(() => {
    let timeoutId: any = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(getWidth()), 150);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  });

  return width;
}
