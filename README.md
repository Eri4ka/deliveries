## 🚀 **Деплой**
[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-brightgreen)](https://deliveries-cdek.vercel.app/)

🔗 Ссылка на деплой: **[https://deliveries-cdek.vercel.app/](https://deliveries-cdek.vercel.app/)**  

---

### ⚡ **Запуск проекта локально**

#### 1️⃣ **Клонирование репозитория**
```sh
git clone https://github.com/Eri4ka/deliveries.git
```
#### 2️⃣ Установка зависимостей
```sh
npm install
```
#### 3️⃣ Запуск проекта
```sh
npm run dev
```
---
### 🧪 **Тестирование**
```sh
npm test
```
---
### 🔧 **Технологии**
	•	Next.js (App Router)
	•	TypeScript
	•	ShadCN UI
	•	Jest + Testing Library
---
### 🌐 **API**
Проект использует моковое API. Данные хранятся в JSON-файлах в папке app/data/.

📌 GET /api/delivery/list - Возвращает список доставок.

📌 GET /api/delivery/status - Возвращает список доступных статусов.

📌 GET /api/delivery/{id} - Возвращает детали конкретной доставки.