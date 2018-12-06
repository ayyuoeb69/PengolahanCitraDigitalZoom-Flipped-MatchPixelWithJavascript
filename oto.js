var canvas = document.getElementById('gambar1');
var ctx = canvas.getContext('2d');
var image = new Image();
var imgmatrx; //current image
var imgmatrx_ori; //original image
var canvas2 = document.getElementById('gambar2');
var ctx2 = canvas2.getContext('2d');
var image2 = new Image();
var imgmatrx2; //current image
var imgmatrx_ori2; //original image
var canvas3 = document.getElementById('gambar3');
var ctx3 = canvas3.getContext('2d');
var image3 = new Image();
var imgmatrx3; //current image
var imgmatrx_ori3; //original image
var canvas4 = document.getElementById('gambar4');
var ctx4 = canvas4.getContext('2d');
var image4 = new Image();
var imgmatrx4; //current image
var imgmatrx_ori4; //original image
// document.getElementById('gambar1').onclick = hilang();
// document.getElementById('gambar2').onclick = hilang2();
// document.getElementById('gambar3').onclick = hilang3();
// document.getElementById('gambar4').onclick = hilang4();

function hilang() {
    var flipped = nj.zeros(imgmatrx.shape);
    var shape = imgmatrx.shape;//401,600,4 .. ukuran pixel gambar
    var isrgb = shape[2];//mengambil angka 4
    var a, b;
    var z_dim = 1;
    
    if (isrgb) {
        z_dim = isrgb;
    }

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
                    a = imgmatrx.get(y,x,z);
                    b = a - a;
                    if(y==shape[0]-1 && x==shape[1]-1 && z == z_dim-1 && b == 0){
                        var x = document.getElementById('gambar1');
                     x.style.display="none";
                     var y = document.getElementById('c1');
                     y.style.display="inline-block";
                 }
            }
        }
    }

}
function hilang2() {
    var flipped = nj.zeros(imgmatrx2.shape);
    var shape = imgmatrx2.shape;//401,600,4 .. ukuran pixel gambar
    var isrgb = shape[2];//mengambil angka 4
    var a, b;
    var z_dim = 1;
    
    if (isrgb) {
        z_dim = isrgb;
    }

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
                    a = imgmatrx2.get(y,x,z);
                    b = a - a;
                    if(y==shape[0]-1 && x==shape[1]-1 && z == z_dim-1 && b == 0){
                        var x = document.getElementById('gambar2');
                     x.style.display="none";
                      var y = document.getElementById('c2');
                     y.style.display="inline-block";
                 }
            }
        }
    }

}
function hilang3() {
     var flipped = nj.zeros(imgmatrx3.shape);
    var shape = imgmatrx3.shape;//401,600,4 .. ukuran pixel gambar
    var isrgb = shape[2];//mengambil angka 4
    var a, b;
    var z_dim = 1;
    
    if (isrgb) {
        z_dim = isrgb;
    }

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
                    a = imgmatrx3.get(y,x,z);
                    b = a - a;
                    if(y==shape[0]-1 && x==shape[1]-1 && z == z_dim-1 && b == 0){
                        var x = document.getElementById('gambar3');
                     x.style.display="none";
                      var y = document.getElementById('c3');
                     y.style.display="inline-block";
                 }
            }
        }
    }

}
function hilang4() {
     var flipped = nj.zeros(imgmatrx4.shape);
    var shape = imgmatrx4.shape;//401,600,4 .. ukuran pixel gambar
    var isrgb = shape[2];//mengambil angka 4
    var a, b;
    var z_dim = 1;
    
    if (isrgb) {
        z_dim = isrgb;
    }

    for (var y = 0; y < shape[0]; y++){
        for (var x = 0; x < shape[1]; x++){
            for (var z = 0; z < z_dim; z++){
                    a = imgmatrx4.get(y,x,z);
                    b = a - a;
                    if(y==shape[0]-1 && x==shape[1]-1 && z == z_dim-1 && b == 0){
                        var x = document.getElementById('gambar4');
                     x.style.display="none";
                      var y = document.getElementById('c4');
                     y.style.display="inline-block";
                 }
            }
        }
    }

}
// function hilang2() {
//    var x = document.getElementById('gambar2');
// x.style.display="none";
// }
// function hilang3() {
//     var x = document.getElementById('gambar3');
// x.style.display="none";
// }
// function hilang4() {
//     var x = document.getElementById('gambar4');
// x.style.display="none";
// }


function loadgambar() {
    console.log("image loaded");
    // clear()

    var image = document.getElementById('pic1');

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    imgmatrx = nj.images.read(image);
    imgmatrx_ori = imgmatrx;
    alert(imgmatrx);
    image.style.display="none";
};

function loadgambar2() {
    console.log("image loaded");
    // clear()

    var image2 = document.getElementById('pic2');

    canvas2.width = image2.width;
    canvas2.height = image2.height;
    ctx2.drawImage(image2, 0, 0);
    imgmatrx2 = nj.images.read(image2);

    imgmatrx_ori2 = imgmatrx2;
    image2.style.display="none";
};
function loadgambar3() {
    console.log("image loaded");
    // clear()

    var image3 = document.getElementById('pic3');

    canvas3.width = image3.width;
    canvas3.height = image3.height;
    ctx3.drawImage(image3, 0, 0);
    imgmatrx3 = nj.images.read(image3);
    imgmatrx_ori3 = imgmatrx3;
    image3.style.display="none";

};

function loadgambar4() {
    console.log("image loaded");
    // clear()

    var image4 = document.getElementById('pic4');

    canvas4.width = image4.width;
    canvas4.height = image4.height;
    ctx4.drawImage(image4, 0, 0);
    imgmatrx4 = nj.images.read(image4);

    imgmatrx_ori4 = imgmatrx4;
    image4.style.display="none";
};

function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

// function openfile(e) {
//     var files = e.files;
//     if (!files.length) return;
//     image.src = URL.createObjectURL(files[0])
// }

// *
// *
// Basic Operation  
// *
// *