import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
};

export default Container;
