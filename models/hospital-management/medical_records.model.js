import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
      ref: "Doctor",
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    ref: "Doctor",
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
    treatment: {
      type: String,
      required: true,
    },
    dateOfVisit: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
