import './Header.css';
import HeaderNav from './HeaderNav/HeaderNav';

export default function Header() {
  return <div className='Header'>
    <div className='Header-top'>
      Get your dream house in a week.
    </div>
    <HeaderNav/>
  </div>
}