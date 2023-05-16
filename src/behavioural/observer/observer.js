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
        this.observers.forEach(function (observer) { return observer.update(_this); });
    };
    return InputObservable;
}());
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
}());
function makeInput() {
    var input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    var p = document.createElement('p');
    document.body.appendChild(p);
    p.innerText = 'Valor:';
    return p;
}
var input_val1 = new InputObservable(makeInput());
var p1 = new ParagraphObserver(makeParagraph());
var input_val2 = new InputObservable(makeInput());
var p2 = new ParagraphObserver(makeParagraph());
input_val1.registerObserver(p1);
input_val2.registerObserver(p2);
var result = makeParagraph();
result.setAttribute('id', 'result');
result.innerText = 'Resultado: ';
// input 1
input_val1.element.setAttribute('id', 'input_val1');
input_val1.element.setAttribute('type', 'number');
input_val1.element.setAttribute('placeholder', 'Valor 1');
input_val1.element.addEventListener('keyup', function () {
    input_val1.notifyObserver();
});
var resp = 0;
if (resp !== undefined || resp !== 'NaN') {
    // input 2
    input_val2.element.setAttribute('id', 'input_val2');
    input_val2.element.setAttribute('type', 'number');
    input_val2.element.setAttribute('placeholder', 'Valor 2');
    input_val2.element.addEventListener('keyup', function () {
        input_val2.notifyObserver();
        var val_input_1 = input_val1.element.value;
        var val_input_2 = input_val2.element.value;
        resp = parseInt(val_input_1) / parseInt(val_input_2);
        // result
        result.innerText = 'Resultado: ' + resp.toString();
    });
}
