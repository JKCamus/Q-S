const App = () => {
  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      console.log("触发~");
    }, 1000);
  }, []);

  const clearTimer = () => {
    clearInterval(timer);
  };

  return (
    <>
      <Button onClick={clearTimer}>stop</Button>
    </>
  );
};


