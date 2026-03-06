
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <Link
        aria-label="LinkedIn"
        className="text-gray-dark dark:text-gray-medium hover:text-accent hover:scale-125 transition-all duration-500"
        href="https://www.linkedin.com/in/maximo-titon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={20} />
      </Link>
      <Link
        aria-label="Instagram"
        className="text-gray-dark dark:text-gray-medium hover:text-accent hover:scale-125 transition-all duration-500"
        href="https://www.instagram.com/maxi_titon/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={20} />
      </Link>
    </div>
  );
}