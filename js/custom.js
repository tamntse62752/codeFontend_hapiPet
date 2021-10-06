var isHidden = true;

function toggleHideItem(id) {
    if (isHidden) {
        showItem(id);
    } else {
        hideItem(id);
    }
}

function showItem(id) {
    var detailSection = document.getElementById(id);
    detailSection.removeAttribute('style');
    isHidden = false;
}

function hideItem(id) {
    var detailSection = document.getElementById(id);
    detailSection.style.display = 'none';
    isHidden = true;
}