db = connect("localhost:27017/review")

db.reviews.insertMany([
    {name: "AC Origins", year: 2017, rating: 8},
    {name: "AC Odyssey", year:2018, rating: 9}, 
    {name: "Star wars Jedi Fallen Order", year: 2019, rating: 7.5},
    {name: "DBZ Kakarot", year:2020, rating: 8/10},
    {name: "god of war", year:2018, rating:9/10}


])
