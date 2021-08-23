function write(intro, main, characterTimeout, text = intro.innerText, index = 0) {
    if (index == 0) {
        window.requestAnimationFrame(() => {
            main.style.opacity = "0"
            intro.style.opacity = "100%"

            window.requestAnimationFrame(() => {
                main.style.transition = "opacity 1s"
            })
        })
    }

    let visible = text.substring(0, index)
    let invisible = text.substring(index)

    intro.innerHTML = /* html */`
        ${visible}
        <span style="color: transparent">
            ${invisible}
        </span>
    `

    let pause = [".", ";"].includes(visible.slice(-1))

    if (index < text.length) {
        setTimeout(
            () => write(intro, main, characterTimeout, text, index + 1),
            (pause ? 6 : 1) * characterTimeout
        )
    } else {
        intro.innerHTML = visible

        setTimeout(
            () => {
                main.style.opacity = "100%"
                intro.style.opacity = "80%"
            },
            20 * characterTimeout
        )
    }
}

window.addEventListener("load", () => {
    write(
        document.getElementById("intro"),
        document.getElementsByTagName("main")[0],
        35
    )
})
