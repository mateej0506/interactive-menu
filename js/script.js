const drinkInput = document.getElementById("drinkInput");
const submitButton = document.getElementById("submitDrink");
const drinkList = document.getElementById("drinkList");
const removeLast = document.getElementById("removeLast");
const removeAll = document.getElementById("removeAll");
const drinkDesc = {
    "Jack Daniels": "Classic Tennessee whiskey with smooth notes of caramel, vanilla, and toasted oak.",
    "Jameson": "Triple-distilled Irish whiskey, exceptionally smooth with a perfect balance of spicy, nutty, and vanilla notes.",
    "Johnnie Walker": "An iconic blended Scotch with a bold, smoky character and layers of rich fruit and spice.",
    "Jagermeister": "A complex herbal liqueur crafted from 56 botanicals, offering a unique bittersweet botanical experience.",
    "Pelinkovac": "A traditional bitter liqueur infused with wormwood and aromatic herbs for an authentic herbal punch.",
    "Chivas Regal": "A refined blended Scotch whiskey, rich and fruity with notes of ripe pears, vanilla, and honey.",
    "Vodka Grey Goose": "Premium French vodka, celebrated for its crisp, silky texture and elegant floral aroma.",
    "Vodka Finlandia": "Exceptionally pure vodka made from glacial spring water and six-row barley.",
    "Gin Tanqueray": "A definitive London Dry Gin with a perfect balance of four botanicals: juniper, coriander, angelica, and liquorice.",
    "Gin Hendrick's": "An unusual gin infused with rose and cucumber for a remarkably fresh and floral flavor profile.",
    "Tequila Sierra": "A vibrant and authentic tequila with fresh agave notes and a hint of light pepper.",
    "Bacardi Rum": "A classic light and aromatic white rum with delicate floral and fruity notes.",
    "Captain Morgan": "A secret blend of Caribbean rums and spices, smooth with notes of vanilla and caramel.",
    "Baileys": "The original Irish cream, a decadent blend of premium Irish dairy cream and finest aged whiskey.",
    "Martini": "A timeless Italian vermouth, elegant and aromatic with a delicate herbal bouquet.",
    "Stock 84": "A historic brandy with a smooth, harmonious character and a rich golden amber hue.",
    "Viljamovka": "Premium pear brandy made from ripe Williams pears, intensely aromatic and naturally sweet.",
    "Travarica": "Traditional herbal brandy, a potent spirit infused with mountain herbs and botanicals.",
    "Šljivovica": "A powerful plum brandy, oak-aged for a deep, complex fruit character and warmth.",
    "Ožujsko": "The most popular Croatian lager, crisp and refreshing with a fine hop bitterness.",
    "Karlovačko": "A rich golden lager with a full-bodied taste and a distinctive malty aroma.",
    "Pan": "A smooth, easy-drinking lager with a clean finish and balanced bitterness.",
    "Staropramen": "The spirit of Prague, a premium lager with a well-rounded malty flavor and gentle hop finish.",
    "Heineken": "A global premium lager, crisp and clean with subtle fruity notes from unique A-yeast.",
    "Stella Artois": "A sophisticated Belgian pilsner with a well-balanced malt sweetness and crisp hop finish.",
    "Guinness": "An iconic Irish stout, famously dark and creamy with notes of coffee and dark chocolate.",
    "Zmajska Pivovara": "Craft pale ale with intense hop aromas of tropical fruit and citrus.",
    "Paulaner": "A classic Munich wheat beer, naturally cloudy with notes of banana and clove.",
    "Coca Cola": "The world's favorite sparkling cola, iconic for its refreshing and unique caramel-spice flavor.",
    "Coca Cola Zero": "All the great taste of Coca-Cola without the sugar, perfectly crisp and calorie-free.",
    "Fanta": "A vibrant and fruity orange sparkling drink made with real fruit juice.",
    "Sprite": "A clean, crisp, lemon-and-lime flavored sparkling beverage that's naturally refreshing.",
    "Schweppes Tonic": "A sophisticated mixer with the perfect balance of bittersweet quinine and citrus.",
    "Schweppes Tangerine": "A zesty and sparkling citrus treat with the bold flavor of sun-ripened tangerines.",
    "Cockta": "A legendary herbal cola from the Alps, caffeine-free with a unique rose hip aroma.",
    "Cedevita Naranča": "A refreshing vitamin-enriched drink with the bright and juicy taste of oranges.",
    "Cedevita Limun": "Zesty and invigorating vitamin drink with the classic tartness of fresh lemons.",
    "Sok od Naranče": "Pure and sun-drenched orange juice, packed with natural sweetness and vitamin C.",
    "Sok od Jabuke": "Crisp and clear apple juice made from the finest orchard-grown apples.",
    "Gusti Sok": "A rich and velvety fruit nectar, thick with the natural sweetness of blended fruits.",
    "Ledeni Čaj": "A chilled infusion of tea leaves with a hint of fruit for the ultimate thirst quencher.",
    "Mineralna Voda": "Pure sparkling mineral water, naturally carbonated for a crisp and refreshing bite.",
    "Gazirana Voda": "Refreshingly bubbly water, perfect on its own or as a versatile mixer.",
    "Romerquelle": "Premium mineral water from the heart of Austria, balanced and revitalizing.",
    "Espresso": "A concentrated shot of intense coffee with a rich crema and deep, roasted aroma.",
    "Macchiato": "A bold espresso 'marked' with a dollop of creamy frothed milk.",
    "Cappuccino": "A perfect harmony of rich espresso, steamed milk, and a thick layer of silky foam.",
    "Kava s mlijekom": "A classic comforting coffee, balancing bold espresso with smooth, steamed milk.",
    "Topla čokolada": "A rich, indulgent, and velvety cocoa treat, perfect for cozy moments.",
    "Čaj od kamilice": "A soothing herbal infusion of chamomile flowers, naturally caffeine-free and calming.",
    "Čaj od mente": "A refreshing and aromatic peppermint tea, invigorating for the senses."
};


submitButton.addEventListener("click", naPopis);
drinkInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        naPopis();
    }
});

function naPopis(){
    if (drinkInput.value === "") {
        alert("Please enter a drink name.");
    } else {  
        const drinkName = drinkInput.value;
        const newDrink = document.createElement("div");
        newDrink.classList.add("drinkStyle");
        
        const drinkTitle = document.createElement("p");
        drinkTitle.classList.add("drinkTitle");
        drinkTitle.textContent = drinkName;
        
        const drinkDescription = document.createElement("p");
        drinkDescription.classList.add("drinkDescription");
        drinkDescription.textContent = drinkDesc[drinkName] || "No available description.";
        
        newDrink.appendChild(drinkTitle);
        newDrink.appendChild(drinkDescription);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "x";
        deleteBtn.addEventListener("click", function() {
            newDrink.remove();
        });
        
        newDrink.appendChild(deleteBtn);
        drinkList.appendChild(newDrink);
        drinkInput.value = "";
    }
}

removeAll.addEventListener("click", FunctionRemoveAll);

function FunctionRemoveAll() {
    drinkList.innerHTML = "";
};