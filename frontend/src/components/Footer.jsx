import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-lg text-slate-100 border-b-2 border-slate-700 w-fit pb-1 mb-2">Get to Know Us</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press Releases</li>
              <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-lg text-slate-100 border-b-2 border-slate-700 w-fit pb-1 mb-2">Connect</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-white cursor-pointer transition-colors">Twitter X</li>
              <li className="hover:text-white cursor-pointer transition-colors">Facebook</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-lg text-slate-100 border-b-2 border-slate-700 w-fit pb-1 mb-2">Help</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Payments</li>
              <li className="hover:text-white cursor-pointer transition-colors">Shipping & Delivery</li>
              <li className="hover:text-white cursor-pointer transition-colors">Returns & Refunds</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-lg text-slate-100 border-b-2 border-slate-700 w-fit pb-1 mb-2">Stay Updated</h4>
            <p className="text-slate-400 text-sm">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="p-3 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full transition-all text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium transition-colors shadow-md">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} ShopMERN . All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
