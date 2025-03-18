import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import './Chatbot.css';

const ChatbotMessage = ({ message, isUser }) => {
  return (
    <div className={`chatbot-message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-avatar">
        {isUser ? <FaUser /> : <FaRobot />}
      </div>
      <div className="message-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

const getBotResponse = (userMessage) => {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
    return "Hello! I'm Srikar's chatbot. How can I help you today?";
  } else if (lowerCaseMessage.includes('project') || lowerCaseMessage.includes('work')) {
    return "You can check out Srikar's projects in the Projects section. He's worked on several interesting projects including DSA-Wizard, Tensor MVJCE, and more!";
  } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('email') || lowerCaseMessage.includes('reach')) {
    return "You can contact Srikar through the contact form in the Contact section or directly at your.email@example.com";
  } else if (lowerCaseMessage.includes('experience') || lowerCaseMessage.includes('work')) {
    return "Srikar has experience in web development, machine learning, and research. Check out the Experience section for more details!";
  } else if (lowerCaseMessage.includes('blog') || lowerCaseMessage.includes('article')) {
    return "Srikar writes about technology, web development, and AI. Check out his latest articles in the Blog section!";
  } else if (lowerCaseMessage.includes('skill') || lowerCaseMessage.includes('tech')) {
    return "Srikar is skilled in React, Node.js, Python, Machine Learning, and Three.js, among other technologies.";
  } else if (lowerCaseMessage.includes('thanks') || lowerCaseMessage.includes('thank you')) {
    return "You're welcome! Is there anything else I can help you with?";
  } else {
    return "I'm sorry, I didn't quite understand that. Can you try rephrasing or ask me about Srikar's projects, experience, or contact information?";
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi there! I'm Srikar's chatbot. How can I help you today?",
      isUser: false
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage = {
      text: inputValue,
      isUser: true
    };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse = {
        text: getBotResponse(inputValue),
        isUser: false
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    // Scroll to bottom of messages
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  return (
    <div className="chatbot-container">
      <motion.button 
        className="chatbot-toggle"
        onClick={toggleChatbot}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaRobot />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            <div className="chatbot-header">
              <div className="chatbot-title">
                <FaRobot className="chatbot-icon" />
                <h3>Srikar's Assistant</h3>
              </div>
              <button className="close-button" onClick={toggleChatbot}>
                <FaTimes />
              </button>
            </div>

            <div className="chatbot-messages">
              {messages.map((message, index) => (
                <ChatbotMessage 
                  key={index} 
                  message={message.text} 
                  isUser={message.isUser} 
                />
              ))}
              {isTyping && (
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form className="chatbot-input-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button type="submit">
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot; 