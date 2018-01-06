<template lang='pug'>
ul.skills-list
    each item in ['Frontend', 'Backend', 'Workflow']
        li.skills-list__item
            .skills-row
                .skills-row__title #{item}
                ul.skills-row__list
                    if item =='Frontend'
                        each skill in [['HTML5', 'circle-100'], ['CSS3', 'circle-90'], ['JavaScript & jQuey', 'circle-40']]
                            li.skills-row__item
                                .skill
                                    <svg class="skill__circle" viewBox="0 0 110 110">
                                        <circle r="45" cx="50%" cy="50%" fill="none" class="skill__first" />
                                        <circle r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" class='skill__second #{skill[1]}'/>
                                    </svg>    
                                    span.skill__title #{skill[0]}       
                    if item =='Backend'
                        each skill in [['Python & Django', 'circle-80'], ['mySQL', 'circle-70'], ['Node.js', 'circle-30'],['Mongo.db', 'circle-30']]
                            li.skills-row__item
                                .skill
                                    <svg class="skill__circle" viewBox="0 0 110 110">
                                        <circle r="45" cx="50%" cy="50%" fill="none" class="skill__first" />
                                        <circle r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" class='skill__second #{skill[1]}'/>
                                    </svg>    
                                    span.skill__title #{skill[0]}       
                    if item =='Workflow'
                        each skill in [['Git', 'circle-80'], ['Gulp', 'circle-80'], ['Webpack', 'circle-45']]
                            li.skills-row__item
                                .skill
                                    <svg class="skill__circle" viewBox="0 0 110 110">
                                        <circle r="45" cx="50%" cy="50%" fill="none" class="skill__first" />
                                        <circle r="45" cx="50%" cy="50%" transform="rotate(-90 55 55)" class='skill__second #{skill[1]}'/>
                                    </svg>    
                                    span.skill__title #{skill[0]}                              
                                    //<text  class="skill__title" width='100px' dominant-baseline= 'middle' text-anchor = 'middle'; x="50%" y="50%">#{skill}</text> 
                                    div            
  
</template>

<script>
export default {

}
</script>

<style src="./skills-list.scss" lang="scss"></style>