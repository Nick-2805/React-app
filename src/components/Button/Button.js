import './Button.css'

export default function Button(props) {
  const {text, variant} = props;
  // return <button className = {`Button ${variant === 'hero' && 'Button_hero'}`}>{text}</button>
  return <button className = {`Button ${variant === 'hero'? 'Button_hero' : ''} ${variant=== 'dark' ? 'Button_dark' : ''}`}>{text}</button>
}