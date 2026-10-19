function mudartema(){
    const body=document.body
    if (body.classList.contains("temaclarob")){
        body.classList.add("temaescurob")
        body.classList.remove("temaclarob")
    }
    else {
        body.classList.add("temaclarob")
        body.classList.remove("temaescurob")
    }
}
function mudartema(){
    const header=document.header
    if (header.classList.contains("temaclaroh")){
        header.classList.add("temaescuroh")
        header.classList.remove("temaclaroh")
    }
    else {
        header.classList.add("temaclaroh")
        header.classList.remove("temaescuroh")
    }
}

