const inputFileEdit = document.querySelector("#picture__inputEdit");
const pictureImageEdit = document.querySelector(".picture__imageEdit");
const pictureImageEditTxt = "Escolha uma imagem";
pictureImageEdit.innerHTML = pictureImageEditTxt;

inputFileEdit.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImageEdit.innerHTML = "";
      pictureImageEdit.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImageEdit.innerHTML = pictureImageEditTxt;
  }
});
