import * as React from 'react';

interface State {
  time: number;
  secounds: number;
  minutes: number;
}
interface Props {
  time: number;
}

const Timer: React.FC<Props> = ({ time }) => {
  debugger;
  const [state, setState] = React.useState<State>({
    time,
    secounds: time * Math.floor((time - 1) / 60) * 60 - 1,
    minutes: Math.floor((time - 1) / 60),
  });

  React.useEffect(() => {
    setTimeout(() => {
      if (state.time === 0) {
        return;
      }

      setState({
        time: state.time + 1,
        secounds: state.time - Math.floor((state.time - 1) / 60) * 60 - 1,
        minutes: Math.floor((state.time - 1) / 60),
      });
    }, 1000);
  }, [state.time]);

  return (
    <h2>{`${state.minutes}: ${
      state.secounds <= 9 ? `0${state.secounds}` : state.secounds
    }`}</h2>
  );
};

export default Timer;
