mutation {
    createNewUser(firstName:"Jack", lastName:"Quaid", email:"jack@quaid.com", password:"jq@0910") {
      firstName
      lastName
      email
      password
    }
  }
  
  query {
    getAllUserData(id: 1000) {
      id
      firstName
      email
    }
  }
  
  query {
    getUserById (id:1001) {
      id
      firstName
      lastName
      email
      password
    }
  }