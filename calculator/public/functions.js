function get_operand(operand) {
  var input = document.getElementById("output");
  if(input.value == '0') {
    switch(operand) {
      case 1:
        input.value = '1';
        break;
      case 2:
        input.value = '2';
        break;
      case 3:
        input.value = '3';
        break;
      case 4:
        input.value = '4';
        break;
      case 5:
        input.value = '5';
        break;
      case 6:
        input.value = '6';
        break;
      case 7:
        input.value = '7';
        break;
      case 8:
        input.value = '8';
        break;
      case 9:
        input.value = '9';
        break;
      case 0:
        input.value = '0';
        break;
    }
  }
  else switch(operand) {
    case 1:
      input.value += '1';
      break;
    case 2:
      input.value += '2';
      break;
    case 3:
      input.value += '3';
      break;
    case 4:
      input.value += '4';
      break;
    case 5:
      input.value += '5';
      break;
    case 6:
      input.value += '6';
      break;
    case 7:
      input.value += '7';
      break;
    case 8:
      input.value += '8';
      break;
    case 9:
      input.value += '9';
      break;
    case 0:
      input.value += '0';
      break;
  }
}

function get_operator(operator) {
  var input = document.getElementById("output");
  var save = document.getElementById("input1");
  var op = document.getElementById("operator");
  op.value = operator;
  save.value = input.value;
  input.value = '0';
}

function solve() {
  var input = document.getElementById("output");
  var save1 = document.getElementById("input1");
  var save2 = document.getElementById("input2");
  var op = document.getElementById("operator");
  save2.value = input.value;
  var expression = "".concat(save1.value, op.value, save2.value);
  console.log(expression);
  input.value = +eval(expression);
}

function disp_clear() {
  var input = document.getElementById("output");
  input.value = 0;
}

function all_clear() {
  var input = document.getElementById("output");
  var save1 = document.getElementById("input1");
  var save2 = document.getElementById("input2");
  input.value = 0;
  save1.value = 0;
  save2.value = 0;
}

function back() {
  var input = document.getElementById("output");
  var x = input.value;
  if (x.length > 1) {
    x = x.substring(0, x.length - 1);
    input.value = x;
  } else input.value = '0';
}

function decimal() {
  var input = document.getElementById("output");
  var input_val = input.value;

  if(input_val.includes(".")) return;

  var str = Number(input_val).toFixed();
  input.value = "".concat(str, ".");
}

function negative() {
  var input = document.getElementById("output");
  input.value = input.value * (-1);
}
