document.addEventListener("DOMContentLoaded", function () {
    mapTechData();
});

function mapTechData() {
    let tech = [
        // Machine Learning (your div id is wrong, but mapping to mobile-tech)
        {
            "name": "TensorFlow",
            "icon": "/static/website/images/tech/tensorflow.svg",
            "type": "ml-tech"
        },
        {
            "name": "Scikit-Learn",
            "icon": "/static/website/images/tech/sklearn.svg",
            "type": "ml-tech"
        },

        // Web Development
        {
            "name": "HTML 5",
            "icon": "/static/website/images/tech/html.svg",
            "type": "web-tech"
        },
        {
            "name": "CSS 3",
            "icon": "/static/website/images/tech/css.svg",
            "type": "web-tech"
        },
        {
            "name": "Javascript",
            "icon": "/static/website/images/tech/js.svg",
            "type": "web-tech"
        },
        
        // Data Science (again wrong div id, but matching your given id server-tech)
        {
            "name": "Pandas",
            "icon": "/static/website/images/tech/pandas.svg",
            "type": "Data Science"
        },
        {
            "name": "NumPy",
            "icon": "/static/website/images/tech/numpy.svg",
            "type": "Data Science"
        },
        {
            "name": "Matplotlib",
            "icon": "/static/website/images/tech/matplotlib.svg",
            "type": "Data Science"
        },
        {
            "name": "Seaborn",
            "icon": "/static/website/images/tech/seaborn.svg",
            "type": "Data Science"
        },

        // Databases
        {
            "name": "MongoDB",
            "icon": "/static/website/images/tech/mongo.svg",
            "type": "database-tech"
        },
    
        {
            "name": "MySQL",
            "icon": "/static/website/images/tech/mysql.svg",
            "type": "database-tech"
        },

        // Version Controlling & Management
        {
            "name": "Git",
            "icon": "/static/website/images/tech/git.svg",
            "type": "vc-tech"
        },
        {
            "name": "GitHub",
            "icon": "/static/website/images/tech/github.svg",
            "type": "vc-tech"
        },
    

        // UI/UX Design
        {
            "name": "Adobe Photoshop",
            "icon": "/static/website/images/tech/photoshop.svg",
            "type": "design-tech"
        },
        {
            "name": "Adobe Express",
            "icon": "/static/website/images/tech/adobeexpress.svg",
            "type": "design-tech"
        },
        {
            "name": "Canva",
            "icon": "/static/website/images/tech/canva.svg",
            "type": "design-tech"
        },
        //server-tech
        {
            "name": "Flask Restful",
            "icon": "/static/website/images/tech/flask.svg",
            "type": "server-tech"
        },
        {
            "name": "Django",
            "icon": "/static/website/images/tech/django.svg",
            "type": "server-tech"
        },
    ];

    for (var i = 0; i < tech.length; i++) {
        // div
        var techDiv = document.createElement("div");
        techDiv.className = "tech";

        // icon
        var techIconImg = document.createElement("img");
        techIconImg.className = "tech-icon";
        if (tech[i]["name"] == "Node.js" || tech[i]["name"] == "Dart Frog") {
            techIconImg.style.height = "25px";
        }

        // tech name
        var techName = document.createElement("span");
        techName.className = "tech-label";

        techIconImg.src = tech[i]["icon"];
        techIconImg.alt = tech[i]["name"];

        techName.innerHTML = tech[i]["name"];

        var relatedDiv = document.getElementById(tech[i]["type"]);

        techDiv.appendChild(techIconImg);
        techDiv.appendChild(techName);
        relatedDiv.appendChild(techDiv);
    }
}