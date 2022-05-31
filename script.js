const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

container.addEventListener('mouseover', function (e) {
    if (e.target.matches('.grid-item')) {
      e.target.classList.add('active');
    }
  })

document.getElementById("select").onclick = function () 
    { let gsize = prompt('Enter grid size', 4);
        makeRows(gsize, gsize);
    };

// makeRows(gsize, gsize);

