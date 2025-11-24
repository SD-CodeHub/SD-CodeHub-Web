import { useState, useEffect, useRef } from "react";
import { getBotReply } from "../utils/botEngine";
import PopupAd from "../components/PopupAd"; // adjust path as needed
import logo from "../assets/sdchatboatlogo.png";
import chatIcon from "../assets/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png";

import userImg from "../assets/istockphoto-2163722762-612x612-removebg-preview.png";
import botImg from "../assets/Screenshot_2025-11-22_220452-removebg-preview.png";

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", content: input };
        const botMsg = { role: "bot", content: getBotReply(input) };

        setMessages((prev) => [...prev, userMsg, botMsg]);
        setInput("");
    };

    return (
        <>
            {/* DESKTOP BUTTON — RECTANGLE */}
            <div
                onClick={() => setOpen(!open)}
                className="
          hidden md:flex fixed bottom-6 right-6 
          bg-white border border-black border-2 shadow-xl 
          rounded-full cursor-pointer z-50
          items-center gap-1 px-2 py-1 hover:scale-105 transition p-
        "
            >
                <img src={chatIcon} className="w-10 h-10 rounded-full bg-white border" />
                <span className="font-bold text-black text-sm p-0 m-0">Ask our bot</span>
            </div>

            {/* MOBILE BUTTON — CIRCLE */}
            <div
                onClick={() => setOpen(!open)}
                className="
          md:hidden fixed bottom-6 right-6 w-16 h-16 
          rounded-full overflow-hidden cursor-pointer 
          bg-white border border-black border-2
          shadow-xl flex items-center justify-center
          hover:scale-105 transition-all z-50
        "
            >
                <img src={chatIcon} className="w-10 h-10 object-contain" />
            </div>

            {/* CHAT WINDOW */}
{open && (
  <div
    className="
      fixed bottom-24 right-4 
      w-[90vw] max-w-[360px]
      bg-white rounded-2xl
      border border-black shadow-[0_0_25px_rgba(0,0,0,0.25)]
      flex flex-col z-50
    "
    style={{ height: "70vh", maxHeight: "520px", minHeight: "450px" }}
  >
    {/* HEADER */}
    <div className="flex items-center justify-between p-4 bg-black text-white rounded-t-2xl">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          className="w-10 h-10 rounded-full bg-white border border-black p-1"
        />
        <span className="font-semibold text-lg tracking-wide">
          Customer Assistant
        </span>
      </div>

      <button
        onClick={() => setOpen(false)}
        className="text-white hover:text-gray-300 text-xl"
      >
        ✖
      </button>
    </div>

    {/* POP-UP AD */}
    <PopupAd />

    {/* MESSAGES AREA */}
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto bg-white p-4 space-y-3 scrollbar-hide"
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex items-end ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          {/* BOT SIDE IMAGE */}
          {msg.role === "bot" && (
            <img
              src={botImg}
              className="w-8 h-8 rounded-full bg-white border mr-2"
            />
          )}

          {/* MESSAGE BUBBLE */}
          <div
            className={`
              p-3 max-w-[75%] text-[14px] leading-relaxed rounded-2xl
              border border-black shadow-sm whitespace-pre-line
              ${msg.role === "user"
                ? "bg-black text-white rounded-br-none"
                : "bg-white text-black rounded-bl-none"
              }
            `}
          >
            {msg.content}
          </div>

          {/* USER SIDE IMAGE */}
          {msg.role === "user" && (
            <img
              src={userImg}
              className="w-8 h-8 rounded-full bg-white border ml-2"
            />
          )}
        </div>
      ))}
    </div>

    {/* INPUT AREA */}
    <div className="p-3 border-t flex gap-2 bg-gray-100 rounded-b-2xl">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        className="flex-1 p-2 rounded-xl border border-black focus:outline-none text-black"
        placeholder="Type your message..."
      />
      <div
        onClick={sendMessage}
        className="px-3 py-2 bg-black text-white rounded-xl hover:bg-opacity-80 transition"
      >
        Send
      </div>
    </div>
  </div>
)}


        </>
    );
}
