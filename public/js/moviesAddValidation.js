window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let form = document.querySelector('form');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    document.getElementById('title').focus();

    form.addEventListener('submit',function(e){
        let errores=[];

        let title = document.querySelector('#title');
        let rating = document.querySelector('#rating');
        let awards = document.querySelector('#awards');
        let release_date = document.querySelector('#release_date');
        let duration = document.querySelector('#length');
        let genre_id = document.querySelector('#genre_id');


        if(title.value==""){
            errores.push('El campo titulo no puede estar vacio');
            title.classList.add('is-invalid');
        }else{
            title.classList.add('is-valid');
            title.classList.remove('is-invalid');
            form.rating.focus();
        };
        
        if(rating.value<=0 || rating.value>10.0){
            errores.push('El campo rating no puede ser menor a 0 ni mayor a 10');
            rating.classList.add('is-invalid');
        }else{
            rating.classList.add('is-valid');
            rating.classList.remove('is-invalid');
            form.awards.focus();
        };
        
        if(awards.value<=0 || awards.value>10.0){
            errores.push('El campo premios no puede ser menor a 0 ni mayor a 10');
            awards.classList.add('is-invalid');
        }else{
            awards.classList.add('is-valid');
            awards.classList.remove('is-invalid');
            form.release_date.focus();
        };

        if(release_date.value==''){
            errores.push('El campo fecha de creacion no puede estar vacio');
            release_date.classList.add('is-invalid');
        }else{
            release_date.classList.add('is-valid');
            release_date.classList.remove('is-invalid');
            form.length.focus();
        };

        if(duration.value<60 || duration.value>360){
            errores.push('El campo duracion no puede ser menor a 60 min ni mayor a 360 min');
            duration.classList.add('is-invalid');
        }else{
            duration.classList.add('is-valid');
            duration.classList.remove('is-invalid');
            genre_id.length.focus();
        };

        if(genre_id==""){
            errores.push('El campo genero no puede estar vacio');
            genre_id.classList.add('is-invalid');
        }else{
            genre_id.classList.add('is-valid');
            genre_id.classList.remove('is-invalid');
        };

        if(errores.length>0){
            e.preventDefault();
            let erroresUl=document.querySelector('ul.errores');
            erroresUl.classList.add('alert-warning');
            erroresUl.innerHTML='';
            for(let i=0;i<errores.length;i++){
                erroresUl.innerHTML += `<li> ${errores[i]}</li>`

            }
        }else{
            alert('La validacion fue exitosa');
            form.submit();
        }
    });

}