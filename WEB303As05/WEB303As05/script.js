/*
    Assignment 05
	Luis Rodriguez
	0812903
	10/26/2022
*/


 $(document).ready(function () {
    
    class ContentItem {
        constructor(id, title, description, categoryGenre) {    // making a constructor with id number, title, description, and cat genre
            this.id = id;        // bringing constructor in using this
            this.title = title;
            this.description = description;
            this.categoryGenre = categoryGenre;
        };

        updateContentItem(id,title, description, categoryGenre) {      // updating the id , title , description , and category genre of the new list.
            if(id==this.id){
            if((title || description || categoryGenre) == !null) {
                ContentItem.title = this.title;
                ContentItem.description = this.description;
                ContentItem.categoryGenre = this.categoryGenre;
            }else{
                return;
            }
        }
        }; 
// applying h2 tag p tag and div tag on the lists.
        toString() {
            return `<div class='content-item-wrapper' id='content-item-0'">    
            <h2>${this.title}</h2>
            <p>${this.description}</p>
            <div>${this.categoryGenre}</div>
            </div>`
        } 

    }
// filling in the data of the lists
    let item1 = new ContentItem("1", "Alomomola", "This pokemon tanks attacks with its high hp and defense", "Water");
    let item2 = new ContentItem("2", "Chansey", "With its high HP this thing can tank a lot of monsters", "Normal");
    let item3 = new ContentItem("3", "Gliscor", "A great defender and defogger for any team", "Ground");
    let item4 = new ContentItem("4", "Zapdos", "This guy will pp stall your opponents pokemons and at the same time tank Spatks", "Electric");
    let item5 = new ContentItem("5", "Amoongus", "Great super tank vs Keldeo", "Grass");
//population div #content-item-list
    $("div#content-item-list").append(item1.toString());
    $("div#content-item-list").append(item2.toString());
    $("div#content-item-list").append(item3.toString());
    $("div#content-item-list").append(item4.toString());
    $("div#content-item-list").append(item5.toString());
	
	//updating the lists css border, width, padding, margin, margin-bottom, and margin top

    $("div.content-item-wrapper").css(
                {
                    "border":"solid black 3px",
                    "width":"60%",
                    "padding":"25px",
                    "margin":"auto",
                    "margin-bottom":"10px",
                    "margin-top":"10px",  
                });

});


