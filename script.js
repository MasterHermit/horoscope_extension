// Getting Zodiac Sign From User

const input = document.getElementById("zodiac-type");
const button = document.getElementById("submit-btn");
let zodiac = "virgo";

// api call
(async () => {
  const rawResponse = await fetch(
    `https://aztro.sameerkumar.website/?sign=${zodiac}&day=today`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ a: 1, b: "Textual content" }),
    }
  );
  const content = await rawResponse.json();
  console.log(content);
  document.getElementById("information").innerHTML = JSON.stringify(
    content.description
  );
  document.getElementById("current_date").innerHTML = JSON.stringify(
    content.current_date
  );
  document.getElementById("color").innerHTML = JSON.stringify(content.color);
  document.getElementById("lucky_number").innerHTML = JSON.stringify(
    content.lucky_number
  );
  document.getElementById("lucky_time").innerHTML = JSON.stringify(
    content.lucky_time
  );
  document.getElementById("mood").innerHTML = JSON.stringify(content.mood);
  document.getElementById("compatibility").innerHTML = JSON.stringify(
    content.compatibility
  );

  const url = new URL(
    `https://aztro.sameerkumar.website/?sign=${zodiac}&day=today`
  );
  const params = new URLSearchParams(url.search);
  const list = document.getElementById("parameters");
  const urlParams = {
    zodiac:
      "https://media.istockphoto.com/id/1068936728/photo/astrological-zodiac-signs-astrology-and-horoscopes-concept-3d-render-glowing-lines-neon.jpg?b=1&s=170667a&w=0&k=20&c=kgATcVFUCauCFzKoOLWXWcymUggKsT-UVF5bUOmnZ_w=",
    leo: "https://media.istockphoto.com/id/858075636/photo/leo-zodiac-sign-abstract-night-sky-background.jpg?s=612x612&w=0&k=20&c=gnsPLv1Q1Q157k2h4DDi1hyi9PwTt_VnpSYCew38FXc=",
    taurus:
      "https://media.istockphoto.com/id/858071852/photo/taurus-zodiac-sign-abstract-night-sky-background.jpg?s=612x612&w=0&k=20&c=333OpQdu4A_WxkPPTkkfyF2Ja_9mdy1YeFIIC9C8hNk=",
  };
  for (const [key, value] of params) {
    const item = document.createElement("li");
    item.innerHTML = `${key}: ${value}`;
    list.appendChild(item);
  }
  const imageurl = urlParams[1];
  const imageElement = document.createElement("img");
  imageElement.src = imageurl;

  const container = document.getElementById("imageContainer");
  container.appendChild(imageElement);
})();
