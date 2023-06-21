const TeamSquare = ({ name, title }) => {
  return (
    <div className="square text-center mb-5">
      <h4>{name}</h4>
      <span className="lead text-white">{title}</span>
    </div>
  );
};

export default TeamSquare;
