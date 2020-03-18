let imgElement = document.getElementById("imageSrc")
let inputElement = document.getElementById("fileInput");
inputElement.addEventListener("change", (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

imgElement.onload = function () {
    let mat = cv.imread(imgElement);
    let data = mat.data

    console.time();
    for (let y = 50; y <= mat.rows - 89; y++) {
        for (let x = 100; x <= mat.cols - 89; x++) {
            let i = y * mat.cols * 4 + x * 4
            if (isWhite(mat, i) && loopVert(mat, 15, i) && loopHor(mat, 15, i)) {
                let rd = nextRow(mat, i) + 4
                if (rd && isBlack(mat, rd)) {
                    let x = i / 4 % mat.cols
                    let y = Math.floor(i / 4 / mat.cols)
                    if (mat.cols - x < 89 || mat.rows - y < 89) continue
                    // console.log(data[i].toString(16) + data[i + 1].toString(16) + data[i + 2].toString(16))
                    // console.log(data[rd].toString(16) + data[rd + 1].toString(16) + data[rd + 2].toString(16))
                    cv.rectangle(mat, new cv.Point(x, y), new cv.Point(x + 88, y + 88), new cv.Scalar(255, 0, 0, 255), 1);
                    cv.imshow('canvasOutput', mat);
                }
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

function loopVert(mat, n, i) {
    let r = i
    for (let i = 0; i < n; i++) {
        r = nextRow(mat, r)
        if (!isWhite(mat, r)) return false
    }
    return true
}
function loopHor(mat, n, i) {
    let r = i
    for (let i = 0; i < n; i++) {
        r += 4
        if (!isWhite(mat, r)) return false
    }
    return true
}