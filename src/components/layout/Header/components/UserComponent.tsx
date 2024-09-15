import React from "react";
import { AvatarBox, UserName } from "./Styles.styled";
import { FlexBox } from "../../../../atoms/Flex";

const user = { name: "Alona New" };

const UserComponent = () => {
  return (
    <FlexBox $fDirection="row" $gap="8px">
      <AvatarBox>
        {/* <p> {user ? user?.name?.slice(1)?.toLocaleUpperCase() : "A"}</p> */}
        <p>A</p>
      </AvatarBox>
      <UserName>{user?.name}</UserName>
    </FlexBox>
  );
};

export default UserComponent;
