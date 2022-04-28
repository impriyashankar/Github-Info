const ACCESS_TKN = config.ACCESS_TKN;
const url = 'https://api.github.com/users/impriyashankar';

const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36';

let headers = new Headers();

  headers.append('Authorization', ACCESS_TKN);
  headers.append('User-Agent',ua);
  headers.append('Content-Type','application/json');

const func = () => {
  const repoP = document.querySelector('#repos');
  const imgAvatar = document.querySelector('.avatar');



  console.log("github app");
  fetch(url,{
  headers: headers//headers:{'Authorization':'...','User-Agent':'...'}
  })
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    repoP.innerText = `My repositories: ${data.public_repos}`;
    imgAvatar.setAttribute('src',`${data.avatar_url}`);
    imgAvatar.setAttribute('width','200px');
    //display the new name of the latest repo
    displayLatest();


  });
}

func();

const displayLatest =() => {
  let latestRepo ={};
  fetch('https://api.github.com/users/impriyashankar/repos?sort=created&direction=desc',{
    headers: headers
    })
    .then(response => response.json())
    .then(data => {
      console.log(data[0].name);
      renameRepo(data[0].name);


      //document.querySelector('#latestRepo').innerText = `My latest repository: ${data[0].name}`;



    });

}

const renameRepo =(repoOldName) => {
  //console.log(repoOldName);
  fetch(`https://api.github.com/repos/impriyashankar/${repoOldName}`,{
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({
      name: 'github-app'
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });


}
