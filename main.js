
/* expand all tables */
function expand_all() {
    for (var key in keys) {
        /* key table */
        var tab = document.querySelector(
            "table.key" + key
        );
        tab.style.display = "table";
        /* key button */
        var btn = document.querySelector(
            "button[class^=\"key" + key + "_\"]"
        );
        btn.className = "key" + key + "_vis";
    }
}

/* collapse all tables */
function collapse_all() {
    for (var key in keys) {
        /* key table */
        var tab = document.querySelector(
            "table.key" + key
        );
        tab.style.display = "none";
        /* key button */
        var btn = document.querySelector(
            "button[class^=\"key" + key + "_\"]"
        );
        btn.className = "key" + key + "_novis";
    }
}

/* toggle table display */
function dispTable(key) {
    return function() {
        /* key table */
        var tab = document.querySelector(
            "table.key" + key
        );
        /* key button */
        var btn = document.querySelector(
            "button[class^=\"key" + key + "_\"]"
        );
        /* display style */
        var disp = window.getComputedStyle(tab);
        if (disp.getPropertyValue("display") === "none") {
            tab.style.display = "table";
            btn.className = "key" + key + "_vis";
        } else {
            tab.style.display = "none";
            btn.className = "key" + key + "_novis";
        }
    }
}

/* toggle button title */
function setTitle(key) {
    return function() {
        /* key table */
        var tab = document.querySelector(
            "table.key" + key
        );
        /* key button */
        var btn = document.querySelector(
            "button[class^=\"key" + key + "_\"]"
        );
        /* key button title */
        var disp = window.getComputedStyle(tab);
        if (disp.getPropertyValue("display") === "none") {
            btn.title = "expand " + key;
        } else {
            btn.title = "collapse " + key;
        }
    }
}

/* make header for key buttons */
function mk_header() {
    var header = document.createElement("header");
    document.body.appendChild(header);
    var row = document.createElement("ul");
    header.appendChild(row);

    /* empty space */
    var item = document.createElement("li");
    row.appendChild(item);
    item.className = "empty";

    /* expand all */
    var item = document.createElement("li");
    row.appendChild(item);
    var button = document.createElement("button");
    item.appendChild(button);
    button.title = "expand all";
    button.appendChild(document.createTextNode("⬇"));
    button.addEventListener("click", expand_all);

    /* key buttons */
    for (var key in keys) {
        var item = document.createElement("li");
        row.appendChild(item);
        var button = document.createElement("button");
        item.appendChild(button);
        button.className = "key" + key + "_vis";
        button.appendChild(document.createTextNode(key));
        var disp = dispTable(key);
        button.addEventListener("click", disp);
        var title = setTitle(key);
        button.addEventListener("mouseover", title);
    }

    /* collapse all */
    var item = document.createElement("li");
    row.appendChild(item);
    var button = document.createElement("button");
    item.appendChild(button);
    button.title = "collapse all";
    button.appendChild(document.createTextNode("⬆"));
    button.addEventListener("click", collapse_all);
}

/* make table for given key */
function mk_table(key) {
    var modes = keys[key];
    var table = document.createElement("table");
    table.className = "key" + key;
    document.body.appendChild(table);

    /* row for each mode */
    for (var mode in modes) {
        var row = document.createElement("tr");
        row.className = "key" + key;
        table.appendChild(row);

        /* row header */
        var header = document.createElement("th");
        var txt = document.createTextNode(
            key + " " + mode
        );
        header.appendChild(txt);
        row.appendChild(header);

        /* key data */
        var num = numerals[mode];
        var chords = keys[key][mode];

        /* cell for each chord */
        for (let i=0; i<7; i++) {
            var cell = document.createElement("td");
            row.appendChild(cell);

            /* chord numeral */
            var chord_num = document.createElement("p");
            chord_num.className = "chord_num";
            var txt = document.createTextNode(num[i]);
            chord_num.appendChild(txt);
            cell.appendChild(chord_num);

            /* chord name */
            var chord_name = document.createElement("p");
            var txt = document.createTextNode(chords[i]);
            chord_name.appendChild(txt);
            cell.appendChild(chord_name);
        }
    }
}

/* main */
window.addEventListener("load", function() {
    mk_header();
    var top = document.createElement("div");
    top.id = "top";
    document.body.appendChild(top);
    for (var key in keys) {
        mk_table(key);
    }
});

