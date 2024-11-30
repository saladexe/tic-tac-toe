x_color = "#A23E48"
o_color = "#6699CC"

let tl = false;
let t = false;
let tr = false;
let ml = false;
let m = false;
let mr = false;
let bl = false;
let b = false;
let br = false;

let tlx = false;
let tx = false;
let trx = false;
let mlx = false;
let mx = false;
let mrx = false;
let blx = false;
let bx = false;
let brx = false;

let tly = false;
let ty = false;
let tryy = false;
let mly = false;
let my = false;
let mry = false;
let bly = false;
let by = false;
let bry = false;

function main (p1, p2) {

    document.getElementById("about").onclick = () => {
        document.getElementById("a").style.left = "75vw";
        document.getElementById("ta").style.left = "0vw";
        document.getElementById("ta").style.opacity = "0.5";
    }

    document.getElementById("ta").onclick = () => {
        document.getElementById("a").style.left = "110vw";
        document.getElementById("ta").style.opacity = "0";
        document.getElementById("ta").style.left = "100vw";
    }

    if (tlx & tx & trx) {
        document.getElementById("h1").style.opacity = "1";
        document.getElementById("h1").style.backgroundColor = x_color;
        document.body.style.backgroundColor = x_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (tly & ty & tryy) {
        document.getElementById("h1").style.opacity = "1";
        document.getElementById("h1").style.backgroundColor = o_color;
        document.body.style.backgroundColor = o_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (mlx & mx & mrx) {
        document.getElementById("h2").style.opacity = "1";
        document.getElementById("h2").style.backgroundColor = x_color;
        document.body.style.backgroundColor = x_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (mly & my & mry) {
        document.getElementById("h2").style.opacity = "1";
        document.getElementById("h2").style.backgroundColor = o_color;
        document.body.style.backgroundColor = o_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (blx && bx && brx) {
        document.getElementById("h3").style.opacity = "1";
        document.getElementById("h3").style.backgroundColor = x_color;
        document.body.style.backgroundColor = x_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (bly & by & bry) {
        document.getElementById("h3").style.opacity = "1";
        document.getElementById("h3").style.backgroundColor = o_color;
        document.body.style.backgroundColor = o_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (tlx && mlx && blx) {
        document.getElementById("v1").style.opacity = "1";
        document.getElementById("v1").style.backgroundColor = x_color;
        document.body.style.backgroundColor = x_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (tly && mly && bly) {
        document.getElementById("v1").style.opacity = "1";
        document.getElementById("v1").style.backgroundColor = o_color;
        document.body.style.backgroundColor = o_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (tx && mx && bx) {
        document.getElementById("v2").style.opacity = "1";
        document.getElementById("v2").style.backgroundColor = x_color;
        document.body.style.backgroundColor = x_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (ty && my && by) {
        document.getElementById("v2").style.opacity = "1";
        document.getElementById("v2").style.backgroundColor = o_color;
        document.body.style.backgroundColor = o_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (trx && mrx && brx) {
        document.getElementById("v3").style.opacity = "1";
        document.getElementById("v3").style.backgroundColor = x_color;
        document.body.style.backgroundColor = x_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (tryy && mry && bry) {
        document.getElementById("v3").style.opacity = "1";
        document.getElementById("v3").style.backgroundColor = o_color;
        document.body.style.backgroundColor = o_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (tlx && mx && brx) {
        document.getElementById("s2").style.opacity = "1";
        document.getElementById("s2").style.backgroundColor = x_color;
        document.body.style.backgroundColor = x_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (tly && my && bry) {
        document.getElementById("s2").style.opacity = "1";
        document.getElementById("s2").style.backgroundColor = o_color;
        document.body.style.backgroundColor = o_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (trx && mx && blx) {
        document.getElementById("s1").style.opacity = "1";
        document.getElementById("s1").style.backgroundColor = x_color;
        document.body.style.backgroundColor = x_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    if (tryy && my && bly) {
        document.getElementById("s1").style.opacity = "1";
        document.getElementById("s1").style.backgroundColor = o_color;
        document.body.style.backgroundColor = o_color;
        if (!tl) {
            document.getElementById("tl").style.backgroundColor = "black";
        }

        if (!t) {
            document.getElementById("t").style.backgroundColor = "black";
        }

        if (!tr) {
            document.getElementById("tr").style.backgroundColor = "black";
        }

        if (!ml) {
            document.getElementById("ml").style.backgroundColor = "black";
        }

        if (!m) {
            document.getElementById("m").style.backgroundColor = "black";
        }

        if (!mr) {
            document.getElementById("mr").style.backgroundColor = "black";
        }

        if (!bl) {
            document.getElementById("bl").style.backgroundColor = "black";
        }

        if (!b) {
            document.getElementById("b").style.backgroundColor = "black";
        }

        if (!br) {
            document.getElementById("br").style.backgroundColor = "black";
        }
        tl = true;
        t = true;
        tr = true;
        ml = true;
        m = true;
        mr = true;
        bl = true;
        b = true;
        br = true;
    document.getElementById("header").style.backgroundColor = document.body.style.backgroundColor;

    }

    document.getElementById("r").onclick = () => {
        location.reload()
    }

    document.getElementById("titl").onclick = () => {
        location.reload()
    }

    document.getElementById("tl").onclick =  () => {
        if (!tl) {
            tl = true;
            if (p1 === true) {
                document.getElementById("tlp").innerText = "X";
                document.getElementById("tlp").style.opacity = "1";
                document.getElementById("tl").style.backgroundColor = x_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                tlx = true;
                main(false, true)
            }

            if (p2 === true) {
                document.getElementById("tlp").innerText = "O";
                document.getElementById("tlp").style.opacity = "1";
                document.getElementById("tl").style.backgroundColor = o_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                tly = true
                main(true, false)
            }
        }
    }

    document.getElementById("t").onclick =  () => {
        if (!t) {
            t = true
            if (p1 === true) {
                document.getElementById("tp").innerText = "X";
                document.getElementById("tp").style.opacity = "1";
                document.getElementById("t").style.backgroundColor = x_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                tx = true;
                main(false, true)
            }

            if (p2 === true) {
                document.getElementById("tp").innerText = "O";
                document.getElementById("tp").style.opacity = "1";
                document.getElementById("t").style.backgroundColor = o_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                ty = true;
                main(true, false)
            }
        }
    }

    document.getElementById("tr").onclick =  () => {
        if (!tr) {
            tr = true;
            if (p1 === true) {
                document.getElementById("trp").innerText = "X";
                document.getElementById("trp").style.opacity = "1";
                document.getElementById("tr").style.backgroundColor = x_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                trx = true;
                main(false, true)
            }

            if (p2 === true) {
                document.getElementById("trp").innerText = "O";
                document.getElementById("trp").style.opacity = "1";
                document.getElementById("tr").style.backgroundColor = o_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                tryy = true;
                main(true, false)
            }
        }
    }

    document.getElementById("ml").onclick =  () => {
        if (!ml) {
            ml = true;
            if (p1 === true) {
                document.getElementById("mlp").innerText = "X";
                document.getElementById("mlp").style.opacity = "1";
                document.getElementById("ml").style.backgroundColor = x_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                mlx = true;
                main(false, true)
            }

            if (p2 === true) {
                document.getElementById("mlp").innerText = "O";
                document.getElementById("mlp").style.opacity = "1";
                document.getElementById("ml").style.backgroundColor = o_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                mly = true;
                main(true, false)
            }
        }
    }

    document.getElementById("m").onclick =  () => {
        if (!m) {
            m = true;
            if (p1 === true) {
                document.getElementById("mp").innerText = "X";
                document.getElementById("mp").style.opacity = "1";
                document.getElementById("m").style.backgroundColor = x_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                mx = true;
                main(false, true)
            }

            if (p2 === true) {
                document.getElementById("mp").innerText = "O";
                document.getElementById("mp").style.opacity = "1";
                document.getElementById("m").style.backgroundColor = o_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                my = true;
                main(true, false)
            }
        }
    }

    document.getElementById("mr").onclick =  () => {
        if (!mr) {
            mr = true;
            if (p1 === true) {
                document.getElementById("mrp").innerText = "X";
                document.getElementById("mrp").style.opacity = "1";
                document.getElementById("mr").style.backgroundColor = x_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                mrx = true;
                main(false, true)
            }

            if (p2 === true) {
                document.getElementById("mrp").innerText = "O";
                document.getElementById("mrp").style.opacity = "1";
                document.getElementById("mr").style.backgroundColor = o_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                mry = true;
                main(true, false)
            }
        }
    }

    document.getElementById("bl").onclick =  () => {
        if (!bl) {
            bl = true;
            if (p1 === true) {
                document.getElementById("blp").innerText = "X";
                document.getElementById("blp").style.opacity = "1";
                document.getElementById("bl").style.backgroundColor = x_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                blx = true;
                main(false, true)
                }

                if (p2 === true) {
                    document.getElementById("blp").innerText = "O";
                    document.getElementById("blp").style.opacity = "1";
                    document.getElementById("bl").style.backgroundColor = o_color;
                    document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                    bly = true;
                    main(true, false)
                }
            }
        }

    document.getElementById("b").onclick =  () => {
        if (!b) {
            b = true;
            if (p1 === true) {
                document.getElementById("bp").innerText = "X";
                document.getElementById("bp").style.opacity = "1";
                document.getElementById("b").style.backgroundColor = x_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                bx = true;
                main(false, true)
            }

            if (p2 === true) {
                document.getElementById("bp").innerText = "O";
                document.getElementById("bp").style.opacity = "1";
                document.getElementById("b").style.backgroundColor = o_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                by = true;
                main(true, false)
            }
        }
    }

    document.getElementById("br").onclick =  () => {
        if (!br) {
            br = true
            if (p1 === true) {
                document.getElementById("brp").innerText = "X";
                document.getElementById("brp").style.opacity = "1";
                document.getElementById("br").style.backgroundColor = x_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                brx = true;
                main(false, true)
            }

            if (p2 === true) {
                document.getElementById("brp").innerText = "O";
                document.getElementById("brp").style.opacity = "1";
                document.getElementById("br").style.backgroundColor = o_color;
                document.getElementById("r").style.top = "85%";
                document.getElementById("r").style.left = "85%";
                bry = true;
                main(true, false)
            }
        }
    }
}

main(true, false)