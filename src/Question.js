// models/Question.js
import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  testId: String,
  questionText: String,
  options: [String],
  correctAnswer: String,
  questionType: String,
  difficulty: String,
  explanation: String
}, { timestamps: true });

export default mongoose.model('Question', questionSchema);


// import React from "react";
// const aptitudeQuestions = [
//   {
//     id: 1,
//     question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
//     options: [
//       { value: "150", label: "150 meter" },
//       { value: "120", label: "120 meter" },
//       { value: "180", label: "180 meter" },
//       { value: "340", label: "340 meter" },
//     ],
//     correctAnswer: "150",
//   },
//   {
//     id: 2,
//     question: "The sum of the ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
//     options: [
//       { value: "4", label: "4 years" },
//       { value: "7", label: "7 years" },
//       { value: "10", label: "10 years" },
//       { value: "6", label: "6 years" },
//     ],
//     correctAnswer: "4",
//   },
//   {
//     id: 3,
//     question: "What number should come next in the sequence: 2, 9, 28, 65, ?",
//     options: [
//       { value: "126", label: "126" },
//       { value: "102", label: "102" },
//       { value: "118", label: "118" },
//       { value: "134", label: "134" },
//     ],
//     correctAnswer: "126",
//   },
//   {
//     id: 4,
//     question: "If A = 26, SUN = 27, then CAT = ?",
//     options: [
//       { value: "24", label: "24" },
//       { value: "27", label: "27" },
//       { value: "31", label: "31" },
//       { value: "57", label: "57" },
//     ],
//     correctAnswer: "24",
//   },
//   {
//     id: 5,
//     question: "A man walks 5 km toward the south and then turns to the right. After walking 3 km, he turns to the left and walks 5 km. Now in which direction is he from the starting place?",
//     options: [
//       { value: "West", label: "West" },
//       { value: "South", label: "South" },
//       { value: "North-East", label: "North-East" },
//       { value: "South-West", label: "South-West" },
//     ],
//     correctAnswer: "South-West",
//   },
//   {
//     id: 6,
//     question: "Find the odd one out: January, March, May, June, July, August, October, December",
//     options: [
//       { value: "June", label: "June" },
//       { value: "July", label: "July" },
//       { value: "August", label: "August" },
//       { value: "October", label: "October" },
//     ],
//     correctAnswer: "June",
//   },
//   {
//     id: 7,
//     question: "If 'SYSTEM' is coded as 'SYSMET', then how will 'NEARER' be coded?",
//     options: [
//       { value: "AENRER", label: "AENRER" },
//       { value: "NAERER", label: "NAERER" },
//       { value: "RANREE", label: "RANREE" },
//       { value: "NRAERE", label: "NRAERE" },
//     ],
//     correctAnswer: "NAERER",
//   },
//   {
//     id: 8,
//     question: "Two numbers are in the ratio 3:5. If 9 is subtracted from each, the ratio becomes 12:23. The numbers are:",
//     options: [
//       { value: "33, 55", label: "33, 55" },
//       { value: "42, 70", label: "42, 70" },
//       { value: "36, 60", label: "36, 60" },
//       { value: "48, 80", label: "48, 80" },
//     ],
//     correctAnswer: "33, 55",
//   },
//   {
//     id: 9,
//     question: "A can do a piece of work in 10 days and B can do it in 15 days. How many days will they take to complete the work together?",
//     options: [
//       { value: "5", label: "5 days" },
//       { value: "6", label: "6 days" },
//       { value: "8", label: "8 days" },
//       { value: "12", label: "12 days" },
//     ],
//     correctAnswer: "6",
//   },
//   {
//     id: 10,
//     question: "The average of 5 numbers is 20. If one number is excluded, the average becomes 15. What is the excluded number?",
//     options: [
//       { value: "20", label: "20" },
//       { value: "40", label: "40" },
//       { value: "35", label: "35" },
//       { value: "30", label: "30" },
//     ],
//     correctAnswer: "40",
//   },
//   {
//     id: 11,
//     question: "What will be the next number in the series: 7, 12, 19, 28, ?",
//     options: [
//       { value: "39", label: "39" },
//       { value: "37", label: "37" },
//       { value: "40", label: "40" },
//       { value: "49", label: "49" },
//     ],
//     correctAnswer: "39",
//   },
//   {
//     id: 12,
//     question: "If 'PAPER' is coded as 'OCTCT', how is 'PENCIL' coded?",
//     options: [
//       { value: "ROGQL", label: "ROGQL" },
//       { value: "ROHCL", label: "ROHCL" },
//       { value: "ORHBM", label: "ORHBM" },
//       { value: "ORICL", label: "ORICL" },
//     ],
//     correctAnswer: "ORICL",
//   },
//   {
//     id: 13,
//     question: "A father is three times as old as his son. After 12 years, he will be twice as old as his son. What is the present age of the son?",
//     options: [
//       { value: "12", label: "12 years" },
//       { value: "14", label: "14 years" },
//       { value: "16", label: "16 years" },
//       { value: "18", label: "18 years" },
//     ],
//     correctAnswer: "12",
//   },
//   {
//     id: 14,
//     question: "Find the missing letter in the series: A, C, F, J, ?",
//     options: [
//       { value: "O", label: "O" },
//       { value: "P", label: "P" },
//       { value: "Q", label: "Q" },
//       { value: "R", label: "R" },
//     ],
//     correctAnswer: "O",
//   },
//   {
//     id: 15,
//     question: "If 20% of a number is 80, then what is 60% of that number?",
//     options: [
//       { value: "160", label: "160" },
//       { value: "240", label: "240" },
//       { value: "320", label: "320" },
//       { value: "400", label: "400" },
//     ],
//     correctAnswer: "240",
//   },
//   {
//     id: 16,
//     question: "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
//     options: [
//       { value: "Sister", label: "Sister" },
//       { value: "Daughter", label: "Daughter" },
//       { value: "Mother", label: "Mother" },
//       { value: "Aunt", label: "Aunt" },
//     ],
//     correctAnswer: "Mother",
//   },
//   {
//     id: 17,
//     question: "What comes next in the sequence: 3, 6, 11, 18, ?",
//     options: [
//       { value: "27", label: "27" },
//       { value: "29", label: "29" },
//       { value: "25", label: "25" },
//       { value: "31", label: "31" },
//     ],
//     correctAnswer: "27",
//   },
//   {
//     id: 18,
//     question: "If 'EARTH' is written as 'FCUXTH', how can 'HEART' be written in that code?",
//     options: [
//       { value: "JGBSU", label: "JGBSU" },
//       { value: "JGCVT", label: "JGCVT" },
//       { value: "IGBQS", label: "IGBQS" },
//       { value: "IGCVT", label: "IGCVT" },
//     ],
//     correctAnswer: "IGCVT",
//   },
//   {
//     id: 19,
//     question: "A shopkeeper bought a table for ₹200 and sold it for ₹275. What is his profit percentage?",
//     options: [
//       { value: "25%", label: "25%" },
//       { value: "30%", label: "30%" },
//       { value: "37.5%", label: "37.5%" },
//       { value: "75%", label: "75%" },
//     ],
//     correctAnswer: "37.5%",
//   },
//   {
//     id: 20,
//     question: "If all the vowels are removed from the alphabet, which letter will be the 10th letter of the remaining alphabet?",
//     options: [
//       { value: "M", label: "M" },
//       { value: "N", label: "N" },
//       { value: "P", label: "P" },
//       { value: "Q", label: "Q" },
//     ],
//     correctAnswer: "P",
//   },
// ];

// export default aptitudeQuestions;