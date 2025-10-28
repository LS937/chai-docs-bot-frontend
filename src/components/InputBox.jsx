import React, { useState } from 'react'
import "remixicon/fonts/remixicon.css";

function InputBox({className, setNewChat, setInput, isTyping}) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isTyping && inputValue.trim()) {
      setInput(inputValue);
      setNewChat(false);
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  
  }

  return (
    <>
      <div
        className={`input-box ${className || ""} w-full flex justify-center`}
      >
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-1/2 h-32  rounded-xl bg-[#303030] font-[Roboto_Mono] overflow-hidden relative"
        >
          <textarea
            className="w-full h-full border-none outline-none p-4 resize-none"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            className={`absolute bottom-4 right-4 h-9 w-9 rounded-full ${
              isTyping ? "bg-gray-300" : "bg-amber-300"
            } flex items-center justify-center cursor-pointer`}
            disabled={isTyping || !inputValue.trim()}
          >
            <i className="ri-arrow-up-line text-black"></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default InputBox