export const Images = (props) => {
  return (
    <img
      src={props.url}
      width="200px"
      height="250px"
      alt={props.alt}
      style={props.style}
    />
  );
};
