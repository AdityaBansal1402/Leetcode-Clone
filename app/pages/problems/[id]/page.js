export default function Myworkspace() {
    return (
      <div className="h-screen-minus-navbar bg-zinc-950 flex flex-col overflow-hidden">
        <div className="flex text-white flex-grow m-[1%] overflow-hidden">
          <div className="bg-stone-800 p-[1%] min-w-[35%] max-w-[50%] overflow-auto rounded-xl">
            <h1>Title</h1>
            <p>Description</p>
          </div>
          <div className="bg-stone-800 p-[1%] ml-[1%] grow min-w-[35%] max-w-[75`%] overflow-auto rounded-xl">
            
          </div>
        </div>
      </div>
    );
  }