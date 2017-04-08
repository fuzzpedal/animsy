class TimelineItem {
    constructor(id) {
        this.id = id;
    }

    render() {
        return ''
    }

    toString() {
        return 'TimelineItem: ' + this.id;
    }
}

let ids = ['test', 'thing'];
for (let id of ids) {
    let tlItem = new TimelineItem(id);
    alert(tlItem);
//    alert(id);
}

document.getElementById('timeline').innerHTML = '--------'