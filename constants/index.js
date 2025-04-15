export const categories = [
    {
      id: 1,
      name: 'Pizza',
      image: require('../assets/images/pizzaIcon.png'),
    },
    {
      id: 2,
      name: 'Burger',
      image: require('../assets/images/burgerIcon.png'),
    },
    {
      id: 3,
      name: 'Döner',
      image: require('../assets/images/donerIcon.png'),
    },
    {
      id: 4,
      name: 'Pide',
      image: require('../assets/images/pideIcon.png'),
    },
    {
      id: 5,
      name: 'Köfte',
      image: require('../assets/images/kofteIcon.png'),
    },
  ];
  
  export const featured = {
    id: 1,
    title: "Pizza",
    description:"Birbirinden leziz pizzalar",
    restaurants:[
      {
        id: 1,
        name: 'PizzaBabası',
        image: require('../assets/images/pizzaBabasi.png'),
        description: 'Sıcak ve leziz pizzalar',
        lat: 40.997414,
        lng: 29.0965178,
        address: 'Baba Sokak , Ataşehir',
        stars: 4.5,
        reviews: '7.4k',
        category: 'Fast Food',
        dishes: [
          {
            id: 1,
            name: 'Sucuk Festivali',
            description: 'Ekstra sucuklu pizza',
            price: 270,
            image: require('../assets/images/pizzaDish.png'),
          },
          {
            id: 2,
            name: 'Karıştır Usta',
            description: 'Karışık pizza + sos',
            price: 340,
            image: require('../assets/images/pizzaDish.png'),
          },
          {
            id: 3,
            name: 'Mısır Diyarı',
            description: 'Ekstra mısırlı pizza',
            price: 230,
            image: require('../assets/images/pizzaDish.png'),
          },
          {
            id: 4,
            name: 'Taraftar Pizza',
            description: 'Karışık pizza + 1lt içecek',
            price: 370,
            image: require('../assets/images/pizzaDish.png'),
          },
        ],
      },
      {
        id: 2,
        name: 'PizzaGuy',
        image: require('../assets/images/pizzaGuy.png'),
        description: 'Sıcak ve leziz pizzalar',
        lng: 58.2145602,
        lat: -25.5324269,
        address: 'Genç Sokak , Kadıköy',
        stars: 4.4,
        reviews: '3.4k',
        category: 'Fast Food',
        dishes: [
          {
            id: 1,
            name: 'Sucuk Festivali',
            description: 'Ekstra sucuklu pizza',
            price: 250,
            image: require('../assets/images/pizzaDish.png'),
          },
          {
            id: 2,
            name: 'Karıştır Usta',
            description: 'Karışık pizza + sos',
            price: 320,
            image: require('../assets/images/pizzaDish.png'),
          },
          {
            id: 3,
            name: 'Mısır Diyarı',
            description: 'Ekstra mısırlı pizza',
            price: 220,
            image: require('../assets/images/pizzaDish.png'),
          },
          {
            id: 4,
            name: 'Taraftar Pizza',
            description: 'Karışık pizza + 1lt içecek',
            price: 350,
            image: require('../assets/images/pizzaDish.png'),
          },
        ],
      }
    ] 
  }