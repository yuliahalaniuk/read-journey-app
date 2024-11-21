import React from "react";
import { BaseLink } from "../BaseLink";
import ArrowRight from "../../assets/ArrowRight";

const LinkWithArrow = ({ href, text }: { href: string; text?: string }) => {
  return (
    <BaseLink
      to={href}
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      }}
    >
      <span>{text}</span>
      <ArrowRight />
    </BaseLink>
  );
};

export default LinkWithArrow;
