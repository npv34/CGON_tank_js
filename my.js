function moveUp() {
    let topCurrentTank =  parseInt(document.getElementById('tank').style.top);
    document.getElementById('tank').style.top = topCurrentTank - 5 + "px";
    collision()
}

function moveLeft() {
    let leftCurrentTank =  parseInt(document.getElementById('tank').style.left);
    document.getElementById('tank').style.left = leftCurrentTank - 5 + "px"
    collision()

}

function moveDown() {
    let topCurrentTank =  parseInt(document.getElementById('tank').style.top);
    document.getElementById('tank').style.top = topCurrentTank + 5 + "px"
    collision()

}

function moveRight() {
    let leftCurrentTank =  parseInt(document.getElementById('tank').style.left);
    document.getElementById('tank').style.left = leftCurrentTank + 5 + "px"
    collision()
}

// xử lý va chạm
function collision() {
    // va chạm xảy ra khi top vs left của xe tank trùng với top vs left của boom
    //b1: Lấy tạo độ top, left của xe tăng 
    let leftCurrentTank =  parseInt(document.getElementById('tank').style.left);
    let topCurrentTank =  parseInt(document.getElementById('tank').style.top);
    //b2 lấy toạ độ top, left của boom
    let leftCurrentBoom =  parseInt(document.getElementById('boom').style.left);
    let topCurrentBoom =  parseInt(document.getElementById('boom').style.top);
    //b3 kiểm tra nếu topTank == topBoom && leftTank == leftBoom thì nổ

    if(leftCurrentTank == leftCurrentBoom && topCurrentTank == topCurrentBoom) {
        // console.log(12);
        // document.getElementById('tank').style.background = "url('explosion.png')";

    }

}