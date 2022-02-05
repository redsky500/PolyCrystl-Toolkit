import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <path d="m305.886 182.805-175.532-177.254c-9.144-9.233-25.117-6.236-30.266 5.72l-98.626 228.966c-2.601 6.037-1.674 13.434 2.328 18.643l188.412 245.215c9.415 12.251 28.301 8.66 32.581-6.16l53.692-185.927c2.685-9.296-11.729-13.458-14.413-4.162l-39.772 137.726 13.269-179.614 52.951-49.699-16.051 55.584c-2.685 9.295 11.729 13.457 14.413 4.162l21.658-74.998c1.685-5.836-.286-13.801-4.644-18.202zm-210.431 109.966 78.02 162.33-145.413-189.253zm110.634 195.557-94.145-195.88 110.151-20.779zm26.752-238.516-97.41-217.814 158.716 160.274zm-127.813-212.09-2.178 46.835c-.449 9.662 14.536 10.373 14.985.697l2.353-50.596 99.381 222.222-16.755 3.161-93.93 17.719 7.278-156.501c.449-9.663-14.536-10.368-14.985-.697l-7.229 155.453-78.119-31.208z" />
      <path d="m508.012 181.883-41.402-58.434c-6.147-8.675-17.55-11.603-27.117-6.963l-64.434 31.257c-5.736 2.783-9.935 7.92-11.521 14.096l-65.65 255.667c-1.442 5.617-.686 11.198 2.243 16.248l39.1 67.404c5.974 10.3 19.704 13.829 29.906 7.679l30.721-18.517c8.287-4.994.542-17.842-7.744-12.848l-13.7 8.258 26.207-38.527 18.766 11.419-4.271 2.574c-8.286 4.995-.543 17.841 7.745 12.848 7.983-4.812 16.291-8.79 18.807-18.592l65.649-255.666c1.586-6.176.381-12.701-3.305-17.903zm-14.351 5.694-22.964 1.159-5.614-41.494zm-96.631 240.379-43.271-11.12 58.027-225.984 43.271 11.12zm-43.925 4.201 37.119 9.539-31.781 46.723zm102.156-245.622-36.216-9.307 29.555-39.925zm-50.802-14.817-19.564-12.072 44.47-21.573zm-28.051.319 21.341 13.168-59.003 229.783-25.006 1.106zm-60.523 258.977 21.95-.971 4.402 46.4zm116.573 15.565-21.381-13.01 59.003-229.783 25.046-1.264z" />
    </Svg>
  );
};

export default Icon;
