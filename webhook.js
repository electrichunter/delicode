const express = require("express");
const { exec } = require("child_process");
const simpleGit = require("simple-git");

const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Güncelleme alındı, kod çekiliyor...");

    const git = simpleGit("/app/delicode"); // Proje dizinini doğru girdiğinizden emin olun

    git.pull("origin", "main", (err, update) => {
        if (err) {
            console.error("Güncelleme hatası:", err);
            return res.status(500).send("Güncelleme başarısız");
        }
        if (update && update.summary.changes) {
            console.log("Kod güncellendi, yeniden başlatılıyor...");
            exec("cd /app/delicode && npm install && npm run build && pm2 restart all", (err, stdout, stderr) => {
                if (err) {
                    console.error("Hata:", err);
                    return res.status(500).send("Uygulama yeniden başlatılamadı");
                }
                console.log("Başarılı güncelleme ve yeniden başlatma:", stdout);
                res.send("Güncelleme ve yeniden başlatma başarılı");
            });
        } else {
            res.send("Hiçbir değişiklik yok, yeniden başlatma yapılmadı");
        }
    });
});

app.listen(5000, () => console.log("Webhook dinleyicisi başlatıldı, port 5000 üzerinde çalışıyor..."));
