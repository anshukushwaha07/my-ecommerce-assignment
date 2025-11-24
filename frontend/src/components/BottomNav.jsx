import { FaHome, FaList, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t flex justify-around py-2 md:hidden">
      <FaHome />
      <FaList />
      <FaSearch />
      <FaShoppingCart />
      <FaUser />
    </div>
  );
};

export default BottomNav;
