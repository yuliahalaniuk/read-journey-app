import styled from "styled-components";
import { FlexBox } from "../../../atoms/FlexBox";
import DeleteBtn from "../../../atoms/components/DeleteBtn";
import { CardSize } from "../../../types/global";

export const CardWrapper = styled(FlexBox)<{ size: CardSize }>`
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  background-color: transparent;
  margin: 0 auto;
  flex: 1;
  max-width: ${({ size }) => (size === CardSize.Large ? "137px" : "71px")};
`;

export const ImageContainer = styled.div<{ size: CardSize }>`
  overflow: hidden;
  max-width: ${({ size }) => (size === CardSize.Large ? "137px" : "71px")};
  height: ${({ size }) => (size === CardSize.Large ? "208px" : "107px")};
  border-radius: 8px;
  flex: 1;

  img {
    height: ${({ size }) => (size === CardSize.Large ? "208px" : "107px")};
    object-fit: cover;
  }
`;

export const Content = styled.div<{ size: CardSize }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${({ size }) => (size === CardSize.Large ? "8px" : "4px")};
  width: 100%;
`;

export const TextContainer = styled.div<{ size: CardSize }>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const Title = styled.p<{ size: CardSize }>`
  font-weight: 700;
  color: ${(p) => p.theme.text.main};
  font-size: ${({ size }) => (size === CardSize.Large ? "14px" : "10px")};
  margin-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Author = styled.p<{ size: CardSize }>`
  font-weight: 500;
  font-size: 10px;
  color: ${(p) => p.theme.text.secondary};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const DeleteBtnWrapper = styled(DeleteBtn)`
  flex-shrink: 0;
  align-self: flex-start;
  margin-left: 8px;
`;
