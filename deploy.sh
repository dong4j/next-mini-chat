#!/bin/bash

# 获取当前脚本的所在目录
SCRIPT_DIR=$(dirname "$(realpath "$0")")

cd "$SCRIPT_DIR" || exit 1

# 设置默认值
DEFAULT_SSH_ALIAS="m920x.d"
DEFAULT_REMOTE_DIR="/mnt/4.860.ssd/next-mini-chat"
DEFAULT_LOCAL_DIR="."

# 检查参数，如果未提供则使用默认值
SSH_ALIAS="${1:-$DEFAULT_SSH_ALIAS}"       
REMOTE_DIR="${2:-$DEFAULT_REMOTE_DIR}"     
LOCAL_DIR="${3:-$DEFAULT_LOCAL_DIR}" 

rsync -avz --progress --delete \
  --exclude '.DS_Store' \
  --exclude '._*' \
  --exclude '__MACOSX' \
  --exclude '.next/' \
  --exclude '.vscode/' \
  --exclude 'node_modules/' \
  --exclude '.env.example' \
  --exclude '.git/' \
  --exclude '.gitignore' \
  --exclude 'deploy.sh' \
  "$LOCAL_DIR/" "$SSH_ALIAS:$REMOTE_DIR/" > /dev/null 2>&1

# 上传完成
echo "Upload complete."

ssh "$SSH_ALIAS" "source ~/.nvm/nvm.sh && pm2 stop next-mini-chat && pm2 delete next-mini-chat && pm2 start $DEFAULT_REMOTE_DIR/ecosystem.config.js"
if [ $? -ne 0 ]; then
  echo "Error: Failed to reload server '$SSH_ALIAS'."
  exit 1
fi

echo "Server configuration successfully updated and reloaded on '$SSH_ALIAS'."