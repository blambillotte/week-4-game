$(document).ready(function() {

  var game = {
    currentScore: 0,
    currentScoreDiv: $('#score'),
    currentTarget: 0,
    currentTargetDiv: $('#point-target'),
    totalWins: 0,
    totalWinsDiv: $('#wins'),
    totalLoses: 0,
    totalLosesDiv: $('#loses'),
    crystals: {
      crystalA: $('#crystal-A'),
      crystalB: $('#crystal-B'),
      crystalC: $('#crystal-C'),
      crystalD: $('#crystal-D')
    },
    init: function() {
      this.assignPoints();
      this.clickListen();
      this.setTarget();
    },
    clickListen: function() {
      $('.crystal').click(function(){
      console.log(this.dataset.points);
      game.currentScore += parseInt(this.dataset.points);
      game.currentScoreDiv.html(game.currentScore);

      // TODO: check score after each click
      if (game.currentScore > game.currentTarget) {
        game.totalLoses++;
        game.totalLosesDiv.html(game.totalLoses);
        game.newRound();

      } else if (game.currentScore === game.currentTarget) {
        game.totalWins++;
        game.totalWinsDiv.html(game.totalWins);
        game.newRound();
      }

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
    },
    newRound: function() {
      this.assignPoints();
      this.setTarget();
      this.currentScore = 0;
      this.currentScoreDiv.html(this.currentScore);
    }
  }

//console.log(game);






  game.init();

});
