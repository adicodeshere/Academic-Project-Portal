@echo off
REM Academic Submission Portal - Windows Installation Script
REM This script installs all required dependencies for the project

echo 🚀 Starting Academic Submission Portal Setup...
echo ==============================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v14+ first.
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

echo ✅ Node.js version:
node --version
echo ✅ npm version:
npm --version
echo.

REM Install Backend Dependencies
echo 📦 Installing Backend Dependencies...
echo ------------------------------------
cd backend
if exist package.json (
    npm install
    echo ✅ Backend dependencies installed successfully!
) else (
    echo ❌ Backend package.json not found!
    pause
    exit /b 1
)

REM Install Frontend Dependencies
echo.
echo 📦 Installing Frontend Dependencies...
echo ------------------------------------
cd ..\work-master
if exist package.json (
    npm install
    echo ✅ Frontend dependencies installed successfully!
) else (
    echo ❌ Frontend package.json not found!
    pause
    exit /b 1
)

REM Return to root directory
cd ..

echo.
echo 🎉 Installation Complete!
echo ========================
echo.
echo Next steps:
echo 1. Set up MySQL database and import schema from Database/portalschema.sql
echo 2. Configure database connection in backend/db.js
echo 3. Start backend server: cd backend ^&^& npm start
echo 4. Start frontend server: cd work-master ^&^& npm start
echo.
echo 🌐 Application will be available at:
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:3001
echo.
echo Happy coding! 🚀
pause
