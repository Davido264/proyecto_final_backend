function beforeMethod(req, res, next) {
  console.log(`Attempt to call ${req.method} on ${req.path}`);
  next();
}

export default beforeMethod;
