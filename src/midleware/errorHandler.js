export default (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res
    .status(statusCode)
    .json({ message: `Internal server error. ${err.message}` });
  return;
};
