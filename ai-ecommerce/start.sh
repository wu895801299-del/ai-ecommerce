#!/bin/bash

# AI电商带货页面启动脚本

echo "🚀 启动AI电商带货页面..."

# 检查是否有Python
if command -v python3 &> /dev/null; then
    echo "📦 使用Python3启动本地服务器..."
    echo "🌐 页面地址: http://localhost:8000"
    echo "⏹️  按 Ctrl+C 停止服务器"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "📦 使用Python启动本地服务器..."
    echo "🌐 页面地址: http://localhost:8000"
    echo "⏹️  按 Ctrl+C 停止服务器"
    echo ""
    python -m http.server 8000
elif command -v node &> /dev/null; then
    echo "📦 使用Node.js启动本地服务器..."
    echo "🌐 页面地址: http://localhost:3000"
    echo "⏹️  按 Ctrl+C 停止服务器"
    echo ""
    npx serve . -p 3000
else
    echo "❌ 未找到Python或Node.js，请直接打开index.html文件"
    echo "📁 文件位置: $(pwd)/index.html"
fi
