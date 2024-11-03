function addInfo() {
  let info = document.getElementById("fInput").value;

  if (info) {
    let entrySpan = document.createElement("span");
    entrySpan.innerHTML = `${info} <button onclick="this.parentElement.remove()">Delete</button>`;

    document.getElementById("showDetails").appendChild(entrySpan);
    document.getElementById("fInput").value = "";
  }
}
