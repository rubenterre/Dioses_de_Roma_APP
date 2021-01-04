import Inicio from './Paginas/Inicio.svelte'
import Ajustes from './Paginas/Ajustes.svelte'
import Informacion from './Paginas/Informacion.svelte'
<<<<<<< Updated upstream
=======
import Buscar from './Paginas/Buscar.svelte'

>>>>>>> Stashed changes
import ApoloPerfil from './Paginas/ApoloPerfil.svelte'
import JupiterPerfil from './Paginas/JupiterPerfil.svelte'
import JunoPerfil from './Paginas/JunoPerfil.svelte'
import MartePerfil from './Paginas/MartePerfil.svelte'
import MercurioPerfil from './Paginas/MercurioPerfil.svelte'
import NeptunoPerfil from './Paginas/NeptunoPerfil.svelte'
import PlutonPerfil from './Paginas/PlutonPerfil.svelte'
import VenusPerfil from './Paginas/VenusPerfil.svelte'
import VulcanoPerfil from './Paginas/VulcanoPerfil.svelte'
import MinervaPerfil from './Paginas/MinervaPerfil.svelte'
import DianaPerfil from './Paginas/DianaPerfil.svelte'
import BacoPerfil from './Paginas/BacoPerfil.svelte'

import AquilesHeroesBuscar from './Paginas/AquilesHeroesBuscar.svelte'
import HerculesHeroesBuscar from './Paginas/HerculesHeroesBuscar.svelte'
import JasonHeroesBuscar from './Paginas/JasonHeroesBuscar.svelte'
import PerseoHeroesBuscar from './Paginas/PerseoHeroesBuscar.svelte'
import UlisesHeroesBuscar from './Paginas/UlisesHeroesBuscar.svelte'
import EuropaMitosBuscar from './Paginas/EuropaMitosBuscar.svelte'
import PrimaveraMitosBuscar from './Paginas/PrimaveraMitosBuscar.svelte'
import PrometeoMitosBuscar from './Paginas/PrometeoMitosBuscar.svelte'
import CancerberoSeresBuscar from './Paginas/CancerberoSeresBuscar.svelte'
import GrifoSeresBuscar from './Paginas/GrifoSeresBuscar.svelte'
import MinotauroSeresBuscar from './Paginas/MinotauroSeresBuscar.svelte'
import PegasoSeresBuscar from './Paginas/PegasoSeresBuscar.svelte'
import QuimeraSeresBuscar from './Paginas/QuimeraSeresBuscar.svelte'



import NotFound from './Paginas/NotFound.svelte'

const routes = {
    '/': Inicio,
    '/ajustes': Ajustes,
    '/informacion': Informacion,
    '/ApoloPerfil': ApoloPerfil,
    '/JupiterPerfil': JupiterPerfil,
    '/JunoPerfil': JunoPerfil,
    '/MartePerfil': MartePerfil,
    '/MercurioPerfil': MercurioPerfil,
    '/NeptunoPerfil': NeptunoPerfil,
    '/PlutonPerfil': PlutonPerfil,
    '/VenusPerfil': VenusPerfil,
    '/VulcanoPerfil': VulcanoPerfil,
    '/MinervaPerfil': MinervaPerfil,
    '/DianaPerfil': DianaPerfil,
    '/BacoPerfil': BacoPerfil,
    '/AquilesHeroesBuscar': AquilesHeroesBuscar,
    '/HerculesHeroesBuscar': HerculesHeroesBuscar,
    '/JasonHeroesBuscar': JasonHeroesBuscar,
    '/PerseoHeroesBuscar': PerseoHeroesBuscar,
    '/UlisesHeroesBuscar': UlisesHeroesBuscar,
    '/EuropaMitosBuscar': EuropaMitosBuscar,
    '/PrimaveraMitosBuscar': PrimaveraMitosBuscar,
    '/PrometeoMitosBuscar': PrometeoMitosBuscar,
    '/CancerberoSeresBuscar': CancerberoSeresBuscar,
    '/GrifoSeresBuscar': GrifoSeresBuscar,
    '/MinotauroSeresBuscar': MinotauroSeresBuscar,
    '/PegasoSeresBuscar': PegasoSeresBuscar,
    '/QuimeraSeresBuscar': QuimeraSeresBuscar,

    // Catch-all route last
    '*': NotFound
}

export default routes