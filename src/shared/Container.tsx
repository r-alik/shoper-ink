import { ReactNode } from 'react';

const Container = ({
  idName,
  children,
}: {
  idName?: string;
  children: ReactNode;
}) => {
  return (
    <section
      id={idName}
      className="flex flex-col justify-start items-center mx-auto  min-h-screen w-11/12 px-1 py-2 max-w-5xl"
    >
      {children}
    </section>
  );
};

export default Container;
