window.addEventListener('load', function(){

    primaryRequest();

    function mostraImg(dados) {
        let botao = document.querySelector("#botao")
        botao.addEventListener("click", ()=>{
            let img = document.querySelector("img");
            img.src = dados.data.memes[Math.floor(Math.random() * 100)].url;
            mylist();
        });
    }

    function primaryRequest(){
        const valores = fetch('https://api.imgflip.com/get_memes').then(res=>{
            res.json().then(dados=>{
                console.log("Dados 1", dados.data);
                mostraImg(dados)
            });
        }).catch(erro=>{
            console.log(erro+" erro na requisição")
        });
    }

    function mylist(){
        const valores2=this.fetch('https://api.quotable.io/random').then(res=>{
            res.json().then(dados2=>{
                let legenda = document.querySelector("#legenda");
                legenda.innerHTML = `${dados2.content}</br>${dados2.author}`
            })
        })
    }
});