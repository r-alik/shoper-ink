import { ReactNode } from 'react';

const Container = ({
  idName,
  styles,
  children,
}: {
  idName?: string;
  styles?: string;
  children: ReactNode;
}) => {
  return (
    <section
      id={idName}
      className={`${
        styles || ''
      } flex flex-col justify-start items-center mx-auto min-h-[50vh] w-11/12 max-w-5xl scroll-mt-16`}
    >
      {children}
    </section>
  );
};

export default Container;

/*
border-Accent-light/30 border-b-2 
*/
