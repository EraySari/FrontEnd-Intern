function Button({ children }) {
  return (
    <button type="submit" className="bg-metric text-primary py-3 w-full">
      {children}
    </button>
  );
}

export default Button;
