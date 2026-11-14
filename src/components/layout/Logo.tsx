import { Link } from 'react-router-dom';
import logo from '@/assets/Logo.png';

export default function Logo() {
  return (
    <Link to="/" className="group flex items-center" aria-label="Odevico home">
      <img
        src={logo}
        alt="Odevico"
        className="h-9 w-auto transition-transform duration-500 group-hover:scale-105"
      />
    </Link>
  );
}
