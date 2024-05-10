import React from 'react';

const Chat = () => {
  return (
    <div className="border rounded max-w-md mx-auto bg-white dark:bg-zinc-800 shadow-md overflow-hidden">
      <div className="flex flex-col h-[400px]">
        <div className="px-4 py-3 border-b dark:border-zinc-700 flex-shrink-0">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
              Chat Room
            </h2>
            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Online
            </div>
          </div>
        </div>
        <div
          className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
          id="chatDisplay"
        >
          <div className="chat-message self-end bg-blue-600 text-white max-w-xs rounded-lg px-3 py-2 text-sm">
            Hi there! 👋
            <span className="text-gray-500 text-xs float-right">10:20 AM</span>
          </div>
          <div className="chat-message self-start bg-gray-200 text-black max-w-xs rounded-lg px-3 py-2 text-sm flex items-center">
            <img
              src="user-avatar.png"
              alt="User 1 Avatar"
              className="w-6 h-6 rounded-full mr-2"
            />
            Hey! How are you doing? 😊
            <span className="text-gray-500 text-xs float-right">10:22 AM</span>
          </div>
          <div className="chat-message self-end bg-blue-600 text-white max-w-xs rounded-lg px-3 py-2 text-sm">
            Great! Just hanging out. What about you? 😄
            <span className="text-gray-500 text-xs float-right">10:25 AM</span>
          </div>
        </div>
        <div className="px-3 py-2 border-t dark:border-zinc-700">
          <div className="flex gap-2">
            <input
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg outline-none dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm w-full hover:bg-gray-100 transition duration-300 ease-in-out"
              id="chatInput"
              type="text"
            />
            <button
              className="bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-3 rounded-lg transition duration-300 ease-in-out text-base"
              id="sendButton"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
