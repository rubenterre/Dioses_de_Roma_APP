<script>
    import {
        link
    } from 'svelte-spa-router'
    import {
        fade
    } from 'svelte/transition';

    import Header from '../Componentes/Header.svelte'

    let current = 'TODOS';

    //Filtro

    let visibleFiltro = true;

    let selectedCheckbox = [];


    function todos() {
        selectedCheckbox = tarjetas;
        current = 'TODOS';
    };

    function mitos() {
        let mitos = tarjetas.filter((tarjeta) => {
            if (tarjeta.etiqueta == 'mitos') {
                return tarjeta;
            }
        })
        console.log(mitos)

        selectedCheckbox = mitos;

        console.log(selectedCheckbox)
        current = 'MITOS'
    }

    function heroes() {
        let heroes = tarjetas.filter((tarjeta) => {
            if (tarjeta.etiqueta == 'heroes') {
                return tarjeta;
            }
        })
        console.log(heroes)

        selectedCheckbox = heroes;
        current = 'HEROES';
    }

    function seres() {
        let seres = tarjetas.filter((tarjeta) => {
            if (tarjeta.etiqueta == 'seres') {
                return tarjeta;
            }
        })
        console.log(seres)

        selectedCheckbox = seres;
        current = 'SERES';

    }

    let tarjetas = [{
            nombre: 'Aquiles',
            imagen: 'Tarjeta_Heroes_Aquiles',
            etiqueta: 'heroes',
            descripcion: 'Aquiles fue hijo de Peleo y de la nereida Tetis. Recién nacido, su madre lo sumergió en las aguas del río Estigia, que hacía invulnerable la parte bañada. Luchó en la guerra de Troya.'
        },
        {
            nombre: 'Hércules',
            imagen: 'Tarjeta_Heroes_Hercules',
            etiqueta: 'heroes',
            descripcion: 'Es el más célebre de los héroes grecolatinos y la fuerza es su atributo característico. Recorrió en solitario numerosos lugares, para liberar el mundo de monstruos, delitos y asesinatos.'
        },
        {
            nombre: 'Jasón',
            imagen: 'Tarjeta_Heroes_Jason',
            etiqueta: 'heroes',
            descripcion: 'Jasón fue hijo de Esón, rey de Yolco, al cual destronó su hermanastro Pelias. En su adolescencia reclamó el poder a su tío. Este le dijo que se lo entregaría si le traía el Vellocino de oro.'
        },
        {
            nombre: 'Perseo',
            imagen: 'Tarjeta_Heroes_Perseo',
            etiqueta: 'heroes',
            descripcion: 'Perseo hijo de Zeus y de la mortal Dánae, es un héroe mitológico que la tradición le atribuye la decapitación de la górgona Medusa.'
        },
        {
            nombre: 'Ulises',
            imagen: 'Tarjeta_Heroes_Ulises',
            etiqueta: 'heroes',
            descripcion: 'Ulises era hijo de Laertes, rey de la isla de Ítaca, y de Anticlea, nieta de Hermes. Tras declararse cuando la guerra de Troya, partió para esta al frente de doce naves, en la que realizó numerosas proezas guerreras.'
        },
        {
            nombre: 'Mito de Apolo y Dafne',
            imagen: 'Tarjeta_Mitos_Dafne',
            etiqueta: 'mitos',
            descripcion: 'Apolo hostigó a la ninfa Dafne hasta tal punto que esta pidió a su padre que la convirtiera en el árbol del laurel para que cesara en su acoso.'
        },
        {
            nombre: 'Mito del rapto de Europa',
            imagen: 'Tarjeta_Mitos_Europa',
            etiqueta: 'mitos',
            descripcion: 'Prendado de Europa, Júpiter se transformó en un toro blanco y se mezcló con las reses que tenía el padre de la muchacha y la raptó.'
        },
        {
            nombre: 'Mito de la Primavera',
            imagen: 'Tarjeta_Mitos_Primavera',
            etiqueta: 'mitos',
            descripcion: 'Hades, dios de los infiernos y el mundo subterráneo se enamoró de Perséfone y quiso llevársela consigo, pero Deméter, su madre, no estuvo de acuerdo. Hades raptó a la muchacha.'
        },
        {
            nombre: 'Mito de Prometeo',
            imagen: 'Tarjeta_Mitos_Prometeo',
            etiqueta: 'mitos',
            descripcion: 'Prometeo era un Titán amigo de los mortales, venerado por haber robado el fuego a los dioses y darlo a la humanidad para su uso y posteriormente castigado por Júpiter por este motivo.'
        },
        {
            nombre: 'Cancerbero',
            imagen: 'Tarjeta_Seres_Cancerbero',
            etiqueta: 'seres',
            descripcion: 'Animal fabuloso con figura de perro de tres cabezas que guardaba la puerta del inframundo. Se le representa siempre junto al dios Plutón, dios de los muertos.'
        },
        {
            nombre: 'Grifo',
            imagen: 'Tarjeta_Seres_Grifo',
            etiqueta: 'seres',
            descripcion: 'Criatura mitológica, cuya parte frontal es la de un águila gigante, con plumas blancas, afilado pico y poderosas garras. La parte posterior es la de un león, con pelaje amarillo, musculosas patas y cola larga.'
        },
        {
            nombre: 'Minotauro',
            imagen: 'Tarjeta_Seres_Minotauro',
            etiqueta: 'seres',
            descripcion: 'Es un monstruo mitológico con cuerpo de hombre y cabeza de toro. Su nombre significa "Toro de Minos", y era hijo de Pasífae y el Toro de Creta. Fue encerrado en un laberinto.'
        },
        {
            nombre: 'Pegaso',
            imagen: 'Tarjeta_Seres_Pegaso',
            etiqueta: 'seres',
            descripcion: 'Es un caballo con alas. Pegaso fue el primer caballo que llegó a estar entre los dioses. Pegaso era el caballo de Júpiter, dios del cielo y de la Tierra.'
        },
        {
            nombre: 'Quimera',
            imagen: 'Tarjeta_Seres_Quimera',
            etiqueta: 'seres',
            descripcion: 'Monstruo de la mitología grecolatina que vomitaba llamas y tenía cabeza de león, vientre de cabra y cola de dragón.'
        }
    ]


    console.log(tarjetas)

    if (selectedCheckbox = []) {
        todos()
    }
