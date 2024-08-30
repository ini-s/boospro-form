import { ReactNode } from "react";

interface IShowViewProps {
  when: boolean;
  children: ReactNode;
}

const ShowView = ({ when, children }: IShowViewProps) => {
  return when ? children : null;
};

export default ShowView;
