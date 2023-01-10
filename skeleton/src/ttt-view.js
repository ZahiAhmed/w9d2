class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard(){
    const ul = document.createElement('ul');
      for (let i=0; i<3; i++) {
        let outerli = document.createElement('li')
          for (let j=0; j<3; j++) {
            let innerli = document.createElement('li');
            outerli.append(innerli);
            innerli.flex = "";
          }
          ul.append(outerli)
      }
    this.el.append(ul)
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
