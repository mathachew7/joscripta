const express = require("express");
const cors = require("cors");
const PDFDocument = require("pdfkit");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Logging middleware (placed early to catch all routes)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Joscripta API is running." });
});

// Basic test endpoint
app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello from Joscripta backend!" });
});

// Generate prescription PDF
app.post("/generate", (req, res) => {
  const { patient, drugs } = req.body;

  if (!patient || !drugs || !Array.isArray(drugs)) {
    return res.status(400).json({ error: "Missing or invalid patient or drugs data" });
  }

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'inline; filename="prescription.pdf"');

  const doc = new PDFDocument();
  doc.pipe(res);

  // Header
  doc.fontSize(20).text("Prescription", { align: "center" }).moveDown();

  // Patient info
  doc.fontSize(12)
    .text(`Name: ${patient.name}`)
    .text(`Age: ${patient.age}`)
    .text(`Gender: ${patient.gender}`);
  if (patient.weight) doc.text(`Weight: ${patient.weight}`);
  if (patient.allergies) doc.text(`Allergies: ${patient.allergies}`);
  if (patient.diagnosis) doc.text(`Diagnosis: ${patient.diagnosis}`);
  doc.moveDown();

  // Drugs
  doc.text("Medications:");
  drugs.forEach((drug, i) => {
    doc.text(`${i + 1}. ${drug.name} — ${drug.dosage}, ${drug.frequency}, ${drug.duration}`);
  });

  doc.end();
});

// Server start
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Joscripta API listening on port ${PORT}`);
});
