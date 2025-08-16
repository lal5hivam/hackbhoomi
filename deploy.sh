#!/bin/bash

# 🚀 HackBhoomi Deployment Script
# This script helps you deploy your HackBhoomi project

echo "🚀 Starting HackBhoomi Deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo ""
echo "🎉 Your HackBhoomi project is ready for deployment!"
echo ""
echo "📋 Next steps:"
echo "1. Choose your deployment platform:"
echo "   - Vercel (Recommended): npm i -g vercel && vercel --prod"
echo "   - Netlify: npm i -g netlify-cli && netlify deploy --prod --dir=.next"
echo "   - Railway: Connect your GitHub repo to Railway"
echo ""
echo "2. Set up environment variables if needed"
echo "3. Configure your domain and SSL"
echo ""
echo "📚 For detailed instructions, see DEPLOYMENT.md"
echo ""
echo "🏆 Good luck with SIH 2025!"
