# syntax=docker/dockerfile:1

ARG VARIANT="20"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# Install some generally useful tools
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    curl git sqlite3 entr source-highlight

# Install SAP CAP SDK globally
USER node
RUN npm install -g @sap/cds-dk

# vi mode everywhere KTHXBAI
RUN cat <<EOBASHRC >> /home/node/.bashrc
set -o vi
bind -x '"\C-l": clear'
EOBASHRC

# Ready!
WORKDIR /home/node
