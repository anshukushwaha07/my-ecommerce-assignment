const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-sm mb-4 text-gray-600">
      {items.map((item, i) => (
        <span key={i}>
          {item}
          {i !== items.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
