const client_id="Iv1.0d7b3cd238e9a194";
const client_secret=" d695146e57b9461be0a54dae7a57bb96f6081ed4";
const search = document.getElementById('submitEvent');
const inputUser=document.getElementById('input');
const namee=document.querySelector('.name');
const avatarr=document.querySelector('.avatar');
const urll=document.querySelector('.url');
const repos=document.querySelector('.repo');
const bioo=document.querySelector('.bio');

const fetchValue = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
    const data = await api_call.json();
    return{data}
};

const show = () => {
    fetchValue(inputUser.value).then((res) => {
        console.log(res);
         namee.innerHTML=`Name:<span class="name"> ${res.data.name}</span>`;
         avatarr.innerHTML=`Avatar: <span><img src="${res.data.avatar_url}"</span>`;
         urll.innerHTML=`URL : <span class="url"><a href="${res.data.html_url}">${res.data.html_url}</a></span>`;
         repos.innerHTML=`Public Repositories:<span class="repo">  ${res.data.public_repos}</span>`;
         bioo.innerHTML=`Bio:<span class="bio"> ${res.data.bio}</span>`;     
    })
};

search.addEventListener('click', (e) => {
    e.preventDefault();
    show();
})


