let content = document.getElementById('ajax-content');
function fetchContent(el) {
  let view = el.getAttribute('a-view');
  let folder = el.getAttribute('a-folder');
  fetch(`../ajax/${folder}/${view}.html`) // Ele foi até o arquivo em questão
  .then(response => {
    let html = response.text(); // transformou esse arquivo em texto
    return html;
  })
  .then(html => {
    content.innerHTML = html // transformou o texto em html
  })
}