  // Task №1
  (function changeSquareBGColor() {
    // We are looking for a block with id = square on the page
    let square = document.getElementById("square");
    // attach a listener of mouse movement events to the block
    square.addEventListener("mouseover", () => {
      // red color intensity (random value in the range from 0 to 255)
      let redIntensity = 255 * Math.random();
      // green color intensity (random value in the range from 0 to 255)
      let greenIntensity = 255 * Math.random();
      // blue color intensity (random value in the range from 0 to 255)
      let blueIntensity = 255 * Math.random();
      // Setting the background color block
      square.style.backgroundColor = `rgb(${redIntensity}, ${greenIntensity}, ${blueIntensity})`;
      // We form and display a text with a formula of the color of its background to the block
      square.innerText =
        "#" + 
        toHex(redIntensity) +
        toHex(greenIntensity) +
        toHex(blueIntensity);
    });

    // Function for converting decimal value to hexadecimal
    function toHex(d) {
      return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
    }
  })(); // we are self-starting this function


  // Task №2
  function changeSrcForImages(newUrl) {
    // Find the main block
    let main = document.getElementById("main");
    // In the main block we find all the images
    let images = main.getElementsByTagName("img");
    // Replacing the sources for the first 5 images
    for (let i = 0; i < 5; i++) {
      images[i].setAttribute("src", newUrl);
    }
  }
  // Calling the replace images function
  changeSrcForImages("https://via.placeholder.com/100/0000D0/ffffff");


  // Task №3
  (function showImagesGalery() {
    // We find a container for displaying thumbnails of images
    let imagesWrapper = document.getElementById("imagesList");
    // We find a container for displaying a large image
    let imgFullSizeContainer = document.getElementById("imgFullSizeContainer");
    // Creating an element for displaying a large image
    let fullSizeImg = document.createElement("img");
    // We specify the id attribute for this, so that it can be easier to access it later
    fullSizeImg.setAttribute("id", "full-size-img");
    // Specify the starting value
    fullSizeImg.setAttribute(
      "src",
      "https://via.placeholder.com/100/330099/ffffff"
    );
    // Setting the size to display this image
    fullSizeImg.style.width = "300px";
    // Adding this element to the container
    imgFullSizeContainer.appendChild(fullSizeImg);

    // Array of images
    let imgSrc = [
      "https://via.placeholder.com/100/330099/ffffff",
      "https://via.placeholder.com/100/FF00FF/ffffff",
      "https://via.placeholder.com/100/FFFF00/000090",
      "https://via.placeholder.com/100/CC0000/ffffff",
      "https://via.placeholder.com/100/0099CC/ffffff",
      "https://via.placeholder.com/100/00CC66/ffffff",
      "https://via.placeholder.com/100/999900/ffffff",
    ];
    // Length of the image array
    let imgSrcLength = imgSrc.length;
    // Creating an array to store images
    let images = new Array(imgSrcLength);
    // Displays thumbnails of images
    for (let i = 0; i < imgSrcLength; i++) {
      // Creating an element for image output
      images[i] = document.createElement("img");
      // We specify the source of the image for this element
      images[i].setAttribute("src", imgSrc[i]);
      // Attaching the event listener to the thumbnail image
      images[i].addEventListener("click", () => {
        document
          .getElementById("full-size-img")
          .setAttribute("src", imgSrc[i]);
      });
      // Adding an element to the thumbnail container
      imagesWrapper.appendChild(images[i]);
    }
  })();

  // Task №4
  // Defining an array of objects with product data
  let offers = [
    { 
      title: "Offer title 1", 
      unit_price: 23.49, 
      count: 10 
    },
    { 
      title: "Offer title 2", 
      unit_price: 120.19, 
      count: 15 
    },
    {
      title: "Offer title 3",
      unit_price: 100.49,
      count: 35,
    },
  ];

  // We form a table and its title
  let table =
    "<table width='400px'>" +
    "<tr>" +
      "<th>Title</th>" +
      "<th>Price</th>" +
      "<th>Count</th>" +
      "<th>Amount</th>" + 
    "</tr>";
  // We define variables for calculating the number of units of goods and their total cost
  let itemsAmount = 0;
  let itemsTotalCost = 0;
  // Forming a row of the data table
  for (let i = 0; i < offers.length; i++) {
    table +=
      "<tr><td>" +
      offers[i].title +
      "</td>" +
      "<td align='right'>" +
      offers[i].unit_price +
      "</td>" +
      "<td align='right'>" +
      offers[i].count +
      "</td>" +
      "<td align='right'>" +
      (offers[i].unit_price * offers[i].count).toFixed(2) +
      "</td></tr>";
    itemsAmount += offers[i].count;
    itemsTotalCost += offers[i].unit_price * offers[i].count;
  }
  // Forming the final row of the table
  table +=
    "<tr><td colspan = '2'>Total: </td>" +
    "<td align='right'>" +
    itemsAmount +
    "</td>" +
    "<td align='right'>" +
    itemsTotalCost.toFixed(2) +
    "</td></tr>";
  // Closing the table
  table += "</table>";

  // Output a table with data
  document.getElementById("offersList").innerHTML = table;
