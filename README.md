# simple-rating-component 


just simple example 
 interactive rating component using core javascript
used es6 syntax



## main js


```
import { Rater} from './rating.js'

document.addEventListener('DOMContentLoaded',function(){
    const raters = document.querySelectorAll('[role=rater]')
    raters.forEach(element => {
        new Rater(element)
    });
});

```


## rating.js
```
export function Rater(ratingelement){
    const stars = ratingelement.querySelectorAll('.star');


    const ratingHover= ev=>{
        const currentHover = ev.currentTarget.getAttribute('data-value')
        highlightRating(currentHover)
    }
    const clickedStar= ev=>{
        const currentClick = ev.currentTarget.getAttribute('data-value')
        ratingelement.setAttribute('data-rating',currentClick)
    }
    const resetRating = ev => {
        const currentRating= ratingelement.getAttribute('data-rating')
        highlightRating(currentRating)
    }
    const highlightRating = (rating) =>{
        stars.forEach(star => {
            rating >= star.getAttribute('data-value')?star.classList.add('text-orange-600'): star.classList.remove('text-orange-600')
        });
    }
    resetRating();
    stars.forEach(star =>{
        star.addEventListener('mouseover', ratingHover)
        star.addEventListener('click', clickedStar)
    }) 
    ratingelement.addEventListener('mouseout', resetRating)

}

```







