webpackJsonp([5],{52:function(e,n,t){"use strict";document.addEventListener("DOMContentLoaded",function(e){function n(){i++,c.innerHTML=(100/(d+s)*i<<0)+"%",i>=d+s&&setTimeout(function(){r.classList.contains("preloader--done")||(r.classList.add("preloader--done"),setTimeout(function(){r.classList.add("preloader--hidden")},1200))},700)}for(var t=document.scripts,o=t.length,d=0,i=0,c=document.getElementById("perc"),r=document.getElementById("page-preloader"),a=document.querySelectorAll("link"),s=a.length,l=0;l<s;l++)a.item(l).onload=function(){n()};for(var u=0;u<o;u++)t.item(u).async&&d++;for(var m=0;m<o;m++)t.item(m).async&&(t.item(m).onload=function(){n()},t.item(m).onerror=function(){n()})})}},[52]);