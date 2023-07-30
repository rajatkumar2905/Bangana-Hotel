import express from 'express'
import passport from 'passport';
import { getAdminStats, getAdminUsers, myProfile } from '../Controllers/user.js';
import { authentizeAdmin, isAuthenticated } from '../middlewares/auth.js';




const router = express.Router();

router.get(
    "/googlelogin",
    passport.authenticate("google", {
      scope: ["profile"],
      
    })
  );

router.get("/login", passport.authenticate("google" ,{
    scope: ["profile"],
    successRedirect: process.env.FRONTEND_URL,
   
})
);



router.get("/me", isAuthenticated, myProfile);

router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.clearCookie('connect.sid',{
      secure: process.env.NODE_ENV == "development" ? false : true,
        httpOnly: process.env.NODE_ENV =="development" ? false : true,
        sameSite: process.env.NODE_ENV =="development" ? false : "none",
    }); // Clear the session cookie
    res.status(200).json({
      message:"Loggout Out",
  });
  });
});

router.get("/admin/users", isAuthenticated, authentizeAdmin, getAdminUsers);

router.get("/admin/stats", isAuthenticated , authentizeAdmin, getAdminStats)

export default router;