menu_arr = [];
let menu_total = 0.0;
let total_items = 0;

function addtobasket(id) {
    ++total_items;
    document.getElementById("total_items").innerHTML = total_items;
    menu_arr.push(id);


    if (id == "exq1") {
        menu_total = menu_total + 50.0;
    }
    if (id == "exq2") {
        menu_total = menu_total + 47.8;
    }
    if (id == "exq3") {
        menu_total = menu_total + 39.8;
    }
    if (id == "exq4") {
        menu_total = menu_total + 49.9;
    }

    if (id == "table1") {
        menu_total = menu_total + 59.75;
    }
    if (id == "table2") {
        menu_total = menu_total + 49.75;
    }
    if (id == "table3") {
        menu_total = menu_total + 79.75;
    }
    if (id == "table4") {
        menu_total = menu_total + 12.75;
    }

    if (id == "snack1") {
        menu_total = menu_total + 65.75;
    }
    if (id == "snack2") {
        menu_total = menu_total + 20.75;
    }
    if (id == "snack3") {
        menu_total = menu_total + 9.75;
    }
    if (id == "snack4") {
        menu_total = menu_total + 35.85;
    }

    if (id == "drink1") {
        menu_total = menu_total + 55.69;
    }
    if (id == "drink2") {
        menu_total = menu_total + 45.75;
    }
    if (id == "drink3") {
        menu_total = menu_total + 19.75;
    }
    if (id == "drink4") {
        menu_total = menu_total + 79.75;
    }

    if (id == "candy1") {
        menu_total = menu_total + 4.75;
    }
    if (id == "candy2") {
        menu_total = menu_total + 14.65;
    }
    if (id == "candy3") {
        menu_total = menu_total + 20;
    }
    if (id == "candy4") {
        menu_total = menu_total + 11.75;
    }

}

function remove_from_basket(id) {


    const index = menu_arr.indexOf(id);
    if (index > -1) {
        menu_arr.splice(index, 1);
        --total_items;
        document.getElementById("total_items").innerHTML = total_items;
    }

    if (id == "exq1") {
        menu_total = menu_total - 50.0;
    }
    if (id == "exq2") {
        menu_total = menu_total - 47.8;
    }
    if (id == "exq3") {
        menu_total = menu_total - 39.8;
    }
    if (id == "exq4") {
        menu_total = menu_total - 49.9;
    }

    if (id == "table1") {
        menu_total = menu_total - 59.75;
    }
    if (id == "table2") {
        menu_total = menu_total - 49.75;
    }
    if (id == "table3") {
        menu_total = menu_total - 79.75;
    }
    if (id == "table4") {
        menu_total = menu_total - 12.75;
    }

    if (id == "snack1") {
        menu_total = menu_total - 65.75;
    }
    if (id == "snack2") {
        menu_total = menu_total - 20.75;
    }
    if (id == "snack3") {
        menu_total = menu_total - 9.75;
    }
    if (id == "snack4") {
        menu_total = menu_total - 35.85;
    }

    if (id == "drink1") {
        menu_total = menu_total - 55.69;
    }
    if (id == "drink2") {
        menu_total = menu_total - 45.75;
    }
    if (id == "drink3") {
        menu_total = menu_total - 19.75;
    }
    if (id == "drink4") {
        menu_total = menu_total - 79.75;
    }

    if (id == "candy1") {
        menu_total = menu_total - 4.75;
    }
    if (id == "candy2") {
        menu_total = menu_total - 14.65;
    }
    if (id == "candy3") {
        menu_total = menu_total - 20;
    }
    if (id == "candy4") {
        menu_total = menu_total - 11.75;
    }

}


