import { arrayLiTopItems, arraySectionItems, pack, array1, array2, array3, arrayBot } from "./array.js"
class ItemHtml {
    constructor(_type, _atr, _atrLink, _parent, _writeHtml) {
        this._type = document.createElement(_type);
        if (_atr.length != 0) {
            this._atr = this._type.setAttribute(_atr, _atrLink);
        }
        this._parent = _parent.appendChild(this._type);
        if (_writeHtml.length != 0) {
            this._writeHtml = this._type.innerHTML = _writeHtml
        }
    }
}
// variables couleur
let couleurHeader = "#1A1A1D"
let couleurSectionBleu = "#334D5C"
let couleurSectionBeige = "#EAE3D6"
let couleurFooter = "#393A3B"
// elements de base
let header = new ItemHtml("header", "", "", document.body, "")
let nav = new ItemHtml("nav", "", "", header._type, "")
let main = new ItemHtml("main", "", "", document.body, "")
let container = new ItemHtml("div", "class", "container", main._type, "")
for (let index = 0; index < 7; index++) {
    let section = new ItemHtml("section", "class", "st" + index, container._type, "")
    arraySectionItems.push(section)
}
let footer = new ItemHtml("footer", "class", "bottomFooter", document.body, "")
footer._type.style.backgroundColor = couleurFooter
// ajout div & style dans le header
nav._type.classList.add("navTop")
nav._type.style.backgroundColor = couleurHeader
let divLogo = new ItemHtml("div", "", "", nav._type, "")
new ItemHtml("img", "src", "./public/img/logo-horizontal-fond-noir-couleur.png", divLogo._type, "")
let divMenuNav = new ItemHtml("div", "class", "menuGlobal", nav._type, "")
for (let index = 0; index < 6; index++) {
    let divSousMenuNav = new ItemHtml("div", "class", "menuNav", divMenuNav._type, "")
    new ItemHtml("img", "src", arrayLiTopItems[index][0], divSousMenuNav._type, "")
    new ItemHtml("span", "style", "color:white; font-size:0.7em; margin:10px 0px", divSousMenuNav._type, arrayLiTopItems[index][1])
}
// SECTION 0
arraySectionItems[0]._type.style.backgroundColor = couleurSectionBleu
let st1Img = new ItemHtml("img", "src", "./public/img/packages.png", arraySectionItems[0]._type, "")
let st1Title = new ItemHtml("h1", "style", "font-size:2.6em; color:white", arraySectionItems[0]._type, "À chaque étape son pack" + "<br>" + "naître, grandir et prospérer.")
// SECTION 1,3,5
let a = 0
for (let index = 1, a = 0; index < 5, a < 3; index += 2, a++) {
    let stDivTop = new ItemHtml("div", "class", "stVertical", arraySectionItems[index]._type, "")
    let stBtn = new ItemHtml("button", "class", "btnBlue", stDivTop._type, pack[a][0])
    stBtn._type.style.backgroundColor = couleurSectionBleu
    let divStBot = new ItemHtml("div", "class", "imgTxt", stDivTop._type, "")
    new ItemHtml("img", "src", pack[a][1], divStBot._type, "")
    new ItemHtml("span", "class", "txtSt", divStBot._type, pack[a][2])
}
// SECTION 2
arraySectionItems[2]._type.style.backgroundColor = couleurSectionBeige
for (let index = 0; index < 4; index++) {
    let stDivTop = new ItemHtml("div", "class", "verticalItem", arraySectionItems[2]._type, "")
    let divImg = new ItemHtml("img", "src", array1[index][0], stDivTop._type, "")
    divImg._type.style.width = "100px"
    new ItemHtml("span", "", "", stDivTop._type, array1[index][1])
}
arraySectionItems[4]._type.style.backgroundColor = couleurSectionBeige
for (let index = 0; index < 5; index++) {
    let stDivTop = new ItemHtml("div", "class", "verticalItem", arraySectionItems[4]._type, "")
    let divImg = new ItemHtml("img", "src", array2[index][0], stDivTop._type, "")
    divImg._type.style.width = "100px"
    new ItemHtml("span", "", "", stDivTop._type, array2[index][1])
}
arraySectionItems[6]._type.style.backgroundColor = couleurSectionBeige
for (let index = 0; index < 4; index++) {
    let stDivTop = new ItemHtml("div", "class", "verticalItem", arraySectionItems[6]._type, "")
    let divImg = new ItemHtml("img", "src", array3[index][0], stDivTop._type, "")
    divImg._type.style.width = "100px"
    new ItemHtml("span", "", "", stDivTop._type, array3[index][1])
}
for (let index = 0; index < 3; index++) {
    let footerTotal = new ItemHtml("div", "class", "foot", footer._type, "")
    let divFooterTxt = new ItemHtml("span", "class", "hrIcon", footerTotal._type, arrayBot[index][0])
    let divTotalIcon = new ItemHtml("div", "", "",footerTotal._type, "")
    let divFooterImg1 = new ItemHtml("img", "src", arrayBot[index][1], divTotalIcon._type,"")
    let divfooterImg2 = new ItemHtml("img", "src", arrayBot[index][2], divTotalIcon._type, "")
    let divfooterImg3 = new ItemHtml("img", "src", arrayBot[index][3], divTotalIcon._type, "")
}
