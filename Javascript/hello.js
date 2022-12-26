(function (window) {
    var Word = "Hello";
    var hello = {
      speak: function (name) {
        console.log(Word + " " + name);
      }
    };
    window.hello = hello;
  })(window);
  