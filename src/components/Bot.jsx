import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const ChatBotApp = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  const toggleChatBot = () => setShowChatBot(!showChatBot);

  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#007bff",
    headerFontColor: "#fff",
    botBubbleColor: "#007bff",
    botFontColor: "#fff",
    userBubbleColor: "#f5f5f5",
    userFontColor: "#4a4a4a",
  };

  const steps = [
    {
      id: "1",
      message: "Hello! How can I assist you today?",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "Help with a task", trigger: "3" },
        { value: 2, label: "Just chatting", trigger: "4" },
      ],
    },
    {
      id: "3",
      message: "What kind of task would you like help with?",
      trigger: "5",
    },
    {
      id: "4",
      message: "I'm always here for a chat. What would you like to talk about?",
      trigger: "5",
    },
    {
      id: "5",
      message: "Feel free to ask me anything!",
      end: true, // End the conversation after this step
    },
  ];

  return (
    <div>
      {/* Chatbot toggle button */}
      <div
        onClick={toggleChatBot}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600"
      >
        {showChatBot ? "Close Chat" : "Open Chat"}
      </div>

      {/* Chatbot Component */}
      {showChatBot && (
        <div className="fixed bottom-20 right-5 w-80">
          <ThemeProvider theme={theme}>
            <ChatBot steps={steps} headerTitle="Assistant" />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default ChatBotApp;
