// db.createCollection("staticInfo",
//   {
//     validator: { $and:
//       [
//         {
//           linkedIn: { $type: "string" },
//           github: { $type: "string" },
//           phone: { $type: "string" },
//           email: { $type: "string" }, // regex expression pending
//           address1: { $type: "string" },
//           address2: { $type: "string" },
//           city: { $type: "string" },
//           state: { $type: "string" },
//           zipCode: { $type: "string" }
//         }
//       ]
//     }
//   }
// )

// db.createCollection("taggedInfo",
//   {
//     validator: { $and:
//       [
//         {
//           tagName: { $type: "string" },
//           heroSection: { $type: "object" },
//           experienceSection: { $type: "object" },
//           projectsSection: { $type: "object" },
//           skillsSection: { $type: "object" },
//           analyticData: { $type: "array" }
//         }
//       ]
//     }
//   }
// )

// db.createCollection("experiences",
//   {
//     validator: { $and:
//       [
//         {
//           order: { $type: "double" },
//           companyName: { $type: "string" },
//           companyURL: { $type: "string" },
//           jobTitle: { $type: "string" },
//           startDate: { $type: "date" },
//           endDate: { $type: "date" },
//           hoverTitle: { $type: "string" },
//           hoverDescription: { $type: "string" }
//         }
//       ]
//     }
//   }
// )

// db.createCollection("projects",
//   {
//     validator: { $and:
//       [
//         {
//           order: { $type: "double" },
//           projectTitle: { $type: "string" },
//           projectDescription: { $type: "string" },
//           projectURL: { $type: "string" },
//           imageURL: { $type: "string" },
//           githubURL: { $type: "string" }
//         }
//       ]
//     }
//   }
// )

// db.createCollection("skills",
//   {
//     validator: { $and:
//       [
//         {
//           order: { $type: "double" },
//           skillTitle: { $type: "string" },
//           skillPercentage: { $type: "double" }
//         }
//       ]
//     }
//   }
// )

// db.createCollection("analyticDatum",
//   {
//     validator: { $and:
//       [
//         {
//           tagName: { $type: "string" },
//           userName: { $type: "string" },
//           companyName: { $type: "string" },
//           visits: { $type: "array" }
//         }
//       ]
//     }
//   }
// )

// db.createCollection("heroSection",
//   {
//     validator: { $and:
//       [
//         {
//           title: { $type: "string" },
//           subtitle: { $type: "string" }
//         }
//       ]
//     }
// }
// )

// db.createCollection("experienceSection",
//   {
//     validator: { $and:
//       [
//         {
//           focusDescription: { $type: "string" },
//           experiences: { $type: "array" }
//         }
//       ]
//     }
//   }
// )

// db.createCollection("projectsSection",
//   {
//     validator: { $and:
//       [
//         {
//           focusDescription: { $type: "string" },
//           projects: { $type: "array" }
//         }
//       ]
//     }
//   }
// )

// db.createCollection("skillsSection",
//   {
//     validator: { $and:
//       [
//         {
//           skillParagraphText: { $type: "string" },
//           skills: { $type: "array" }
//         }
//       ]
//     }
//   }
// )
