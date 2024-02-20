import Head from "next/head";
import { ReactNode } from "react";


export interface AppLayoutProps {
  children: ReactNode;
  title: string;
  breadcrumbs?: Array<{ title: string; href?: string }>;
}

export const AppLayout = ({
  children,
  title,
}: AppLayoutProps) => {

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};
