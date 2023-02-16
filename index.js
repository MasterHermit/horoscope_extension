const input = document.getElementById("zodiac-type");
const button = document.getElementById("change-btn");
let zodiac;

if (localStorage.getItem("zodiac") !== null) {
  zodiac = localStorage.getItem("zodiac");
  fetchData();
}

const select = document.querySelector("#zodiacSigns");
select.addEventListener("change", (event) => {
  zodiac = event.target.value;
  localStorage.setItem("zodiac", zodiac);
  fetchData();
});

// api calling and displaying
async function fetchData() {
  const response = await fetch(
    `https://aztro.sameerkumar.website/?sign=${zodiac}&day=today`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ a: 1, b: "Textual content" }),
    }
  );
  const content = await response.json();
  console.log(content);
  document.getElementById("parameters").innerHTML = zodiac;
  document.getElementById("information").innerHTML = JSON.stringify(
    content.description
  );

  // document.getElementById("color").innerHTML = JSON.stringify(content.color);
  // document.getElementById("lucky_number").innerHTML = JSON.stringify(
  //   content.lucky_number
  // );
  // document.getElementById("lucky_time").innerHTML = JSON.stringify(
  //   content.lucky_time
  // );
  // document.getElementById("mood").innerHTML = JSON.stringify(content.mood);
  // document.getElementById("compatibility").innerHTML = JSON.stringify(
  //   content.compatibility
  // );
}
