// 🔧 Configuration and validation utilities

export const validateApiKey = (apiKey) => {
  if (!apiKey) {
    return {
      isValid: false,
      error: 'OpenAI API key is missing. Please check your .env file.'
    };
  }
  
  if (!apiKey.startsWith('sk-')) {
    return {
      isValid: false,
      error: 'Invalid OpenAI API key format. Key should start with "sk-"'
    };
  }
  
  if (apiKey.length < 50) {
    return {
      isValid: false,
      error: 'OpenAI API key appears to be incomplete.'
    };
  }
  
  return { isValid: true };
};

export const getEnvironmentInfo = () => ({
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  apiKey: process.env.REACT_APP_OPENAI_API_KEY
});

export const chatbotConfig = {
  colors: {
    primary: '#d67c06',
    secondary: '#a15203',
    error: '#e53e3e',
    success: '#38a169'
  },
  api: {
    maxTokens: 500,
    temperature: 0.7,
    maxRetries: 3,
    timeout: 30000 // 30 seconds
  },
  ui: {
    maxHistoryEntries: 20,
    avatarUrl: 'https://burhanulu.com/wp-content/uploads/2025/01/BULU_AI_HD.png'
  }
};

const configUtils = {
  validateApiKey,
  getEnvironmentInfo,
  chatbotConfig
};

export default configUtils;
