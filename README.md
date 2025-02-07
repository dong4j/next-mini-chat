# Next-Mini-Chat

一个简单的 AI 对话机器人, 修改自 [Next-Mini-Chat](https://github.com/hamster1963/Next-Mini-Chat)

## 改动

1. 删除了认证, 只要接入可用的 API, 随便使用;
2. 修改了部分样式;

## 使用

```bash
bun install
bun run dev
```

## 服务器部署

```bash
# 上传文件到服务器, 需要修改上传地址等
./deploy.sh
# 服务器需要安装依赖并编译
bun install
bun build
```

`package.json` 中修改端口.

## 使用 pm2 部署

```bash
pm2 start ecosystem.config.js
```