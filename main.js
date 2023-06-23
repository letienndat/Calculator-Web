var stack = ["0"];

function tinhToan(stack) {
  stack[0] =
    stack[0].slice(-1) === ","
      ? stack[0].substring(0, stack[0].length - 1)
      : stack[0];

  stack[0] = stack[0].replace(",", ".");

  if (stack.length >= 3) {
    stack[2] =
      stack[2].slice(-1) === ","
        ? stack[2].substring(0, stack[2].length - 1)
        : stack[2];

    stack[2] = stack[2].replace(",", ".");
  }

  var res = "";

  switch (stack[1]) {
    case "/": {
      res = (stack[0] / stack[2]).toString();
      break;
    }
    case "x": {
      res = (stack[0] * stack[2]).toString();
      break;
    }
    case "-": {
      res = (stack[0] - stack[2]).toString();
      break;
    }
    case "+": {
      res = (parseFloat(stack[0]) + parseFloat(stack[2])).toString();
      break;
    }
    default: {
      res = stack[0];
    }
  }

  // Kết quả hiển thị tối đa 9 chữ số
  return res.length >= 10 ? res.substring(0, 9) : res;
}

function setContent(content) {
  content = content.replace(".", ",");
  document.getElementById("content").innerHTML = content;
}

function removeEffect() {
  document.getElementById("chia").style.backgroundColor = "#FF9500";
  document.getElementById("chia").style.color = "white";

  document.getElementById("nhan").style.backgroundColor = "#FF9500";
  document.getElementById("nhan").style.color = "white";

  document.getElementById("tru").style.backgroundColor = "#FF9500";
  document.getElementById("tru").style.color = "white";

  document.getElementById("cong").style.backgroundColor = "#FF9500";
  document.getElementById("cong").style.color = "white";

  document.getElementById("bang").style.backgroundColor = "#FF9500";
  document.getElementById("bang").style.color = "white";
}

document.getElementById("ac").onclick = () => {
  stack = ["0"];
  setContent(stack[0]);
  removeEffect();
};

document.getElementById("am_duong").onclick = () => {
  if (stack.length === 1) {
    stack[0] = stack[0][0] === "-" ? stack[0].substring(1) : "-" + stack[0];
    setContent(stack[0]);
  } else if (stack.length === 2) {
    stack.push("-0");
    setContent(stack[2]);
  } else if (stack.length >= 3) {
    stack[2] = stack[2][0] === "-" ? stack[2].substring(1) : "-" + stack[2];
    setContent(stack[2]);
  }
};

document.getElementById("del").onclick = () => {
  if (stack.length === 1) {
    if (stack[0] === "-0") {
      stack[0] = "0";
      setContent(stack[0]);
    } else {
      stack[0] = stack[0].substring(0, stack[0].length - 1);
      if (stack[0] === "-") {
        stack[0] = "-0";
        setContent(stack[0]);
      } else if (stack[0].length === 0) {
        stack[0] = "0";
        setContent(stack[0]);
      } else {
        setContent(stack[0]);
      }
    }
  } else if (stack.length === 3) {
    if (stack[2] === "-0") {
      stack[2] = "0";
      setContent(stack[2]);
    } else {
      stack[2] = stack[2].substring(0, stack[2].length - 1);
      if (stack[2] === "-") {
        stack[2] = "-0";
        setContent(stack[2]);
      } else if (stack[2].length === 0) {
        stack[2] = "0";
        setContent(stack[2]);
      } else {
        setContent(stack[2]);
      }
    }
  }
};

for (let i = 0; i <= 9; ++i) {
  document.getElementById("number" + i).onclick = () => {
    removeEffect();
    if (stack.length === 1) {
      if (stack[0].replace(",", "").length < 9) {
        stack[0] = stack[0] === "0" ? "" : stack[0] === "-0" ? "-" : stack[0];
        stack[0] += i;
        setContent(stack[0]);
      }
    } else if (stack.length === 2) {
      if (stack[1] === "=") {
        stack = ["0"];
        stack[0] = stack[0] === "0" ? "" : stack[0] === "-0" ? "-" : stack[0];
        stack[0] += i;
        setContent(stack[0]);
      } else {
        stack.push(i.toString());
        setContent(stack[2]);
      }
    } else if (stack.length >= 3) {
      if (stack[2].replace(",", "").length < 9) {
        stack[2] = stack[2] === "0" ? "" : stack[2] === "-0" ? "-" : stack[2];
        stack[2] += i;
        setContent(stack[2]);
      }
    }
  };
}

