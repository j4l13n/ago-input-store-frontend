import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="h-12 z-20 text-gray-200 py-4 text-center">
      <p className="text-sm">&copy; {currentYear} Ago Input Store. All rights reserved.</p>
    </div>
  );
};

export default Footer;
