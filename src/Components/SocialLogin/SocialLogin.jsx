import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          name: res.user?.displayName,
          email: res.user?.email,
        };
        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <button onClick={handleGoogleLogin} className="btn btn-primary ">
        <FaGoogle className=""></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
