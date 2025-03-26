import React from "react";


const ChatBotPopoverComponent = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50" id="el-su3ibn8g">
      <button
        id="chatbot-trigger"
        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <div className="relative" id="el-vl4agta4">
          <img
            src="https://placehold.co/40x40?text=AI"
            alt="AI Assistant"
            className="w-6 h-6 rounded-full"
            width="40"
            height="40"
            id="el-syk23zmc"
          />
          <span
            className="absolute bottom-0 right-0 h-2 w-2 bg-green-400 rounded-full"
            id="el-jputjjjd"
          ></span>
        </div>
        <span className="ml-2 font-medium" id="el-617ozom3">
          Chat with us
        </span>
      </button>
    </div>
  );
};

export default ChatBotPopoverComponent;
