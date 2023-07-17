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
      data-anchor={idName || null}
      className={`${
        styles || ''
      } flex flex-col justify-start items-center mx-auto min-h-[50vh] w-11/12 max-w-5xl scroll-mt-16`}
    >
      {children}
    </section>
  );
};

export default Container;
