import { AvatarBox, UserName } from "./UserComponent.styled";
import { FlexBox } from "../../../../../atoms/Flex";
import { useMediaQuery } from "react-responsive";
import { useAuthSelector } from "../../../../../redux/selectors";
import { isDesktopQuery } from "../../../../../utils/mediaQueries";

const UserComponent = () => {
  const isDesktop = useMediaQuery(isDesktopQuery);
  const { user } = useAuthSelector();

  return isDesktop ? (
    <FlexBox $fDirection="row" $gap="8px" style={{ maxWidth: "max-content" }}>
      <AvatarBox>
        <p>
          {" "}
          {user?.displayName
            ? user?.displayName?.substring(0, 1)?.toLocaleUpperCase()
            : "A"}
        </p>
      </AvatarBox>
      <UserName>{user?.displayName}</UserName>
    </FlexBox>
  ) : (
    <AvatarBox>
      <p>
        {" "}
        {user?.displayName
          ? user?.displayName?.substring(0, 1)?.toLocaleUpperCase()
          : "A"}
      </p>
    </AvatarBox>
  );
};

export default UserComponent;
