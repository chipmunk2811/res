document.getElementById('click1').onclick = () => {
    const changeColor = document.getElementById('text1');
    changeColor.className = 'box-description text-color-change';
}

document.getElementById('click2').onclick = () => {
    const hiddenContent = document.getElementById('text2');
    hiddenContent.className = 'col-4 hide-div';
}

document.getElementById('click3').onclick = () => {
    setTimeout(() => {
        document.getElementById('changeText').innerHTML='done done 3';
    }, 1000);
}
