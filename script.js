const getData = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 5) {
      setTimeout(() => {
        resolve("Data received");
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Error");
      }, 2000);
    }
  });
};

// let loading = true;
// console.log(getData(6));
// getData(6)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => (loading = false));

const asyncFunction = async () => {
  try {
    const data = await getData(6);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// asyncFunction();

const xmlHttpRequest = new XMLHttpRequest();

const url = `https://jsonplaceholder.typicode.com/posts/${2}`;
xmlHttpRequest.open("GET", url);
xmlHttpRequest.send();
// xmlHttpRequest.onload = () => {
//   if (xmlHttpRequest.status !== 200) {
//     const p = document.createElement("p");
//     p.textContent = xmlHttpRequest.status;
//     p.style.color = "red";
//     document.body.appendChild(p);
//   } else {
//     const data = JSON.parse(xmlHttpRequest.response);
//     for (let i = 0; i < data.slice(0, 5).length; i++) {
//       const div = document.createElement("div");
//       div.textContent = data[i].title;
//       document.body.appendChild(div);
//     }
//   }
// };

// fetch(url)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

const getPosts = async () => {
  const bodyData = {
    title: "foo",
    body: "bar",
  };
  try {
    const data = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    // const convertToJson = await data.json();
    // for (let i = 0; i < convertToJson.slice(0, 5).length; i++) {
    //   const div = document.createElement("div");
    //   div.textContent = convertToJson[i].title;
    //   document.body.appendChild(div);
    // }
  } catch (error) {
    console.log(error);
  }
};

getPosts();
