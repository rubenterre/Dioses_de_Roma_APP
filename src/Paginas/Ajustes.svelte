<script>
    import {
        link
    } from 'svelte-spa-router'
</script>
<div>
    <!-- navbar -->
    <div class="navbar">
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <div class="col s6 content-left">
                        <a style="margin-top:10px;" href="/" use:link class="left"><i
                                class="material-icons black-text">chevron_left</i></a>
                    </div>
                    <div class="col s6 content-right">
                        <p class="black-text">AJUSTES</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end navbar -->

    <div class="container">

    </div>
    <div class="banner">
        <img class="center" src="/img/diosesderoma.png" alt="logo Dioses de Roma">
    </div>

    <section>
        <div class="container">
            <div class="row">
                <div class="col s12 center-align">
                    <h4 class="about-tit">Dioses de Roma</h4>
                    <p class="about-version">Versión 9.0.0.</p>
                    <p class="about-txt">La app para aprender los dioses de la mitología clásica.</p>

                    <div class="collection">
                        <a href="/informacion" use:link class="collection-item enlaces"><span class="badge"><i
                                    class="material-icons black-text">chevron_right</i></span>Información</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

</div>


<style>
    .logo_RT {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .icon_contact {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    /* Páginas de enlace */

    .collection {
        background-color: #dfd7c3;
        margin-top: 40px;
    }

    .enlaces {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: black;
        text-align: left;
        background-color: #dfd7c3;
    }

    /*navbar*/

    .navbar {
        padding: 15px 0 11px;
        background-color: #dfd7c3;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }

    .navbar i {
        font-size: 22px;
        margin-top: 3px;
    }

    .navbar h1 {
        font-size: 24px;
        padding: 0;
        margin: 0;
        font-weight: 900;
        letter-spacing: 1px;
    }

    .navbar .content-left {
        display: inline-flex;
        vertical-align: middle;
    }

    .navbar .content-right {
        text-align: right;
        vertical-align: middle;
    }

    .navbar .row {
        margin-bottom: 0;
    }

    .navbar .content-left .sidebar {
        margin-right: 18px;
    }

    .navbar .content-right .sidebar-search {
        margin-right: 14px;
    }

    .navbar .content-right .sidebar-cart i,
    .navbar .content-right .sidebar-search i {
        position: relative;
        left: 8px;
    }

    /* Benvida */



    .caja_benvida {
        padding: 0px;
    }

    .benvida {
        padding-top: 10px;
        padding-bottom: 0px;
        padding-left: 0px;
    }

    .banner img {
        display: block;
        margin: 0px auto;
        padding-bottom: 0px;
        padding-top: 100px;
        width: 30%;
    }

    .saudo {
        font-size: 36px;
        color: white;
        font-weight: 600;
        padding-bottom: 0px;
        margin-bottom: 0px;
        margin-top: 0px;

    }

    /* Sobre esta aplicación */

    .about-tit {
        color: white;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
    }

    .about-version {
        color: white;
        font-family: Roboto;
        font-size: 12px;
        font-weight: 300;
        text-align: center;
    }

    .about-txt {
        color: white;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        padding-top: 20px;
    }

    .about-textoDos {
        padding-top: 40px;
        margin-top: 40px;
    }

    /* Licencia */

    .licencia-txt {
        color: white;
        font-family: Roboto;
        font-size: 11px;
        font-weight: 300;
        text-align: justify;
        padding-top: 20px;
    }
</style>