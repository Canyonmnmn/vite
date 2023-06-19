import logo1 from '@assets/icons/logo1.svg';
import { ReactComponent as ReactLogo } from '@assets/icons/logo2.svg';
import './index.scss';
export function Header() {
  return (
    <p className="header">
      <img className="m-auto mb-4" src={logo1}></img>
      <ReactLogo />
    </p>
  );
}
