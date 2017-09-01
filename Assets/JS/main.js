//My Goal: Practice formatting the code to be more modular with Object Literal style

$(document).ready(function() {

  var game = {
    currentScore: 0,
    currentTarget: 0,
    totalWins: 0,
    totalLoses: 0,
    currentScoreDiv: $('#score'),
    currentTargetDiv: $('#point-target'),
    totalWinsDiv: $('#wins'),
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
      $('.crystal').on('click', this.updateScores)
    },
    updateScores: function() {
      //Retrive the data-points value from the crystal, update the DOM and call the checkWinLose function.
      game.currentScore += parseInt(this.dataset.points);
      game.currentScoreDiv.html(game.currentScore);
      game.checkWinLose();
    },
    checkWinLose: function() {
      if (this.currentScore > this.currentTarget) {
        //If the score exceeds the target, then the round is lost.
        this.totalLoses++;
        this.totalLosesDiv.html(this.totalLoses);
        this.newRound();

      } else if (this.currentScore === this.currentTarget) {
        //If the score matches the target exactly, then the round is won.
        this.totalWins++;
        this.totalWinsDiv.html(this.totalWins);
        this.newRound();
      }
    },
    createPoints: function() {
      //Returns a random number between 1 and 12
      var point = Math.floor(Math.random() * 12) + 1;
      return point;
    },
    assignPoints: function() {
      // TODO: Figure out how to loop through the crystals instead of repeating this code.
      this.crystals.crystalA.attr('data-points', this.createPoints());
      this.crystals.crystalB.attr('data-points', this.createPoints());
      this.crystals.crystalC.attr('data-points', this.createPoints());
      this.crystals.crystalD.attr('data-points', this.createPoints());

    },
    setTarget: function() {
      //Return a random number between 19 and 120 and set to the round Target
      this.currentTarget = Math.floor(Math.random() * 102) + 19;
      this.currentTargetDiv.html(this.currentTarget);
    },
    reOrder: function() {
      //Moves crystals to a new position when called. createPoints function can also be used here.
      this.crystals.crystalA.css("order", this.createPoints());
      this.crystals.crystalB.css("order", this.createPoints());
      this.crystals.crystalC.css("order", this.createPoints());
      this.crystals.crystalD.css("order", this.createPoints());
    },
    newRound: function() {
      //Reset round varibles
      this.assignPoints();
      this.setTarget();
      this.currentScore = 0;
      this.currentScoreDiv.html(this.currentScore);
      this.reOrder();
    }
  }

  game.init();

});
