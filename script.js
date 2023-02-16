window.onload = function() {

    const navM = document.querySelector(".nav-menu");
    const btns = document.querySelectorAll("button");
    console.log("a")
    let a = 0;
    btnc("form-btn");
    btnc("btn-success")
    btns.forEach(element => {
        let idbtn = "arstf" + a + "yqf";
        console.log(idbtn)
        element.setAttribute("id", idbtn)
        btni(idbtn);
        a++

    });



}
document.addEventListener("keyup", function(e) {
    console.log(e.key)
    if (e.key == "`") {
        load()

    }
})

function load() {
    let path = document.getElementById("path");
    let speed = document.getElementById("speed");
    let div = document.querySelector(".vid");
    div.innerHTML = ` <video controls src="${path.value}" id="video"></video>`;
    let video = document.getElementById("video");
    video.autoplay = true;
    video.loop = true;
    video.playbackRate = speed.value;
    document.getElementById("foot").style.visibility = "visible";

}

function btni(id) {
    var a = document.querySelector("#" + id);
    a.addEventListener('mousedown',
        () => {
            a.style.opacity = "0.5";
        })
    a.addEventListener('mouseup',
        () => {
            a.style.opacity = "1";
        })
    a.addEventListener('mouseleave', () => {
        a.style.opacity = "1";
    })

}

function btnc(cls) {
    var a = document.querySelectorAll("." + cls);
    a.forEach(element => {
        element.addEventListener('mousedown',
            () => {
                element.style.opacity = "0.5";
            })
        element.addEventListener('mouseup',
            () => {
                element.style.opacity = "1";

            })
        element.addEventListener('mouseleave', () => {
            element.style.opacity = "1";
        })
    });

}