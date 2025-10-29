function Button({ children, type = "primary", onClick }) {
  const main = `text-text-primary cursor-pointer rounded-sm px-4 py-3 capitalize transition-colors duration-300 font-semibold text-sm lg:text-base`;

  const primary =
    main + ` bg-btn-main hover:text-btn-main hover:bg-text-primary`;

  const secondary = main + ` bg-surface-alt hover:bg-red-900`;

  return (
    <button
      className={type === "primary" ? primary : secondary}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
