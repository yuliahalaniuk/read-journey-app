import React from "react";
import { TransparentBtn } from "./Buttons";
import { useAuth } from "../providers/AuthProvider";

const LogoutBtn = () => {
  const auth = useAuth();

  return (
    <TransparentBtn
      onClick={() => {
        auth.logOut();
      }}
    >
      Log out
    </TransparentBtn>
  );
};

export default LogoutBtn;
