/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line react-refresh/only-export-components
function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="mb-4 text-gray-600">
      <Link to="/" className="text-blue-600">Home</Link>
      {paths.map((path, index) => (
        <span key={index}>
          {" / "}
          <Link
            to={`/${paths.slice(0, index + 1).join("/")}`}
            className="text-blue-600"
          >
            {path.replace("-", " ")}
          </Link>
        </span>
      ))}
    </nav>
  );
}