</script>
<div>

    <Header />

    <div class="corpo center" transition:fade="{{delay: 250, duration: 300}}">
        <div class="usuario">
            <div class="container">
                <div class="bannerBuscar">
                    <h4 class="banner_tit">BUSCARDOR MITOLÓGICO</h4>
                    <p class="banner_txt">Selecciona un filtro para afinar la búsqueda</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div id="BtnContainer" class="col s12">
                <div class="col s3 todos">
                    <button on:click={()=> todos()} class:selected="{current === 'TODOS'}" class="btn_filtro"><img
                            class="center-align" width="90%" src="img/filtros/todos.svg"><span>TODOS</span></button>
                </div>
                <div class="col s3 arte">
                    <button on:click={()=> mitos()} class:selected="{current === 'MITOS'}" class="btn_filtro"><img
                            class="center-align" width="90%" src="img/filtros/mitos.svg"><span>MITOS</span></button>
                </div>
                <div class="col s3 cidades">
                    <button on:click={()=> heroes()} class:selected="{current === 'HEROES'}" class="btn_filtro"><img
                            class="center-align" width="90%" src="img/filtros/heroes.svg"><span>HÉROES</span></button>
                </div>
                <div class="col s3">
                    <button on:click={()=> seres()} class:selected="{current === 'SERES'}" class="btn_filtro"><img
                            class="center-align" width="90%" src="img/filtros/seres.svg"><span>SERES</span></button>
                </div>
            </div>
            <div class="tarjetas">
                <div class="row">
                    <!-- Menu filtro -->

                    {#if visibleFiltro}
                    {#each selectedCheckbox as tarjetas }
                        <!-- 
                        <div class="col s12 m6" transition:fade="{{delay: 250, duration: 300}}">
                            <div class="card">
                                <div class="card-image waves-effect waves-block waves-light">
                                  <img class="activator" src="img/tarjetas_buscar/{tarjetas.imagen}.webp">
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator white-text">{tarjetas.nombre}<i class="material-icons right">chevron_right</i></span>
                                  <p class="etiquetas">{tarjetas.etiqueta}</p>
                                </div>
                                <div class="card-reveal">
                                  <span class="card-title grey-text text-darken-4">{tarjetas.nombre}<i class="material-icons right">close</i></span>
                                  <p class="grey-text text-darken-4" >{tarjetas.descripcion}</p>
                                </div>
                              </div>
                        </div> 
                        -->

                        <div class="col s12" transition:fade="{{delay: 250, duration: 300}}">
                            <div class="card col s12">
                                <div class="card-content col s10">
                                    <span class="card-title activator white-text">{tarjetas.nombre}</span>
                                  <p class="etiquetas">{tarjetas.etiqueta}</p>
                                  <p class="descripcion">{tarjetas.descripcion}</p>
                                </div>
                                <div class="col s2 flecha">
                                    <img src="img/flecha.png" alt="">
                                </div>
                              </div>
                        </div> 
                        
                    {/each}
                    {/if}
                </div>
            </div>  
        </div>
    </div>
</div>


<style>

 
/* Tarjetas y fondo */

    .fondo {
        background-color: #333;
        margin: 0px;
        padding: 0px;
        height: 100vh;
        width: 100vw;
    }

    .corpo {
        width: 100%;
        margin-top: 30px;
    }

    .bannerBuscar{
        margin-top: 10px;
        margin-bottom: 30px;
        width: 100%;
        background: #17191D;
        border-radius: 8px;
        background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, #000000 100%);
        border: 3px solid #DFD7C3;
    }

    .banner_tit{
        font-family: 'Lora' serif;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        color: white;
    }

    .banner_txt{
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        color: white;
    }


    /* Filtro */

    #BtnContainer {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .selected {
        color: white!important;
        font-size: 9px;
        width: 70px!important;
        margin: 5px;
        text-align: center;
        padding: 5px;
        border-radius: 8px;
        height: 85px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
	}

    .btn_filtro {
        border: 3px solid #DFD7C3;
        background: transparent;
        color: white;
        font-size: 9px;
        width: 70px;
        margin: 5px;
        text-align: center;
        padding: 5px;
        border-radius: 8px;
        height: 85px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
    }

    .btn_filtro span {
        display: block;
    }

    .card {
        background-color: transparent;
        width: 100%;
        border: 3px solid #DFD7C3;
        border-radius: 12px;
        color: white;
        font-size: 14px;
        display: inline-flex;
        padding-right: 0px;
        margin-right: 0px;
    }

    .card-title{
        text-align: left;
        font-size: 18px;
        text-transform:uppercase;
    }

    .card-image {
        padding-left: 0px;
        padding-right: 0px;
        width: 100%;

    }

    .card .card-image img {
        width: 100%!important;
    }

    .card-reveal{
        background-color: #DFD7C3;
    }

    .card-reveal p{
        font-size: 16px;
    }

    .etiquetas{
        text-align: left;
        text-transform: uppercase;
        font-weight: 100;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .descripcion{
        text-align: left;
        padding-top: 10px;
    }

    .flecha{
        background-color: #DFD7C3;
        vertical-align: middle;
        border-bottom-right-radius: 7px;
        border-top-right-radius: 7px;
    }


    .tarjetas{
        margin-bottom: 100px;
    }

</style>