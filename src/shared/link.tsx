import * as React from "react";
import { Link } from "react-router-dom";

type MyLinkProps = {
  to: string;
  className?: string;
};

const MyLink: React.FC<React.PropsWithChildren<MyLinkProps>> = ({
  children,
  to,
  className,
}) => (
  <Link
    className={`cursor-pointer flex items-center justify-center ${className}`}
    to={to}
  >
    {children}
  </Link>
);

export default MyLink;
