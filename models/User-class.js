exports.User = class User {
    constructor(username, password) {
      //this.id = uuid.v1();
      this.username = username;
      this.password = password;
      this.favourites = {};
      this.historySearch = {};
    }
  
}