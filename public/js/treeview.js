//you can overload links click method
//
// $(".treeview-text").on("click", function (e) {
//     e.stopPropagation();
//     e.preventDefault();
// })

function loadTree(parentID, data) {
    var el = $(parentID);
    var olContent = "", link = "";
    el.empty();

    function printAllVals(obj) {

        for (let k in obj) {

            if (obj['text']) {

                link = "<a class='treeview-text' href='#' data-src='" + obj["src"] + "' >" + obj['text'] + "</a>";

                if (obj['nodes'].length > 0) { //if has children
                    olContent += "<li><span class='caret'></span>" + link;
                    olContent += "<ul class='nested'>";
                    printAllVals(obj["nodes"]);
                    olContent += "</ul></li>"
                } else {
                    olContent += "<li>" + link + "</li>"
                }

                break;
            } else {
                printAllVals(obj[k]);
            }
        }
    }

    printAllVals(data);

    el.append(olContent);

    var toggler = document.getElementsByClassName("caret");
    var i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }

    // $(".treeview-text").on("click", function (e) {
    //     e.stopPropagation();
    //     e.preventDefault();
    // })

}
