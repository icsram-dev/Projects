const Pictures = ({ fails }) => {
  const hangmanImages = [
    "/images/0.png",
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
  ];

  return (
    <div>
      <p>Fails: {fails}/10</p>
      <img src={hangmanImages[fails]} alt={`hangman-${fails}`} />
    </div>
  );
};

export default Pictures;
