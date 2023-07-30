import ErrorHandler from "../utilities/ErrorHandler.js";



export const isAuthenticated = (req, res, next) => {
  const token = req.cookies["connect.sid"];
  if (!token) {
    return next(new ErrorHandler("Not Logged In", 401));
  }
  next();
};
export const authentizeAdmin = (req, res, next) => {

  if (req.user.role !=="admin") {
    return next(new ErrorHandler("ONLY ADMIN ALLOWED", 405));
  }
  next();
};