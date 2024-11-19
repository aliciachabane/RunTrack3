function showhide(){

    const articleId = "dynamic-article";
    let article=
    document.getElementById(articleId);

    if(article){
        article.remove();
    } else {
        article = document.createElement("article");
        article.id = articleId;
        article.innerText = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    }
}

    


