import styled from "styled-components";
import { FlexBox } from "../../../atoms/Flex";
import DeleteBtn from "../../../atoms/DeleteBtn";

const BookCard = ({
  img,
  name,
  subtext,
  deleteAction,
}: {
  img?: any;
  name?: string;
  subtext?: string;
  deleteAction?: () => void;
}) => {
  return (
    <FlexBox>
      <img alt="hr" />

      <NameText>{name}</NameText>
      <SubText>{subtext}</SubText>

      {deleteAction && <DeleteBtn onClick={deleteAction} />}
    </FlexBox>
  );
};

const NameText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.main};
  margin-bottom: 2px;
  text-align: center;
`;

const SubText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 117%;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.text.secondary};
  text-align: center;

  margin-bottom: 4px;
`;
export default BookCard;
