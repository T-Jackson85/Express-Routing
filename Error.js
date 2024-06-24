class Error  {
    constructor(message, status) {
      this.message = message;
      this.status = status;
      console.error(this.stack);
    }
  }
  
  
  module.exports = Error;
