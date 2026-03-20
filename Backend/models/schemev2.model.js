 
import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const schemeSchema = new Schema(
{
  openDate: {
    type: Date,
    default: null,
  },

  closeDate: {
    type: Date,
    default: null,
  },

  state: {
    type: String,
    default: null,
  },

  nodalMinistryName: {
    type: Object,
    default: null,
  },

  schemeName: {
    type: String,
    required: true,
  },

  schemeShortTitle: {
    type: String,
    required: true,
  },

  level: {
    type: String,
    enum: ["Central", "State", "State/ UT"],
  },

  schemeCategory: [
    {
      type: String,
    },
  ],

  tags: [
    {
      type: String,
    },
  ],

  /* ================= SCHEME DETAILS ================= */

  overview: {
    type: String,
    default: "",
  },

  eligibility: [
    {
      type: String,
    },
  ],

  benefits: [
    {
      type: String,
    },
  ],

  documents_required: [
    {
      type: String,
    },
  ],

  applyLink: {
    type: String,
    default: "",
  },

  /* ================= FAQ ================= */

  faqs: [
    {
      question: String,
      answer: String,
    },
  ],

  /* ================= EXTRA DETAILS ================= */

  references: [
    {
      title: String,
      url: String,
    },
  ],

  detailedDescription_md: {
    type: String,
    default: "",
  },

  applicationProcess: [
    {
      step: String,
    },
  ],

  eligibilityDescription_md: {
    type: String,
    default: "",
  },
},
{
  timestamps: true,
}
);

/* ================= PAGINATION ================= */

schemeSchema.plugin(mongoosePaginate);

/* ================= INDEXES ================= */

schemeSchema.index({ schemeName: "text", schemeShortTitle: "text" });
schemeSchema.index({ state: 1, level: 1 });
schemeSchema.index({ tags: 1 });
schemeSchema.index({ schemeCategory: 1 });

const Schemev2 = model("Schemesv2", schemeSchema);

export default Schemev2;

