function rollDice() {
    var number = Math.floor(Math.random() * 6) + 1;
    console.log(number);
    document.getElementById("roll").value = number;
    display(number);
}

function display(number) {
    let children = document.getElementsByClassName("child");
    for (let i = 0; i < children.length; i++) {
        children[i].style.visibility = "hidden";
    }
    let toShow = [];
    switch (number) {
        case 1:
            toShow = [5];
            break;
        case 2:
            toShow = [1, 9];
            break;
        case 3:
            toShow = [1, 5, 9];
            break;
        case 4:
            toShow = [1, 3, 7, 9];
            break;
        case 5:
            toShow = [1, 3, 5, 7, 9];
            break;
        case 6:
            toShow = [1, 3, 4, 6, 7, 9];
            break;
    }

    for (let i = 0; i < toShow.length; i++) {
        document.getElementById("c" + toShow[i]).style.visibility = "visible";
        document.getElementById("c" + toShow[i]).style.background="green";
        document.getElementById("c" + toShow[i]).style.boxShadow="10px 10px 20px green"
    }
}
