const MinusIcon = (props) => {
  const { size = 20, style = {} } = props;
  return (
    <svg
      style={{
        width: size,
        height: size,
        ...style,
        color: "#00cebd",
        cursor: "pointer",
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-plus-circle"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
};

export default MinusIcon;
