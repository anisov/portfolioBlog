import Vue from 'vue'    
new Vue ({
    el: '.slider',
    data:{
        sliders:[
            {
                title:'Сайт школы онлайн Образования',
                image: './img/work/work-5.png',
                description: 'Описание проекта1',
                tech: ['HTML' , 'CSS', 'JAVASCRIPT']
            },
            {
                title:'Сайт Бургеров',
                image: './img/work/work-1.png',
                description: 'Описание проекта2',
                tech: ['HTML' , 'CSS']
            },
            {
                title:'Лендинг 3',
                image: './img/work/work-2.png',
                description: 'Описание проекта3',
                tech: ['HTML']
            },  
            {
                title:'Лендинг 4',
                image: './img/work/work-3.png',
                description: 'Описание проекта4',
                tech: ['js', 'pug']
            }
        ],
        currentSlider: 0,
    },
    computed:{
        slider(){
            return this.sliders[this.currentSlider]
        },
        slidersLength(){
            return this.sliders.length
        },
        slideForPrev(){
            if (this.currentSlider > 0){
                var currentPrevSlider = this.currentSlider - 1
                return this.sliders[currentPrevSlider] 
            } else{
                return this.sliders[this.slidersLength - 1]
            }
        },
        slideForNext(){
            if (this.currentSlider < this.slidersLength - 1 ){
                var currentNextSlider = this.currentSlider + 1
                return this.sliders[currentNextSlider]
            } else{
                return this.sliders[0]
            }
        }
    },
    methods:{
        changeSlidePrev(){
            var changeSlider = this.currentSlider - 1
            console.log(changeSlider)
            if (changeSlider >=0){
                return this.currentSlider = changeSlider
            } else{
                return this.currentSlider = this.slidersLength-1
            }
        },
        changeSlideNext(){
            var changeSlider = this.currentSlider + 1
            if (changeSlider <= this.slidersLength - 1 ){
                return this.currentSlider = changeSlider
            }else{
                return this.currentSlider = 0
            }
        }
    }
})
