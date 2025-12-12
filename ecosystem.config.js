const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    apps: [
      {
        name: 'next-mini-chat', // 应用名称
        namespace: 'npx', // 指定命名空间
        version: '1.0.0', // 应用版本
        script: '/bin/bash', // 通过 bash 执行命令，避免路径问题
        args: '-c "npm run start"', // 通过 bash 执行 npm run start
        cwd: '/Users/dong4j/Developer/Blog/next-mini-chat',
        exec_mode: "fork",
        instances: 1, // 应用实例数量
        autorestart: true, // 自动重启
        watch: true, // 是否启用文件监控
        ignore_watch: ['node_modules', 'logs'], // 忽略监控的文件或目录
        log_date_format: "YYYY-MM-DD HH:mm:ss", // 日志时间格式
        error_file: './logs/error.log', // 错误日志文件
        out_file: './logs/out.log', // 输出日志文件
        merge_logs: true, // 是否合并日志
      },
    ],
  };
  
