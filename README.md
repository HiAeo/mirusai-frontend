# MirusAI Frontend

MirusAI 是一个 AI 搜索品牌监测平台，帮助企业监测品牌在 AI 搜索中的表现。

## 功能特性

- 🔐 用户认证（登录/注册）
- 📊 仪表盘（核心指标 + 趋势图）
- 📁 项目管理
- 🏷️ 品牌管理
- 🎯 竞品管理
- 💬 Prompt 监控
- 📈 竞品对比
- 📄 报告中心
- 👤 个人中心
- ⚙️ 系统设置
- 🌐 中英文切换

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router v6
- Supabase
- Recharts
- React Hook Form
- React Hot Toast

## 快速开始

### 安装依赖

```bash
npm install
```

### 配置环境变量

复制 `.env.example` 为 `.env`，填入你的 Supabase 配置：

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 开发

```bash
npm run dev
```

访问 http://localhost:5173

### 构建

```bash
npm run build
```

## 项目结构

```
src/
├── components/       # 可复用组件
├── pages/           # 页面组件
├── hooks/           # 自定义 Hooks
├── contexts/        # React Context
├── lib/             # 库配置
├── i18n.ts          # 国际化配置
├── App.tsx          # 主应用
└── main.tsx         # 入口
```

## 部署

### Vercel 部署

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 配置环境变量
4. 部署

## 许可证

MIT
