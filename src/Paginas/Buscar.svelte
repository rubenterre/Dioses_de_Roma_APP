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
            imagen: 'Tarjeta_Heroes_Aquiles',
            etiqueta: 'heroes'
        },
        {
            imagen: 'Tarjeta_Heroes_Hercules',
            etiqueta: 'heroes'
        },
        {
            imagen: 'Tarjeta_Heroes_Jason',
            etiqueta: 'heroes'
        },
        {
            imagen: 'Tarjeta_Heroes_Perseo',
            etiqueta: 'heroes'
        },
        {
            imagen: 'Tarjeta_Heroes_Ulises',
            etiqueta: 'heroes'
        },
        {
            imagen: 'Tarjeta_Mitos_Dafne',
            etiqueta: 'mitos'
        },
        {
            imagen: 'Tarjeta_Mitos_Europa',
            etiqueta: 'mitos'
        },
        {
            imagen: 'Tarjeta_Mitos_Primavera',
            etiqueta: 'mitos'
        },
        {
            imagen: 'Tarjeta_Mitos_Prometeo',
            etiqueta: 'mitos'
        },
        {
            imagen: 'Tarjeta_Seres_Cancerbero',
            etiqueta: 'seres'
        },
        {
            imagen: 'Tarjeta_Seres_Grifo',
            etiqueta: 'seres'
        },
        {
            imagen: 'Tarjeta_Seres_Minotauro',
            etiqueta: 'seres'
        },
        {
            imagen: 'Tarjeta_Seres_Pegaso',
            etiqueta: 'seres'
        },
        {
            imagen: 'Tarjeta_Seres_Quimera',
            etiqueta: 'seres'
        }
    ]


    console.log(tarjetas)

    if (selectedCheckbox = []) {
        todos()
    }


</script>
<div>

    <Header/>

    <div class="corpo center">
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
                    <button on:click={()=> todos()} class:selected="{current === 'TODOS'}"  class="btn_filtro"><img class="center-align" width="90%"
                            src="img/filtros/todos.svg"><span>TODOS</span></button>
                </div>
                <div class="col s3 arte">
                    <button on:click={()=> mitos()} class:selected="{current === 'MITOS'}" class="btn_filtro"><img class="center-align" width="90%"
                            src="img/filtros/mitos.svg"><span>MITOS</span></button>
                </div>
                <div class="col s3 cidades">
                    <button on:click={()=> heroes()} class:selected="{current === 'HEROES'}" class="btn_filtro"><img class="center-align" width="90%"
                            src="img/filtros/heroes.svg"><span>HÉROES</span></button>
                </div>
                <div class="col s3">
                    <button on:click={()=> seres()} class:selected="{current === 'SERES'}" class="btn_filtro"><img class="center-align" width="90%"
                            src="img/filtros/seres.svg"><span>SERES</span></button>
                </div>
            </div>
            <div class="tarjetas">
                <div class="row">
                    <!-- Menu filtro -->
    
                    {#if visibleFiltro}
                    {#each selectedCheckbox as tarjetas }
                        
                        <div class="col s12 m7" transition:fade="{{delay: 250, duration: 300}}">
                            <div class="card">
                                <div class="card-image">
                                    <img src="/img/tarjetas_buscar/{tarjetas.imagen}.webp" width="100%">
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
    }

    .card-image {
        padding-left: 0px;
        padding-right: 0px;
        width: 100%;

    }

    .card .card-image img {
        width: 100%!important;
    }

    .tarjetas{
        margin-bottom: 100px;
    }

</style>