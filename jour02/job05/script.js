window.addEventListener('scroll', () => {
    const footer = document.getElementById('footer')
    const maxScroll = document.body.scrollHeight - window.innerHeight
    const scrollPercentage = (window.scrollY / maxScroll) * 100

    const greenValue = Math.min(250, Math.floor((scrollPercentage / 100) * 255))
    footer.style.backgroundColor = `rgb(0,${greenValue},0) `
})