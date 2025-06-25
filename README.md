# 🩺 Joscripta — Smart e-Prescription Tool

**Joscripta** is a modern, secure, and blazing-fast e-prescription platform designed to help healthcare professionals create clean, safe, and printable prescriptions in seconds. Built with a focus on accessibility, mobile-readiness, and smart drug safety checks.

---

## 🚀 Features

- 🧑‍⚕️ Patient Info Entry (name, age, gender, allergies, diagnosis)
- 💊 Drug Input (autocomplete, dosage, frequency, duration)
- 🚨 Real-time Drug Interaction Warnings (WIP)
- 📄 Instant PDF Prescription Generator
- 🧾 Clean and printable layout
- 🔒 Secure by design — no PII stored unless explicitly saved
- 🌐 Mobile-first, App-ready frontend
- 🔌 Modular, monorepo setup using **Turborepo**

---

## 🧱 Tech Stack

| Layer       | Stack                            |
|------------|----------------------------------|
| Frontend    | Next.js, Tailwind CSS, shadcn/ui |
| Backend     | Express.js (Node.js)             |
| PDF Engine  | PDFKit (server-side)             |
| Monorepo    | Turborepo                        |
| Deployment  | Vercel (frontend), Railway/Render (backend) |
| Drug Data   | RxNorm / DrugBank (future)       |

---


---

## 📦 Setup & Development

### 1. Clone and install

```bash
git clone https://github.com/yourname/joscripta.git
cd joscripta
npm install


### 2. Start dev servers (frontend + backend)


```bash

npm run dev


```

## ✅ Roadmap

- [x] Patient & drug input UI  
- [x] Basic PDF generation  
- [ ] Drug interaction checker  
- [ ] PDF styling & branding  
- [ ] Login + prescription history (v2)  
- [ ] Voice-to-Rx dictation (v3)  
- [ ] AI dosage recommendations (v4)

---

## 🔐 Disclaimer

⚠️ **Not a medical device. Not for use in the U.S. without proper license.**  
Always verify prescriptions with licensed pharmacists or regulatory authorities before use.



---

Let me know if you want to add **screenshots**, **deployment steps**, or a **badge section**.
