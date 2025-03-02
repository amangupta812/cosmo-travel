const placeData = {
  "taj-mahal": {
    name: "Taj Mahal, Agra",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "The Taj Mahal is an ivory-white marble mausoleum in Agra, India. It is one of the New 7 Wonders of the World.",
    topPlaces: [
      { name: "Agra Fort", location: "https://www.google.com/maps?q=Agra+Fort" },
      { name: "Mehtab Bagh", location: "https://www.google.com/maps?q=Mehtab+Bagh" },
      { name: "Fatehpur Sikri", location: "https://www.google.com/maps?q=Fatehpur+Sikri" }
    ],
    topFoods: ["Petha", "Mughlai Cuisine", "Dalmoth"]
  },
  "varanasi": {
    name: "Varanasi",
    image: "https://images.lonelyplanetitalia.it/uploads/gettyrf-827065008?q=80&p=slider&s=5595667a6e1e401506daa05413bd405b",
    description: "Varanasi, the spiritual capital of India, is famous for its ancient ghats, temples, and rich cultural heritage.",
    topPlaces: [
      { name: "Kashi Vishwanath Temple", location: "https://www.google.com/maps?q=Kashi+Vishwanath+Temple" },
      { name: "Dashashwamedh Ghat", location: "https://www.google.com/maps?q=Dashashwamedh+Ghat" },
      { name: "Sarnath", location: "https://www.google.com/maps?q=Sarnath" }
    ],
    topFoods: ["Kachori Sabzi", "Banarasi Paan", "Malaiyo"]
  },
  "jaipur": {
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Jaipur, the Pink City, is known for its historic palaces, vibrant markets, and rich Rajput culture.",
    topPlaces: [
      { name: "Amber Fort", location: "https://www.google.com/maps?q=Amber+Fort" },
      { name: "Hawa Mahal", location: "https://www.google.com/maps?q=Hawa+Mahal" },
      { name: "City Palace", location: "https://www.google.com/maps?q=City+Palace+Jaipur" }
    ],
    topFoods: ["Dal Baati Churma", "Ghewar", "Laal Maas"]
  },
  "kerala-backwaters": {
    name: "Kerala Backwaters",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Kerala Backwaters are a network of serene lakes, canals, and rivers offering scenic houseboat experiences.",
    topPlaces: [
      { name: "Alleppey", location: "https://www.google.com/maps?q=Alleppey" },
      { name: "Kumarakom", location: "https://www.google.com/maps?q=Kumarakom" },
      { name: "Vembanad Lake", location: "https://www.google.com/maps?q=Vembanad+Lake" }
    ],
    topFoods: ["Appam", "Puttu", "Fish Curry"]
  },
  "goa-beaches": {
    name: "Goa Beaches",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Goa is a tropical paradise known for its beautiful beaches, nightlife, and delicious seafood.",
    topPlaces: [
      { name: "Baga Beach", location: "https://www.google.com/maps?q=Baga+Beach" },
      { name: "Anjuna Beach", location: "https://www.google.com/maps?q=Anjuna+Beach" },
      { name: "Dudhsagar Waterfalls", location: "https://www.google.com/maps?q=Dudhsagar+Waterfalls" }
    ],
    topFoods: ["Goan Fish Curry", "Pork Vindaloo", "Bebinca"]
  },
  "ladakh": {
    name: "Ladakh",
    image: "https://media.istockphoto.com/id/1046313926/photo/indian-bikers-travel-on-national-highway-with-scenic-landscape-at-ladakh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=kqMWn40ojqWCpazyRuz4MDSWbPPRY2EtfaGMyhsQSyc=",
    description: "Ladakh, the Land of High Passes, is famous for its rugged mountains, monasteries, and adventure sports.",
    topPlaces: [
      { name: "Pangong Lake", location: "https://www.google.com/maps?q=Pangong+Lake" },
      { name: "Nubra Valley", location: "https://www.google.com/maps?q=Nubra+Valley" },
      { name: "Magnetic Hill", location: "https://www.google.com/maps?q=Magnetic+Hill" }
    ],
    topFoods: ["Momos", "Thukpa", "Butter Tea"]
  },
  "vrindavan": {
    name: "Vrindavan",
    image: "https://wallpaperaccess.com/full/9386523.jpg",
    description: "The land of Lord Krishna, filled with temples and spiritual bliss.",
    topPlaces: [
      { name: "Banke Bihari Temple", location: "https://www.google.com/maps?q=Banke+Bihari+Temple" },
      { name: "Prem Mandir", location: "https://www.google.com/maps?q=Prem+Mandir" },
      { name: "ISKCON Temple", location: "https://www.google.com/maps?q=ISKCON+Temple+Vrindavan" }
    ],
    topFoods: ["Lassi", "Kachori", "Pedas"]
  },
  "ayodhya": {
    name: "Ayodhya",
    image: "/images/ayodhya.jpg",
    description: "The birthplace of Lord Rama, rich in history and religious significance.",
    topPlaces: [
      { name: "Ram Janmabhoomi", location: "https://www.google.com/maps?q=Ram+Janmabhoomi" },
      { name: "Hanuman Garhi", location: "https://www.google.com/maps?q=Hanuman+Garhi" },
      { name: "Kanak Bhawan", location: "https://www.google.com/maps?q=Kanak+Bhawan" }
    ],
    topFoods: ["Kachori", "Peda", "Malpua"]
  },
  "tirupati-balaji": {
    name: "Tirupati Balaji",
    image: "https://wallpaperaccess.com/full/2991971.jpg",
    description: "One of the most visited pilgrimage sites, known for Sri Venkateswara Temple.",
    topPlaces: [
      { name: "Sri Venkateswara Temple", location: "https://www.google.com/maps?q=Sri+Venkateswara+Temple" },
      { name: "Silathoranam", location: "https://www.google.com/maps?q=Silathoranam" },
      { name: "TTD Gardens", location: "https://www.google.com/maps?q=TTD+Gardens" }
    ],
    topFoods: ["Laddu", "Pulihora", "Dosa"]
  },
  "rishikesh": {
    name: "Rishikesh",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Trayambakeshwar_Temple_VK.jpg",
    description: "Rishikesh, the 'Yoga Capital of the World,' is known for its spiritual vibes, adventure sports, and stunning landscapes along the Ganges River.",
    topPlaces: [
      { name: "Lakshman Jhula", location: "https://www.google.com/maps?q=Lakshman+Jhula" },
      { name: "Triveni Ghat", location: "https://www.google.com/maps?q=Triveni+Ghat" },
      { name: "Neelkanth Mahadev Temple", location: "https://www.google.com/maps?q=Neelkanth+Mahadev+Temple" }
    ],
    topFoods: ["Aloo Puri", "Chotiwala Thali", "Momos"]
  },
  "haridwar": {
    name: "Haridwar",
    image: "https://media.istockphoto.com/id/596042540/photo/har-ki-pauri.jpg?s=612x612&w=0&k=20&c=igkOecfeSd5ktZ3mFkiw8Ya0tIN0mjdgOAWecBB7SuA=",
    description: "Haridwar, a sacred city, is famous for the Ganga Aarti at Har Ki Pauri and is a major pilgrimage site in India.",
    topPlaces: [
      { name: "Har Ki Pauri", location: "https://www.google.com/maps?q=Har+Ki+Pauri" },
      { name: "Mansa Devi Temple", location: "https://www.google.com/maps?q=Mansa+Devi+Temple" },
      { name: "Chandi Devi Temple", location: "https://www.google.com/maps?q=Chandi+Devi+Temple" }
    ],
    topFoods: ["Kachori Sabzi", "Aloo Puri", "Rasabali"]
  },
  "kedarnath": {
    name: "Kedarnath",
    image: "https://wallpaperaccess.com/full/6883014.jpg",
    description: "Kedarnath, one of the Char Dham pilgrimage sites, is home to the sacred Kedarnath Temple, surrounded by the majestic Himalayas.",
    topPlaces: [
      { name: "Kedarnath Temple", location: "https://www.google.com/maps?q=Kedarnath+Temple" },
      { name: "Vasuki Tal", location: "https://www.google.com/maps?q=Vasuki+Tal" },
      { name: "Gaurikund", location: "https://www.google.com/maps?q=Gaurikund" }
    ],
    topFoods: ["Rajma Chawal", "Chainsoo", "Madua Roti"]
  },
  "badrinath": {
    name: "Badrinath",
    image: "https://wallpaperaccess.com/full/13366327.jpg",
    description: "Badrinath, a sacred town in Uttarakhand, is famous for the Badrinath Temple dedicated to Lord Vishnu.",
    topPlaces: [
      { name: "Badrinath Temple", location: "https://www.google.com/maps?q=Badrinath+Temple" },
      { name: "Tapt Kund", location: "https://www.google.com/maps?q=Tapt+Kund" },
      { name: "Charan Paduka", location: "https://www.google.com/maps?q=Charan+Paduka" }
    ],
    topFoods: ["Kachori", "Aloo Poori", "Maggie"]
  },

  "golden-temple": {
    name: "Golden Temple",
    image: "https://images.unsplash.com/photo-1623059508779-2542c6e83753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZGVuJTIwdGVtcGxlfGVufDB8fDB8fHww",
    description: "The Golden Temple in Amritsar is a significant Sikh pilgrimage site known for its stunning architecture and langar service.",
    topPlaces: [
      { name: "Golden Temple", location: "https://www.google.com/maps?q=Golden+Temple" },
      { name: "Jallianwala Bagh", location: "https://www.google.com/maps?q=Jallianwala+Bagh" },
      { name: "Wagah Border", location: "https://www.google.com/maps?q=Wagah+Border" }
    ],
    topFoods: ["Langar Dal", "Amritsari Kulcha", "Lassi"]
  },

  "shirdi": {
    name: "Shirdi",
    image: "https://rukminim2.flixcart.com/image/850/1000/k2arbm80/poster/7/j/a/medium-shirdi-sai-baba-wall-poster-wall-paper-wall-sticker-original-imafhnsp3gzq7emb.jpeg?q=90&crop=false",
    description: "Shirdi is a pilgrimage site dedicated to Sai Baba, attracting devotees from all over India.",
    topPlaces: [
      { name: "Sai Baba Temple", location: "https://www.google.com/maps?q=Sai+Baba+Temple+Shirdi" },
      { name: "Dwarkamai", location: "https://www.google.com/maps?q=Dwarkamai+Shirdi" },
      { name: "Shani Shingnapur", location: "https://www.google.com/maps?q=Shani+Shingnapur" }
    ],
    topFoods: ["Puran Poli", "Vada Pav", "Shira"]
  }
};

export default placeData;