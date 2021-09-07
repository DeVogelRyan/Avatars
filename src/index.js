import Swal from "sweetalert2";

window.onload = () => {

    function createIMG(name, parent, HideVar, className) {
        let img = document.createElement('img');
        img.classList.add(className);
        if(HideVar == true){
            img.classList.add("hide");
        }
        img.src = `https://avatars.dicebear.com/api/avataaars/${name}.svg`;
        document.getElementsByClassName(parent)[0].appendChild(img);
    }


    function showPicture(){
        let name = document.getElementsByClassName("nameInput")[0].value;
        let img = document.getElementsByClassName("avatar")[0];
        img.src = `https://avatars.dicebear.com/api/avataaars/${name}.svg`;
        if (img.classList.contains('hide'))
            img.classList.remove("hide");
    }

    function saveItem(event){
        event.preventDefault();
        let name = document.getElementsByClassName("nameInput")[0].value;
        if (name != '') {
            localStorage.setItem('avatar', JSON.stringify(name));
        }
        let localData = JSON.parse(localStorage.getItem("avatar"));
        if(localData != null)
           Swal.fire('Succesfully saved to localstorage!');
    }

    function showSection(event){
        let currentClicked = event.target.id;
        let create = document.getElementById("createAvatar");
        let view = document.getElementsByClassName("viewAvatar")[0];
        if(currentClicked == "create"){
            create.classList.remove("remove");
            view.classList.add("remove");
        }
        else {
            create.classList.add("remove");
            view.classList.remove("remove");
            showData();
        }
    }

    function addEvents(){
        document.getElementsByClassName("nameInput")[0].addEventListener('input', showPicture);
        document.getElementsByClassName("btn")[0].addEventListener('click', saveItem);
        let links = document.getElementsByClassName("nav-link");
        for (let items of links) {
            items.addEventListener('click', showSection);
        }
    }

    function changeView(data){
        let picture = document.getElementsByClassName("avatar1")[0];
        picture.src = `https://avatars.dicebear.com/api/avataaars/${data}.svg`;
    }

    function showData(){
        let data = JSON.parse(localStorage.getItem("avatar"));
        let titel = document.getElementsByClassName("titel")[0];
        if(data != null){
            titel.innerHTML = "username: " + data;
            changeView(data);
        }
        else {
            titel.innerHTML = "You don't have a avatar yet!";
        }
    }
    createIMG('random', 'picture', true, "avatar");
    createIMG('random', 'viewAvatar', false, "avatar1");
    addEvents();

}