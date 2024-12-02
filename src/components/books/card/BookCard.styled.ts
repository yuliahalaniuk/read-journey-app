import styled from "styled-components";
import { FlexBox } from "../../../atoms/Flex";
import DeleteBtn from "../../../atoms/components/DeleteBtn";
import { CardSize } from "../../../types/global";

export const CardWrapper = styled(FlexBox)<{ size: CardSize }>`
  flex-direction: column;
  width: 100%;
  /* max-width: ${({ size }) =>
    size === CardSize.Large ? "137px" : "71px"}; */
  /* height: ${({ size }) => (size === CardSize.Large ? "320px" : "140px")}; */
  border-radius: 8px;
  overflow: hidden;
  background-color: transparent;
  margin: 0 auto;
  flex: 1;

  @media screen and (min-width: 768px) {
    max-width: ${({ size }) => (size === CardSize.Large ? "180px" : "71px")};
    height: ${({ size }) => (size === CardSize.Large ? "320px" : "140px")};
  }
`;

export const ImageContainer = styled.div<{ size: CardSize }>`
  /* width: 100%; */
  /* height: ${({ size }) => (size === CardSize.Large ? "255px" : "107px")}; */
  overflow: hidden;
  max-width: ${({ size }) => (size === CardSize.Large ? "137px" : "71px")};
  flex: 1%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div<{ size: CardSize }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ size }) => (size === CardSize.Large ? "8px" : "4px")};
  width: 100%;
  height: ${({ size }) => (size === CardSize.Large ? "65px" : "34px")};
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
  font-size: ${({ size }) => (size === CardSize.Large ? "16px" : "10px")};
  margin-bottom: ${({ size }) => (size === CardSize.Large ? "4px" : "2px")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Author = styled.p<{ size: CardSize }>`
  font-weight: 500;
  font-size: ${({ size }) => (size === CardSize.Large ? "12px" : "10px")};
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
