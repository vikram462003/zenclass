class Movie{
    constructor(title,stdio,rating="PG"){
        this.title=title;
        this.stdio=stdio;
        this.rating=rating;
    }
     getPG(...mov){
        var pgmovies=[];
        for(let i=0;i<mov.length;i++){
            if(mov[i].rating==="PG"){
                pgmovies.push(mov[i]);
            }
        }
        return pgmovies;
    }
}


mov1=new Movie("Casino Royale","Eon Productions","PG13");
mov2=new Movie("Vikram","Rajkamal Flims");
mov3=new Movie("Vik","Rajkamal Flims");
console.log(mov2.getPG(mov1,mov2,mov3));
