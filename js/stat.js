'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_TITLE = 145;
var TEXT_GAP = 20;
var BAR_SPACE = 50;
var BAR_WIDTH = 40;
var BAR_CHART_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getBarColor = function (ctx, player) {
  ctx.fillStyle = player === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + (Math.random() * 100) + '%' + ', 50%)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили! Список результатов:', GAP_TITLE, TEXT_GAP);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var time = Math.round(times[i]);
    var contentX = CLOUD_X + BAR_SPACE + (BAR_WIDTH + BAR_SPACE) * i;
    var barHeight = (BAR_CHART_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = 'black';
    ctx.fillText(time, contentX, CLOUD_HEIGHT - GAP - TEXT_GAP - TEXT_GAP - barHeight);
    ctx.fillText(players[i], contentX, CLOUD_HEIGHT - TEXT_GAP);

    getBarColor(ctx, players[i]);
    ctx.fillRect(contentX, CLOUD_HEIGHT - TEXT_GAP - GAP - barHeight, BAR_WIDTH, barHeight);
  }
};
