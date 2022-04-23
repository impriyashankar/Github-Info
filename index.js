const ACCESS_TKN = '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';
const url = 'https://api.github.com/users/impriyashankar';

const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36';

const func = () => {
  const repoP = document.querySelector('#repos');
  const imgAvatar = document.querySelector('.avatar');

  let headers = new Headers();

  headers.append('Authorization', ACCESS_TKN);
  headers.append('User-Agent',ua);

  console.log("github app");
  fetch(url,{
  headers: headers//headers:{'Authorization':'...','User-Agent':'...'}
  })
  .then(response => response.json())
  .then(data => {
    repoP.innerText = `My repositories: ${data.public_repos}`;
    imgAvatar.setAttribute('src',`${data.avatar_url}`);
    imgAvatar.setAttribute('width','200px');

  });
}

func();
