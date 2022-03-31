$file = document.getElementById("background");
$image = document.getElementById("image");
let fileAdded = false;
$file.addEventListener("change", () => {
  console.log("yee")
  fileAdded = true;
  $file.style.display = "none";
  $image.style.display = "block";
  $image.src = URL.createObjectURL($file.files[0])
  document.body.style.overflow = "hidden";
});
imageList = [];
index = 0;
const audio = new Audio("./wow-.mp3")
$image.addEventListener("click", (e) => {
  if (fileAdded) {
    index++;
    image = new Image(300, 200);
    image.src = "https://thumbs.gfycat.com/ImpressiveFixedGermanshepherd-max-1mb.gif";
    image.classList.add("dance");
    image.style.left = `${e.clientX - 150}px`;
    image.style.top = `${e.clientY - 100}px`;
    image.id = index;
    imageList.push(index);
    document.body.appendChild(image);
    audio.play();
    setTimeout(() => {
      document.getElementById(imageList[0]).remove();
      imageList = imageList.slice(1);
    }, 3000)
  }
});
