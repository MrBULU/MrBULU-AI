import React from 'react';
import ChatBot from 'react-chatbotify';

const flow = {
  start: {
    message: "Hello! I'm BULUBot 🤖 Your personal AI assistant! How can I help you today?",
    options: ["Who is BULU?", "Services", "Contact", "Projects", "Schedule a Meeting", "Need Support?", "Other"],
    path: "process_options"
  },
  process_options: {
    message: (params) => {
      switch(params.userInput) {
        case "Who is BULU?":
          return "Hey there! I'm Burhan (BULU) 👋 After 11+ years at Accenture mastering AIOps, Observability & SRE, I'm passionate about self-hosted AI, Cloud Computing, and turning complex problems into elegant solutions! Currently obsessed with running AI platforms on my Raspberry Pi 5 setup 🤖🔧";
        case "Services":
          return "I offer: \n• AIOps, Observability & SRE Consulting 🛠️\n• Cloud Computing ☁️\n• Self-hosted AI Solutions 🤖\n• Monitoring & Observability Best Practices 📊\n• Raspberry Pi Projects 🔧";
        case "Contact":
          return "You can reach me at:\n📧 Email: info@burhanulu.com \n💼 LinkedIn: linkedin.com/in/burhanulu \n🌐 Website: burhanulu.com";
        case "Projects":
          return "I'm currently working on:\n• Self-hosted AI chat platforms on Pi 5 🤖\n• AiOps, Observability & SRE deployments 💬\n• N8N automation workflows for IT support ⚡\n• Infrastructure monitoring integrations 📊\nAlways experimenting with the latest tech! 🚀";
        case "Schedule a Meeting":
          return "Perfect! Visit calendly.com/mrbulu to book a free 30-minute consultation! 📅";
          case "Need Support?":
          return "Need help with:\n• Docker & Kubernetes? 🐳\n• Building Websites and Webshops? ☁️\n• Self-hosted AI platforms? 🤖\n• Infrastructure/Applcation monitoring? 📈\nJust ask me!";
        default:
          return "I'm here to help with anything you need! Feel free to ask about AiOps, Observability, SRE, Cloud Computing or AI solutions! 💡";
      }
    },
    options: ["Ask Another Question", "Get Quote", "Schedule Call", "Start Over"],
    path: "handle_next"
  },
  handle_next: {
    message: (params) => {
      switch(params.userInput) {
        case "Ask Another Question":
          return "What would you like to know more about? 🤔";
        case "Get Quote":
          return "Great! Please email your project details to info@burhanulu.com and I'll send you a customized quote within 24 hours! 📋✨";
        case "Schedule Call":
          return "Perfect! Visit calendly.com/mrbulu to book a free 30-minute consultation! 📅";
        case "Start Over":
          return "Let's start fresh! 🔄";
        default:
          return "Thanks for chatting with Mr. BULU 🤖! - Have an lovely day! 🌟";
      }
    },
    options: ["Start Over", "End Chat"],
    path: (params) => params.userInput === "Start Over" ? "start" : "end"
  }
};

const settings = {
  general: {
    primaryColor: "#2563eb", // Professional blue
    secondaryColor: "#1e40af",
    fontFamily: "Arial, sans-serif"
  },
  header: {
    title: "Hello, I'm Mr. BULU 🤖",
    showAvatar: true,
    avatar: "http://burhanulu.nl/wp-content/uploads/2025/01/BULU_AI_HD.png"
  },
  chatButton: {
    icon: "🤖"
  },
  chatHistory: {
    storageKey: "bulubot_chat_history",
    maxEntries: 50
  },
  botBubble: {
    showAvatar: true,
    avatar: "http://burhanulu.nl/wp-content/uploads/2025/01/BULU_AI_HD.png"
  },
  voice: {
    disabled: false
  },
  footer: {
    text: "Powered by Mr.BULU • Your AI Assistant"
  }
};

const themes = [
  {
    id: "bulu_theme",
    version: "0.1.0"
  }
];

function App() {
  return (
    <div className="App">
      <ChatBot 
        flow={flow} 
        settings={settings}
        themes={themes}
      />
      <style jsx>{`
        .rcb-chat-bot {
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>
    </div>
  );
}

export default App;