function show_basket() {

    var exq1_count = exq2_count = exq3_count = exq4_count = table1_count = table2_count = table3_count = table4_count = snack1_count = snack2_count = snack3_count = snack4_count = drink1_count = drink2_count = drink3_count = drink4_count = candy1_count = candy2_count = candy3_count = candy4_count = 0;

    var parent = document.getElementById("menu_box");
    for (let i = 0; i < menu_arr.length; i++) {
        if (menu_arr[i] == "exq1") { ++exq1_count; }
        if (menu_arr[i] == "exq2") { ++exq2_count; }
        if (menu_arr[i] == "exq3") { ++exq3_count; }
        if (menu_arr[i] == "exq4") { ++exq4_count; }

        if (menu_arr[i] == "table1") { ++table1_count; }
        if (menu_arr[i] == "table2") { ++table2_count; }
        if (menu_arr[i] == "table3") { ++table3_count; }
        if (menu_arr[i] == "table4") { ++table4_count; }

        if (menu_arr[i] == "snack1") { ++snack1_count; }
        if (menu_arr[i] == "snack2") { ++snack2_count; }
        if (menu_arr[i] == "snack3") { ++snack3_count; }
        if (menu_arr[i] == "snack4") { ++snack4_count; }

        if (menu_arr[i] == "drink1") { ++drink1_count; }
        if (menu_arr[i] == "drink2") { ++drink2_count; }
        if (menu_arr[i] == "drink3") { ++drink3_count; }
        if (menu_arr[i] == "drink4") { ++drink4_count; }

        if (menu_arr[i] == "candy1") { ++candy1_count; }
        if (menu_arr[i] == "candy2") { ++candy2_count; }
        if (menu_arr[i] == "candy3") { ++candy3_count; }
        if (menu_arr[i] == "candy4") { ++candy4_count; }

    }

    var temp = "<div id=\"basket\"></div>";
    document.getElementById("menu_box").innerHTML = temp;


    if (exq1_count > 0) { //id
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var exq1 = "exq1"; //id
        child.innerHTML = getTemplate(exq1, exq1_count); //id
        parent.append(child);
    }

    if (exq2_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var exq2 = "exq2";
        child.innerHTML = getTemplate(exq2, exq2_count);
        parent.append(child);
    }

    if (exq3_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var exq3 = "exq3";
        child.innerHTML = getTemplate(exq3, exq3_count);
        parent.append(child);
    }

    if (exq4_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var exq4 = "exq4";
        child.innerHTML = getTemplate(exq4, exq4_count);
        parent.append(child);
    }

    if (table1_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var table1 = "table1";
        child.innerHTML = getTemplate(table1, table1_count);
        parent.append(child);
    }

    if (table2_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var table2 = "table2";
        child.innerHTML = getTemplate(table2, table2_count);
        parent.append(child);
    }

    if (table3_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var table3 = "table3";
        child.innerHTML = getTemplate(table3, table3_count);
        parent.append(child);
    }

    if (table4_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var table4 = "table4";
        child.innerHTML = getTemplate(table4, table4_count);
        parent.append(child);
    }

    if (snack1_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var snack1 = "snack1";
        child.innerHTML = getTemplate(snack1, snack1_count);
        parent.append(child);
    }

    if (snack2_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var snack2 = "snack2";
        child.innerHTML = getTemplate(snack2, snack2_count);
        parent.append(child);
    }

    if (snack3_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var snack3 = "snack3";
        child.innerHTML = getTemplate(snack3, snack3_count);
        parent.append(child);
    }

    if (snack4_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var snack4 = "snack4";
        child.innerHTML = getTemplate(snack4, snack4_count);
        parent.append(child);
    }

    if (drink1_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var drink1 = "drink1";
        child.innerHTML = getTemplate(drink1, drink1_count);
        parent.append(child);
    }

    if (drink2_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var drink2 = "drink2";
        child.innerHTML = getTemplate(drink2, drink2_count);
        parent.append(child);
    }

    if (drink3_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var drink3 = "drink3";
        child.innerHTML = getTemplate(drink3, drink3_count);
        parent.append(child);
    }

    if (drink4_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var drink4 = "drink4";
        child.innerHTML = getTemplate(drink4, drink4_count);
        parent.append(child);
    }

    if (candy1_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var candy1 = "candy1";
        child.innerHTML = getTemplate(candy1, candy1_count);
        parent.append(child);
    }

    if (candy2_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var candy2 = "candy2";
        child.innerHTML = getTemplate(candy2, candy2_count);
        parent.append(child);
    }

    if (candy3_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var candy3 = "candy3";
        child.innerHTML = getTemplate(candy3, candy3_count);
        parent.append(child);
    }

    if (candy4_count > 0) {
        var child = document.createElement("div");
        var parent = document.getElementById("menu_box");
        var candy4 = "candy4";
        child.innerHTML = getTemplate(candy4, candy4_count);
        parent.append(child);
    }



    // ------------------------------

    var total =
        '<div class="second">\
    <div class="total">\
        <p>total  $' +
        menu_total.toFixed(2) +
        '</p>\
    </div>\
        <div class="content">\
            <div class="payment">\
                <button>Pay</button>\
            </div>\
        </div>\
    </div>';

    var total_child = document.createElement("div");
    total_child.innerHTML = total;
    parent.append(total_child);
}


