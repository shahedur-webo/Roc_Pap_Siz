import { useState, useEffect } from 'react';

function CurrentDate() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();

  return (
    <div className='date'>
      <div>{date.toDateString()}</div>
      <div>{`${hours}:${minutes < 10 ? '0' : ''}${minutes}`}</div>
    </div>
  );
}

export default CurrentDate;
