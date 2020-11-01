import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@styles/Navbar.module.css';

const Links =  ({ href, children }) => {
  const router = useRouter()
  
  let className = children.props.className || ''
  if (router.pathname === href) {
    
    className = `${className} selected`
    
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default Links