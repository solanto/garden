function html(string) {
    const container = document.createElement("div");
    container.innerHTML = string;
    return container.firstElementChild;
}