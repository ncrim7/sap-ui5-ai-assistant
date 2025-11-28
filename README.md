
---

# 🚀 SAPUI5 Enterprise AI Assistant (Multi-Agent & Full-Stack)

[![SAPUI5](https://img.shields.io/badge/SAPUI5-1.108-blue)](https://ui5.sap.com)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB_Atlas-forestgreen)](https://www.mongodb.com/atlas)
[![OpenAI](https://img.shields.io/badge/AI-OpenAI_Assistants_API_v2-black)](https://platform.openai.com)

Bu proje, modern **SAP Fiori** standartlarını **Üretken Yapay Zeka (GenAI)** gücüyle birleştiren Full-Stack mimariye sahip kurumsal bir sohbet asistanıdır.

Proje; yalnızca metin tabanlı bir chatbot değil, **Multi-Agent (Çoklu Ajan)** yapısıyla Aktivite Girişi, Kaynak Planlama ve Raporlama gibi süreçleri yöneten, verileri grafikle gösteren ve sesli komut desteğine sahip otonom bir sistemdir.

---

##  Temel Özellikler

###  Yapay Zeka & Mimari

* **Multi-Agent Orchestration:**
  Planlama, Raporlama ve Aktivite Yönetimi için 3 ayrı OpenAI Asistanı.
* **Function Calling (Tools):**
  Yapay zeka ihtiyaç duyduğunda backend API metotlarını akıllı şekilde tetikler.
* **Full-Stack Akış:**
  SAPUI5 (Frontend) → Node.js (Backend) → MongoDB (Database)

###  Kullanıcı Deneyimi (UX/UI)

* **Adaptive UI:**
  Sohbet modunda metin, analiz modunda otomatik **VizFrame Donut Chart** üretir.
* **Sidebar Navigation:**
  ChatGPT tarzı sol menü, geçmiş sohbetler ve senaryo seçimi.
* **Voice Command (Jarvis Modu):**
  Web Speech API ile sesli komut ve dikte desteği.
* **Markdown Rendering:**
  Botun gönderdiği kod blokları, tablolar, başlıklar otomatik render edilir.
* **Akıllı Davranışlar:**
  “Yazıyor...” animasyonu, input kilitleme, auto-focus, busy indicator.

###  Veri Yönetimi

* **MongoDB Persistent Chat History:**
  Her konuşma DB’ye yazılır ve tekrar yüklenebilir.
* **Gerçek Zamanlı Veri:**
  Şirket listesi, aktiviteler ve planlama verisi MongoDB üzerinden canlı gelir.

---

##  Teknoloji Yığını

| Katman        | Teknoloji                | Açıklama                          |
| ------------- | ------------------------ | --------------------------------- |
| **Frontend**  | SAPUI5 (Freestyle)       | XML Views, TypeScript Controllers |
| **Backend**   | Node.js + Express        | REST API + İş Mantığı             |
| **Database**  | MongoDB Atlas            | Cloud NoSQL                       |
| **AI Engine** | OpenAI Assistants API v2 | GPT-4o, Threads & Runs            |
| **Security**  | CORS, Proxy              | SAP Fiori Tools Proxy Middleware  |

---

##  Proje Klasör Yapısı

```text
sap-ui5-ai-assistant/
├── sap-chat-backend/        # Node.js Backend
│   ├── server.js            # API Endpoint'leri
│   ├── .env                 # API Key + DB Bilgileri
│   └── package.json
│
├── ui5chatapp/              # SAPUI5 Frontend
│   ├── webapp/
│   │   ├── controller/      # Main.controller.ts
│   │   ├── view/            # Main.view.xml
│   │   ├── model/           # formatter.ts, chatData.json
│   │   ├── css/             # Stiller
│   │   └── manifest.json
│   ├── ui5.yaml             # Proxy ayarları
│   └── package.json
│
└── README.md
```

---

#  Kurulum ve Çalıştırma

## 1. Ön Gereksinimler

* Node.js (16+)
* MongoDB Atlas hesabı
* OpenAI API Key
* 3 adet OpenAI Assistant (Planlama, Aktivite, Raporlama)

---

## 2. Backend Kurulumu

Terminal:

```bash
cd sap-chat-backend
npm install
```

`.env` dosyasını oluştur:

```env
PORT=4000
MONGO_URI=mongodb+srv://kullanici:sifre@cluster.mongodb.net/db_name
OPENAI_API_KEY=sk-proj-...
```

Backend’i başlat:

```bash
node server.js
```

Başarılı çıktılar:

```
Server http://localhost:4000 adresinde çalışıyor...
✅ MongoDB Bağlantısı Başarılı!
```

---

## 3. Frontend Kurulumu

```bash
cd ui5chatapp
npm install
```

`ui5.yaml` proxy ayarı:

```yaml
backend:
  - path: /api
    url: http://localhost:4000
    destination: ""
```

Frontend’i başlat:

```bash
npm run start
```

Tarayıcı otomatik açılır:
👉 [http://localhost:8080](http://localhost:8080)

---

#  OpenAI Asistan Kurulumu

Toplam **3 Asistan** gerekiyor:

* 📌 Aktivite Asistanı
* 📌 Planlama Asistanı
* 📌 Raporlama Asistanı

Her biri için “Instructions” + “Tools” tanımlanmalı.

---

## ✔️ Gerekli Tool Şemaları

### 🔧 `get_companies`

```json
{
  "name": "get_companies",
  "description": "Firma listesini getirir veya arama yapar.",
  "parameters": {
    "type": "object",
    "properties": {
      "search_text": { "type": "string" }
    }
  }
}
```

---

### 🔧 `save_activity`

```json
{
  "name": "save_activity",
  "description": "Aktiviteyi kaydeder.",
  "parameters": {
    "type": "object",
    "properties": {
      "company_id": { "type": "string" },
      "hours": { "type": "number" },
      "date": { "type": "string" },
      "description": { "type": "string" }
    },
    "required": ["company_id", "hours", "date"]
  }
}
```

---

### 🔧 `get_activity_report`

```json
{
  "name": "get_activity_report",
  "description": "Aktivite raporunu çeker.",
  "parameters": {
    "type": "object",
    "properties": {
      "period": { "type": "string" }
    },
    "required": ["period"]
  }
}
```

---

# 📸 Ekran Görüntüleri

* 🖥️ Chat Arayüzü
* 📊 Donut Chart Raporlama

---

# 📄 Lisans

MIT Lisansı ile lisanslanmıştır.
Eğitim & geliştirme amaçlı serbestçe kullanılabilir.

**Geliştirici:** Nazmi CİRİM
**Teknolojiler:** SAPUI5 • Node.js • MongoDB • OpenAI

---
