const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true})

const fruitScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please check data entry"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    }, 
    review: String
});

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    age: Number,
    favouriteFruit: fruitScheme

})

const Fruit = mongoose.model("fruit", fruitScheme)

const Person = mongoose.model('person', personSchema)
 const fruit = new Fruit({
    name: "pear",
    rating: 1,
    review: "liking this"
 })
//  fruit.save()
 const personOne = new Person({
    name: "Philip",
    age: 12,
    favouriteFruit: fruit
 })
//  personOne.save();

  const disp = Fruit.find({})
  console.log(disp.model)

 const mango = new Fruit({
    name: "mango",
    rating: 7,
    review: "Pretty solid as a fruit"
 })
 const pineapple = new Fruit({
    name: "Pineapple",
    rating: 7,
    review: "Pretty solid as a fruit"
 })
 const berry = new Fruit({
    name: "Berry",
    rating: 7,
    review: "Pretty solid as a fruit"
 })

//  Fruit.updateOne({_id: "64aaa5e31b1e1c4e625c3dbf"}, {name: "vine"})
//  Fruit.insertMany([mango, pineapple, berry])
  
// Fruit.deleteMany({name: "Berry"})

//  const finder = Fruit.find()

//  console.log(finder.all)
//  mongoose.connection.close()