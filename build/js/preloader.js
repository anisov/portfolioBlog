document.addEventListener("DOMContentLoaded", function(event){
    let 
        scripts = document.scripts,
        scripts_count = scripts.length,
        scripts_total_count = 0,
        scripts_loaded_count = 0,
        file_loaded_count = 0,
        perc_display = document.getElementById('load_perc'),
        preloader = document.getElementById('page-preloader');
        
        for( let i = 0; i < scripts_count; i++){
                if (scripts.item(i).async){
                    scripts_total_count++
                }
            }
        
        for( let i = 0; i < scripts_count; i++){
            if (scripts.item(i).async === true)
                scripts.item(i).onload = function(){
                   file_loaded()
                   console.log(scripts.item(i))
            }
        }
        
        function file_loaded(){
            file_loaded_count++;
            perc_display.innerHTML = (((100 / scripts_total_count) * file_loaded_count) << 0)+ '%';
            console.log((((100 / scripts_total_count) * file_loaded_count) << 0)+ '%')
            if (file_loaded_count >= scripts_total_count){
                setTimeout(()=>{
                    if (!preloader.classList.contains('done')){
                        preloader.classList.add('done');
                    }
                }, 1000);
            }
        }
        })