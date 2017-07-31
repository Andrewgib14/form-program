// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function () {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------

let container = document.querySelector("#fields")

function addInput(type1, label1, id1, icon1, options1) {
  let input1 = document.createElement("input");
  input1.setAttribute("type", type1);
  input1.setAttribute("placeholder", label1);
  input1.setAttribute("id", id1);
  input1.setAttribute("icon", icon1);
  input1.setAttribute("options", options1);

  container.appendChild(input1);
}
input1 = addInput("text", "First Name", "user-first-name", "fa-user", "[]");
input2 = addInput("text", "Last Name", "user-last-name", "fa-user", "[]");
input3 = addInput("email", "Email Address", "user-email", "fa-envelope", "[]");
input4 = addInput("text", "Current Website URL", "user-website", "fa-globe", "[]");
// input5 = addInput();
input6 = addInput("textarea", "Your Comment", "user-comment", "fa-comment", "[]");
input7 = addInput("tel", "Mobile Number", "user-mobile", "fa-mobile-phone", "[]");
input8 = addInput("tel", "Home Number", "user-phone", "fa-phone", "[]");
