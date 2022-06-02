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

// Another Solution
function MyTime() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const now1 = new Date();
    const target = new Date(now1.getTime());

    const interval = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - target.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-wrapper">
      <span
        style={{ fontSize: '1.3rem', marginRight: '8px' }}
      >{`${hours}: ${minutes}: ${seconds}`}</span>
    </div>
  );
}

export default Timer;
