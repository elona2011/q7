let imgElement = document.getElementById("imageSrc")
let inputElement = document.getElementById("fileInput");
inputElement.addEventListener("change", (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

imgElement.onload = function () {
    let mat = cv.imread(imgElement);
    let data = mat.data

    console.time();
    
    La:
    for (let x = mat.cols - 10; x >= 100; x--) {
        for (let y = mat.rows - 10; y >= 100; y--) {
            let i = y * mat.cols * 4 + x * 4
            if (isWhite(mat, i) && isBlack(mat, preRow(mat, i) - 4) && loopVert(mat, 15, i) && loopHor(mat, 15, i)) {
                let x = i / 4 % mat.cols
                let y = Math.floor(i / 4 / mat.cols)
                cv.rectangle(mat, new cv.Point(x - 88, y - 88), new cv.Point(x, y), new cv.Scalar(255, 0, 0, 255), 1);
                cv.imshow('canvasOutput', mat);
                break La
            }
        }
    }
    console.timeEnd();

    // mat.data[0] = 100
    // mat.data[1] = 100
    // mat.data[2] = 100
    // let row = 0, col = 1;
    // let R = mat.ucharAt(row, col * mat.channels());
    // let G = mat.ucharAt(row, col * mat.channels() + 1);
    // let B = mat.ucharAt(row, col * mat.channels() + 2);
    // let A = mat.ucharAt(row, col * mat.channels() + 3);
    mat.delete();
    console.log('done')
};

function isWhite(mat, i) {
    if (mat.data[i] > 0x80 && mat.data[i + 1] > 0x80 && mat.data[i + 2] > 0x80) {
        return true
    }
}
function isBlack(mat, i) {
    if (mat.data[i] < 0x70 && mat.data[i + 1] < 0x70 && mat.data[i + 2] < 0x70) {
        return true
    }
}
function nextRow(mat, i) {
    return i + mat.cols * 4
}
function preRow(mat, i) {
    return i - mat.cols * 4
}
function loopVert(mat, n, i) {
    let r = i
    for (let i = 0; i < n; i++) {
        r = preRow(mat, r)
        if (!isWhite(mat, r)) return false
    }
    return true
}
function loopHor(mat, n, i) {
    let r = i
    for (let i = 0; i < n; i++) {
        r -= 4
        if (!isWhite(mat, r)) return false
    }
    return true
}