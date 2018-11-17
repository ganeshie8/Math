(function(window) {
  function defineMth() {
    var M = {};
    M.MAX_PRIMES = 999999;
    M.primes = [];
    M.populatePrimes = function() {
      for (i = 2; i <= M.MAX_PRIMES; i++) {
        if (M.isPrime(i)) {
          M.primes.push(i);
        }
      }
    }
    M.pi = function(n) {
      var count = 0;
      for (var i = 0; M.primes[i] <= n; i++) {
        count++;
      }
      return count;
    }
    
    M.bigOmega = function(n) {
      var count = 0;
      var pf = M.primeFactorization(n);
      for (var i = 0; i < pf.length; i++) {
        var e = pf[i][1];
        count += e;
      }
      return count;
    }
    
    M.isSquareFree = function(n) {
      var count = 0;
      var pf = M.primeFactorization(n);
      for (var i = 0; i < pf.length; i++) {
        var e = pf[i][1];
        if (e > 1) {
          return false;
        }
      }
      return true;
    }
    
    M.omega = function(n) {
      return M.primeFactorization(n).length;
    }
    
    M.primeFactorization = function(n) {
      //populate_primes(n);
      var factorization = [];
      for (var i = 0; i < M.primes.length && M.primes[i] <= n; i++) {
        var power = [];
        var e = M.primeExponentOfNumber(n, M.primes[i]);
        if (e != 0) {
          power[0] = M.primes[i];
          power[1] = e;
          factorization.push(power);
        }
      }
      return factorization;
    }
    
    M.primeExponentOfNumber = function(n, p) {
      var e = 0;
      while (1) {
        var rem = n % p;
        if (rem == 0) {
          e++;
          n = Math.floor(n / p);
        } else {
          return e;
        }
      }
    };
    M.sigma = function(n) {
      var d = M.getDivisors(n);
      var sum = 0;
      for (i = 0; i < d.length; i++)
        sum += d[i];
      return sum;
    };
    M.getDivisors = function(n) {
      var
        n_factors = [],
        i;
      for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0) {
          n_factors.push(i);
          if (n / i !== i)
            n_factors.push(n / i);
        }
      n_factors.sort(function(a, b) {
        return a - b;
      }); // numeric sort
      return n_factors;
    };
    M.isPrime = function(n) {
      for (var i = 2; i * i <= n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return n > 1;
    };
    M.generateBinaryStringsOfLengthRecursion = function(n){
      var arr = [];
      populate_arr(n,"");
      function populate_arr(n,str) {
        if(str.length==n) { 
          //arr.push(str.split("").reverse().join(""));
          arr.push(str);
        }else {
          populate_arr(n,str+"0");
          populate_arr(n,str+"1");
        }
      }
      return arr;
    };
    M.generateBinaryStringsOfLength = function(n){
      var arr = [];
      for(let i = 0; i < (1<<n); i++ ) {
        let decimal = i;
        let binary = "";
        for(let j=0; j<n;j++) {
          binary = decimal %2 + binary;
          decimal >>= 1;
        }
        arr.push(binary);
      }
      return arr;
    };

    M.permute = function(){
    };

    var endCleanUp = function() {
      M.populatePrimes(M.MAX_PRIMES);
    }
    endCleanUp();
    return M;
  } 
  if(typeof(M) === 'undefined') {
    window.M = defineMth();
  }
})(window);

/*
class Auto {
    constructor(data) {
        this.make = data.make;
        this.model = data.model;
        this.year = data.year;
        this.price = data.price;
    }

    getDetails() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Auto {
    constructor(data) {
        super(data);
        this.isElectric = data.isElectric;
        this.isHatchback = data.isHatchback;
    }

    getDetails() {
        return `${super.getDetails()} Electric: ${this.isElectric} Hatchback: ${this.isHatchback}`;
    }
}
*/
