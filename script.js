var resources = [
    {
        name: "BSc in Computer Science",
        category: "Undergraduate",
        description: "Undergraduate program focused on computer science fundamentals."
    },
    {
        name: "BA in Business Administration",
        category: "Undergraduate",
        description: "Business administration undergraduate program."
    },
    {
        name: "MSc in Computer Science",
        category: "Postgraduate",
        description: "Advanced computer science postgraduate program."
    },
    {
        name: "MBA",
        category: "Postgraduate",
        description: "Master of Business Administration program."
    },
    {
        name: "ACT Academy",
        category: "Online",
        description: "Online learning platform with flexible courses."
    },                                   
    {
        name: "ACT DEV Community",
        category: "Club",
        description: "Student community focused on software development."
    }
];

function displayResources(filterCategory) {
    var resourceSection = document.getElementById("resourceList");

    if (!resourceSection) {
        return;
    }

    resourceSection.innerHTML = "";

    for (var i = 0; i < resources.length; i++) {
        if (filterCategory === "All" || resources[i].category === filterCategory) {
            var article = document.createElement("article");

            var title = document.createElement("h3");
            title.textContent = resources[i].name;

            var category = document.createElement("p");
            category.textContent = "Category: " + resources[i].category;

            var description = document.createElement("p");
            description.textContent = resources[i].description;

            article.appendChild(title);
            article.appendChild(category);
            article.appendChild(description);

            resourceSection.appendChild(article);
        }
    }
}

var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        displayResources(this.textContent);
    });
}

var form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("resourceName").value;
        var category = document.getElementById("category").value;
        var description = document.getElementById("description").value;

        if (name === "" || category === "" || description === "") {
            alert("Please fill in all fields.");
            return;
        }

        var newResource = {
            name: name,
            category: category,
            description: description
        };

        localStorage.setItem("suggestedResource", JSON.stringify(newResource));

        alert("Resource submitted successfully!");

        form.reset();
    });
}
