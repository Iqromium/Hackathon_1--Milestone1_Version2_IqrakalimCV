const toggleButtonElement = document.getElementById('toggle-skills') as HTMLButtonElement
const skillsElement = document.getElementById('skills') as HTMLElement


toggleButtonElement.addEventListener('click', () => {
    if (skillsElement.style.display === 'none') {
    skillsElement.style.display = 'block'
    } else {
        skillsElement.style.display = 'none'
    }
});