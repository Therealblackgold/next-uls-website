const TeamSquare = ({ name, title }) => {
  return (
    <div className="square text-center mb-5">
      <i class="bi bi-patch-check fs-4" style={{ color: "#222" }}></i>
      <h4>{name}</h4>
      <span className="lead">{title}</span>
    </div>
  );
};

export default TeamSquare;
