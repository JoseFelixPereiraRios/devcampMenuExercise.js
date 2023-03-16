
// Let's make the menu

const mainMenu = [
    {
        'product': 'Bambara Burguer',
        'price': 13.50
    },
    {
        'product': 'Gallivan Burguer',
        'price': 14.50
    },
    {
        'product': 'Roula Taco',
        'price': 13.50
    },
    {
        'product': 'Monarca Hotdog',
        'price': 14.50
    },
    {
        'product': 'Kimpton Steak',
        'price': 15.50
    }
]

const sidesMenu = [
    {
        'product': 'Salt Lake City Rings',
        'price': 5.50
    },
    {
        'product': 'Siegfried Salad',
        'price': 9.50
    },
    {
        'product': 'Temple Salad',
        'price': 9.50
    },

    {
        'product': 'Siegfried Beans',
        'price': 8.50
    },

    {
        'product': 'Bottega Chili',
        'price': 9.50
    },

    {
        'product': 'Soft Drink',
        'price': 3.00
    },

    {
        'product': 'Cup of Wine',
        'price': 3.00
    }
]

// Let's print out the menu

alert(`Press enter to see our main courses in the console:`);

for (let dish of mainMenu) {
    console.log(`${dish.product} ---> $${dish.price}`);
}
alert(`And press again for the sides:`);

for (let dish of sidesMenu) {
    console.log(`${dish.product} ---> $${dish.price}`);
}


// Let's choose a waitress

const waitresses = ["Mary", "Kristine", "Tiffany"];
onNow=Math.floor(Math.random() * waitresses.length);
onDuty = waitresses[onNow];

// Let's choose a comment for the entrees

const commentVault = [
    'Good choice, the best in town!',
    'I love it too!',
    'Really tasty!',
];
pickOne=Math.floor(Math.random() * commentVault.length);
politeComment = commentVault[pickOne];

/* 
- A random waitress prompts a user to select an entree.
- She makes a random comment pulled from a comment vault
- and tells them the 'price'.
*/

let total = 0;


 const entree = prompt(`Good morning! I'm ${onDuty}. Please choose an entree`);
switch(entree) {
  case mainMenu[0].product:
    alert(politeComment);
    alert(`The price is $ ${mainMenu[0].price}`);
    total += (mainMenu[0].price);
    break;
  case mainMenu[1].product:
    alert(politeComment);
    alert(`The price is $${mainMenu[1].price}`);
    total += (mainMenu[1].price);
    break;
  case mainMenu[2].product:
    alert(politeComment);
    alert(`The price is $${mainMenu[2].price}`);
    total += (mainMenu[2].price);
    break;
  case mainMenu[3].product:
    alert(politeComment);
    alert(`The price is $${mainMenu[3].price}`);
    total += (mainMenu[3].price);
    break;
  case mainMenu[4].product:
    alert(politeComment);
    alert(`The price is $${mainMenu[4].price}`);
    total += (mainMenu[4].price);
    break;
  default:
    alert("Sorry, that's not on the menu");
}


/* 
- The waitress prompts a user to select a side.
- She makes a random comment pulled from a comment vault
- and tells them the 'price'.
*/


const sides = prompt(`And now please choose your side`);
switch(sides) {
  case sidesMenu[0].product:
    alert(politeComment);
    alert(`The price is $ ${sidesMenu[0].price}`);
    total += (sidesMenu[0].price);
    break;
  case sidesMenu[1].product:
    alert(politeComment);
    alert(`The price is $${sidesMenu[1].price}`);
    total += (sidesMenu[1].price);
    break;
  case sidesMenu[2].product:
    alert(politeComment);
    alert(`The price is $${sidesMenu[2].price}`);
    total += (sidesMenu[2].price);
    break;
  case sidesMenu[3].product:
    alert(politeComment);
    alert(`The price is $${sidesMenu[3].price}`);
    total += (sidesMenu[3].price);
    break;
  case sidesMenu[4].product:
    alert(politeComment);
    alert(`The price is $${sidesMenu[4].price}`);
    total += (sidesMenu[4].price);
    break;
    default:
    alert("Sorry, that's not on the menu");
}

// Let's choose a comment for the second side (drinks)

const drinkCommentVault = [
    'Refreshing!',
    'I love it too!',
];
pickDrink=Math.floor(Math.random() * drinkCommentVault.length);
politeDrinkComment = drinkCommentVault[pickDrink];


/* 
- The waitress prompts a user to select a second side (a drink).
- She makes a random comment pulled from a comment vault
- and tells them the 'price'.
*/

const drinks = prompt(`And now please choose your drink`);
    switch(drinks) {
  case sidesMenu[5].product:
    alert(politeDrinkComment);
    alert(`The price is $${sidesMenu[5].price}`);
    total += (sidesMenu[5].price);
    break;
  case sidesMenu[6].product:
    alert(politeDrinkComment);
    alert(`The price is $${sidesMenu[6].price}`);
    total += (sidesMenu[6].price);
    break;
  default:
    alert("Sorry, that's not on the menu");
}

// The total cost

alert(`The bill amounts to $${total}`);
