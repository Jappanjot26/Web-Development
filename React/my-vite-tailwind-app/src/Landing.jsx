export default function Landing() {
  return (
    <>
      <nav className="bg-purple-800 text-white flex justify-between items-center px-4">
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="h-10 rounded-3xl"
        />
        <ul className="px-28 py-4 flex space-x-11 justify-end">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">About</li>
        </ul>
      </nav>
      <main className="main bg-fuchsia-900"></main>
    </>
  );
}
