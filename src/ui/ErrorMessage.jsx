function ErrorMessage({ message = "Something went wrong" }) {
  return (
    <div className="border-border-subtle bg-surface-card text-text-secondary rounded-md border p-4">
      {message}
    </div>
  );
}

export default ErrorMessage;
