// Map for business page

var locations = [
    [
        "Fol Epi Organic Bakery",
        48.432184, -123.378433
    ]
    
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.432002, -123.378433),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }


// var yourItem = "";
// function newlist(order) {
//   yourItem = yourItem + order;
//   document.getElementById("userOrder").innerHTML = yourItem;
  
// }

// //newlist("");

// var itemTotal = 0;
// var tax = 0;
// var fprice = 0;
// var orderTotal = 0;



// function updateTotal(cost) {
//   itemTotal = itemTotal + cost;
//   tax = tax + (itemTotal*12);
//   fprice = tax + itemTotal;
//   console.log(fprice);
//   document.getElementById("itemTotal").value = fprice;
//   document.getElementById("itemTotal").innerHTML = fprice;
//   document.getElementById("tax").innerHTML = tax;
//   document.getElementById("test").innerHTML = fprice;
// }
// console.log(updateTotal); 


// function updateList(order) {
//   yourItem = yourItem + order;
//   document.getElementById("userOrder").innerHTML = yourItem;
// }
// updateList("");

// // function updateTotal(cost) {
// //   orderTotal = orderTotal + cost;
// //   document.getElementById("orderTotal").innerHTML = orderTotal;
// //}
// updateTotal(0);

// document.getElementById("button1").onclick = function() {
//   updateTotal(0.75);
//   updateList("Chocolate Chip Cookie<br>");
// }

function placeOrder() {
  alert('Order Is Ready For Pickup!');
  console.log("placeOrder");
}
document.getElementById("sendorder").onclick = placeOrder;
