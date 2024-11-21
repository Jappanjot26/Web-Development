export default function Layout2() {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 m-4 grid-rows-4">
        <div className="bg-blue-500 p-6 rounded text-white col-span-3 row-span-2">
          Home
        </div>
        <div className="bg-blue-500 p-6 rounded text-white col-span-3 row-span-2">
          About
        </div>
        <div className="bg-blue-500 p-6 rounded text-white col-span-6 row-start-3">
          Pricing
        </div>
        <div className="bg-blue-500 p-6 rounded text-white col-span-2 row-start-4">
          Customers
        </div>
        <div className="bg-blue-500 p-6 rounded text-white col-span-2 row-start-4">
          Offers
        </div>
        <div className="bg-blue-500 p-6 rounded text-white col-span-2 row-start-4">
          Contact
        </div>
        <div className="bg-blue-500 p-6 rounded text-white col-span-6">
          Projects
        </div>
        <div className="bg-blue-500 p-6 rounded text-white col-span-2 row-start-2 col-start-7">
          Blog
        </div>
        <div className="bg-blue-500 p-6 rounded text-white col-span-2 row-start-2 col-start-9">
          Gallery
        </div>
        <div className="bg-blue-500 p-6 rounded text-white col-span-2 row-start-2 col-start-11">
          Portfolio
        </div>
        <div className="bg-blue-500 p-6 rounded text-white col-span-6 row-span-2">
          Events
        </div>
      </div>
    </>
  );
}
