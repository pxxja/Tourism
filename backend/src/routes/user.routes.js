import { Router } from "express";
import { registerUser,loginUser, getUser, createBooking, getBookingDetails } from "../controllers/user.controller.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";

const router=Router();


router.route("/register").post(registerUser)

//how url works
// http://localhost:8000/api/v1/users/register

router.route("/login").post(loginUser)
router.route("/userDetails/:id").get(getUser)
router.route("/bookTour").post(createBooking)
router.route("/bookingDetails/:id").get(getBookingDetails)

//Secured routes
// router.route("/logout").post( verifyJWT, logoutUser)
// router.route("/contact").post(contactUs)


export default router