const getPageHeight = () => {
  let wrapper = document.querySelector('.switch-wrapper');
  let page = document.querySelectorAll('.switch-wrapper > div')[1] || document.querySelectorAll('.switch-wrapper > div')[0];
  wrapper.style.height = page.offsetHeight+'px';
}

export default getPageHeight;
