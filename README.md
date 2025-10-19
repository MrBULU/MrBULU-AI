
# 🤖 BULU AI Bot - Next-Generation Resume AI Assistant

<div align="center">

<p align="center">
  <img src="https://burhanulu.com/wp-content/uploads/2025/01/BULU_AI_HD.png" alt="BULU_AI Logo" width="150" height="150"/>
</p>

**Personal React Chatbot with Browser AI Integration**

![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat-square&logo=react)
![OpenAI](https://img.shields.io/badge/AI-OpenAI%20GPT--4o--mini-412991?style=flat-square&logo=openai)
![WordPress](https://img.shields.io/badge/WordPress-Compatible-21759B?style=flat-square&logo=wordpress)

[📖 Documentation](#-documentation) • [🔧 Installation](#-installation) • [🎯 Features](#-core-features) • [💬 Support](#-support)

</div>

---

## 🎯 **Overview**

BULUBot represents **Mr. BULU (Burhan Ulu)** - a seasoned SRE professional. This intelligent chatbot serves as a digital business card, technical consultant, and AI-powered assistant, seamlessly bridging professional networking with cutting-edge AI technology.

### **🎪 What Makes BULUBot Unique?**

- **🤖 OpenAI Integration** - Powered by GPT-4o-mini for intelligent responses
- **🔒 Secure API Communication** - Environment-based API key management
- **⚡ WordPress-Ready** - Plugin-based deployment in minutes
- **📱 Mobile-Optimized** - Responsive design across all devices
- **🎨 Professional Branding** - Custom-designed for business use

---

## ✨ **Core Features**

### **🤖 Intelligent Conversation Engine**
```
- Multi-flow conversation management
- Context-aware AI responses
- Markdown-rich formatting
- Real-time streaming responses
- Conversation history persistence

```

### **🛠️ Technical Excellence**
```
- React 18+ with modern hooks
- React Chatbotify 2.3+ framework
- OpenAI GPT-4o-mini integration
- Real-time API responses
- Optimized bundle size (~2MB)
```

### **💼 Business Intelligence**
```

- Service portfolio presentation
- Project showcase integration
- Contact & scheduling automation
- Lead generation workflows
- Professional consultation booking

```
---

## 🚀 **Quick Deploy**

### **Prerequisites**
- Node.js 16+
- OpenAI API account with credits
- Modern browser (Chrome/Firefox/Safari/Edge)
- WordPress site (for deployment)

### **Development Setup**
```bash
# 1. Clone & Install
git clone https://github.com/MrBULU/MrBULU-AI.git
cd MrBULU-AI && npm install

# 2. Automatic Setup (Optional)
node setup.js
# or manually:
cp .env.example .env
# Add your OpenAI API key to .env file:
# REACT_APP_OPENAI_API_KEY=your-openai-api-key-here

# 3. Start Development
npm start
# → http://localhost:3000

# 4. Build for Production
npm run build
# → /build directory ready for deployment
```
### **WordPress Integration**
```
# 1. Upload build files to server
/public_html/bulubot/static/css/main.[hash].css
/public_html/bulubot/static/js/main.[hash].js

# 2. Install "Insert Headers and Footers" plugin

# 3. Add integration code (see Installation section)
```
---
## 🔧 **Installation**
### **Option A: WordPress Plugin Method**
1. **Upload Assets**
```
# Via cPanel or FTP
upload: build/static/* → /public_html/bulubot/static/
```
2. **Headers Section**
```
   <link rel="stylesheet" href="/bulubot/static/css/main.HASH.css">
   <link rel="preload" href="/bulubot/static/js/main.HASH.js" as="script">
```

3. **Footer Section**
```
   <div id="root"></div>
   <script src="/bulubot/static/js/main.HASH.js"></script>
   <style>
   #root { 
     position: fixed; 
     bottom: 20px; 
     right: 20px; 
     z-index: 9999; 
   }
   </style>
   ```
---
---
---

## 🛠️ **Available npm Scripts**

| Script | Purpose | Usage |
|--------|---------|-------|
| `npm start` | Start development server | `npm start` |
| `npm run build` | Build for production | `npm run build` |
| `npm test` | Run tests | `npm test` |
| `npm run lint` | Lint and fix code | `npm run lint` |
| `npm run deploy:check` | Verify build is ready for deployment | `npm run deploy:check` |
| `npm run build:analyze` | Build and serve locally | `npm run build:analyze` |
| `npm run clean` | Clean all dependencies and reinstall | `npm run clean` |

---

## 🚨 **Error Handling & Reliability**

BULUBot now includes robust error handling to ensure better reliability:

### **ErrorBoundary Component**
- Catches React component errors gracefully
- Displays user-friendly error messages
- Provides recovery options
- Prevents entire app from crashing

### **API Key Validation**
- Validates OpenAI API key on startup
- Provides clear error messages if key is missing or invalid
- Only logs in development mode (no secrets in production)
- Helps developers quickly identify configuration issues

### **Configuration Utilities**
- Centralized config in `src/utils/config.js`
- Environment-based configuration
- Type-safe validation functions

---

## 📄 **Project Structure**

```
src/
├── App.js                    # Main chatbot component with conversation flows
├── index.js                  # React entry point
├── App.css                   # Application styles
├── components/
│   └── ErrorBoundary.js      # Error handling wrapper component
├── utils/
│   └── config.js             # Configuration and API key validation
├── setupTests.js             # Jest configuration
└── reportWebVitals.js        # Performance monitoring

public/
├── index.html                # HTML template
├── manifest.json             # PWA manifest
└── favicon.ico               # App icon

setup.js                       # Quick setup script for developers
.env.example                   # Environment variables template
package.json                   # Dependencies and scripts
```

---
## 🔑 **Environment Variables**

Create a `.env` file in your project root:

```bash
# Required: OpenAI API Configuration
REACT_APP_OPENAI_API_KEY=your-openai-api-key-here
```

### **Getting Your OpenAI API Key**
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Create a new API key
4. Add credits to your account for API usage
5. Copy the key to your `.env` file

⚠️ **Important**: Keep your API key secure and never commit it to version control.

---
## ⚙️ **Configuration**

### **Appearance Customization**
```
const settings = {
  general: {
    primaryColor: "#d67c06",    // Brand orange
    secondaryColor: "#a15203",  // Dark orange
    fontFamily: "Inter, sans-serif"
  },
  header: {
    title: "Mr. BULU 🤖 | AI Assistant",
    avatar: "https://burhanulu.com/.../BULU_AI_HD.png"
  }
};
```

### **AI Model Settings**
```javascript
llmConnector: {
  provider: new OpenaiProvider({
    model: 'gpt-4o-mini',
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    systemPrompt: `You are BULU, a AIOps, Observability & SRE expert...`,
    temperature: 0.7,
    maxTokens: 500,
    historySize: 5
  })
}
```
---
## 💬 **Conversation Flows**

| Flow | Purpose | Features |
|------|---------|----------|
| **Business Overview** | Professional introduction | Background, expertise, experience |
| **Service Portfolio** | Capability showcase | AIOps, SRE, Cloud, DevOps consulting |
| **Project Gallery** | Technical demonstrations | Current projects, tech stack, solutions |
| **Contact Hub** | Lead generation | Email, LinkedIn, calendar booking |
| **AI Assistant** | Technical consultation | Expert knowledge, problem-solving |

---

## 📊 **Performance Metrics**

| Metric | Desktop | Mobile | Notes |
|--------|---------|--------|-------|
| **Initial Load** | 2-3s | 3-5s | CSS + JS loading |
| **AI Response** | 1-2s | 2-4s | OpenAI API call |
| **Response Time** | <100ms | <200ms | Static flows |
| **Memory Usage** | 50-100MB | 100-200MB | Standard React app |
| **Bundle Size** | 2.1MB | 2.1MB | Gzipped assets |

---

## 🛡️ **Security & Privacy**

### **Data Protection**
- 🔐 **API Key Security** - Environment variable configuration
- 🌐 **OpenAI Integration** - Secure HTTPS API communication
- 📱 **Local Chat History** - Browser storage only
- 🚫 **No Personal Data Storage** - Privacy-focused design
- ✅ **GDPR Compliant** - No personal data collection

### **Browser Support**
- Chrome 90+ ⭐ (Recommended)
- Firefox 88+ ✅
- Safari 14+ ✅  
- Edge 90+ ✅

---

## 🐛 **Troubleshooting**

### **Common Issues**

**🚨 AI Processing Error**
```
Cause: Invalid/missing OpenAI API key or insufficient credits
Fix: Check API key in .env file, verify OpenAI account credits
```

**📱 Mobile Performance**
```
Cause: Slow network or API timeouts
Fix: Ensure stable internet connection, check OpenAI API status
```

**🎨 Styling Conflicts**
```
Cause: CSS conflicts with theme
Fix: Check z-index (9999+), clear caches, verify file paths
```

---

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`  
5. **Open** Pull Request

---

## 📄 **License**

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

---
## 💬 **Support**

<div align="center">

**Need help or want to connect?**

[![Email](https://img.shields.io/badge/Email-info%40burhanulu.com-red?style=for-the-badge&logo=gmail)](mailto:info@burhanulu.com)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-burhanulu-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/burhanulu)  
[![Website](https://img.shields.io/badge/Website-burhanulu.com-green?style=for-the-badge&logo=google-chrome)](https://burhanulu.com)  
[![Calendar](https://img.shields.io/badge/Schedule-Meeting-orange?style=for-the-badge&logo=calendly)](https://calendly.com/mrbulu)

**🚀 Built with ☕️ by Mr. BULU • AI Enthusiast & AIOps, Observability Expert**

</div>

---

<div align="center">⁂</div>
