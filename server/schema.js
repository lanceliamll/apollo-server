exports.typeDefs = `

type Student {
  studentId: String! 
  firstName: String!
  lastName: String!
  sectionId: [Section]
  email: String!
  password: String!
  createdDate: String!
}

type Admin {
  professorId: String! 
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  createdDate: String!
  studentId: [Student]
}

type Section {
  studentId: [Student]
  sectionName: String! 
  createdDate: String!
}

type Query {
  hello: String!
}


`;
