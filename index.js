const formatDoc = (cmd, value = false) => {

    if (value) {

        document.execCommand(cmd, false, value)
        
    } else {
        document.execCommand(cmd)
    }

}

const handleAddLink = () => {
    const url = prompt("Enter The URL")
    formatDoc("createLink", url)
}


let content = document.getElementsByClassName("editable-container")

content[0].addEventListener("mouseenter", () => {
    let anchors = content[0].querySelectorAll("a")

    anchors.forEach((anchor) => {

        anchor.target = "_blank";

        anchor.addEventListener("mouseenter", (e) => {
            content[0].setAttribute("contentEditable", "false")
        })

        anchor.addEventListener("mouseleave", (e) => {
            content[0].setAttribute("contentEditable", "true")
    })

    })

    
})