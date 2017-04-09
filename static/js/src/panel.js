import { Timeline } from './components/Timeline'
import { TimelineElement } from './components/TimelineElement'



let timeline = new Timeline('http://localhost/');

let ids = ['testymctestface',];

for (let elemId of ids) {
    let tlElem = new TimelineElement(elemId);
    timeline.elements.push(tlElem);
}

document.getElementById('timeline').innerHTML = timeline.render();
