const inputFileAdd = document.querySelector("#picture__inputAdd");
const pictureImageAdd = document.querySelector(".picture__imageAdd");
const pictureImageAddTxt = "Escolha uma imagem";
pictureImageAdd.innerHTML = pictureImageAddTxt;

inputFileAdd.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImageAdd.innerHTML = "";
      pictureImageAdd.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImageAdd.innerHTML = pictureImageAddTxt;
  }
});
