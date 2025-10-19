import React from 'react';
import ChatBot from 'react-chatbotify';
import LlmConnector, { OpenaiProvider } from '@rcb-plugins/llm-connector';
import MarkdownRenderer from '@rcb-plugins/markdown-renderer';

// 🔑 API Configuration
const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

// 🎯 Optimized Conversation Flow with OpenAI GPT-4o-mini
const flow = {
  start: {
    message: "Hello! I'm **BULUBot** 🤖 Your personal AI assistant! How can I help you today?",
    renderMarkdown: ["BOT"],
    options: [
      "Who is BULU?", 
      "My Services",
      "Contacts", 
      "Projects", 
      "Schedule Meeting", 
      "Need Support?", 
      "AI Chat"
    ],
    path: "process_options"
  },

  process_options: {
    message: (params) => {
      const responses = {
        "Who is BULU?": `## Hey there! I'm Burhan (BULU) 👋

**🚀 11+ years at Accenture** mastering:
- **AIOps & Observability**
- **Site Reliability Engineering** 
- **Cloud Computing & DevOps**

💡 Currently obsessed with *self-hosted AI platforms* on my **Raspberry Pi 5** setup! 🤖🔧`,
        
        "My Services": `## 🛠️ Professional Services I Offer:

### Core Expertise
- **AIOps, Observability & SRE Consulting**
- **Cloud Computing Solutions** ☁️
- **Self-hosted AI Platforms** 🤖
- **Monitoring & Observability Best Practices** 📊
- **Raspberry Pi Projects & IoT Solutions** 🔧
- **Website & WebShop Development** 💻`,
        
        "Contacts": `## 📞 Let's Connect!

📧 **Email:** [info@burhanulu.com](mailto:info@burhanulu.com)
💼 **LinkedIn:** [linkedin.com/in/burhanulu](https://linkedin.com/in/burhanulu)
🌐 **Website:** [burhanulu.com](https://burhanulu.com)
📅 **Book a Call:** [calendly.com/mrbulu](https://calendly.com/mrbulu)`,
        
        "Projects": `## 🚀 Current Tech Adventures:

- **Self-hosted AI chat platforms** (OpenWebUI) 🤖
- **AIOps & SRE automation workflows** ⚡
- **N8N integration for IT support** 🔄
- **Infrastructure/Application monitoring with Dynatrace** 📊
- **Raspberry Pi 5 deployments** 🔧

*Always experimenting with cutting-edge tech!* 💡`,
        
        "Schedule Meeting": `### 🎯 Ready to Chat?

Perfect! Let's discuss your project:

📅 **Free 30-min Consultation:** [calendly.com/mrbulu](https://calendly.com/mrbulu)

### 💬 We can talk about:
- Your DevOps challenges
- AI integration opportunities  
- Infrastructure optimization
- Custom solutions`,
        
        "Need Support?": `## 🆘 I can help you with:

### 🐳 DevOps & Containerization
- Docker & Kubernetes deployments
- CI/CD pipeline optimization

### ☁️ Cloud & Infrastructure  
- AWS, Azure, GCP solutions
- Infrastructure as Code (Terraform)

### 🤖 AI & Automation
- Self-hosted AI platforms
- Monitoring & Alerting systems

### 💻 Web Development
- Modern websites & e-commerce
- CMS solutions (WordPress, Joomla)

*Just ask me anything!* 💡`,
        
        "AI Chat": `### 🧠 Activating Mr.BULU's AI Brain!

I'll connect you to my **OpenAI ** assistant:

### AI Features
- 🔐 **Secure:** Direct OpenAI API connection
- ⚡ **Fast:** Optimized for speed and efficiency

*Ready to chat with BULU AI!? 
ℹ️Pleaae Click on **"Start Over"** & Select **AI Chat!** 🤖✨`
      };
      
      return responses[params.userInput] || `### I'm here to help! 💡

Feel free to ask about **AIOps**, **SRE**, **Cloud Computing**, and **AI solutions**!

*What would you like to know more about?*`;
    },
    renderMarkdown: ["BOT"],
    options: ["Ask Another Question", "Get Quote", "Schedule Call", "Start Over"],
    path: (params) => params.userInput === "AI Chat" ? "ai_mode" : "handle_next"
  },

  handle_next: {
    message: (params) => {
      const responses = {
        "Ask Another Question": `## 🤔 What else can I help you with?

Feel free to ask about any of my **services**, **technologies** I work with, or **current projects**!`,

        "Get Quote": `### 📋 Let's Get You a Custom Quote!

Email your project details to [info@burhanulu.com](mailto:info@burhanulu.com)

### ⚡ I'll respond within 24 hours with:
- Detailed project breakdown
- Timeline estimates
- Transparent pricing
- Next steps`,

        "Schedule Call": `### 📅 Book Your Free Consultation!

🎯 **30-minute Strategy Session:** [calendly.com/mrbulu](https://calendly.com/mrbulu)

### We'll discuss:
- Your technical challenges
- Potential solutions
- Implementation roadmap
- Q&A session`,

        "Start Over": `### 🔄 Starting Fresh!

Welcome back! What can I help you with today?`
      };
      
      return responses[params.userInput] || `## Thanks for chatting with Mr. BULU 🤖!

Have an **amazing day!** 🌟

Feel free to reach out anytime at [info@burhanulu.com](mailto:info@burhanulu.com)`;
    },
    renderMarkdown: ["BOT"],
    options: ["Start Over", "AI Chat", "Main Menu"],
    path: (params) => {
      if (params.userInput === "Start Over") return "start";
      if (params.userInput === "AI Chat") return "ai_mode";
      return "start";
    }
  },

  // 🤖 AI-Powered Mode using OpenAI GPT-4o-mini
  ai_mode: {
    llmConnector: {
      provider: new OpenaiProvider({
        mode: 'direct',                                    // ✅ Simplified for testing
        model: 'gpt-4o-mini',                             // ✅ Correct model name
        apiKey: OPENAI_API_KEY,                           // ✅ Direct API key
        temperature: 0.7,
        maxTokens: 500,                                   // ✅ Reduced for faster responses
        systemPrompt: `You are BULU (Burhan), a AIOps, Observability SME & SRE Leader with 11+ years at Accenture. 

Specialties: AIOps, Observability, Site Reliability Engineering, Cloud Computing, Docker & Kubernetes, Infrastructure monitoring, Raspberry Pi projects.

Keep responses concise (max 150 words), practical, and professional. Use markdown formatting. Always sign with "- BULU 🤖"`
      }),
      outputType: 'text',                                 // ✅ Simplified output
      historySize: 5,                                     // ✅ Reduced for testing
      initialMessage: `🧠 **Mr.BULU's AI Assistant - READY!**

### 🎯 Ask me about:
- **DevOps & SRE** best practices
- **Cloud architecture** decisions  
- **Docker & Kubernetes** deployments
- **Infrastructure monitoring**
- **Raspberry Pi** projects

💬 **What can I help you with?**`,
      errorMessage: `## ⚠️ Connection Failed

🔧 Unable to connect to OpenAI. Please check:

- Your internet connection
- API key is valid and has credits
- Try refreshing the page

📧 **Need help?** [info@burhanulu.com](mailto:info@burhanulu.com)`
    },
    renderMarkdown: ["BOT", "USER"]
  }
};

