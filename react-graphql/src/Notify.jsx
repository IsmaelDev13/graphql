export const Notify = ({ errorMessage }) => {
  if (!errorMessage) return null;

  return (
    <div style={{ color: "green", position: "fixed", top: 0, width: "100%" }}>
      {errorMessage}
    </div>
  );
};
