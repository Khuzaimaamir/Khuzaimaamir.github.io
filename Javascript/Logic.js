(function(window) {
    var names = ["Yaakov", "John","Jen", "Jason", "Paul", "Paul","Larry","Paula","Laura","Jim"]
  
    for (var i in names) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        bye.speak(names[i]);
      } else {
        hello.speak(names[i]);
      }
    }
  })(window);
