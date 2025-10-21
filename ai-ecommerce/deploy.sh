#!/bin/bash

# AI电商带货页面 - 一键部署脚本

echo "🚀 AI电商带货页面部署工具"
echo "================================"

# 检查当前目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    echo "📁 当前目录：$(pwd)"
    exit 1
fi

echo "✅ 项目文件检查完成"
echo "📁 项目目录：$(pwd)"
echo ""

# 显示部署选项
echo "请选择部署方式："
echo "1) Vercel 部署（推荐）"
echo "2) Netlify 部署"
echo "3) GitHub Pages 部署"
echo "4) 本地服务器"
echo "5) 查看部署指南"
echo ""

read -p "请输入选项 (1-5): " choice

case $choice in
    1)
        echo "🌐 开始 Vercel 部署..."
        echo "📝 请按照提示完成登录和配置"
        echo ""
        npx vercel --prod
        ;;
    2)
        echo "🌐 Netlify 部署指南："
        echo "1. 访问 https://netlify.com"
        echo "2. 注册/登录账户"
        echo "3. 拖拽项目文件夹到部署区域"
        echo "4. 获取部署链接"
        echo ""
        echo "📁 项目文件夹：$(pwd)"
        ;;
    3)
        echo "🌐 GitHub Pages 部署指南："
        echo "1. 创建 GitHub 仓库"
        echo "2. 上传项目文件"
        echo "3. 启用 GitHub Pages"
        echo ""
        echo "📝 执行以下命令："
        echo "git init"
        echo "git add ."
        echo "git commit -m 'Initial commit'"
        echo "git remote add origin https://github.com/yourusername/ai-ecommerce.git"
        echo "git push -u origin main"
        ;;
    4)
        echo "🏠 启动本地服务器..."
        echo "🌐 页面地址: http://localhost:8000"
        echo "⏹️  按 Ctrl+C 停止服务器"
        echo ""
        python3 -m http.server 8000
        ;;
    5)
        echo "📖 打开部署指南..."
        if command -v open &> /dev/null; then
            open DEPLOY.md
        else
            echo "请查看 DEPLOY.md 文件"
        fi
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac

echo ""
echo "🎉 部署完成！"
echo "📞 如有问题，请查看 DEPLOY.md 文件"
