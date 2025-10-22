function Button({ children }) {
  return (
    <button className="text-text-primary bg-btn-main hover:text-btn-main hover:bg-text-primary cursor-pointer rounded-sm px-4 py-3 capitalize transition-colors duration-300">
      {children}
    </button>
  );
}

export default Button;