function getTemplate(id, count) {

    let items = [
        {
            "id": "exq1",
            "name": "Cuisine",
            "price": 50.0,
            "category": "exquisite"
        },
        {
            "id": "exq2",
            "name": "Sandwich Cookie",
            "price": 47.80,
            "category": "exquisite"
        },
        {
            "id": "exq3",
            "name": "Mini Cake",
            "price": 39.80,
            "category": "exquisite"
        },
        {
            "id": "exq4",
            "name": "Michelin Food SceneSandwich Cookie",
            "price": 49.99,
            "category": "exquisite"
        },
        {
            "id": "table1",
            "name": "Baked Cake",
            "price": 59.75,
            "category": "table"
        },
        {
            "id": "table2",
            "name": "Cheese Slice",
            "price": 49.75,
            "category": "table"
        },
        {
            "id": "table3",
            "name": "Baked Spaghetti ",
            "price": 79.75,
            "category": "table"
        },
        {
            "id": "table4",
            "name": "Cookies",
            "price": 12.75,
            "category": "table"
        },
        {
            "id": "snack1",
            "name": "Indian Fried Snacks",
            "price": 65.75,
            "category": "snack"
        },
        {
            "id": "snack2",
            "name": "Soft and Sponge Dhokla",
            "price": 20.75,
            "category": "snack"
        },
        {
            "id": "snack3",
            "name": "Fried Rings",
            "price": 9.75,
            "category": "snack"
        },
        {
            "id": "snack4",
            "name": "Jaggery with Peanuts",
            "price": 35.85,
            "category": "snack"
        },
        {
            "id": "drink1",
            "name": "Cocktail",
            "price": 55.69,
            "category": "drinks"
        },
        {
            "id": "drink2",
            "name": "Non-Alcoholic Drink",
            "price": 45.75,
            "category": "drinks"
        },
        {
            "id": "drink3",
            "name": "Soft-Drinks",
            "price": 19.75,
            "category": "drinks"
        },
        {
            "id": "drink4",
            "name": "Vodka",
            "price": 79.75,
            "category": "drinks"
        },
        {
            "id": "candy1",
            "name": "Butterscotch Candy",
            "price": 4.75,
            "category": "candy"
        },
        {
            "id": "candy2",
            "name": "Mixed Colofull Candies",
            "price": 14.65,
            "category": "candy"
        },
        {
            "id": "candy3",
            "name": "Chocolate Candies",
            "price": 20,
            "category": "candy"
        },
        {
            "id": "candy4",
            "name": "Gems Candy",
            "price": 11.75,
            "category": "candy"
        }

    ]

    let curr_item = items.find(curr_item => curr_item.id == id);
    console.log(curr_item);

    var template =
        '<div class="main-box">\
        <div class="items">\
          <div class="item">\
            <div class="left">\
              <img src="./assets/' + curr_item.category + '/' + curr_item.id + '.jpg"/>\
              <div class="text">\
                <p>' + curr_item.name + '</p>\
              </div>\
            </div>\
            <div class="right">\
              <div class="items">\
                <p>Items = ' + count + '</p>\
              </div>\
              <div class="price">\
                <p>$' + (curr_item.price * count) + '</p>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
  </div>';

    return template;
}

