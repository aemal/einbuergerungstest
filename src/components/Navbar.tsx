import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useScrollAnimation("navbar-button");

  return (
    <nav>
      <button id="navbar-button" onClick={toggleDrawer} className="fixed top-2 left-2 z-40 flex justify-between items-center rounded-md bg-blue-500 p-2 w-12 h-12 transition-transform duration-300 ease-in-out text-white focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeDrawer}></div>
          <div className={`fixed top-0 bottom-0 bg-white w-64 shadow-lg z-50 p-4 flex flex-col transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
            <div className="flex justify-end mb-4">
              <button onClick={closeDrawer} className="text-black focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <Link href="/view1" className={`block text-black p-2 rounded ${pathname === '/view1' ? 'bg-gray-200' : ''}`} onClick={closeDrawer}>Interactive</Link>
              <Link href="/view3" className={`block text-black p-2 rounded ${pathname === '/view3' ? 'bg-gray-200' : ''}`} onClick={closeDrawer}>Read Only</Link>
              <Link href="/words" className={`block text-black p-2 rounded ${pathname === '/words' ? 'bg-gray-200' : ''}`} onClick={closeDrawer}>Flashcards</Link>
              <Link href="/test" className={`block text-black p-2 rounded ${pathname === '/test' ? 'bg-gray-200' : ''}`} onClick={closeDrawer}>Practice Test</Link>
              <Link href="/wrong" className={`block text-black p-2 rounded ${pathname === '/wrong' ? 'bg-gray-200' : ''}`} onClick={closeDrawer}>Wrong Answers</Link>
              <Link href="/marked" className={`block text-black p-2 rounded ${pathname === '/marked' ? 'bg-gray-200' : ''}`} onClick={closeDrawer}>Marked Questions</Link>
              <Link href="/settings" className={`block text-black p-2 rounded ${pathname === '/settings' ? 'bg-gray-200' : ''}`} onClick={closeDrawer}>Settings</Link>
              <Link href="https://buymeacoffee.com/aemal" className={`fixed bottom-2 text-black p-2 rounded`} onClick={closeDrawer}>Buy me a coffee!</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
