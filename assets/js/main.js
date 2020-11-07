import { Rater} from './rating.js'

document.addEventListener('DOMContentLoaded',function(){
    const raters = document.querySelectorAll('[role=rater]')
    raters.forEach(element => {
        new Rater(element)
    });
});