function show_menu() {
    var template =
        '<div id="menu_box" className="main-box">\
        <div class="head">\
            <div>\
                <h4>Exploring Exquisite</h4>\
                <ul>\
                    <li>\
                        <img\
                            src="./assets/exquisite/exq1.jpg" />\
                        <div class="info">\
                            <p>Cuisine</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'exq1\')">Add</button>\
                                <button onclick="remove_from_basket(\'exq1\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$50.0</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/exquisite/exq2.jpg" />\
                        <div class="info">\
                            <p>Sandwich Cookie</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'exq2\')">Add</button>\
                                <button onclick="remove_from_basket(\'exq2\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$47.80</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/exquisite/exq3.jpg" />\
                        <div class="info">\
                            <p>Mini Cake</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'exq3\')">Add</button>\
                                <button onclick="remove_from_basket(\'exq3\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$39.80</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/exquisite/exq4.jpg" />\
                        <div class="info">\
                            <p>Michelin Food Scene</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'exq4\')">Add</button>\
                                <button onclick="remove_from_basket(\'exq4\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$49.99</p>\
                        </div>\
                    </li>\
                </ul>\
            </div>\
            <div>\
                <h4>Baker\'s Table</h4>\
                <ul>\
                    <li>\
                        <img\
                        src="./assets/table/table1.jpg" />\
                        <div class="info">\
                            <p>Baked Cake</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'table1\')">Add</button>\
                                <button onclick="remove_from_basket(\'table1\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$59.75</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/table/table2.jpg" />\
                        <div class="info">\
                            <p>Cheese Slice</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'table2\')">Add</button>\
                                <button onclick="remove_from_basket(\'table2\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$49.75</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/table/table3.jpg" />\
                        <div class="info">\
                            <p>Baked Spaghetti</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'table3\')">Add</button>\
                                <button onclick="remove_from_basket(\'table3\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$79.75</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/table/table4.jpg" />\
                        <div class="info">\
                            <p>Cookies</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'table4\')">Add</button>\
                                <button onclick="remove_from_basket(\'table4\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$12.75</p>\
                        </div>\
                    </li>\
                </ul>\
            </div>\
            <div>\
                <h4>Indegenous Indian Snack</h4>\
                <ul>\
                    <li>\
                        <img\
                            src="./assets/snack/snack1.jpg" />\
                            <div class="info">\
                                <p>Indian Fried Snacks</p>\
                                <div class="buttons">\
                                    <button onclick="addtobasket(\'snack1\')">Add</button>\
                                    <button onclick="remove_from_basket(\'snack1\')">Remove</button>\
                                </div>\
                            </div>\
                            <div class="price">\
                                <p>$65.75</p>\
                            </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/snack/snack2.jpg" />\
                        <div class="info">\
                            <p>Soft and Sponge Dhokla</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'snack2\')">Add</button>\
                                <button onclick="remove_from_basket(\'snack2\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$20.75</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/snack/snack3.jpg" />\
                        <div class="info">\
                            <p>Fried Rings</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'snack3\')">Add</button>\
                                <button onclick="remove_from_basket(\'snack3\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$9.75</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/snack/snack4.jpg" />\
                        <div class="info">\
                            <p>Jaggery with Peanuts</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'snack4\')">Add</button>\
                                <button onclick="remove_from_basket(\'snack4\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$35.85</p>\
                        </div>\
                    </li>\
                </ul>\
            </div>\
            <div>\
                <h4>Drinks on Demand</h4>\
                <ul>\
                    <li>\
                        <img\
                        src="./assets/drinks/drink1.jpg" />\
                        <div class="info">\
                            <p>Cocktail</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'drink1\')">Add</button>\
                                <button onclick="remove_from_basket(\'drink1\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$55.69</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/drinks/drink2.jpg" />\
                        <div class="info">\
                            <p>Non-Alcoholic Drink</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'drink2\')">Add</button>\
                                <button onclick="remove_from_basket(\'drink2\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$45.75</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/drinks/drink3.jpg" />\
                        <div class="info">\
                            <p>Soft-Drinks</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'drink3\')">Add</button>\
                                <button onclick="remove_from_basket(\'drink3\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$19.75</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/drinks/drink4.jpg" />\
                        <div class="info">\
                            <p>Vodka</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'drink4\')">Add</button>\
                                <button onclick="remove_from_basket(\'drink4\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$79.75</p>\
                        </div>\
                    </li>\
                </ul>\
            </div>\
            <div>\
                <h4>Candy Crush</h4>\
                <ul>\
                    <li>\
                        <img\
                        src="./assets/candy/candy1.jpg" />\
                        <div class="info">\
                            <p>Butterscotch Candy</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'candy1\')">Add</button>\
                                <button onclick="remove_from_basket(\'candy1\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$4.75</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img src="./assets/candy/candy2.jpg" />\
                        <div class="info">\
                            <p>Mixed Colofull Candies</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'candy2\')">Add</button>\
                                <button onclick="remove_from_basket(\'candy2\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$14.65</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/candy/candy3.jpg" />\
                        <div class="info">\
                            <p>Chocolate Candies</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'candy3\')">Add</button>\
                                <button onclick="remove_from_basket(\'candy3\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$20</p>\
                        </div>\
                    </li>\
                    <li>\
                        <img\
                        src="./assets/candy/candy4.jpg" />\
                        <div class="info">\
                            <p>Gems Candy</p>\
                            <div class="buttons">\
                                <button onclick="addtobasket(\'candy4\')">Add</button>\
                                <button onclick="remove_from_basket(\'candy4\')">Remove</button>\
                            </div>\
                        </div>\
                        <div class="price">\
                            <p>$11.75</p>\
                        </div>\
                    </li>\
                </ul>\
            </div>\
        </div>\
    </div>';

    document.getElementById("basket").innerHTML = template;
}