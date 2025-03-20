import React, { useState } from "react";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom";
import { auth } from "./firebaseConfig";
import { signOut } from "firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <>
          <button
            onClick={() => signOut(auth).then(() => setUser(null))}
            className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
          <ChatRoom user={user} />
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
};

export default App;
