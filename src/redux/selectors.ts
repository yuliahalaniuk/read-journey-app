import { useSelector } from "react-redux";
import { RootState } from "./store";

export const useAuthSelector = (): AuthenticatorAttestationResponse =>
  useSelector((s: RootState) => s.auth);
