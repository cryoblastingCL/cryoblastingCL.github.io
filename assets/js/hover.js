document.addEventListener('DOMContentLoaded', function () {
    const usoPrincipal = document.querySelector('#advantages .uso-principal');

    let isImageChanged = false;

    usoPrincipal.addEventListener('click', function () {
        if (isImageChanged) {
            usoPrincipal.style.backgroundImage = "url('./assets/img/advantages/before.jpg')";
            isImageChanged = false;
        } else {
            usoPrincipal.style.backgroundImage = "url('./assets/img/advantages/after.jpg')";
            isImageChanged = true;
        }
    });
});