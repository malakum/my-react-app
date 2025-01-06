import './App.css'

const Restaurant = () => {
    const menuRestaurant = [{id : 1,
                   foodName : "Samosha",
                   foodCategory : "Breakfast",
                   Description : "A friyed potato"
    }, 
    {id : 2,
        foodName : "BadaPaw",
        foodCategory : "Breakfast",
        Description : "A friyed potato"
}, 
{id : 3,
    foodName : "Puri",
    foodCategory : "Dinner",
    Description : "A friyed potato"
}, 
{id : 4,
    foodName : "Paratha",
    foodCategory : "Dinner",
    Description : "A friyed potato"
}, 
{id : 5,
    foodName : "RiceDal",
    foodCategory : "Lunch",
    Description : "A friyed potato"
}, 
{id : 6,
    foodName : "Khichri",
    foodCategory : "Lunch",
    Description : "A friyed potato"
}, 
{id : 7,
    foodName : "Biscuit",
    foodCategory : "Snacks",
    Description : "A friyed potato"
}, ]

const filterCategory =  [...new Set(menuRestaurant.map((currentItem) =>{return currentItem.foodCategory})),"All"];
console.log (filterCategory);

const menuRestaurantFilter = menuRestaurant.filter((currentItem) => {return currentItem.foodCategory === 'Snacks'});
console.log(menuRestaurantFilter);



    return (<> Food Category......
             <span>
             <navBar className ="filterCategory">filterCategory: {filterCategory} </navBar>
             
             </span>
            { menuRestaurant.map((currItem)=>{ return <li className =  "restaurant">{currItem.id}
                <p>{currItem.foodName}</p>
                <p>{currItem.Description}</p>
                <p>{currItem.foodCategory}</p>
                  </li>  }) }
                                     
               </>)
}
    

    

export default Restaurant;