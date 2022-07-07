const Cell = ({ index, value, handleClick }) => {
  return (
    <div className="cell" onClick={() => handleClick(index)}>
      {value}
    </div>
  );
};
