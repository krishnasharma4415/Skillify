import React from 'react';

const Chat = () => {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden">
      <div className="flex flex-col h-[400px]">
        <div className="px-4 py-3 border-b dark:border-zinc-700">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
              Chat Assistant
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
          <div
            className="chat-message self-end bg-blue-800 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm"
          >
            Hello! How can I assist you today?
          </div>
          <div
            className="chat-message self-start bg-zinc-600 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm"
          >
            Hello! I need a Chatbot!
          </div>
        </div>
        <div className="px-3 py-2 border-t dark:border-zinc-700">
          <div className="flex gap-2">
            <input
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg outline-none dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
              id="chatInput"
              type="text"
            />
            <button
              className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
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