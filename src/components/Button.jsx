export const Button = ({
  content,
  bgcolor,
  color,
  loading,
  reason,
  reasoncompletebutton,
}) => {
  return (
    <button
      disabled={loading}
      style={{ backgroundColor: bgcolor, color: color }}
      className={`capitalize  max-sm:text-sm max-sm:px-8 hover:scale-105 active:scale-95 transition-all ease-linear  px-20 py-2 font-semibold text-xl rounded-full ${
        reasoncompletebutton && !reason?.trim()
          ? "opacity-45 cursor-not-allowed"
          : ""
      } `}
    >
      {content}
    </button>
  );
};
