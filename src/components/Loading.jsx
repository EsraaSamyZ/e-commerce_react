const Loading = ({ children, loading, error }) => {
  if (loading) {
    return (
      <div className="text-center">
      <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Error</h4>
        <p className="mb-0">{error}</p>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;
