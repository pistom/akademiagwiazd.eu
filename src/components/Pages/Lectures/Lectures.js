import React, {Component} from 'react';
import getPageHeight from "../getPageHeight";
import c from './Lectures.css';
import g from 'bootstrap/dist/css/bootstrap-grid.min.css';
import Speaker from './Speaker/Speaker';

class Lectures extends Component {

  state = {
    lectures: [
      {
        id: 1, name: "dr n. med. BARTOSZ CERKASKI", fot: 'cerkaski.jpg', desc: (<div>
          <p>Specjalista stomatologii zachowawczej i endodoncji. Autor i koordynator programów endodoncji
            przedklinicznej prowadzonych na Oddziale Stomatologii AM w Poznaniu dla studentów polsko- i anglojęzycznych.
            Prowadzi wykłady i kursy z zakresu endodoncji, również w ramach kursów specjalizacyjnych. Członek Polskiego
            Towarzystwa Endodontycznego, European Society of Endodontology i Polskiego Stowarzyszenia Stomatologii
            Mikroskopowej. Członek Rady Programowej Czasopisma PTE Endodoncja.pl i Editorial Board magazynu Roots –
            International Magazine of Endodontology. Staż naukowo-szkoleniowy na University of Michigan, AnnArbor, USA.
            Autor i współautor publikacji i doniesień zjazdowych. Jako pierwszy w Wielkopolsce wprowadził do rutynowej
            praktyki leczenie stomatologiczne z wykorzystaniem mikroskopów zabiegowych.</p>
        </div>)
      },
      {
        id: 2, name: "DDS DDT IVAN RONALD HUANCA", fot: 'huanca.jpg', desc: (<div>
          <p>Stomatolog i technik dentystyczny</p>
          <p>Specjalizacja z protetyki w ośrodku APDC Jardim Paulista, Sao Paulo</p>
          <p>Kurs ustawicznego kształcenia podyplomowego na Wydziale Stomatologii Uniwersytetu Północnej Karoliny,
            USA</p>
          <p>Wykładowca na międzynarodowych kursach w Ameryce Południowej, USA, Europie i Japonii</p>
          <p>Dyrektor Instytutu Edukacji IvanRonald dla stomatologów i techników dentystycznych</p>
          <p>Dyrektor pracowni technicznej OPEN LAB</p>
        </div>)
      },
      {
        id: 3, name: "dr RADOSŁAW JADACH", fot: 'jadach.jpg', desc: (<div>
          <p>Absolwent Wydziału Lekarsko-Stomatologicznego Akademii Medycznej we Wrocławiu. Etatowy lekarz w Klinice
            Chirurgii Szczękowo-Twarzowej w trakcie specjalizacji, wieloletni nauczyciel akademicki w Katedrze Chorób
            Błony Śluzowej i Przyzębia oraz Ratownictwa Medycznego. Uzupełniające szkolenia z zakresu zarządzania
            tkankami miękkimi w implantologii odbył w prestiżowych ośrodkach w Stanach Zjednoczonych, Niemczech i
            Włoszech. Absolwent zaawansowanych kursów w New York University College of Dentistry. Wykładowca i
            szkoleniowiec na sympozjach i konferencjach krajowych i zagranicznych. W klinice Dental Salon skupia się
            głównie na technikach regeneracji tkanek miękkich oraz rozległej chirurgii odtwórczej wyrostka zębodołowego
            na potrzeby implantologii. Jeden z pierwszych lekarzy, który zastosował zabieg dekortykacji
            przedortodontycznej w kraju za pomocą piezotomu. Członek OSIS-EDI, Piezosurgery Academy, Polskiego
            Towarzystwa Chirurgii Jamy Ustnej i Szczękowo-Twarzowej oraz współzałożyciel iCAT Clubu zrzeszającego i
            rozwijającego tomografię stożkową w Polsce na potrzeby chirurgii regeneracyjnej.</p>
        </div>)
      },
      {
        id: 4, name: "dr ALEKSANDER MAJ", fot: 'maj.jpg', desc: (<div>
          <p>Więcej informacji wkrótce...</p>
        </div>)
      },
      {
        id: 5, name: "dr n. med. LIDIA MAJEWSKA", fot: 'majewska.jpg', desc: (<div>
          <p>Absolwentka Collegium Medicum Uniwersytetu Jagiellońskiego w Krakowie. Członkini Polskiego Towarzystwa
            Medycyny Estetycznej i Anti-Aging. Ukończyła również trzyletnią Podyplomową Szkołę Medycyny Estetycznej
            Polskiego Towarzystwa Lekarskiego oraz studia podyplomowe z zakresu medycyny estetycznej w Krakowskiej
            Wyższej Szkole Promocji Zdrowia. Jest certyfikowanym lekarzem medycyny estetycznej, ekspertem estetyki
            twarzy. Posiada wieloletnie doświadczenie w zaawansowanej praktyce zabiegowej oraz umiejętność tworzenia
            skutecznych programów estetycznych, którą stale rozwija.</p>
          <p>Specjalizuje się w zabiegach z zakresu odmładzania i rewitalizacji skóry oraz korekcji i modelowania
            kształtu twarzy. Jest ekspertem zaawansowanych, nowoczesnych metod i procedur anti-agingowych, których celem
            jest osiągnięcie najbardziej naturalnego, harmonijnego wyglądu przy jednoczesnym długofalowym wzmocnieniu
            kondycji skóry. W swojej pracy często łączy różne metody dla uzyskania najwyższej efektywności terapii.
            Wykorzystuje w tym celu najnowocześniejsze metody i najskuteczniejsze, najpełniej przebadane preparaty.</p>
        </div>)
      },
      {
        id: 6, name: "dr hab. n. med. PIOTR MAJEWSKI", fot: 'majewski.jpg', desc: (<div>
          <p>Absolwent Wydziału Lekarskiego Oddziału Stomatologii Collegium Medicum Uniwersytetu Jagiellońskiego (1992
            r). Odbył studia uzupełniające na Uniwersytecie w Melbourne (Australia) oraz szkolenia w ośrodkach
            implantologicznych w USA, Szwecji, Włoszech, Szwajcarii i Niemczech. Specjalista II stopnia chirurgii
            stomatologicznej. W latach 1996-2000 asystent w Klinice Chirurgii Szczękowo-Twarzowej Collegium Medicum UJ,
            a następnie, przez kolejne trzy lata, asystent w Pracowni Chirurgii Stomatologicznej CMUJ oraz w Katedrze
            Protetyki Instytutu Stomatologii CMUJ. W roku 2003 uzyskał doktorat z zakresu wieloletnich obserwacji
            klinicznych zastosowania wszczepów zębowych jako filarów dla uzupełnień protetycznych. Od 2004 roku
            Kierownik Pracowni Implantologii Instytutu Stomatologii Collegium Medicum Uniwersytetu Jagiellońskiego w
            Krakowie oraz Kierownik Środkowoeuropejskiego Ośrodka Implantologicznego – CEIA (Central European Implant
            Academy). Od roku 2013 wykładowca na New York University, College of Dentistry (NYUCD), w ramach
            podyplomowego kształcenia w zakresie implantologii. W 2013 roku uzyskał tytuł doktora habilitowanego nauk
            medycznych z zakresu badań dotyczących problematyki jakości struktur kostnych twarzoczaszki oraz wpływu
            rodzaju powierzchni wszczepów na sposób ich obciążania konstrukcjami protetycznymi.
          </p>
        </div>)
      },
      {
        id: 7, name: "dr n.med. MICHAŁ TARNAWSKI", fot: 'tarnawski.jpg', desc: (<div>
          <p>Więcej informacji wkrótce...</p>
        </div>)
      },
      {
        id: 8, name: "prof. dr hab. MAŁGORZATA PIETRUSKA", fot: 'pietruska.jpg', desc: (<div>
          <p>W 1992 roku ukończyła studia na Oddziale Stomatologii Wydziału Lekarskiego Akademii Medycznej w
            Białymstoku. Od 1993 do 2004 roku pracowała w Zakładzie Stomatologii Zachowawczej i Periodontologii Akademii
            Medycznej w Białymstoku, na stanowisku adiunkta. W 1998 zdobyła specjalizację II stopnia z periodontolgii, w
            1996 roku obroniła pracę doktorską zaś w 2005 rozprawę habilitacyjną. Jest pierwszym kierownikiem Zakładu
            Chorób Przyzębia i Błony Śluzowej Jamy Ustnej UMB, utworzonym w 2005 roku.Po studiach wiedzę zdobywała na
            licznych stażach i szkoleniach głównie za granicą. Jest autorką ponad 130 publikacji naukowych i doniesień
            zjazdowych, za które była dziewięciokrotnie nagradzana przez Rektora Akademii Medycznej w Białymstoku i
            Polskie Towarzystwo Stomatologiczne. Jest współautorką monografii „Periodontologiczno-implantologiczna
            chirurgia plastyczna”, za którą autorzy otrzymali nagrodę dydaktyczną Ministra Zdrowia i współautorem
            książek „Atlas prac protetycznych do pracy z pacjentem” oraz "Leczenie zespołowe w implantologii. Ciągła
            wędrówka w poszukiwaniu spełnienia". Trzykrotnie była nagradzana prestiżową nagrodą „</p>
          <p>Tytani i mplantologii”. Od lat prowadzi kursy i wykłady w Polsce i za granicą, a od 20100 roku jest
            międzynarodowym wykładowcą European Federation of Periodontology. Wchodzi w skład zespołów redakcyjnych
            następujących czasopism: „Magazyn Stomatologiczny”, „e – Dentico” i „Stomatologia Estetyczna”. Jest
            członkiem Polskiego Towarzystwa Stomatologicznego, OSIS i Podlaskiego Stowarzyszenia Stomatologów.</p>
        </div>)
      },
      {
        id: 9, name: "dr hab. n. med. JAN PIETRUSKI", fot: 'pietruski.jpg', desc: (<div>
          <p>Ukończył studia na Akademii Medycznej w Białymstoku, gdzie w roku 1989 uzyskał dyplom lekarza, a w 1992
            lekarza stomatologa. Po studiach od 1992 roku przez 8 lat pracował w Zakładzie Protetyki Stomatologicznej,
            jako asystent i adiunkt. W roku 1996 obronił wyróżnioną pracę doktorską pt "Badania wybranych funkcji
            granulocytów obojętnochłonnych (PMN) krwi obwodowej, składników dopełniacza i przeciwciał u osób ze
            stomatopatią protetyczną powikłaną kandydiazą". W 1997 uzyskał specjalizację II stopnia z protetyki
            stomatologicznej. W roku 2013 uzyskał stopień doktora habilitowanego na podstawie rozprawy pt "Ocena siły
            retencji wybranych rodzajów koron podwójnych".Wiedzę zawodową zdobywał w kraju i za granicą, we Francji,
            Niemczech, Włoszech, Hiszpanii i USA. Obecnie również jest studentem Kois Centrer, Seattle, USA. Od początku
            kariery lekarskiej publikuje artykuły w czasopismach fachowych. Jest autorem kilkudziesięciu artykułów i
            wystąpień zjazdowych, monografii „Periodontologiczno-implantologiczna chirurgia plastyczna”, która ukazała
            się w 2010r. i współautorem wydawnictw „Atlas prac protetycznych do pracy z pacjentem” oraz "Leczenie
            zespołowe w implantologii. Ciągła wędrówka w poszukiwaniu spełnienia".Za działalność naukową otrzymał szereg
            nagród, m. innymi I i III nagrodę Polskiego Towarzystwa Stomatologicznego za cykl prac drukowanych w
            Protetyce Stomatologicznej i Czasopiśmie Stomatologicznym oraz trzykrotnie nagrodę Rektora Akademii
            Medycznej w Białymstoku za osiągnięcia naukowe. Monografia „Periodontologiczno-implantologiczna chirurgia
            plastyczna” została wyróżniona w 2011 roku nagrodą Ministra Zdrowia, a w 2012 ukazało się jej tłumaczenie na
            język rosyjski. Trzykrotny lauret prestiżowej nagrody Tytani Implantolgii. Dr Jan Pietruski od 1999 roku
            prowadzi w Polsce i za granicą szkolenia dla stomatologów. Dotyczą one zagadnień związanych z protetyką
            stomatologiczną ze szczególnym uwzględnieniem dużych rekonstrukcji protetycznych, zaburzeń zwarcia i
            estetyki.Jest członkiem założycielem i v-ce prezydentem Polskiej Akademii Stomatologii Estetycznej, v-ce
            prezesem podlaskiego oddziału Ogólnopolskiego Stowarzyszenia Implantologii Stomatologicznej, członkiem
            Polskiego Towarzystwa Stomatologicznego i Podlaskiego Stowarzyszenia Stomatologów. Piastuje stanowisko
            redaktora naczelnego polskiego wydania European Journal of Esthetic Dentistry i wchodzi w skład zespołu
            redakcyjnego e-Dentico.</p>
        </div>)
      }
    ]
  }

  componentDidMount() {
    getPageHeight();
    setTimeout(() => {
      getPageHeight();
    }, 500)
  }

  render() {
    return (
        <div className={c.Lectures}>
          <div className={g.container}>
            <h4 className="pageTitle">Wykładowcy</h4>
            <div className={g.row}>
              {this.state.lectures.map(speaker => (
                  <Speaker key={speaker.id} name={speaker.name} fot={speaker.fot} desc={speaker.desc}/>
              ))}
            </div>
          </div>
        </div>
    )
  }
}

export default Lectures;
