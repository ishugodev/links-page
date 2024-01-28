function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('#profile img')

    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Profile photo of Mayk Brito')
    } else {
        img.setAttribute('src', './assets/avatar-dark.png')
        img.setAttribute('alt', 'Profile photo of Mayk Brito with sunglass')
    }
}