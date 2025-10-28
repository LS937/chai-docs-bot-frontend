import React, { useEffect, useState } from 'react'
import Greeting from './components/Greeting';
import InputBox from './components/InputBox';
import ChatBox from './components/ChatBox';


function App() {
  const [newChat, setNewChat] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  // const [status, setStatus] = useState('');

  
  useEffect(() => {
    const fetchBotResponse = async () => {
      if (input) {

        setMessages(prev => [...prev, { text: input, sender: "user"}])
        setInput('');
        setIsLoading(true);
        setIsTyping(true);

        try {
          // Here you can add logic to get a response from the bot and update messages
          const response = await fetch(
            import.meta.env.VITE_API_URL,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ message: input }),
            }
          );
          const data = await response.json();

          setMessages((prev) => [
            ...prev,
            { text: data.answer, sender: "bot" },
          ]);

        } catch (error) {
          
          setMessages((prev) => [
            ...prev,
            { text : "Sorry, something went wrong. Please try again.", sender: "bot" },
          ])
        }
        finally {
          setIsLoading(false);
        }
        
        
      }
    };
    fetchBotResponse();
  }, [input])

  return (
    <>
      <div className="main min-h-screen w-full bg-[#212121] relative text-[#dbe8e3]">
        {" "}
        {/*bg-[#e1e1e1]*/}
        {newChat && (
          <Greeting className="absolute left-1/2 top-1/6 transform -translate-x-1/2" />
        )}
        <InputBox
          className={`absolute left-1/2 ${
            newChat ? "bottom-32" : "bottom-8"
          } transform -translate-x-1/2 z-20 fixed mt-5`}
          setNewChat={setNewChat}
          setInput={setInput}
          isLoading={isLoading}
          isTyping={isTyping}
        />
        {!newChat && (
          <div className="pt-8 pb-52">
            <ChatBox
              className="w-[80vw] mx-auto z-10"
              messages={messages}
              isLoading={isLoading}
              setIsTyping={setIsTyping}
              // status={status}
            />
          </div>
        )}
      </div>
    </>
  );
}


export default App