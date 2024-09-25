import { AvatarBox, UserName } from "./UserComponent.styled";
import { FlexBox } from "../../../../../atoms/Flex";
import { useMediaQuery } from "react-responsive";

const user = { name: "Alona New" };

const UserComponent = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  return isDesktop ? (
    <FlexBox $fDirection="row" $gap="8px">
      <AvatarBox>
        {/* <p> {user ? user?.name?.slice(1)?.toLocaleUpperCase() : "A"}</p> */}
        <p>A</p>
      </AvatarBox>
      <UserName>{user?.name}</UserName>
    </FlexBox>
  ) : (
    <AvatarBox>
      {/* <p> {user ? user?.name?.slice(1)?.toLocaleUpperCase() : "A"}</p> */}
      <p>A</p>
    </AvatarBox>
  );
};

export default UserComponent;
