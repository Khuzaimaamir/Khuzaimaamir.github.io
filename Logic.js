(function(window) {
    var names = ["farray", "jason", "harry", "khuzaima", "tyler", "diana"]
  
    for (var i in names) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        bye.speak(names[i]);
      } else {
        hello.speak(names[i]);
      }
    }
  })(window);