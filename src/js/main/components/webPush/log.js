export default (message, type = 'log') => {
    const date = new Date();
    console.log('Message received. ', message);
    const element = document.createElement('div');
    element.innerHTML = `
        <strong style="display: block">${type}: ${date.toLocaleString('cs-CS')}</strong>
        <p>${message}</p>
    `;
    const wrapper = document.getElementById('message');
    wrapper.insertBefore(element, wrapper.firstChild);
};
