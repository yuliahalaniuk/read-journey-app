import DelIcon from "../../assets/DelIcon";
import { DelButton } from "../Buttons";

const DeleteBtn = (props: any) => {
  return (
    <DelButton {...props}>
      <DelIcon />
    </DelButton>
  );
};

export default DeleteBtn;
