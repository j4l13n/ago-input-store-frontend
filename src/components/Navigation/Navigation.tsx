// components/Navigation.tsx

import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-white text-xl font-bold">
            Ago Input Store
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/login" className="text-white">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="text-white">
              Register
            </Link>
          </li>
          <li>
            <Link href="/forgot-password" className="text-white">
              Forgot Password
            </Link>
          </li>
          <li>
            <Link href="/orders" className="text-white">
              Orders
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
