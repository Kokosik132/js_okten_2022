// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let form = document.forms.nameAge
form.onsubmit = function (e) {
    e.preventDefault()
    localStorage.setItem(`name`, this.name.value)
    localStorage.setItem(`age`, this.age.value)
}

    // -створити форму з інпутами для model,type та volume автівки.
    // при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form1 = document.forms.modelForm
let newarr = []
form1.onsubmit = function (e) {
    e.preventDefault()
    newarr.push(this.model.value, this.type.value, this.volume.value)
    localStorage.setItem(`modelTypeVolume`, JSON.stringify(newarr))
}



