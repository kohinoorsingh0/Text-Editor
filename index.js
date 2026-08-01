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