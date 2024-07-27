import TopSells from "./topsells";

const Body = function Body() {
  return (
    <div className="flex flex-col bg-black w-full h-[600px]">
      <div className="flex flex-col items-center w-full pt-10 pb-8">
        <h1 className="text-white text-5xl font-bold">Top Sells!</h1>
      </div>
      <div className="flex-grow">
        <TopSells />
      </div>
    </div>
  );
}

export default Body;
