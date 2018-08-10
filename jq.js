 $(document).ready(function(){
                getAllData();
            })
        let getAllData =() =>{
            //  API call to get user details
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: 'https://www.omdbapi.com/?i=tt3896198&apikey=b56f5d72',
                success: (response) => {
                    
                    
             let data = response;
                $("#click").click(()=>{
                    //fetching the value
                    
            let  titleName = $("#title").val()
            let  year      = $("#year").val()
            let  id        = $("#ID").val()
                
                         //condition to check
                         if(titleName==data.Title || year==data.Year || id==data.Rated)
                            {
                                        
                                        // appending the value of all the feilds
                                        $(".poster").html('<img src=" '+data.Poster + '" class="poster-img" alt="Responsive image"> ')
                                        $("#titl").append(data.Title)
                                        $("#Year").append(data.Year)
                                        $("#Rated").append(data.Rated)
                                        $("#Released").append(data.Released)
                                        $("#Runtime").append(data.Runtime)
                                        $("#Genre").append(data.Genre)
                                        $("#Director").append(data.Director)
                                        $("#Writer").append(data.Writer)
                                        $("#Actors").append(data.Actors)
                                        $("#Plot").append(data.Plot)
                                        $("#Language").append(data.Language)
                                        $("#Country").append(data.Country)
                                        $("#Awards").append(data.Awards)
                                        $("#Ratings").append(data.Ratings[0].Source)
                                        $("#Ratings").append(data.Ratings[0].Value)
                                        $("#Ratings").append(data.Ratings[1].Source)
                                        $("#Ratings").append(data.Ratings[1].Value)
                                        $("#Metascore").append(data.Metascore)
                                        $("#imdbRating").append(data.imdbRating)
                                        $("#imdbVotes").append(data.imdbVotes)
                                        $("#imdbID").append(data.imdbID)
                                        $("#Type").append(data.Type)
                                        $("#DVD").append(data.DVD)
                                        $("#BoxOffice").append(data.BoxOffice)
                                        $("#Production").append(data.Production)
                                        $("#Website").append(data.Website)
                                        $(".back").show()
                                        $(".label").hide()
                            }
                                else{
                                    
                                    alert("You Entered Wrong Credentials")
                                }



                            })
                        }
                        })
                        }