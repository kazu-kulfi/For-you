const openBtn = document.getElementById("openChestButton");
const chestImage = document.getElementById("chestImage");
const giftCard = document.getElementById("giftCard");

openBtn.addEventListener("click", function () {
    chestImage.classList.add("shake");
    chestImage.src = "assets/images/chest-open.png";
    chestImage.classList.add("glow");
      setTimeout(function () {
        giftCard.classList.add("visible");
    }, 800);
});

const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", function () {
    const codeText = document.querySelector(".code").textContent;

    navigator.clipboard.writeText(codeText).then(function () {
        copyBtn.textContent = "Copied!";

        setTimeout(function () {
            copyBtn.textContent = "Copy Code";
        }, 2000);
    });
});