document.getElementById("chia").onclick = () => {
  removeEffect();
  document.getElementById("chia").style.backgroundColor = "white";
  document.getElementById("chia").style.color = "#FF9500";
  if (stack.length === 1) {
    stack.push("/");
  } else if (stack.length === 2) {
    stack[1] = "/";
  } else if (stack.length >= 3) {
    if (stack.length === 4) {
      stack = [stack[0], "/"];
    } else {
      stack = [tinhToan(stack), "/"];
    }
    setContent(stack[0]);
  }
};

document.getElementById("nhan").onclick = () => {
  removeEffect();
  document.getElementById("nhan").style.backgroundColor = "white";
  document.getElementById("nhan").style.color = "#FF9500";
  if (stack.length === 1) {
    stack.push("x");
  } else if (stack.length === 2) {
    stack[1] = "x";
  } else if (stack.length >= 3) {
    if (stack.length === 4) {
      stack = [stack[0], "x"];
    } else {
      stack = [tinhToan(stack), "x"];
    }
    setContent(stack[0]);
  }
};

document.getElementById("tru").onclick = () => {
  removeEffect();
  document.getElementById("tru").style.backgroundColor = "white";
  document.getElementById("tru").style.color = "#FF9500";
  if (stack.length === 1) {
    stack.push("-");
  } else if (stack.length === 2) {
    stack[1] = "-";
  } else if (stack.length >= 3) {
    if (stack.length === 4) {
      stack = [stack[0], "-"];
    } else {
      stack = [tinhToan(stack), "-"];
    }
    setContent(stack[0]);
  }
};

document.getElementById("cong").onclick = () => {
  removeEffect();
  document.getElementById("cong").style.backgroundColor = "white";
  document.getElementById("cong").style.color = "#FF9500";
  if (stack.length === 1) {
    stack.push("+");
  } else if (stack.length === 2) {
    stack[1] = "+";
  } else if (stack.length >= 3) {
    if (stack.length === 4) {
      stack = [stack[0], "+"];
    } else {
      stack = [tinhToan(stack), "+"];
    }
    setContent(stack[0]);
  }
};

document.getElementById("phay").onclick = () => {
  removeEffect();
  if (stack.length === 1) {
    if (!stack[0].includes(",")) {
      stack[0] += ",";
      setContent(stack[0]);
    }
  } else if (stack.length === 2) {
    stack.push("0,");
    setContent(stack[2]);
  } else if (stack.length === 3) {
    if (!stack[2].includes(",")) {
      stack[2] += ",";
      setContent(stack[2]);
    }
  } else if (stack.length === 4) {
    stack = ["0,"];
    setContent(stack[0]);
  }
};

document.getElementById("bang").onmousedown = () => {
  removeEffect();
  document.getElementById("bang").style.backgroundColor = "white";
  document.getElementById("bang").style.color = "#FF9500";
};

document.getElementById("bang").onmouseup = () => {
  removeEffect();
  document.getElementById("bang").style.backgroundColor = "#FF9500";
  document.getElementById("bang").style.color = "white";
};

document.getElementById("bang").onclick = () => {
  if (stack.length === 1) {
    stack = [tinhToan(stack), "="];
  } else if (stack.length === 2) {
    if (stack[1] != '=') {
      stack = [stack[0], stack[1], stack[0]];
      stack = [tinhToan(stack), stack[1], stack[0], "="];
    }
  } else if (stack.length >= 3) {
    stack = [tinhToan(stack), stack[1], stack[2], "="];
  }
  setContent(stack[0]);
};

var number0 = document.getElementById("number0");
var number_null = document.getElementById("number_null");

function clickNumber0() {
  document.getElementById("number0").style.backgroundColor = "#5050509f";
  document.getElementById("number_null").style.backgroundColor = "#5050509f";
}

function afterClickNumber0() {
  document.getElementById("number0").style.backgroundColor = "#505050";
  document.getElementById("number_null").style.backgroundColor = "#505050";
}

number0.onmousedown = clickNumber0;
number0.onmouseup = afterClickNumber0;

number_null.onmousedown = clickNumber0;
number_null.onmouseup = afterClickNumber0;

number_null.onclick = number0.onclick;
