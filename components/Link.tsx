import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@styles/Navbar.module.css';

type LinkProps = {
  href: string;
  children: JSX.Element | JSX.Element[];
};

const Links: FC<LinkProps> = ({ href, children }) => {
  const router = useRouter();
  //@ts-ignore
  if (router.pathname === href) {
    className = `${className} selected`;
  }
  

  //@ts-ignore
  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default Links;
