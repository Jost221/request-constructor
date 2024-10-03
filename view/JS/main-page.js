function img_table() {
    return '<svg class="content-img" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> \
            <path d="M4 9.5H20M4 14.5H20M9 4.5V19.5M7.2 19.5H16.8C17.9201 19.5 18.4802 19.5 18.908 19.282C19.2843 19.0903 19.5903 18.7843 19.782 18.408C20 17.9802 20 17.4201 20 16.3V7.7C20 6.5799 20 6.01984 19.782 5.59202C19.5903 5.21569 19.2843 4.90973 18.908 4.71799C18.4802 4.5 17.9201 4.5 16.8 4.5H7.2C6.0799 4.5 5.51984 4.5 5.09202 4.71799C4.71569 4.90973 4.40973 5.21569 4.21799 5.59202C4 6.01984 4 6.57989 4 7.7V16.3C4 17.4201 4 17.9802 4.21799 18.408C4.40973 18.7843 4.71569 19.0903 5.09202 19.282C5.51984 19.5 6.07989 19.5 7.2 19.5Z" stroke="#e0e1dd" stroke-width="2"/> \
            </svg>'
}

function img_settings() {
    return '<svg width="800px" height="800px" viewBox="0 0 26.102 26.102" xmlns="http://www.w3.org/2000/svg"> \
            <g id="Group_713" data-name="Group 713" transform="translate(-149.9 -99.898)">\
                <path id="Path_1493" data-name="Path 1493" d="M176,122a4.012,4.012,0,0,1-4,4,3.591,3.591,0,0,1-2.4-1.1,3.079,3.079,0,0,0-.6-.6l-7.8-7.8a8.675,8.675,0,0,1-2.8.5,8.493,8.493,0,0,1-8.5-8.5,7.526,7.526,0,0,1,1.6-4.7l5.2,5.2,2.2-2.2-5.1-5.1a7.6,7.6,0,0,1,4.6-1.8,8.511,8.511,0,0,1,4.7,15.6l7.3,7.3c.2.2,1.1,1.1,1.5,1.1a2.006,2.006,0,0,0,2-2,1.922,1.922,0,0,0-.4-1.2l-.5-.5-4.8-4.8a.99.99,0,1,1,1.4-1.4l4.8,4.8.5.5A4.049,4.049,0,0,1,176,122Zm-11-13.5a6.487,6.487,0,0,0-6.5-6.5,2.2,2.2,0,0,0-.8.1l3.3,3.3a2.657,2.657,0,0,1,0,3.7l-1.9,1.9a2.657,2.657,0,0,1-3.7,0l-3.3-3.3c0,.3-.1.5-.1.8a6.5,6.5,0,0,0,13,0Z" fill="#e0e1dd"/>\
            </g>\
            </svg>'
}

function insert_tabe_image() {
    document.querySelectorAll("div.table").forEach(element => {
        element.innerHTML = img_table();
    });
}

function insert_tree_symbol() {
    document.querySelectorAll(".feiled").forEach(element => {
        for (let index = 0; index < element.children.length; index++) {
            if (element.children.length - index == 1) {
                element.children[index].children[0].innerHTML = "└";
            } else {
                element.children[index].children[0].innerHTML = "├";
            }
        }
    });
}

window.onload = function () {
    insert_tabe_image();
    document.querySelector(".feiled").addEventListener("DOMContentLoaded", () => {
        insert_tree_symbol();
    })
    document.querySelector(".rotate").addEventListener("click", () => {
        document.querySelector(".feiled").innerHTML = '<div class="element"> \
                        <div class="icon-contain-element"></div>\
                        <div class="element-text">feild 1</div>\
                    </div>'
    })
}



