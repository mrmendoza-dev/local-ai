import { Route, Routes } from "react-router-dom";

import Home from "@pages/Home";
import ChatComponent from "@components/ChatComponent";

function Main() {
  return (
    <div className="Main h-full">
      <main className="p-4 md:ml-64 h-auto pt-20">
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
        <ChatComponent />
      </main>
    </div>
  );
}

export default Main;