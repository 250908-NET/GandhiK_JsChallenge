function squareNumber(number) {
        return number * number;
      }
      function helperSquare()
      {
        const input = document.getElementById("numberInput").value;
        const num = Number(input);
        const result = squareNumber(num);
        alert (result);
      }