// 🎨 Enhanced UI Settings (Fixed JSX warnings)
const settings = {
  general: {
    primaryColor: "#d67c06",
    secondaryColor: "#a15203", 
    fontFamily: "Arial, -apple-system, BlinkMacSystemFont, sans-serif"
  },
  header: {
    title: "BULU AI 🤖",
    showAvatar: true,
    avatar: "https://burhanulu.com/wp-content/uploads/2025/01/BULU_AI_HD.png"
  },
  tooltip: {
    mode: "CLOSE",
    text: "👋 Try BULU AI "
  },
  chatButton: {
    icon: "🤖"
  },
  chatHistory: {
    storageKey: "bulubot_gpt4o_mini_history",
    maxEntries: 20
  },
  botBubble: {
    showAvatar: true,
    avatar: "https://burhanulu.com/wp-content/uploads/2025/01/BULU_AI_HD.png"
  },
  notification: {
    disabled: false,
    defaultToggledOn: true,
    alwaysShow: false,                                    // ✅ Fixed boolean
    showCount: true,
    icon: "🔔"
  },
  audio: {
    disabled: true,
    defaultToggledOn: false,
    volume: 0.5
  },
  voice: {
    disabled: true
  },
  footer: {
    text: "🤖 Powered by Mr.BULU • AI Assistant"
  }
};

// 🎭 Theme Configuration
const themes = [
  {
    id: "bulu_pro_theme",
    version: "2.0.0"
  }
];

// 🚀 Main App Component
function App() {
  const plugins = [
    LlmConnector({
      autoConfig: true
    }),
    MarkdownRenderer({
      autoConfig: true
    })
  ];

// Debug API key
console.log('API Key loaded:', OPENAI_API_KEY ? 'YES' : 'NO');
console.log('Environment:', IS_DEVELOPMENT ? 'DEVELOPMENT' : 'PRODUCTION');

  return (
    <div className="App">
      <ChatBot 
        flow={flow} 
        settings={settings}
        themes={themes}
        plugins={plugins}
      />
      
      {/* 🎨 Enhanced Styling */}
      <style jsx global>{`
        .rcb-chat-bot {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
        }
        
        .rcb-bot-message {
          line-height: 1.6 !important;
        }
        
        .rcb-message-text {
          word-break: break-word !important;
        }
        
        /* ✅ Better mobile responsiveness */
        @media (max-width: 768px) {
          .rcb-chat-bot {
            width: 100% !important;
            height: 100dvh !important;
          }
        }

        /* ✅ Enhanced markdown styling */
        .rcb-message-text h2 {
          color: rgb(235, 172, 37) !important;
          margin-top: 0 !important;
          margin-bottom: 10px !important;
        }
        
        .rcb-message-text h3 {
          color: rgb(0, 0, 0) !important;
          margin-bottom: 8px !important;
        }
        
        .rcb-message-text ul {
          margin: 10px 0 !important;
          padding-left: 20px !important;
        }
        
        .rcb-message-text a {
          color: rgb(235, 136, 37) !important;
          text-decoration: none !important;
        }
        
        .rcb-message-text a:hover {
          text-decoration: underline !important;
        }
        
        .rcb-message-text code {
          background-color: #f3f4f6 !important;
          padding: 2px 4px !important;
          border-radius: 3px !important;
          font-size: 0.9em !important;
        }

        /* ✅ AI mode specific styling */
        .rcb-message-text strong {
          color: #d67c06 !important;
        }
      `}</style>
    </div>
  );
}

export default App;
