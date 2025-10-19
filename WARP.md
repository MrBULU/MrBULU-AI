# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

BULUBot is a React-based AI chatbot representing Mr. BULU (Burhan Ulu), an AIOps and SRE professional. The bot serves as a digital business card with intelligent conversation flows and OpenAI GPT-4o-mini integration.

**Key Technologies:**
- React 18+ with Create React App
- react-chatbotify framework (v2.3.0+)
- OpenAI GPT-4o-mini via @rcb-plugins/llm-connector
- Markdown rendering via @rcb-plugins/markdown-renderer
- Browser-based deployment (no backend required)

## Commands

### Development
```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Run tests
npm test

# Run specific test file
npm test -- --testNamePattern="ComponentName"
```

### Production
```bash
# Create production build
npm run build

# Serve build locally for testing
npx serve -s build -l 3000
```

### Deployment
The app is designed for WordPress integration via static file hosting:
```bash
# After npm run build, upload these files:
build/static/css/main.[hash].css → /public_html/bulubot/static/css/
build/static/js/main.[hash].js → /public_html/bulubot/static/js/
```

## Architecture

### Core Application Structure
- **src/App.js**: Main chatbot component containing conversation flows and OpenAI integration
- **src/index.js**: React DOM rendering entry point
- **Conversation flows**: Defined as objects with predefined paths and AI-powered responses
- **Plugin system**: LlmConnector and MarkdownRenderer plugins for enhanced functionality

### Conversation Flow Architecture
The chatbot uses a flow-based conversation system with these key components:

1. **Static flows** (`start`, `process_options`, `handle_next`): Predefined conversation paths for business information
2. **AI mode** (`ai_mode`): Dynamic OpenAI-powered responses for technical consultations
3. **Flow transitions**: Controlled via `path` properties that route between conversation states

### OpenAI Integration
- Uses `@rcb-plugins/llm-connector` with OpenaiProvider
- Model: `gpt-4o-mini` (cost-effective, fast responses)
- System prompt defines BULU's professional persona and response style
- Temperature: 0.7 for balanced creativity/consistency
- Max tokens: 500 for concise responses

### Environment Configuration
- **API Key**: `REACT_APP_OPENAI_API_KEY` (required for AI mode)
- **Development**: Automatic environment detection via `process.env.NODE_ENV`
- **Configuration file**: `.env.example` shows required environment variables

## Key Development Patterns

### Conversation Flow Pattern
```javascript
flow_name: {
  message: (params) => dynamic_response_based_on_user_input,
  renderMarkdown: ["BOT"], // Enable markdown rendering
  options: ["Option 1", "Option 2"], // User choice buttons
  path: (params) => conditional_next_flow_logic
}
```

### AI Mode Integration
The `ai_mode` flow uses LLM connector with specific configuration:
- `systemPrompt`: Defines AI assistant personality and expertise
- `historySize`: Controls conversation context window
- `outputType`: 'text' for streaming responses
- Error handling with fallback messages

### Styling Architecture
- Inline CSS-in-JS for chatbot customization
- Global styles via JSX style tags
- Responsive design with mobile-first approach
- Brand colors: Primary `#d67c06`, Secondary `#a15203`

## Environment Setup

### Required Environment Variables
```bash
REACT_APP_OPENAI_API_KEY=your-openai-api-key-here
```

### Development Prerequisites
- Node.js 16+
- Modern browser with JavaScript enabled
- OpenAI API key for AI functionality testing

## Testing Strategy

### Manual Testing Flows
1. **Static conversation flows**: Test all predefined conversation paths
2. **AI mode**: Verify OpenAI integration with various technical questions
3. **Responsive design**: Test on mobile and desktop viewports
4. **Error handling**: Test with invalid/missing API key scenarios

### Key Test Scenarios
- Conversation flow transitions work correctly
- Markdown rendering displays properly
- OpenAI responses stream correctly in AI mode
- Mobile responsiveness maintains usability
- Chat history persists across sessions

## WordPress Integration Notes

This chatbot is designed for WordPress deployment using static file integration:

### Integration Method
- Upload built assets to server directory structure
- Use "Insert Headers and Footers" WordPress plugin
- Add CSS link in header section
- Add div container and script tag in footer
- Position chatbot with fixed positioning (bottom-right corner)

### Asset Management
- Hash-based filenames require manual updates after builds
- CSS and JS files must be accessible via public URLs
- Avatar images hosted externally (burhanulu.nl domain)

## Troubleshooting

### Common Issues
- **API Key errors**: Verify `REACT_APP_OPENAI_API_KEY` is set correctly
- **Build failures**: Check for JSX syntax errors in conversation flow messages
- **AI mode not working**: Confirm OpenAI API key has sufficient credits
- **Mobile display issues**: Test responsive CSS media queries
- **WordPress conflicts**: Check z-index values and CSS specificity

### Debug Information
The app logs API key status and environment mode to browser console for troubleshooting.