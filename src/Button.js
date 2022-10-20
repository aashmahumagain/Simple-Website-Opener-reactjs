const Button = ({ name, link }) => {
  return (
    <div className="btn-group">
      <a href={link} target="_blank">
        <button className="button">{name}</button>
      </a>
    </div>
  );
};
export default Button;
