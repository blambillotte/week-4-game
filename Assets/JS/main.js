$(document).ready(function() {

  var game = {
    currentScore: 0,
    currentScoreDiv: '',
    currentTargetDiv: '',
    currentTarget: 0,
    crystals: {
      crystalA: '',
      crystalB: '',
      crystalC: '',
      crystalD: ''
    },
    init: function() {
      this.cacheDom();
      this.assignPoints();
      this.clickListen();
      this.setTarget();
    },
    cacheDom: function() {
      this.crystals.crystalA = $('#crystal-A');
      this.crystals.crystalB = $('#crystal-B');
      this.crystals.crystalC = $('#crystal-C');
      this.crystals.crystalD = $('#crystal-D');
      this.currentTargetDiv = $('#point-target');
      this.currentScoreDiv = $('#score');
    },
    clickListen: function() {
      $('.crystal').click(function(){
      console.log(this.dataset.points);
      game.currentScore += parseInt(this.dataset.points);
      game.currentScoreDiv.html(game.currentScore);
      });
    },
    createPoints: function() {
      var point = Math.floor(Math.random() * 12) + 1;
      return point;
    },
    assignPoints: function() {
      this.crystals.crystalA.attr('data-points', this.createPoints());
      this.crystals.crystalB.attr('data-points', this.createPoints());
      this.crystals.crystalC.attr('data-points', this.createPoints());
      this.crystals.crystalD.attr('data-points', this.createPoints());

    },
    setTarget: function() {
      this.currentTarget = Math.floor(Math.random() * 102) + 19;
      console.log(this.currentTarget);
      this.currentTargetDiv.html(this.currentTarget);
    }
  }

//console.log(game);






  game.init();

});
