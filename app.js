// let users = [
//     {
//         imageurl: "./Assets/WhatsApp Image 2024-06-04 at 02.03.04_7fecb00b.jpg",
//         fullName: "Mehmood",
//         designation: "Web Developer",
//         Reviews: "great persoknjsjjj jndfub jasbubgja;jndo"
//     },
//     {
//         imageurl: "./Assets/WhatsApp Image 2024-06-04 at 02.03.04_7fecb00b.jpg",
//         fullName: "Abid",
//         designation: "Senior Web Developer",
//         Reviews: "great persoknjsjjj jndfub jasbubgja;jndo"
//     },
//     {
//         imageurl: "./Assets/WhatsApp Image 2024-06-04 at 02.03.04_7fecb00b.jpg",
//         fullName: "Naveed",
//         designation: "BackEnd Developer",
//         Reviews: "great persoknjsjjj jndfub jasbubgja;jndo"
//     },
//     {
//         imageurl: "./Assets/WhatsApp Image 2024-06-04 at 02.03.04_7fecb00b.jpg",
//         fullName: "Abdullah",
//         designation: "Software Engineer",
//         Reviews: "great persoknjsjjj jndfub jasbubgja;jndo"
//     },
//     {
//         imageurl: "./Assets/WhatsApp Image 2024-06-04 at 02.03.04_7fecb00b.jpg",
//         fullName: "Abdul Rehman",
//         designation: "Software Engineer",
//         Reviews: "great persoknjsjjj jndfub jasbubgja;jndo"
//     },
// ]

const users = [
  {
    Image: "https://thumbs.dreamstime.com/b/african-office-worker-portrait-handsome-male-talking-phone-44341693.jpg",
    fullName: "John Doe",
    designation: "Software Engineer",
    Reviews: "Great experience working with this team. Highly recommend!",
  },
  {
    Image: "https://www.shutterstock.com/image-photo/black-man-business-arms-crossed-260nw-2312711157.jpg",
    fullName: "Jane Smith",
    designation: "Project Manager",
    Reviews:
      "Exceptional service and attention to detail. A pleasure to work with.",
  },
  {
    Image: "https://thumbs.dreamstime.com/b/portrait-office-worker-laptop-17336676.jpg",
    fullName: "Emily Johnson",
    designation: "UX Designer",
    Reviews: "Creative and professional. Delivered beyond expectations!",
  },
  {
    Image: "https://thumbs.dreamstime.com/b/portrait-young-smiling-indian-male-student-office-worker-sitting-desk-working-studying-laptop-looks-321718436.jpg",
    fullName: "Michael Brown",
    designation: "Frontend Developer",
    Reviews: "Fantastic skills and dedication to quality. Highly satisfied.",
  },
  {
    Image: "https://thumbs.dreamstime.com/b/office-worker-guy-using-computer-phone-20750907.jpg",
    fullName: "Sarah Williams",
    designation: "Product Owner",
    Reviews: "Outstanding results. Great communication and expertise!",
  },
];

let count = 0;
let prsbtn = document.querySelector("#previous");
let nextbtn = document.querySelector("#next");
let name1 = document.querySelector("h3");
let designation = document.querySelector("h4");
let review = document.querySelector("p");
let images = document.getElementById("myImage")

function updateDisplay(){
  images.src = users[count].Image;
  name1.innerText = users[count].fullName;
  designation.innerText = users[count].designation;
  review.innerText = users[count].Reviews;
}

updateDisplay()

function next() {
  count = (count + 1) % users.length;
  console.log(count);
  
  updateDisplay()
}

function previous() {
  count = (count - 1 + users.length) % users.length;
  updateDisplay();
  console.log(count);
}
