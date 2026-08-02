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


      let fileName = document.getElementById("filename")

const handleFileExport = (fileType) => {
    if(fileType === "new"){
        content[0].innerHTML = ""
        fileName.value = "File Name"
    }
    else if(fileType === "pdf"){
        html2pdf(content[0]).save(fileName.value)
    }
    else{
        const extractedText = content[0].innerText
        const blob = new Blob([extractedText])
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = fileName.value + ".txt"
        a.click()
    }
}
