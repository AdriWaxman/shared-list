import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode,
};

 const Layout = ({children}: LayoutProps) => {
  return (
    <main className="sm:container sm:mx-auto d-flex justify-center">
      {children}
    </main>
  )
}

export default Layout;
