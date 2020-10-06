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
        return 0;
    } else if (q === 'Platform') {
        return 1;
    }else{
        console.log('Unable to find ',q);
        return 5;
    }
}


function getRing(r) {
    if (r === 'Adopt') {
        return 0;
    } else if (r === 'Assess') {
        return 1;
    } else if (r === 'Trial') {
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
        title: "Xebia Tech Radar",
        quadrants: [
            { name: "Infrastructure & Platform" },
            { name: "Data Management" },
            { name: "Languages" },
            { name: "Frameworks" }
        ],
        rings: [
            { name: "ADOPT", color: "#93c47d" },
            { name: "ASSESS", color: "#b7e1cd" },
            { name: "TRIAL", color: "#fce8b2" },
            { name: "HOLD", color: "#f4c7c3" }
        ],
        print_layout: true,
        entries: entries
    });
}

