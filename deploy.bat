@echo off
chcp 65001 >nul
echo 🚀 Starting HackBhoomi Deployment...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Build the project
echo 🔨 Building the project...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
) else (
    echo ❌ Build failed. Please check the errors above.
    pause
    exit /b 1
)

echo.
echo 🎉 Your HackBhoomi project is ready for deployment!
echo.
echo 📋 Next steps:
echo 1. Choose your deployment platform:
echo    - Vercel (Recommended): npm i -g vercel ^&^& vercel --prod
echo    - Netlify: npm i -g netlify-cli ^&^& netlify deploy --prod --dir=.next
echo    - Railway: Connect your GitHub repo to Railway
echo.
echo 2. Set up environment variables if needed
echo 3. Configure your domain and SSL
echo.
echo 📚 For detailed instructions, see DEPLOYMENT.md
echo.
echo 🏆 Good luck with SIH 2025!
pause
