'use strict'

function renderMeme() {
    const meme = getMeme()
    const memeLine = meme.lines[meme.selectedLineIdx]
    const elImg = new Image()
    elImg.src = `img/${meme.selectedImgId}.jpg`
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(memeLine.txt,200,50)

    }
}


function drawText(text,x,y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = 'black'
    gCtx.font = '20px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)


}
 function changeText(value){
    console.log(value)
    setLineTxt(value)
    renderMeme()
 }

 function onSubmit(ev){
    ev.preventDefault()
 }
// function coverCanvasWithImg(elImg) {
//     console.log(gElCanvas)
//     gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
//     gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
// }