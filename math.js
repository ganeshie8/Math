(function(window) {
  function defineMth() {
    var Mth = {};
    Mth.a = 123;

    Mth.power_set = function(){
    };

    Mth.permute = function(){
    };

    return Mth;
  } 
  if(typeof(Mth) === 'undefined') {
    window.Mth = defineMth();
  }
})(window);
