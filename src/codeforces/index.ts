export default class CodeforcesTool {
  username: string = '';
  password: string = '';
  contestID: string = '';
  private isLogin: boolean = false;
  
  constructor(username='', password='') {
    this.username = username;
    this.password = password;
  }

  checkLogin() {
    return this.isLogin;
  }
  checkContest() {
    return this.contestID !== '';
  }
  
}