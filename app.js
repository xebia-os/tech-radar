function init() {
    Tabletop.init({
        key: 'https://docs.google.com/spreadsheets/d/1ELUpVIezX2hjvnh0cc71MjMOfWASTWwaC0kw-XpL2Zo/edit?usp=sharing',
        simpleSheet: true
    }
    ).then(function (data, tabletop) {
        const entries = data.map(d => {
            return {
                "label": d.name,
                "quadrant": getQuadrant(d.quadrant),
                "ring": getRing(d.ring),
                "link": d.link,
                "moved": 0
            }
        })
        console.log(entries);
        renderVisualization(entries);
    })
}
window.addEventListener('DOMContentLoaded', init)

function getQuadrant(q) {
    if (q === 'Languages') {
        return 2;
    } else if (q === 'Frameworks') {
        return 3;
    } else if (q === 'Data Management') {
        return 1;
    } else if (q === 'Platform') {
        return 0;
    }else{
        console.log('Unable to find ',q);
        return 5;
    }
}


function getRing(r) {
    if (r === 'Adopt') {
        return 0;
    } else if (r === 'Trial') {
        return 1;
    } else if (r === 'Assess') {
        return 2;
    } else {
        return 3;
    }
}

function renderVisualization(entries) {

    radar_visualization({
        svg_id: "radar",
        width: 1450,
        height: 1000,
        colors: {
            background: "#fff",
            grid: "#bbb",
            inactive: "#ddd"
        },
        title: "Xebia Tech Radar - 2020.10",
        quadrants: [
            { name: "Infrastructure & Platform" },
            { name: "Data Management" },
            { name: "Languages" },
            { name: "Frameworks" }
        ],
        rings: [
            { name: "ADOPT", color: "#799351" },
            { name: "TRIAL", color: "#ebdc87" },
            { name: "ASSESS", color: "#ffa36c" },
            { name: "HOLD", color: "#d54062" }
        ],
        print_layout: true,
        entries: entries
    });
}
