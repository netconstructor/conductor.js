Conductor.card({
  activate: function () {
    this.consumers.height.autoUpdate = false;
    this.consumers.height.update({ width: 55, height: 55 });
  }
});
