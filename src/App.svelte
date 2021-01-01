<script>
	import Router from 'svelte-spa-router'
  import { link } from 'svelte-spa-router'
  import routes from './routes.js'
  
  function share(){
    Website2APK.shareIntent();
  }
  

  import Tab, {Icon, Label} from '@smui/tab';
  import TabBar from '@smui/tab-bar';

  let keyedTabs = [
    {
      k: 3,
      icon: 'settings',
      label: 'AJUSTES',
      url: '/ajustes'
    },
    {
      k: 1,
      icon: 'home',
      label: 'INICIO',
      url: '/'
    },
    {
      k: 2,
      icon: 'search',
      label: 'BUSCAR',
      url:'/buscar'
    }
  ];
  let keyedTabsActive = keyedTabs[1];

</script>

<main>

    <!-- navbar bottom 
    <nav class="navbarbaja">
      <div class="nav-fixed">
          <a href="/" use:link class="brand-logo center"><img src="img/Icon_menu/inicio.svg" alt="inicio" width="80%"></a>
          
          <ul id="nav-mobile left">
              <li><a href="/Informacion" use:link ><i class="material-icons brown-text darken-2-text">info_outline</i></a></li>
          </ul>

          <ul class="nav-mobile right">
              <li><a on:click={() => share()} ><i class="material-icons brown-text darken-2-text">share</i></a></li>
          </ul>

      </div>
  </nav>
  -->

  <TabBar tabs={keyedTabs} let:tab key={tab => tab.k} bind:active={keyedTabsActive}>
    <a href="{tab.url}" use:link>
    <Tab  {tab} stacked={true} indicatorSpanOnlyContent={true} tabIndicator$transition="fade">
      <Icon class="material-icons">{tab.icon}</Icon>
      <Label>{tab.label}</Label>
    </Tab>
    </a>
  </TabBar>

<Router {routes} />


</main>

<style>
/* Estilos generales */

:global(body) {
    background: url(../img/Fondo.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #111518;
    height: 100%;
}

:global(.menu_abajo){
	background-color: white;
	bottom: 0px;
	position: fixed;
	width: 100%;
  display: inline-flex;
  justify-content: center;
}

:global(.menu_abajo li){
  color: black;

}

a{
  color: transparent;
}

</style>