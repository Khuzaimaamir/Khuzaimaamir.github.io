(function (window) {
    var speak = "Good Bye";
    var bye = {
      speak: function (name) {
        console.log(speak + " " + name);
      }
    };
    window.bye = bye;
  })(window);
