import React from 'react';
import ChatBot from 'react-chatbotify';
import LlmConnector, { WebLlmProvider } from '@rcb-plugins/llm-connector';
import MarkdownRenderer from '@rcb-plugins/markdown-renderer';

// 🎯 Optimized Conversation Flow with Official LLM Connector
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
- **Website & Web Shop Development** 💻`,
        
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

I'll initialize my **advanced AI model** that runs completely in your browser:

### Privacy & Performance
- 🔐 **Privacy First:** Your conversations stay 100% private and secure!
- 📦 **Browser-based:** No data leaves your device
- ⚡ **Lightning Fast:** Direct browser inference

*Ready to chat with AI BULU!? 
ℹ️Click **"Start Over"** & Select **AI Chat!** 🤖✨`
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

  // 🤖 AI-Powered Mode using Official WebLlmProvider
  ai_mode: {
    llmConnector: {
      provider: new WebLlmProvider({
        model: 'Qwen2-0.5B-Instruct-q4f16_1-MLC',
        systemPrompt: `You are BULU (Burhan), a DevOps & SRE expert with 11+ years at Accenture. You specialize in:
- AIOps & Observability  
- Site Reliability Engineering
- Cloud Computing (AWS, Azure, GCP)
- Self-hosted AI solutions
- Docker & Kubernetes
- Infrastructure monitoring
- Raspberry Pi projects

Respond using markdown formatting for better readability. Use headers, bullet points, code blocks, and emphasis where appropriate. Keep responses concise (max 150 words) and practical. Be helpful and professional.`
      }),
      outputType: 'character',
      outputSpeed: 30,
      historySize: 5,
      initialMessage: `🧠 Mr.BULU's AI Mode - ACTIVE!

### 🎯 Ask me anything about:
- **DevOps & SRE** best practices
- **AIOps and Observability** strategies
- **Cloud architecture** decisions
- **Docker & Kubernetes** deployment
- **Self-hosted AI** solutions
- **Infrastructure monitoring**
- **Raspberry Pi** projects

🔐 **Your conversations are 100% private and secure!**
💬 **Just type your question below...**`,
      errorMessage: `## ⚠️ AI Processing Error

🔧 I had trouble processing your question. This can happen with complex queries or browser memory constraints.

### Try:
- Simplifying your question
- Refreshing the page
- Contacting me directly

📧 **Direct Contact:** [info@burhanulu.com](mailto:info@burhanulu.com)`
    },
    renderMarkdown: ["BOT", "USER"]
  }
};

// 🎨 Enhanced UI Settings
const settings = {
  general: {
    primaryColor: "#d67c06",
    secondaryColor: "#a15203", 
    fontFamily: "Arial, -apple-system, BlinkMacSystemFont, sans-serif"
  },
  header: {
    title: "BULU AI 🤖",
    showAvatar: true,
    avatar: "https://burhanulu.nl/wp-content/uploads/2025/01/BULU_AI_HD.png"
  },
  tooltip: {
    mode: "CLOSE", // or "ALWAYS" to always show
    text: "Try BULU AI 🤖" // ✅ Your custom tooltip text
  },
  chatButton: {
    icon: "🤖"
  },
  chatHistory: {
    storageKey: "bulubot_v2_history",
    maxEntries: 20
  },
  botBubble: {
    showAvatar: true,
    avatar: "https://burhanulu.nl/wp-content/uploads/2025/01/BULU_AI_HD.png"
  },
  notification: {
    disabled: false,              // ✅ Keep notifications enabled
    defaultToggledOn: true,       // ✅ Turn notifications on by default
    alwaysShow: true,           // ✅ Don't always show the badge
    showCount: true,            // ✅ Show notification count
    icon: "🔔"                   // ✅ Notification icon
  },
  audio: {
    disabled: true,              // ❌ DISABLE AUDIO/TTS - No voice reading
    defaultToggledOn: false,     // ❌ Keep audio OFF
    volume: 0.5                  // Volume setting (won't matter since disabled)
  },
  voice: {
    disabled: true               // ❌ DISABLE VOICE INPUT - No microphone
  },
  footer: {
    text: "🚀 Powered by Mr.BULU • AI Enthusiast"
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
  // ✅ Both plugins configured with best practices
  const plugins = [
    LlmConnector({
      autoConfig: true
    }),
    MarkdownRenderer({
      autoConfig: true
    })
  ];

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
            height: 100vh !important;
          }
        }

        /* ✅ Enhanced markdown styling */
        .rcb-message-text h2 {
          color:rgb(235, 172, 37) !important;
          margin-top: 0 !important;
          margin-bottom: 10px !important;
        }
        
        .rcb-message-text h3 {
          color:rgb(0, 0, 0) !important;
          margin-bottom: 8px !important;
        }
        
        .rcb-message-text ul {
          margin: 10px 0 !important;
          padding-left: 20px !important;
        }
        
        .rcb-message-text a {
          color:rgb(235, 136, 37) !important;
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
      `}</style>
    </div>
  );
}

export default App;
