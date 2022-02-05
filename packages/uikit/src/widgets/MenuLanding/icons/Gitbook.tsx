import * as React from "react";
import styled from "styled-components";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  const Effect = styled.span`
    &:hover {
      opacity: 0.6;
    }
  `;

  return (
    <Effect>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        {...props}
        style={{ marginTop: "3px", marginLeft: "-5px" }}
      >
        <switch>
          <g>
            <path
              d="M28.8 47.4c1 0 1.9.8 1.9 1.9 0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9 0-1.1.9-1.9 1.9-1.9m29.4-11.6c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9 0 1-.9 1.9-1.9 1.9m0-7.7c-3.2 0-5.8 2.6-5.8 5.8 0 .6.1 1.2.3 1.8L33.6 45.9c-1.1-1.6-2.9-2.5-4.8-2.5-2.2 0-4.2 1.3-5.2 3.2l-17.2-9c-1.8-1-3.2-3.9-3-6.7.1-1.4.6-2.5 1.3-2.9.5-.3 1-.2 1.7.1l.1.1c4.6 2.4 19.5 10.2 20.1 10.5 1 .4 1.5.6 3.2-.2l30.8-16c.5-.2 1-.6 1-1.3 0-.9-.9-1.3-.9-1.3-1.8-.8-4.5-2.1-7.1-3.3C48 14 41.6 11 38.8 9.5c-2.4-1.3-4.4-.2-4.7 0l-.7.3C20.7 16.2 3.9 24.5 2.9 25.1c-1.7 1-2.8 3.1-2.9 5.7-.2 4.1 1.9 8.4 4.9 9.9l18.2 9.4c.4 2.8 2.9 5 5.7 5 3.2 0 5.7-2.5 5.8-5.7l20-10.8c1 .8 2.3 1.2 3.6 1.2 3.2 0 5.8-2.6 5.8-5.8 0-3.3-2.6-5.9-5.8-5.9"
              fill="#b8add2"
            />
          </g>
        </switch>
      </Svg>
    </Effect>
  );
};

export default Icon;
