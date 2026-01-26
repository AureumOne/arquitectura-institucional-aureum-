#!/bin/bash

echo "=== DEPLOY FINAL - APENAS SITE DOCTOCTUS ==="

# Inicializar repositório
git init
git add .
git commit -m "Deploy: Aureum One Peer Review - Docusaurus v3.5.2"
git branch -M main

# Adicionar remote e fazer push
git remote add origin git@github.com:AureumOne/aureum-peer-review.git
git push -u origin main --force

echo ""
echo "✅ Deploy concluído!"
echo "URL: https://aureum-one.github.io/aureum-peer-review/"
echo ""
echo "Aguarde 2-3 minutos para o GitHub Pages atualizar..."
