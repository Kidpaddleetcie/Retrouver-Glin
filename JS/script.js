/*
{
    p: "",
    t: "",
    l: "",
    d: ''
},

*/


const weblist = [{
    p: "https://i.skyrock.net/5252/79895252/pics/photo_79895252_small_9.png",
    t: "Le blog de KidpaddleetcieGlin",
    l: "https://kidpaddleetcieglin.skyrock.com/",
    d: 'Un bon vieux blog à l\'ancienne toujours à jour !'
}, {
    p: "https://static1.dmcdn.net/images/dailymotion-logo-ogtag.png.v2889585078f8ced02",
    t: "Le Dailymotion",
    l: "https://www.dailymotion.com/Kidpaddleetcie",
    d: 'YouTube, c\'est bien mais il faut quand même utiliser Dailymotion en cas de pépin !'
}, {
    p: "https://static.sketchfab.com/img/press/logos/logo.png",
    t: "Le Sketchfab",
    l: "https://sketchfab.com/KidpaddleetcieGlin/models",
    d: 'C\'est ici où je poste des modèles 3D gratuitement !'
}, {
    p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAWCAQAAAAs/tcnAAABMUlEQVR4Ac3UJfQUARTGUaxnrBHpPeDu7u7uTg/QO/SK9q1U3KHg2i7fH4exNeSdc9/ZNL/RHfRfjdHOuOajt246b7Fh/T38WO/9OnfM7s+hx3gUh5XNWYN7D4wnTlOe6OGsv/6eQlQFmNX9WScTs4jqwD3DOr/j04gJxHyiOsCiTgITibnEdGIJURc410lgJrGYmE+sIuoCz1301BstGwxueqQLiVXEMmI9cVp7c9WIYmAqkUysIjYQa4mtRAJtJwb//kgXEdOJTcR2Yiuxi2g/wIYfgTnEBmIFsYvYS+whDhCdBFo/ApuJvcRO4hBxhDhMHCU6Cbz5EThKHCe+7BNEcXceKFxB/e7yFs0h1hP1u/OHXHiL6nfnr2nhO6jfR3r50L5cR9O+oX5+/FX8vfkElmh0Xu+KRLEAAAAASUVORK5CYII=",
    t: "Le Soundcloud",
    l: "https://soundcloud.com/kidpaddleetcie-glin",
    d: 'Je m\y amuse à mettre en favoris les sons que j\'aime bien... parce que je n\'ai plus d\'espace mémoire de disponible sur le site ! '
}, {
    p: "",
    t: "Le DeviantArt",
    l: "http://kidpaddleetcie.deviantart.com/gallery/",
    d: 'Malgré le nouveau design, on peut encore retrouvé en bonne qualité les ressources que je propose...JE SUIS LE MAÎTRE DES PNGs !!!'
}, {
    p: "",
    t: "Le Pinterest",
    l: "https://fr.pinterest.com/Kidpaddleetcie/",
    d: 'Quand je fais une grosse vidéo qui a besoin de PNGs et d\'image sur un thème précis, j\'y créé un tableau regroupant ces fameuses images et vidéos ! '
}, {
    p: "",
    t: "Le Github",
    l: "https://github.com/Kidpaddleetcie",
    d: 'Quand je veux synthétiser une technique ou faire une présentation d\'une de mes compétences en coding, je répertorie mes travaux sur ce site web pour créer des sites web ! '
}, {
    p: "https://www.sudomemo.net/theatre_assets/images/sudomemo_logo_green.svg",
    t: "Le Sudomemo",
    l: "https://www.sudomemo.net/user/95C3EE50E113B7C8@DSi/",
    d: 'C\'est ici que je fais des petites animations avec le logiciel "Flipnote Studio"'
}];

let generate = " ";
for (let accu = 0; accu < weblist.length; accu++) {
    let wl = (weblist[accu]);
    document.getElementById("capt").innerHTML += '<div class="media p-2"> <a href="' + wl.l + '"> <img src="' + wl.p + '" class="mr-3 align-self-center" width="50vh" alt="' + wl.t + '"> <div class="media-body"> <h5 class="mt-0">' + wl.t + '</h5> </a> ' + wl.d + '</div> </div> </div>';

}