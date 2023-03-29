import styled from "@emotion/styled";

const Pizza = ({ isPlaying }: { isPlaying: boolean }) => {
  const paths = [
    "M35.24,3.39l-5.45,14.98c-.4,1.1-1.95,1.1-2.35,0L21.98,3.39c-.6-1.65,.62-3.39,2.37-3.39h8.51c1.75,0,2.97,1.74,2.37,3.39Z",
    "M17.86,4.5l5.45,14.98c.4,1.1-.79,2.09-1.8,1.51L7.7,13.03c-1.52-.88-1.7-2.99-.36-4.12L13.87,3.43c1.34-1.13,3.4-.58,4,1.07Z",
    "M5.27,16.53l13.81,7.97c1.01,.58,.74,2.11-.41,2.31l-15.7,2.77c-1.73,.3-3.23-1.2-2.92-2.92l1.48-8.39c.3-1.73,2.23-2.62,3.75-1.75Z",
    "M3.35,33.83l15.7-2.77c1.15-.2,1.92,1.14,1.17,2.03l-10.25,12.21c-1.13,1.34-3.24,1.16-4.12-.36l-4.26-7.37c-.88-1.52,.02-3.44,1.75-3.75Z",
    "M13,48.32l10.25-12.21c.75-.89,2.21-.36,2.21,.8v15.94c0,1.75-1.74,2.97-3.39,2.37l-8-2.91c-1.65-.6-2.2-2.65-1.07-4Z",
    "M29.71,53.22v-15.94c0-1.17,1.46-1.7,2.21-.8l10.25,12.21c1.13,1.34,.58,3.4-1.07,4l-8,2.91c-1.65,.6-3.39-.62-3.39-2.37Z",
    "M45.66,46.23l-10.25-12.21c-.75-.89,.03-2.24,1.17-2.03l15.7,2.77c1.73,.3,2.62,2.23,1.75,3.75l-4.26,7.37c-.88,1.52-2.99,1.7-4.12,.36Z",
    "M53.38,30.62l-15.7-2.77c-1.15-.2-1.42-1.73-.41-2.31l13.81-7.97c1.52-.88,3.44,.02,3.75,1.75l1.48,8.39c.3,1.73-1.2,3.23-2.92,2.92Z",
    "M49.26,13.7l-13.81,7.97c-1.01,.58-2.2-.41-1.8-1.51l5.45-14.98c.6-1.65,2.65-2.2,4-1.07l6.52,5.47c1.34,1.13,1.16,3.24-.36,4.12Z",
  ];

  return (
    <StyledPizza
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56.34 55.74"
      style={{
        animationPlayState: isPlaying ? `running` : `paused`,
      }}
    >
      <g id="Layer_1-2">
        <g>
          {paths.map((d, i) => (
            <Path d={d} key={i} style={{ ["--delay" as any]: i }} />
          ))}
        </g>
      </g>
    </StyledPizza>
  );
};

export default Pizza;

const StyledPizza = styled.svg`
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Path = styled.path<{ fast?: boolean }>`
  fill: #000;
  animation: ${({ fast }) =>
    fast ? `FairyBreadBiatch2 infinite` : `FairyBreadBiatch infinite`};
  animation-duration: ${({ fast }) => (fast ? `1000ms` : `4500ms`)};
  animation-delay: calc(var(--delay) * 0.1s);

  @keyframes FairyBreadBiatch {
    0% {
      fill: whitesmoke;
    }
    15% {
      fill: gray;
    }
    25% {
      fill: darkgray;
    }
    50% {
      fill: #000;
    }
    75% {
      fill: var(--piss-1);
    }
    100% {
      fill: var(--green-1);
    }
  }

  @keyframes FairyBreadBiatch2 {
    0% {
      fill: white;
    }
    15% {
      fill: #3d315b;
    }
    25% {
      fill: red;
    }
    50% {
      fill: #212c23;
    }
    75% {
      fill: #2e3923;
    }
    100% {
      fill: #2e2f23;
    }
  }
`;
