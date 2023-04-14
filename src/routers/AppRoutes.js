//import ProtectedRoute from "./ProtectedRoute";
import { useEffect, useReducer, useState } from "react"
import {
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "../components/Home";
import { Landing } from "../components/Landing";
import { Login } from "../components/Login";
import Paciente from "../components/Paciente";
import Estaciones from "../components/paciente/contenido/Estaciones";
import ComposicionNutrimiental from "../components/paciente/contenido/Frutas/ComposicionNutrimiental";
import Indice from "../components/paciente/contenido/Frutas/Indice";
import Durazno from "../components/paciente/contenido/Frutas/Invierno/durazno/Durazno";
import Guayaba from "../components/paciente/contenido/Frutas/Invierno/guayaba/Guayaba";
import Invierno from "../components/paciente/contenido/Frutas/Invierno/Invierno";
import Naranja from "../components/paciente/contenido/Frutas/Invierno/naranja/Naranja";
import Pera from "../components/paciente/contenido/Frutas/Invierno/pera/Pera";
import Tejocote from "../components/paciente/contenido/Frutas/Invierno/tejocote/Tejocote";
import ProcesoPdf from "../components/paciente/contenido/Frutas/ProcesoPdf";
import Procesos from "../components/paciente/contenido/Frutas/Procesos";
import VideoDefinicion from "../components/paciente/contenido/Frutas/VideoDefinicion";
import BioactivosPresentesVerduras from "../components/paciente/contenido/Verduras/BioactivosPresentesVerduras";
import Clasificacion from "../components/paciente/contenido/Verduras/Clasificacion";
import ComposicionNutrimentalVerduras from "../components/paciente/contenido/Verduras/ComposicionNutrimentalVerduras";
import Envejecimiento from "../components/paciente/contenido/Verduras/Envejecimiento";
import EstacionesVerduras from "../components/paciente/contenido/Verduras/estaciones/EstacionesVerduras";
import Calabaza from "../components/paciente/contenido/Verduras/estaciones/invierno/calabaza/Calabaza";
import InviernoVerdura from "../components/paciente/contenido/Verduras/estaciones/invierno/InviernoVerdura";
import Jitomate from "../components/paciente/contenido/Verduras/estaciones/invierno/jitomate/Jitomate";
import Zanahoria from "../components/paciente/contenido/Verduras/estaciones/invierno/zanahoria/Zanahoria";
import Chile from "../components/paciente/contenido/Verduras/estaciones/primavera/chile/Chile";
import Espinaca from "../components/paciente/contenido/Verduras/estaciones/primavera/espinaca/Espinaca";
import PrimaveraVerdura from "../components/paciente/contenido/Verduras/estaciones/primavera/PrimaveraVerdura";
import HortalizasComestibles from "../components/paciente/contenido/Verduras/HortalizasComestibles";
import ImportanciaDelProcesoTermicoVerduras from "../components/paciente/contenido/Verduras/ImportanciaDelProcesoTermicoVerduras";
import IndiceVerduras from "../components/paciente/contenido/Verduras/IndiceVerduras";
import TablaClasificacion from "../components/paciente/contenido/Verduras/TablaClasificacion";
import VideoVerdura from "../components/paciente/contenido/Verduras/VideoVerdura";
import { PerfilUsuario } from "../components/PerfilUsuario";
import { Step1 } from "../components/recopilacionDatos/step1";
import { Step2 } from "../components/recopilacionDatos/step2";
import { Step3 } from "../components/recopilacionDatos/step3";
import { Registro } from "../components/Registro";
import ImageLoading from "../components/Reutilizable/ImageLoading";
import { Welcome } from "../components/Welcome";
import ProtectedRoute from "./ProtectedRoute";
import errorImage from '../components/assets/images/Feeling sorry-bro.png'
import OpcionFrutasVerduras from "../components/paciente/contenido/OpcionFrutasoVerduras";
import Error404 from "../components/Error404";
import VeranoFruta from "../components/paciente/contenido/Frutas/verano/VeranoFruta";
import PrimaveraFruta from "../components/paciente/contenido/Frutas/primavera/PrimaveraFruta";
import Fresa from "../components/paciente/contenido/Frutas/primavera/fresa/Fresa";
import Mango from "../components/paciente/contenido/Frutas/primavera/mango/Mango";
import Melon from "../components/paciente/contenido/Frutas/primavera/melon/Melon";
import Pina from "../components/paciente/contenido/Frutas/primavera/pina/Pina";
import Ciruela from "../components/paciente/contenido/Frutas/verano/ciruela/Ciruela";
import Platano from "../components/paciente/contenido/Frutas/primavera/platano/Platano";
import RetoUno from "../components/paciente/contenido/Frutas/Retos/RetoUno/RetoUno";
import RetoDos from "components/paciente/contenido/Frutas/Retos/RetoDos/RetoDos";
import RetoTres from "components/paciente/contenido/Frutas/Retos/RetoTres/RetoTres";
import { RetoCuatro } from "components/paciente/contenido/Verduras/estaciones/retos/RetoCuatro/RetoCuatro";
import RetoCinco from "components/paciente/contenido/Verduras/estaciones/retos/RetoCinco/RetoCinco";
import RetoSeis from "components/paciente/contenido/Verduras/estaciones/retos/RetoSeis/RetoSeis";
import PublicRoute from "./PublicRoute";
import Ejemplo from "components/Ejemplo";
import { ActivityProvider } from "context/ActivityProvider";
import { GlobalProvider } from "context/GlobalProvider";
import Conclusiones from "components/paciente/contenido/Verduras/Conclusiones";
import Creditos from "components/paciente/contenido/Verduras/CreditosVPro";
import ConslusionesF from "components/paciente/contenido/Frutas/ConclusionesF";
import CreditosF from "components/paciente/contenido/Frutas/CreditosF";
import ConclusionesF from "components/paciente/contenido/Frutas/ConclusionesF";
import Profesionales from "components/Profesionales";
import OpcionFrutasVerdurasPro from "components/profesionales/contenido/OpcionFrutasoVerdurasPro";
import IndicePro from "components/profesionales/contenido/Frutas/IndicePro";
import VideoDefinicionPro from "components/profesionales/contenido/Frutas/VideoDefinicionPro";
import ProcesosPro from "components/profesionales/contenido/Frutas/ProcesosPro";
import ProcesoPdfPro from "components/profesionales/contenido/Frutas/ProcesoPdfPro";
import ComposicionNutrimientalPro from "components/profesionales/contenido/Frutas/ComposicionNutrimientalPro";
import EstacionesPro from "components/profesionales/contenido/EstacionesPro";
import VeranoFrutaPro from "components/profesionales/contenido/Frutas/verano/VeranoFruta";
import InviernoPro from "components/profesionales/contenido/Frutas/Invierno/InviernoPro";
import PrimaveraFrutaPro from "components/profesionales/contenido/Frutas/primavera/PrimaveraFrutaPro";
import CiruelaPro from "components/profesionales/contenido/Frutas/verano/ciruela/CiruelaPro";
import FresaPro from "components/profesionales/contenido/Frutas/primavera/fresa/FresaPro";
import MangoPro from "components/profesionales/contenido/Frutas/primavera/mango/MangoPro";
import MelonPro from "components/profesionales/contenido/Frutas/primavera/melon/MelonPro";
import PinaPro from "components/profesionales/contenido/Frutas/primavera/pina/PinaPro";
import PlatanoPro from "components/profesionales/contenido/Frutas/primavera/platano/PlatanoPro";
import PeraPro from "components/profesionales/contenido/Frutas/Invierno/pera/PeraPro";
import GuayabaPro from "components/profesionales/contenido/Frutas/Invierno/guayaba/GuayabaPro";
import NaranjaPro from "components/profesionales/contenido/Frutas/Invierno/naranja/NaranjaPro";
import TejocotePro from "components/profesionales/contenido/Frutas/Invierno/tejocote/TejocotePro";
import DuraznoPro from "components/profesionales/contenido/Frutas/Invierno/durazno/DuraznoPro";
import ConclusionesFPro from "components/profesionales/contenido/Frutas/ConclusionesFPro";
import CreditosFPro from "components/profesionales/contenido/Frutas/CreditosFPro";
import RetoUnoPro from "components/profesionales/contenido/Frutas/Retos/RetoUno/RetoUnoPro";
import RetoDosPro from "components/profesionales/contenido/Frutas/Retos/RetoDos/RetoDosPro";
import RetoTresPro from "components/profesionales/contenido/Frutas/Retos/RetoTres/RetoTresPro";
import IndiceVerdurasPro from "components/profesionales/contenido/Verduras/IndiceVerdurasPro";
import VideoVerduraPro from "components/profesionales/contenido/Verduras/VideoVerduraPro";
import ClasificacionPro from "components/profesionales/contenido/Verduras/ClasificacionPro";
import EnvejecimientoPro from "components/profesionales/contenido/Verduras/EnvejecimientoPro";
import ComposicionNutrimentalVerdurasPro from "components/profesionales/contenido/Verduras/ComposicionNutrimentalVerdurasPro";
import ImportanciaDelProcesoTermicoVerdurasPro from "components/profesionales/contenido/Verduras/ImportanciaDelProcesoTermicoVerdurasPro";
import BioactivosPresentesVerdurasPro from "components/profesionales/contenido/Verduras/BioactivosPresentesVerdurasPro";
import ConclusionesPro from "components/profesionales/contenido/Verduras/ConclusionesPro";
import CreditosVPro from "components/paciente/contenido/Verduras/CreditosVPro";
import EstacionesVerdurasPro from "components/profesionales/contenido/Verduras/estaciones/EstacionesVerdurasPro";
import InviernoVerduraPro from "components/profesionales/contenido/Verduras/estaciones/invierno/InviernoVerduraPro";
import PrimaveraVerduraPro from "components/profesionales/contenido/Verduras/estaciones/primavera/PrimaveraVerduraPro";
import CalabazaPro from "components/profesionales/contenido/Verduras/estaciones/invierno/calabaza/CalabazaPro";
import JitomatePro from "components/profesionales/contenido/Verduras/estaciones/invierno/jitomate/JitomatePro";
import ZanahoriaPro from "components/profesionales/contenido/Verduras/estaciones/invierno/zanahoria/ZanahoriaPro";
import EspinacaPro from "components/profesionales/contenido/Verduras/estaciones/primavera/espinaca/Espinaca";
import ChilePro from "components/profesionales/contenido/Verduras/estaciones/primavera/chile/Chile";
import ExampleId from "components/ExampleId";
import CreditosVP from "components/profesionales/contenido/Verduras/CreditosVP";
import { Step4 } from "components/recopilacionDatos/step4";
import RetoSeisPro from "components/profesionales/contenido/Verduras/estaciones/retos/RetoSeis/RetoSeisPro";
import { RetoCuatroPro } from "components/profesionales/contenido/Verduras/estaciones/retos/RetoCuatro/RetoCuatroPro";
import RetoCincoPro from "components/profesionales/contenido/Verduras/estaciones/retos/RetoCinco/RetoCincoPro";


const AppRoutes = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return (
    <>
      <GlobalProvider>
        <ActivityProvider>
          <Routes>
            {/* Rutas Publicas */}
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/ejemplo" element={<ExampleId />} />
              <Route path="/registro" element={<Registro />} />
            </Route>
            {/*Rutas Privadas*/}
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/data-collection-step1" element={<Step1 />} />
              <Route path="/data-collection-step2" element={<Step2 />} />
              <Route path="/data-collection-step3" element={<Step3 />} />
              <Route path="/data-collection-step4" element={<Step4 />} />
              <Route path="/user-profile" element={<PerfilUsuario />} />
              //TODO: Rutas Paciente
              <Route path="/paciente" element={<Paciente />} />
              <Route path="/paciente/menu-fruta-o-verdura" element={<OpcionFrutasVerduras />} />
                         //TODO: Rutas Pacientes Frutas
              <Route path="/paciente/frutas" element={<Indice />} />
              <Route path="/paciente/frutas/video" element={<VideoDefinicion />} />
              <Route path="/paciente/frutas/procesos" element={<Procesos />} />
              <Route path="/paciente/frutas/pdf" element={<ProcesoPdf />} />
              <Route path="/paciente/frutas/composicion-nutrimental" element={<ComposicionNutrimiental />} />
              <Route path="/paciente/frutas/estacion" element={<Estaciones />} />
              <Route path="/paciente/frutas/estacion/invierno" element={<Invierno />} />
              <Route path="/paciente/frutas/estacion/verano" element={<VeranoFruta />} />
              <Route path="/paciente/frutas/estacion/primavera" element={<PrimaveraFruta />} />
              <Route path="/paciente/frutas/estacion/invierno/pera" element={<Pera />} />
              <Route path="/paciente/frutas/estacion/invierno/guayaba" element={<Guayaba />} />
              <Route path="/paciente/frutas/estacion/invierno/naranja" element={<Naranja />} />
              <Route path="/paciente/frutas/estacion/invierno/tejocote" element={<Tejocote />} />
              <Route path="/paciente/frutas/estacion/invierno/durazno" element={<Durazno />} />
              <Route path="/paciente/frutas/estacion/primavera/fresa" element={<Fresa />} />
              <Route path="/paciente/frutas/estacion/primavera/mango" element={<Mango />} />
              <Route path="/paciente/frutas/estacion/primavera/melon" element={<Melon />} />
              <Route path="/paciente/frutas/estacion/primavera/pina" element={<Pina />} />
              <Route path="/paciente/frutas/estacion/primavera/ciruela" element={<Ciruela />} />
              <Route path="/paciente/frutas/estacion/primavera/platano" element={<Platano />} />
              <Route path="/paciente/frutas/creditos" element={<ConclusionesF />} />
              <Route path="/paciente/frutas/conclusiones" element={<CreditosF />} />
                         //TODO: Rutas Retos Pacientes Frutas
              <Route path="/paciente/frutas/reto-dos" element={<RetoDos />} />
              <Route path="/paciente/frutas/reto-uno" element={<RetoUno />} />
              <Route path="/paciente/frutas/reto-tres" element={<RetoTres />} />
                         //TODO: Rutas Pacientes Verduras
              <Route path="/paciente/verduras" element={<IndiceVerduras />} />
              <Route path="/paciente/verduras/conclusiones" element={<Conclusiones />} />
              <Route path="/paciente/verduras/creditos" element={<Creditos />} />
              <Route path="/paciente/verduras/definicion" element={<VideoVerdura />} />
              <Route path="/paciente/verduras/clasificacion" element={<Clasificacion />} />
              <Route path="/paciente/verduras/envejecimiento" element={<Envejecimiento />} />
              <Route path="/paciente/verduras/composicion-nutrimental-de-verduras" element={<ComposicionNutrimentalVerduras />} />
              <Route path="/paciente/verduras/importancia-del-proceso-termico-de-las-verduras" element={<ImportanciaDelProcesoTermicoVerduras />} />
              <Route path="/paciente/verduras/bioactivos-presentes-en-las-verduras" element={<BioactivosPresentesVerduras />} />
              <Route path="/paciente/verduras/estacion" element={<EstacionesVerduras />} />
              <Route path="/paciente/verduras/estacion/invierno" element={<InviernoVerdura />} />
              <Route path="/paciente/verduras/estacion/primavera" element={<PrimaveraVerdura />} />
              <Route path="/paciente/verduras/estacion/invierno/zanahoria" element={<Zanahoria />} />
              <Route path="/paciente/verduras/estacion/invierno/calabaza" element={<Calabaza />} />
              <Route path="/paciente/verduras/estacion/invierno/jitomate" element={<Jitomate />} />
              <Route path="/paciente/verduras/estacion/primavera/chile" element={<Chile />} />
              <Route path="/paciente/verduras/estacion/primavera/espinaca" element={<Espinaca />} />
                         //TODO: Rutas Retos Peciente Frutas
              <Route path="/paciente/verduras/reto-cuatro" element={<RetoCuatro />} />
              <Route path="/paciente/verduras/reto-cinco" element={<RetoCinco />} />
              <Route path="/paciente/verduras/reto-seis" element={<RetoSeis />} />

                         //Todo Rutas Profesionales
              <Route path="/profesionales" element={<Profesionales />} />
              <Route path="/profesionales/menu-fruta-o-verdura" element={<OpcionFrutasVerdurasPro />} />
                         //TODO: Rutas Profesionales Frutas
              <Route path="/profesionales/frutas" element={<IndicePro />} />
              <Route path="/profesionales/frutas/video" element={<VideoDefinicionPro />} />
              <Route path="/profesionales/frutas/procesos" element={<ProcesosPro />} />
              <Route path="/profesionales/frutas/pdf" element={<ProcesoPdfPro />} />
              <Route path="/profesionales/frutas/composicion-nutrimental" element={<ComposicionNutrimientalPro />} />
              <Route path="/profesionales/frutas/estacion" element={<EstacionesPro />} />
              <Route path="/profesionales/frutas/estacion/invierno" element={<InviernoPro />} />
              <Route path="/profesionales/frutas/estacion/verano" element={<VeranoFrutaPro />} />
              <Route path="/profesionales/frutas/estacion/primavera" element={<PrimaveraFrutaPro />} />
              <Route path="/profesionales/frutas/estacion/verano/ciruela" element={<CiruelaPro />} />
              <Route path="/profesionales/frutas/estacion/primavera/fresa" element={<FresaPro />} />
              <Route path="/profesionales/frutas/estacion/primavera/mango" element={<MangoPro />} />
              <Route path="/profesionales/frutas/estacion/primavera/melon" element={<MelonPro />} />
              <Route path="/profesionales/frutas/estacion/primavera/pina" element={<PinaPro />} />
              <Route path="/profesionales/frutas/estacion/primavera/platano" element={<PlatanoPro />} />
              <Route path="/profesionales/frutas/estacion/invierno/pera" element={<PeraPro />} />
              <Route path="/profesionales/frutas/estacion/invierno/guayaba" element={<GuayabaPro />} />
              <Route path="/profesionales/frutas/estacion/invierno/naranja" element={<NaranjaPro />} />
              <Route path="/profesionales/frutas/estacion/invierno/tejocote" element={<TejocotePro />} />
              <Route path="/profesionales/frutas/estacion/invierno/durazno" element={<DuraznoPro />} />
              <Route path="/profesionales/frutas/creditos" element={<ConclusionesFPro />} />
              <Route path="/profesionales/frutas/conclusiones" element={<CreditosFPro />} />
                         //TODO: Rutas Retos Profesionales Frutas
              <Route path="/profesionales/frutas/reto-uno" element={<RetoUnoPro />} />
              <Route path="/profesionales/frutas/reto-dos" element={<RetoDosPro />} />
              <Route path="/profesionales/frutas/reto-tres" element={<RetoTresPro />} />
                         //TODO: Rutas Profesionales Verduras
              <Route path="/profesionales/verduras" element={<IndiceVerdurasPro />} />
              <Route path="/profesionales/verduras/conclusiones" element={<ConclusionesPro />} />
              <Route path="/profesionales/verduras/creditos" element={<CreditosVP />} />
              <Route path="/profesionales/verduras/definicion" element={<VideoVerduraPro />} />
              <Route path="/profesionales/verduras/clasificacion" element={<ClasificacionPro />} />
              <Route path="/profesionales/verduras/envejecimiento" element={<EnvejecimientoPro />} />
              <Route path="/profesionales/verduras/composicion-nutrimental-de-verduras" element={<ComposicionNutrimentalVerdurasPro />} />
              <Route path="/profesionales/verduras/importancia-del-proceso-termico-de-las-verduras" element={<ImportanciaDelProcesoTermicoVerdurasPro />} />
              <Route path="/profesionales/verduras/bioactivos-presentes-en-las-verduras" element={<BioactivosPresentesVerdurasPro />} />
              <Route path="/profesionales/verduras/estacion" element={<EstacionesVerdurasPro />} />
              <Route path="/profesionales/verduras/estacion/invierno" element={<InviernoVerduraPro />} />
              <Route path="/profesionales/verduras/estacion/primavera" element={<PrimaveraVerduraPro />} />
              <Route path="/profesionales/verduras/estacion/invierno/zanahoria" element={<ZanahoriaPro />} />
              <Route path="/profesionales/verduras/estacion/invierno/calabaza" element={<CalabazaPro />} />
              <Route path="/profesionales/verduras/estacion/invierno/jitomate" element={<JitomatePro />} />
              <Route path="/profesionales/verduras/estacion/primavera/espinaca" element={<EspinacaPro />} />
              <Route path="/profesionales/verduras/estacion/primavera/chile" element={<ChilePro />} />
              <Route path="/profesionales/verduras/reto-cuatro" element={<RetoCuatroPro />} />
              <Route path="/profesionales/verduras/reto-cinco" element={<RetoCincoPro />} />
              <Route path="/profesionales/verduras/reto-seis" element={<RetoSeisPro />} />
            </Route>

            {/*Error de ruta */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </ActivityProvider>
      </GlobalProvider>

    </>
  );
};

export default AppRoutes;
