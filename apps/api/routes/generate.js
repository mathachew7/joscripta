// apps/api/routes/generate.js
const express = require("express")
const PDFDocument = require("pdfkit")
const router = express.Router()

router.post("/generate", (req, res) => {
  consle.log("Received request to generate prescription");
  const { patient, drugs } = req.body

  const doc = new PDFDocument()
  let buffers = []

  doc.on("data", buffers.push.bind(buffers))
  doc.on("end", () => {
    const pdfData = Buffer.concat(buffers)
    res
      .writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=prescription.pdf",
        "Content-Length": pdfData.length,
      })
      .end(pdfData)
  })

  doc.fontSize(20).text("Joscripta Prescription", { align: "center" })
  doc.moveDown()
  doc.fontSize(12).text(`Date: ${new Date().toLocaleDateString()}`)

  doc.moveDown().fontSize(14).text("Patient Information", { underline: true })
  doc.fontSize(12)
  doc.text(`Name: ${patient.name}`)
  doc.text(`Age: ${patient.age}`)
  doc.text(`Gender: ${patient.gender}`)
  if (patient.weight) doc.text(`Weight: ${patient.weight}`)
  if (patient.allergies) doc.text(`Allergies: ${patient.allergies}`)
  if (patient.diagnosis) doc.text(`Diagnosis: ${patient.diagnosis}`)

  doc.moveDown().fontSize(14).text("Prescribed Drugs", { underline: true })
  drugs.forEach((drug, index) => {
    doc.fontSize(12).text(
      `${index + 1}. ${drug.name} - ${drug.dosage} ${drug.unit} - ${drug.frequency} - ${drug.duration} days`
    )
  })

  doc.moveDown()
  doc.text("\n---\nPrescribed using Joscripta\nThis is a computer-generated prescription.", {
    align: "center",
  })

  doc.end()
})

module.exports = router
