import PageForm, { ActionType } from "../forms/PageForm";
import { PageFormData } from "../../data/formFieldsInfo";

const PageModal = (props: {
  action: ActionType;
  onValid?: (d: PageFormData) => void;
  btnOnClick?: () => void;
  maxPages?: number;
  minPages?: number;
}) => {
  return <PageForm {...props} />;
};

export default PageModal;
