import { useEffect, useRef, useState } from "react";

import K1 from "./afzalImdadSVGs/K1";
import K2 from "./afzalImdadSVGs/K2";
import K3 from "./afzalImdadSVGs/K3";


const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`ai-afzal-imdad-parallax ${className}`}
  >
    <SVG />
  </div>
)


export default function AfzalImdad({ }) {
  const ref = useRef()

  const [mount, handleMount] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll()
  }, []);

  const isInViewport = () => {
    const rect = ref?.current?.getBoundingClientRect();
    return (rect?.top < window.innerHeight / 2)
  }

  const handleScroll = () => {
    handleMount(isInViewport())
  }

  return (
    <div ref={ref} className={`ai-afzal-imdad ${mount ? 'ai-afzal-imdad-visible' : ''}`}>
      <SvgWrapper
        className="ai_svg_K1"
        SVG={K1}
      />
      <SvgWrapper
        className="ai_svg_K2"
        SVG={K2}
      />
      <SvgWrapper
        className="ai_svg_K3"
        SVG={K3}
      />
    </div>
  )
}
