import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16">
      <h1 className="text-4xl font-bold">AWESOME TO DO LIST 😎</h1>
      <div>
        <div className="mt-8 text-sm font-semibold">
          If I only had an hour to chop down a tree, I would spend the first 45
          minutes sharpening my axe, Abrabam Lincoln
        </div>
        <div className="text-xs">
          나무 베는데 한 시간이 주어진다면, 도끼를 가는데 45분을 쓰겠다,
          에비브러햄 링컨
        </div>
        <form className="flex mt-2">
          <input
            className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
            type="text"
          />
          <input
            className="ml-4 px-2 py-1 bg-pink-400 rounded-lg text-gray-50"
            type="submit"
            value="새 투두 생성"
          />
        </form>
      </div>
      <div className="mt-16 flex flex-col w-1/2">
        <div className="flex my-4">
          <div className="border-4 border-pink-400 w-8 h-8 rounded-xl"></div>
          <div className="text-2xl ml-4 truncate">🧹 청소하기</div>
        </div>
        <div className="flex my-4">
          <div className="relative">
            <div className="border-4 border-pink-400 w-8 h-8 rounded-xl bg-pink-400 p-2"></div>
            <div className="absolute border-4 border-white top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 scale-75 rounded-xl bg-pink-400 p-2"></div>
          </div>
          <div className="text-2xl ml-4 truncate">👕 빨래하기</div>
        </div>
      </div>
    </div>
  );
}

export default App;
