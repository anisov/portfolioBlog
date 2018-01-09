document.addEventListener("DOMContentLoaded", function(event){
    let 
        scripts = document.scripts,
        scripts_count = scripts.length,
        scripts_total_count = 0,
        file_loaded_count = 0,
        percent = document.getElementById('perc'),
        preloader = document.getElementById('page-preloader');

    let 
        links = document.querySelectorAll('link'),
        links_count = links.length;

        for( let i = 0; i < links_count; i++){
            links.item(i).onload = function(){
                console.log( links.item(i))
                file_loaded()
            }
        }
        for( let i = 0; i < scripts_count; i++){
                if (scripts.item(i).async){
                    scripts_total_count++
                }
        }

        for( let i = 0; i < scripts_count; i++){
            if (scripts.item(i).async){
                scripts.item(i).onload = function(){
                    console.log(scripts.item(i))
                   file_loaded()
                }
                scripts.item(i).onerror = function(){
                    console.log(scripts.item(i))
                   file_loaded()
                }
            }
        }
        function file_loaded(){
            file_loaded_count++;
            percent.innerHTML = (((100 / (scripts_total_count + links_count))  * file_loaded_count) << 0)+ '%';
            console.log((((100 / (scripts_total_count + links_count))  * file_loaded_count) << 0)+ '%')
            if (file_loaded_count >= (scripts_total_count + links_count)) {
                setTimeout(()=>{
                    if (!preloader.classList.contains('preloader--done')){
                        preloader.classList.add('preloader--done');
                        setTimeout(()=>{
                            preloader.classList.add('preloader--hidden');
                        },1200)
                    }
                },700)    
            }
        }
})