export const Skeleton = () => {
    return <div className="animate-pulse flex justify-center flex-col p-4">
            <div className=" flex">
                <div className=" flex justify-center flex-col px-1 py-2">
                    <div className="w-7 h-7 bg-slate-200 rounded-full"></div>
                </div>
                <div className=" flex justify-center flex-col px-1 py-2">
                    <div className="h-2 w-40 bg-gray-200 rounded-full"></div>
                </div>
            </div>
            
            <div className="h-4 bg-gray-200 rounded-full max-w-[384px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[500px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[500px] mb-2.5"></div>
            <span className="sr-only">Loading...</span>
        </div>
};

export const SkeletonBlog = () => {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-12 px-10 pt-16 max-w-screen-xl">
        <div className="col-span-8 w-full">
            <div className=" flex justify-center flex-col py-2">
              <div className="h-10 max-w-md bg-gray-200 rounded-full"></div>
            </div>

          <div className="h-4 bg-gray-200 rounded-full max-w-[384px] my-4"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-xl my-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-lg my-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-xl my-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-lg my-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-xl my-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-lg my-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-xl my-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-lg my-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-xl my-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-lg my-2.5"></div>
        </div>
        <div className="col-span-4 w-full pl-4">
        <div className="h-4 bg-gray-200 rounded-full max-w-[50px] my-2.5"></div>
          <div className="grid grid-cols-8 pt-1">
            <div className="col-span-1 p-2 pt-7">
              <div className="w-7 h-7 bg-slate-200 rounded-full"></div>
            </div>
            <div className="col-span-7">
            <div className="h-5 bg-gray-200 rounded-full max-w-[200px] my-2.5 py-2"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[250px] my-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[250px] my-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[250px] my-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full max-w-[250px] my-2.5"></div>
            </div>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};