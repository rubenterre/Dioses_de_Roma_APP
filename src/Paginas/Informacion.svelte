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
                        <a style="margin-top:10px;" href="/ajustes" use:link class="left"><i class="material-icons black-text">chevron_left</i></a>
                    </div>
                    <div class="col s6 content-right">
                        <p class="black-text">INFORMACIÓN</p>
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

                    <p class="about-txt">
                        Desarrollado por Rubén Terré.
                    </p>
                    <img class="center logo_RT" src="/img/Ruben_Terre_Logo_blanco_131119.svg" alt="logo Rubén Terré" width="40%">
                    <p class="about-txt">
                        Para máis información sobre os meus traballos visita a miña web en <a
                            href="https://www.rubenterre.com">www.rubenterre.com</a> ou a través dos seguintes
                        canais:
                    </p>

                    <div class="col s12 icon_contact">
                        <div class="col s4">
                            <a href="https://www.behance.net/rubenterre"><img
                                    src="/img/behance-square-brands_white.svg" alt="Benhance link" width="40%"></a>
                        </div>
                        <div class="col s4">
                            <a href="https://github.com/rubenterre"><img src="/img/github-square-brands_white.svg"
                                    alt="Github link" width="40%"></a>
                        </div>
                        <div class="col s4">
                            <a href="https://www.linkedin.com/in/rubenterrelameiro"><img
                                    src="/img/linkedin-brands_white.svg" alt="Linkedin link" width="40%"></a>
                        </div>
                    </div>


                    <p class="about-textoDos"><strong class="white-text">Actualizacións nas que estamos
                            a traballar</strong></p>
                    <ul class="white-text left-align listado">
                        <li> 1- Añadir más dioses</li>
                        <li> 2- Añadir buscador</li>
                        <li> 3- Mejoras generales en el diseño</li>
                    </ul>
                    <br>

                    <h4 class="about-tit">MIT License</h4>

                    <p class="about-version">Copyright (c) 2020 Rubén Terré - Diseño & Desarrollo web</p>

                    <p class="licencia-txt">Permission is hereby granted, free of charge, to any person obtaining a copy
                        of this software and associated documentation files (the "Software"), to deal
                        in the Software without restriction, including without limitation the rights
                        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        copies of the Software, and to permit persons to whom the Software is
                        furnished to do so, subject to the following conditions:</p>

                    <p class="licencia-txt">The above copyright notice and this permission notice shall be included in
                        all
                        copies or substantial portions of the Software.</p>

                    <p class="licencia-txt">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                        SOFTWARE.
                    </p>

                </div>

            </div>
        </div>
    </section>

</div>

<style>

    /* Páginas de enlace */

    .collection{
        background-color: #dfd7c3;
        margin-top: 40px;
    }

 .enlaces{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
    text-align: left;
    background-color: #dfd7c3;
 }

 /* logo */

    .logo_RT {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .icon_contact {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    /* Waves */

    .shape-fill {
        fill: #333;
    }

    .shape {
        transform: rotate(180deg);
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


    .navbar .content-right .sidebar-cart i,
    .navbar .content-right .sidebar-search i {
        position: relative;
        left: 8px;
    }

    /* Benvida */


    .banner img {
        display: block;
        margin: 0px auto;
        padding-bottom: 0px;
        padding-top: 100px;
        width: 30%;
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
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 12px;
        font-weight: 300;
        text-align: center;
    }

    .about-txt {
        color: white;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        padding-top: 20px;
    }

    .about-textoDos {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        padding-top: 40px;
        margin-top: 40px;
    }

    .listado{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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