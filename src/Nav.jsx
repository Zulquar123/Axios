
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="flex justify-between w-[20%] m-auto">
      <Link to="/">Home</Link>
      <Link to="/show">Show Data</Link>
      <Link to="/services">Services</Link>
    </nav>
  );
}
