#!/usr/bin/env node

/**
 * 🚀 BULUBot Quick Setup Script
 * This script helps new developers get started quickly
 */

const fs = require('fs');
const path = require('path');

console.log('🤖 Welcome to BULUBot Setup!\n');

// Check if .env exists
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

if (!fs.existsSync(envPath)) {
  if (fs.existsSync(envExamplePath)) {
    // Copy .env.example to .env
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Created .env file from .env.example');
  } else {
    // Create basic .env file
    fs.writeFileSync(envPath, 'REACT_APP_OPENAI_API_KEY=your-openai-api-key-here\n');
    console.log('✅ Created basic .env file');
  }
} else {
  console.log('ℹ️  .env file already exists');
}

// Check if .env has API key
const envContent = fs.readFileSync(envPath, 'utf8');
if (envContent.includes('your-openai-api-key-here')) {
  console.log('\n⚠️  IMPORTANT: You need to add your OpenAI API key to the .env file');
  console.log('   1. Get your API key from: https://platform.openai.com/api-keys');
  console.log('   2. Replace "your-openai-api-key-here" with your actual API key');
  console.log('   3. Make sure your OpenAI account has credits');
}

console.log('\n🎯 Next steps:');
console.log('   npm install    # Install dependencies');
console.log('   npm start      # Start development server');
console.log('   npm run build  # Build for production');

console.log('\n💬 Need help? Contact: info@burhanulu.com');
console.log('🌐 Documentation: https://github.com/MrBULU/MrBULU-AI');

console.log('\n🚀 Happy coding with BULUBot! 🤖');