#!/bin/bash

# Git reposunun bulunduğu dizine git
cd /app/delicode || exit

# Git reposunu güncelle
echo "Git reposu güncelleniyor..."
git pull origin main

# Bağımlılıkları yükle
echo "Bağımlılıklar yükleniyor..."
npm install

# Uygulamayı yeniden derle
echo "Uygulama yeniden derleniyor..."
npm run build

# PM2 ile uygulamayı yeniden başlat
echo "Uygulama yeniden başlatılıyor..."
pm2 restart delicode

echo "Güncelleme ve yeniden başlatma işlemi tamamlandı."

