// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // 初始化导航功能
    initializeNavigation();
    
    // 初始化AI功能
    initializeAIFeatures();
    
    // 初始化卡片交互
    initializeCardInteractions();
    
    // 初始化响应式功能
    initializeResponsive();
}

// 导航功能
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 左侧导航点击事件
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有active状态
            navItems.forEach(nav => nav.classList.remove('active'));
            // 添加当前active状态
            this.classList.add('active');
            
            // 这里可以添加页面切换逻辑
            console.log('导航到:', this.textContent.trim());
        });
    });
    
    // 顶部导航点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 移除所有active状态
            navLinks.forEach(nav => nav.classList.remove('active'));
            // 添加当前active状态
            this.classList.add('active');
            
            // 这里可以添加页面切换逻辑
            console.log('切换到:', this.textContent.trim());
        });
    });
}

// AI功能初始化
function initializeAIFeatures() {
    const generateBtn = document.querySelector('.btn-primary');
    const productBtn = document.querySelector('.btn-secondary');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            generateContent();
        });
    }
    
    if (productBtn) {
        productBtn.addEventListener('click', function() {
            selectProducts();
        });
    }
}

// 生成内容功能
function generateContent() {
    const btn = document.querySelector('.btn-primary');
    const originalText = btn.textContent.trim();
    
    // 显示加载状态
    btn.innerHTML = '<div class="loading-spinner"></div>生成中...';
    btn.disabled = true;
    
    // 模拟API调用
    setTimeout(() => {
        // 恢复按钮状态
        btn.innerHTML = '<div class="ai-icon"></div>一键成文';
        btn.disabled = false;
        
        // 显示成功提示
        showNotification('内容生成成功！', 'success');
        
        // 这里可以添加实际的内容生成逻辑
        console.log('AI内容生成完成');
    }, 2000);
}

// 选择商品功能
function selectProducts() {
    showNotification('正在打开商品选择器...', 'info');
    
    // 这里可以添加商品选择逻辑
    console.log('打开商品选择器');
}

// 卡片交互功能
function initializeCardInteractions() {
    const cards = document.querySelectorAll('.recent-card, .case-card');
    
    cards.forEach(card => {
        // 点击卡片事件
        card.addEventListener('click', function() {
            const title = this.querySelector('.card-title').textContent;
            console.log('查看卡片:', title);
            
            // 这里可以添加卡片详情查看逻辑
        });
        
        // 悬停效果
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 响应式功能
function initializeResponsive() {
    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        adjustLayout();
    });
    
    // 初始调整
    adjustLayout();
}

function adjustLayout() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (window.innerWidth <= 768) {
        // 移动端布局调整
        sidebar.style.position = 'relative';
        sidebar.style.width = '100%';
        sidebar.style.height = 'auto';
        
        // 调整导航菜单为横向滚动
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.style.display = 'flex';
            navMenu.style.overflowX = 'auto';
            navMenu.style.padding = '0 16px';
        }
    } else {
        // 桌面端布局恢复
        sidebar.style.position = 'static';
        sidebar.style.width = '184px';
        sidebar.style.height = '100vh';
        
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.style.display = 'block';
            navMenu.style.overflowX = 'visible';
            navMenu.style.padding = '0';
        }
    }
}

// 通知功能
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    // 根据类型设置背景色
    const colors = {
        success: '#00ba73',
        error: '#f54242',
        warning: '#ff9500',
        info: '#3855d5'
    };
    
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 搜索功能
function initializeSearch() {
    // 这里可以添加搜索功能
    console.log('搜索功能初始化');
}

// 数据加载功能
function loadRecentContent() {
    // 模拟加载最近创作内容
    console.log('加载最近创作内容');
}

function loadCasesContent() {
    // 模拟加载优秀案例内容
    console.log('加载优秀案例内容');
}

// 工具函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 添加加载动画样式
const style = document.createElement('style');
style.textContent = `
    .loading-spinner {
        width: 14px;
        height: 14px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid #ffffff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-right: 8px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .btn-primary:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    .recent-card,
    .case-card {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
`;
document.head.appendChild(style);

// 导出功能供外部使用
window.AIEcommerce = {
    generateContent,
    selectProducts,
    showNotification,
    loadRecentContent,
    loadCasesContent
};
