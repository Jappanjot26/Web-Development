export default function Layout1() {
  return (
    <>
      <div className="container bg-green-300 my-6 mx-auto h-96 flex flex-col">
        <div className="bg-blue-400 text-center text-white p-5 h-16 w-full">
          Header
        </div>
        <div className="flex h-64">
          <div className="bg-red-400 p-4 text-white basis-1/2">Content</div>
          <div className="bg-yellow-300 p-4 text-white basis-1/2">Sidebar</div>
        </div>
        <div className="bg-slate-500 text-white text-center h-16 items-center p-5">
          Footer
        </div>
      </div>
    </>
  );
}
