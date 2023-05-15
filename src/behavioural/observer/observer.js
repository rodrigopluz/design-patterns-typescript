var InputObservable = /** @class */ (function () {
  function InputObservable(element) {
    this.element = element;
    this.observers = [];
  }
  InputObservable.prototype.registerObserver = function () {
    var _this = this;
    var observers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observers[_i] = arguments[_i];
    }
    observers.forEach(function (observer) {
      if (!_this.observers.includes(observer)) {
        _this.observers.push(observer);
      }
    });
  };
  InputObservable.prototype.removeObserver = function (observer) {
    var observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  };
  InputObservable.prototype.notifyObserver = function () {
    var _this = this;
    this.observers.forEach(function (observer) {
      return observer.update(_this);
    });
  };
  return InputObservable;
})();
var ParagraphObserver = /** @class */ (function () {
  function ParagraphObserver(element) {
    this.element = element;
  }
  ParagraphObserver.prototype.update = function (observable) {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  };
  return ParagraphObserver;
})();
var DivObserver = /** @class */ (function () {
  function DivObserver(element) {
    this.element = element;
  }
  DivObserver.prototype.update = function (observable) {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value;
    }
  };
  return DivObserver;
})();
function makeInput() {
  var input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}
function makeParagraph() {
  var p = document.createElement('p');
  document.body.appendChild(p);
  p.innerText = 'Valor inicial';
  return p;
}
function makeDiv() {
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.innerText = 'Texto da DIV';
  return div;
}
var input = new InputObservable(makeInput());
var p1 = new ParagraphObserver(makeParagraph());
var p2 = new ParagraphObserver(makeParagraph());
var div1 = new DivObserver(makeDiv());
input.registerObserver(p1, p2, div1);
input.element.addEventListener('keyup', function () {
  input.notifyObserver();
});
input.removeObserver(p2);
