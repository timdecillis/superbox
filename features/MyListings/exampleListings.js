
let exampleListings = [
  {
      "id": 117,
      "seller_id": 1,
      "product_id": 3,
      "product_name":'Superman',
      "transaction_id": null,
      "condition": 5,
      "price": "$13.35",
      "description": "An ordinary person gains extraordinary abilities",
      "status": "fulfilled",
      "created_at": "2023-07-30T04:23:59.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 82,
      "seller_id": 1,
      "product_id": 6,
      "product_name":'Zombos',
      "transaction_id": null,
      "condition": 4,
      "price": "$25.71",
      "description": "A post-apocalyptic world where survival is key",
      "status": "unfulfilled",
      "created_at": "2023-07-28T02:43:58.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 335,
      "seller_id": 1,
      "product_id": 1,
      "product_name":'Frands',
      "transaction_id": null,
      "condition": 1,
      "price": "$18.81",
      "description": "A group of friends embark on a quest to save the world",
      "status": "inactive",
      "created_at": "2023-07-23T19:23:34.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 206,
      "seller_id": 1,
      "product_id": 95,
      "transaction_id": null,
      "product_name":'MevLock Holmes',
      "condition": 1,
      "price": "$46.78",
      "description": "A detective solves crimes in a dystopian society",
      "status": "active",
      "created_at": "2023-07-23T02:38:05.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 40,
      "seller_id": 1,
      "product_id": 71,
      "transaction_id": null,
      "condition": 2,
      "price": "$79.77",

      "product_name":'Superman 2',
      "description": "An ordinary person gains extraordinary abilities",
      "status": "fulfilled",
      "created_at": "2023-07-27T12:07:12.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 63,
      "seller_id": 1,
      "product_id": 13,
      "transaction_id": null,
      "condition": 1,
      "product_name":'Zombos 2',
      "price": "$52.10",
      "description": "A post-apocalyptic world where survival is key",
      "status": "unfulfilled",
      "created_at": "2023-07-29T16:12:10.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 162,
      "seller_id": 1,
      "product_id": 41,
      "transaction_id": null,
      "condition": 1,

      "product_name":'Superman 3',
      "price": "$60.65",
      "description": "Mystical creatures and magical realms collide",
      "status": "inactive",
      "created_at": "2023-07-29T11:21:27.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 426,
      "seller_id": 1,
      "product_name":'Superman 4',
      "product_id": 10,
      "transaction_id": null,
      "condition": 5,
      "price": "$89.31",
      "description": "Time-traveling adventures with a mischievous protagonist",
      "status": "unfulfilled",
      "created_at": "2023-07-22T07:38:18.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 446,
      "seller_id": 1,
      "product_id": 13,
      "transaction_id": null,
      "product_name":'Superman5',
      "condition": 3,
      "price": "$12.60",
      "description": "Superhero adventures in a futuristic city",
      "status": "inactive",
      "created_at": "2023-07-25T18:20:11.000Z",
      "photos": [
          null
      ]
  },
  {
      "id": 193,
      "seller_id": 1,
      "product_id": 88,
      "product_name":'Superman6',
      "transaction_id": null,
      "condition": 2,
      "price": "$47.02",
      "description": "A group of friends embark on a quest to save the world",
      "status": "inactive",
      "created_at": "2023-07-26T19:50:27.000Z",
      "photos": [
          null
      ]
  },
  {
      "id": 144,
      "seller_id": 1,
      "product_id": 100,
      "transaction_id": null,
      "condition": 4,
      "price": "$24.05",
      "product_name":'Superman3',
      "description": "Time-traveling adventures with a mischievous protagonist",
      "status": "fulfilled",
      "created_at": "2023-07-31T06:46:19.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 169,
      "seller_id": 1,
      "product_id": 20,
      "transaction_id": null,
      "condition": 1,
      "price": "$55.26",
      "product_name":'Superman 51',
      "description": "A post-apocalyptic world where survival is key",
      "status": "active",
      "created_at": "2023-07-19T01:43:49.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 176,
      "seller_id": 1,
      "product_id": 87,
      "product_name":'Superman 41',
      "transaction_id": null,
      "condition": 4,
      "price": "$22.34",
      "description": "A detective solves crimes in a dystopian society",
      "status": "unfulfilled",
      "created_at": "2023-07-29T02:26:57.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 232,
      "seller_id": 1,
      "product_id": 74,
      "transaction_id": null,
      "product_name":'Superman 32',
      "condition": 1,
      "price": "$33.77",
      "description": "A team of mutants battles against evil forces",
      "status": "unfulfilled",
      "created_at": "2023-07-21T15:40:07.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 36,
      "seller_id": 1,
      "product_id": 34,
      "product_name":'Superman11',
      "transaction_id": null,
      "condition": 1,
      "price": "$74.26",
      "description": "A team of mutants battles against evil forces",
      "status": "fulfilled",
      "created_at": "2023-07-27T10:55:28.000Z",
      "photos": [
          null
      ]
  },
  {
      "id": 31,
      "seller_id": 1,
      "product_id": 7,
      "transaction_id": null,
      "product_name":'Superman84',
      "condition": 3,
      "price": "$18.90",
      "description": "Mystical creatures and magical realms collide",
      "status": "inactive",
      "created_at": "2023-07-23T03:30:53.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 221,
      "seller_id": 1,
      "product_id": 49,
      "transaction_id": null,
      "condition": 3,
      "product_name":'Superman32',
      "price": "$22.63",
      "description": "Mystical creatures and magical realms collide",
      "status": "unfulfilled",
      "created_at": "2023-07-30T06:34:06.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 464,
      "seller_id": 1,
      "product_id": 58,
      "transaction_id": null,
      "condition": 2,
      "product_name":'Superman35',
      "price": "$24.49",
      "description": "An ordinary person gains extraordinary abilities",
      "status": "active",
      "created_at": "2023-07-19T22:09:17.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 211,
      "seller_id": 1,
      "product_id": 70,
      "product_name":'Superman63',
      "transaction_id": null,
      "condition": 4,
      "price": "$87.30",
      "description": "A group of friends embark on a quest to save the world",
      "status": "fulfilled",
      "created_at": "2023-07-28T08:13:35.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 403,
      "seller_id": 1,
      "product_id": 51,
      "transaction_id": null,
      "condition": 1,
      "product_name":'Superman88',
      "price": "$51.39",
      "description": "Aliens invade Earth and humans fight back",
      "status": "inactive",
      "created_at": "2023-07-18T01:46:07.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 22,
      "seller_id": 1,
      "product_id": 5,
      "transaction_id": 55,
      "condition": 5,
      "product_name":'Superman09',
      "price": "$1.65",
      "description": "An ordinary person gains extraordinary abilities",
      "status": "fulfilled",
      "created_at": "2023-07-29T19:48:55.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 37,
      "seller_id": 1,
      "product_id": 79,
      "transaction_id": null,
      "product_name":'Superman99',
      "condition": 5,
      "price": "$83.93",
      "description": "Superhero adventures in a futuristic city",
      "status": "active",
      "created_at": "2023-07-19T18:53:01.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 277,
      "seller_id": 1,
      "product_id": 9,
      "transaction_id": null,
      "product_name":'Superman81',
      "condition": 1,
      "price": "$99.73",
      "description": "A group of friends embark on a quest to save the world",
      "status": "inactive",
      "created_at": "2023-07-23T05:19:59.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 356,
      "seller_id": 1,
      "product_id": 94,
      "product_name":'Superman69',
      "transaction_id": null,
      "condition": 4,
      "price": "$41.42",
      "description": "An ordinary person gains extraordinary abilities",
      "status": "unfulfilled",
      "created_at": "2023-07-31T19:10:34.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 106,
      "product_name":'Superma64n',
      "seller_id": 1,
      "product_id": 75,
      "transaction_id": null,
      "condition": 4,
      "price": "$42.37",
      "description": "A post-apocalyptic world where survival is key",
      "status": "unfulfilled",
      "created_at": "2023-07-19T00:27:35.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 264,
      "seller_id": 1,
      "product_id": 72,
      "product_name":'Superman58',
      "transaction_id": null,
      "condition": 2,
      "price": "$6.19",
      "description": "A group of friends embark on a quest to save the world",
      "status": "active",
      "created_at": "2023-07-23T04:17:30.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 489,
      "seller_id": 1,
      "product_id": 11,
      "product_name":'Superman17',
      "transaction_id": null,
      "condition": 3,
      "price": "$46.15",
      "description": "An ordinary person gains extraordinary abilities",
      "status": "unfulfilled",
      "created_at": "2023-07-21T16:56:35.000Z",
      "photos": [
          null
      ]
  },
  {
      "id": 148,
      "seller_id": 1,
      "product_id": 13,
      "product_name":'Superman19',
      "transaction_id": null,
      "condition": 3,
      "price": "$59.24",
      "description": "A group of friends embark on a quest to save the world",
      "status": "inactive",
      "created_at": "2023-07-31T06:09:28.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 339,
      "seller_id": 1,
      "product_name":'Superman20',
      "product_id": 83,
      "transaction_id": null,
      "condition": 3,
      "price": "$63.93",
      "description": "A post-apocalyptic world where survival is key",
      "status": "fulfilled",
      "created_at": "2023-07-17T18:55:19.000Z",
      "photos": [
          null
      ]
  },
  {
      "id": 478,
      "seller_id": 1,
      "product_name":'Superman32dwe',
      "product_id": 45,
      "transaction_id": null,
      "condition": 1,
      "price": "$15.13",
      "description": "A team of mutants battles against evil forces",
      "status": "fulfilled",
      "created_at": "2023-07-18T10:15:54.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 8,
      "seller_id": 1,
      "product_id": 89,
      "product_name":'Superman123de',
      "transaction_id": 55,
      "condition": 3,
      "price": "$37.52",
      "description": "Time-traveling adventures with a mischievous protagonist",
      "status": "fulfilled",
      "created_at": "2023-07-26T09:35:16.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  },
  {
      "id": 103,
      "seller_id": 1,
      "product_id": 92,
      "product_name":'Superman123211',
      "transaction_id": null,
      "condition": 4,
      "price": "$85.83",
      "description": "Time-traveling adventures with a mischievous protagonist",
      "status": "active",
      "created_at": "2023-07-20T21:18:01.000Z",
      "photos": [
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
          "https://images.unsplash.com/photo-1593345216166-6a6cbf185ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      ]
  }
]

  export default exampleListings