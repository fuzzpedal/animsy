import { Keyframe } from './components/Keyframe'
import { Timeline } from './components/Timeline'
import { TimelineElement } from './components/TimelineElement'


let timeline = new Timeline('http://localhost/');

let ids = ['testymctestface',];
let code = '';
for (let elemId of ids) {
    let tlElem = new TimelineElement(elemId);
    let kf = new Keyframe();
    kf.transform.rotate = 360;
    tlElem.keyframes.push(kf);
    code += tlElem.getCode();
    timeline.elements.push(tlElem);
}

alert(code);

document.getElementById('timeline').innerHTML = timeline.render();
