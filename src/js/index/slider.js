import Vue from 'vue'
if (document.querySelector('.slider')) {
    new Vue({
        el: '.slider',
        data: {
            sliders:[],
            currentSlider: 0,
        },
        computed: {
            slider() {
                return this.sliders[this.currentSlider]
            },
            slidersLength() {
                return this.sliders.length
            },
            slideForPrev() {
                if (this.currentSlider > 0) {
                    var currentPrevSlider = this.currentSlider - 1
                    return this.sliders[currentPrevSlider]
                } else {
                    return this.sliders[this.slidersLength - 1]
                }
            },
            slideForPrevPrev() {
                if (this.currentSlider > 0) {
                    var currentPrevSlider = this.currentSlider - 2
                    return this.sliders[currentPrevSlider]
                } else {
                    return this.sliders[this.slidersLength - 2]
                }
            },
            slideForNext() {
                if (this.currentSlider < this.slidersLength - 1) {
                    var currentNextSlider = this.currentSlider + 1
                    return this.sliders[currentNextSlider]
                } else {
                    return this.sliders[0]
                }
            }
        },
        methods: {
            getSliders() {

            },
            changeSlidePrev() {
                var changeSlider = this.currentSlider - 1
                if (changeSlider >= 0) {
                    return this.currentSlider = changeSlider
                } else {
                    return this.currentSlider = this.slidersLength - 1
                }
            },
            changeSlideNext() {
                var changeSlider = this.currentSlider + 1
                if (changeSlider <= this.slidersLength - 1) {
                    return this.currentSlider = changeSlider
                } else {
                    return this.currentSlider = 0
                }
            }
        },
        created: function () {
            fetch("../api/work")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.sliders = Object.assign(data['articles'])
                })
        }
    })
}