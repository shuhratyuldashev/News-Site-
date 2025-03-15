import * as React from "react";

type ContainerProps = {
  className?: string;
};

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  children,
  className,
}) => {
  return (
    <main className={`lg:w-[60%] md:w-[80%] w-full mx-auto px-4 ${className}`}>
      {children}
    </main>
  );
};

export default Container;
