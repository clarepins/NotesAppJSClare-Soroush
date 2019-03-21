(function(exports) {
  exports.Note = function(text) {
    this.text = text;
    this.showText = function() {
      return this.text.substring(0,21);
    }
  }
}) (this);
