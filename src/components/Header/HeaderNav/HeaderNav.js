import Button from '../../Button/Button';
import './HeaderNav.css';

export default function HeaderNav() {
  return <div className='HeaderNav'>
    <div className='HeaderNav-start'>
      <div className='HeaderNav-startLogo'/>
      <div className='HeaderNav-startTitle'>Company</div>
    </div>
    <div className='HeaderNav-end'>
      <div className='HeaderNav-endItem'>Home</div>
      <div className='HeaderNav-endItem'>Properties</div>
      <div className='HeaderNav-endItem'>About</div>
      <div className='HeaderNav-endItem'>Contact</div>
      <div className='HeaderNav-endItem'>Search</div>
      <div className='HeaderNav-endItem'>Cart</div>
      <Button
        text = 'Find property'
        // variant = 'hero'
      />
    </div>
  </div>
};