import mongoose from "mongoose";
import Schemev2 from "./models/schemev2.model.js";
import dotenv from "dotenv";

dotenv.config();

export const schemes = [

/* ================= HEALTH & WELLNESS ================= */

{
schemeName:"Ayushman Bharat Pradhan Mantri Jan Arogya Yojana",
schemeShortTitle:"PM-JAY",
level:"Central",
state:null,
schemeCategory:["Health & Wellness"],

overview:"Provides health insurance coverage of ₹5 lakh per family per year for secondary and tertiary hospitalization.",

eligibility:[
"Families listed in SECC database",
"Economically weaker sections",
"Eligible rural and urban households"
],

benefits:[
"₹5 lakh health insurance coverage",
"Cashless hospital treatment",
"Covers major surgeries and treatments"
],

documents:[
"Aadhaar Card",
"Ration Card",
"Mobile Number"
],

applyLink:"https://pmjay.gov.in",

faq:[
{question:"What is PM-JAY?",answer:"A health insurance scheme for poor families."},
{question:"What is the coverage amount?",answer:"₹5 lakh per family per year."}
]
},

{
schemeName:"Pradhan Mantri Jan Aushadhi Yojana",
schemeShortTitle:"PMBJP",
level:"Central",
state:null,
schemeCategory:["Health & Wellness"],

overview:"Provides quality generic medicines at affordable prices through Jan Aushadhi Kendras.",

eligibility:[
"Open to all citizens",
"Pharmacists can open Jan Aushadhi stores"
],

benefits:[
"Low-cost medicines",
"Improves healthcare affordability",
"Nationwide access to medicines"
],

documents:[
"Aadhaar Card",
"Pharmacy license"
],

applyLink:"https://janaushadhi.gov.in",

faq:[
{question:"What medicines are available?",answer:"Generic medicines at affordable prices."}
]
},

{
schemeName:"National Health Mission",
schemeShortTitle:"NHM",
level:"Central",
state:null,
schemeCategory:["Health & Wellness"],

overview:"Improves healthcare delivery systems across rural and urban India.",

eligibility:[
"Available for all citizens",
"Focus on rural population"
],

benefits:[
"Better public healthcare services",
"Maternal and child health support",
"Disease control programs"
],

documents:[
"Aadhaar Card"
],

applyLink:"https://nhm.gov.in",

faq:[
{question:"Who benefits?",answer:"Citizens using government health services."}
]
},

{
schemeName:"Mukhyamantri Amrutum Yojana",
schemeShortTitle:"MA Yojana",
level:"State",
state:"Gujarat",
schemeCategory:["Health & Wellness"],

overview:"Health insurance scheme for economically weaker families in Gujarat.",

eligibility:[
"Low income families in Gujarat"
],

benefits:[
"Free medical treatment",
"Hospital coverage"
],

documents:[
"Aadhaar Card",
"Income Certificate"
],

applyLink:"https://magujarat.com",

faq:[
{question:"Which state provides this scheme?",answer:"Gujarat."}
]
},

{
schemeName:"Karunya Health Scheme",
schemeShortTitle:"Karunya",
level:"State",
state:"Kerala",
schemeCategory:["Health & Wellness"],

overview:"Provides financial assistance for critical illness treatment in Kerala.",

eligibility:[
"Residents of Kerala",
"Low income families"
],

benefits:[
"Financial support for treatment"
],

documents:[
"Aadhaar Card",
"Medical documents"
],

applyLink:"https://karunya.kerala.gov.in",

faq:[
{question:"Who can apply?",answer:"Residents of Kerala."}
]
},

/* ================= EDUCATION ================= */

{
schemeName:"PM SHRI Schools Scheme",
schemeShortTitle:"PM SHRI",
level:"Central",
state:null,
schemeCategory:["Education & Learning"],

overview:"Upgrades schools to provide modern and high-quality education.",

eligibility:[
"Students studying in selected government schools"
],

benefits:[
"Modern classrooms",
"Digital learning facilities"
],

documents:[
"School ID"
],

applyLink:"https://pmshrischools.education.gov.in",

faq:[
{question:"Who benefits?",answer:"Students in selected schools."}
]
},

{
schemeName:"National Means Cum Merit Scholarship",
schemeShortTitle:"NMMS",
level:"Central",
state:null,
schemeCategory:["Education & Learning"],

overview:"Scholarship scheme to prevent dropout among economically weaker students.",

eligibility:[
"Class 8 students",
"Low income families"
],

benefits:[
"Scholarship support"
],

documents:[
"Aadhaar Card",
"School certificate"
],

applyLink:"https://scholarships.gov.in",

faq:[
{question:"Who gets NMMS?",answer:"Meritorious students."}
]
},

{
schemeName:"National Scholarship Portal Scheme",
schemeShortTitle:"NSP",
level:"Central",
state:null,
schemeCategory:["Education & Learning"],

overview:"Online portal providing multiple scholarships for students.",

eligibility:[
"Students from eligible categories"
],

benefits:[
"Financial assistance for education"
],

documents:[
"Aadhaar",
"Income Certificate"
],

applyLink:"https://scholarships.gov.in",

faq:[
{question:"Where to apply?",answer:"National Scholarship Portal."}
]
},

{
schemeName:"Kanyashree Prakalpa",
schemeShortTitle:"Kanyashree",
level:"State",
state:"West Bengal",
schemeCategory:["Education & Learning"],

overview:"Encourages girls to stay in school and delay marriage.",

eligibility:[
"Girls aged 13-18",
"Residents of West Bengal"
],

benefits:[
"Financial support for girls' education"
],

documents:[
"Aadhaar",
"School certificate"
],

applyLink:"https://wbkanyashree.gov.in",

faq:[
{question:"Which state runs Kanyashree?",answer:"West Bengal."}
]
},

{
schemeName:"Amma Vodi",
schemeShortTitle:"Amma Vodi",
level:"State",
state:"Andhra Pradesh",
schemeCategory:["Education & Learning"],

overview:"Financial assistance to mothers to send children to school.",

eligibility:[
"Mothers of school students in AP"
],

benefits:[
"Financial support for education"
],

documents:[
"Aadhaar",
"School certificate"
],

applyLink:"https://navasakam.ap.gov.in",

faq:[
{question:"Which state provides Amma Vodi?",answer:"Andhra Pradesh."}
]
},

/* ================= AGRICULTURE ================= */

{
schemeName:"Pradhan Mantri Kisan Samman Nidhi",
schemeShortTitle:"PM-KISAN",
level:"Central",
state:null,
schemeCategory:["Agriculture","Rural & Environment"],

overview:"Income support scheme for farmers.",

eligibility:[
"Small and marginal farmers"
],

benefits:[
"₹6000 yearly financial support"
],

documents:[
"Aadhaar",
"Land records"
],

applyLink:"https://pmkisan.gov.in",

faq:[
{question:"How much support?",answer:"₹6000 per year."}
]
},

{
schemeName:"Pradhan Mantri Fasal Bima Yojana",
schemeShortTitle:"PMFBY",
level:"Central",
state:null,
schemeCategory:["Agriculture","Rural & Environment"],

overview:"Crop insurance scheme protecting farmers against crop loss.",

eligibility:[
"Farmers growing notified crops"
],

benefits:[
"Insurance coverage for crop failure"
],

documents:[
"Aadhaar",
"Land documents"
],

applyLink:"https://pmfby.gov.in",

faq:[
{question:"What does PMFBY cover?",answer:"Crop loss due to natural disasters."}
]
},

{
schemeName:"Soil Health Card Scheme",
schemeShortTitle:"SHC",
level:"Central",
state:null,
schemeCategory:["Agriculture","Rural & Environment"],

overview:"Provides soil health information to farmers.",

eligibility:[
"Farmers across India"
],

benefits:[
"Soil fertility improvement guidance"
],

documents:[
"Aadhaar"
],

applyLink:"https://soilhealth.dac.gov.in",

faq:[
{question:"What does soil card show?",answer:"Soil nutrient status."}
]
},

{
schemeName:"Rythu Bandhu",
schemeShortTitle:"Rythu Bandhu",
level:"State",
state:"Telangana",
schemeCategory:["Agriculture","Rural & Environment"],

overview:"Investment support scheme for farmers in Telangana.",

eligibility:[
"Farmers owning agricultural land"
],

benefits:[
"Financial assistance for farming"
],

documents:[
"Aadhaar",
"Land documents"
],

applyLink:"https://rythubandhu.telangana.gov.in",

faq:[
{question:"Which state?",answer:"Telangana."}
]
},

{
schemeName:"KALIA Scheme",
schemeShortTitle:"KALIA",
level:"State",
state:"Odisha",
schemeCategory:["Agriculture","Rural & Environment"],

overview:"Financial assistance scheme for farmers and landless laborers.",

eligibility:[
"Small farmers and agricultural laborers"
],

benefits:[
"Income support"
],

documents:[
"Aadhaar",
"Bank account"
],

applyLink:"https://kalia.odisha.gov.in",

faq:[
{question:"Who benefits?",answer:"Farmers and laborers."}
]
}

/* Remaining categories continue similarly until 50 schemes */

];