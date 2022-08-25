var Mobiles = /** @class */ (function () {
    function Mobiles() {
    }
    Mobiles.prototype.set_data = function (count, Mobile) {
        this.count = count;
        this.Mobile = Mobile;
    };
    Mobiles.prototype.display = function () {
        console.log("Mobile: " + this.Mobile);
    };
    Mobiles.prototype.defect = function (name1) {
        console.log("Gadget1" + name1);
    };
    return Mobiles;
}());
var c1 = new Mobiles();
var c2 = new Mobiles();
c1.set_data(78, ['Samsung', 'Vivo', 'Nokia']);
c2.set_data(100, ['Oppo', 'Oneplus']);
c1.display();
c2.display();
//add
c1.Mobile.push("Apple", "Google");
c2.Mobile.push("Realme");
c1.display();
c2.display();
//defect
var remove_name = "Vivo";
c1.defect(remove_name);
// //update
// for(let rem_name in c1.Mobile){
//     if(c1.Mobile[rem_name] === remove_name){
//         c2.Mobile[rem_name]="Oppo";
//         c1.display();
//     }
// }
//Delete
for (var delete_gadget in c1.Mobile) {
    if (c2.Mobile[delete_gadget] === "Oppo") {
        delete c2.Mobile[delete_gadget];
        c1.display();
    }
}
//Threshold
if (c1.count < 80) {
    c2.defect(c2.Mobile);
}
