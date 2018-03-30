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
          <p>Specjalista stomatologii zachowawczej i&nbsp;endodoncji. Autor i&nbsp;koordynator programów endodoncji
            przedklinicznej prowadzonych na Oddziale Stomatologii AM w&nbsp;Poznaniu dla studentów polsko- i&nbsp;anglojęzycznych.
            Prowadzi wykłady i&nbsp;kursy z&nbsp;zakresu endodoncji, również w&nbsp;ramach kursów specjalizacyjnych. Członek Polskiego
            Towarzystwa Endodontycznego, European Society of Endodontology i&nbsp;Polskiego Stowarzyszenia Stomatologii
            Mikroskopowej. Członek Rady Programowej Czasopisma PTE Endodoncja.pl i&nbsp;Editorial Board magazynu Roots –
            International Magazine of Endodontology. Staż naukowo-szkoleniowy na University of Michigan, AnnArbor, USA.
            Autor i&nbsp;współautor publikacji i&nbsp;doniesień zjazdowych. Jako pierwszy w&nbsp;Wielkopolsce wprowadził do rutynowej
            praktyki leczenie stomatologiczne z&nbsp;wykorzystaniem mikroskopów zabiegowych.</p>
        </div>)
      },
      {
        id: 2, name: "DDS DDT IVAN RONALD HUANCA", fot: 'huanca.jpg', desc: (<div>
          <p>Stomatolog i&nbsp;technik dentystyczny</p>
          <p>Specjalizacja z&nbsp;protetyki w&nbsp;ośrodku APDC Jardim Paulista, Sao Paulo</p>
          <p>Kurs ustawicznego kształcenia podyplomowego na Wydziale Stomatologii Uniwersytetu Północnej Karoliny,
            USA</p>
          <p>Wykładowca na międzynarodowych kursach w&nbsp;Ameryce Południowej, USA, Europie i&nbsp;Japonii</p>
          <p>Dyrektor Instytutu Edukacji IvanRonald dla stomatologów i&nbsp;techników dentystycznych</p>
          <p>Dyrektor pracowni technicznej OPEN LAB</p>
        </div>)
      },
      {
        id: 3, name: "dr RADOSŁAW JADACH", fot: 'jadach.jpg', desc: (<div>
          <p>Absolwent Wydziału Lekarsko-Stomatologicznego Akademii Medycznej we Wrocławiu. Etatowy lekarz w&nbsp;Klinice
            Chirurgii Szczękowo-Twarzowej w&nbsp;trakcie specjalizacji, wieloletni nauczyciel akademicki w&nbsp;Katedrze Chorób
            Błony Śluzowej i&nbsp;Przyzębia oraz Ratownictwa Medycznego. Uzupełniające szkolenia z&nbsp;zakresu zarządzania
            tkankami miękkimi w&nbsp;implantologii odbył w&nbsp;prestiżowych ośrodkach w&nbsp;Stanach Zjednoczonych, Niemczech i&nbsp;Włoszech. Absolwent zaawansowanych kursów w&nbsp;New York University College of Dentistry. Wykładowca i
            szkoleniowiec na sympozjach i&nbsp;konferencjach krajowych i&nbsp;zagranicznych. W klinice Dental Salon skupia się
            głównie na technikach regeneracji tkanek miękkich oraz rozległej chirurgii odtwórczej wyrostka zębodołowego
            na potrzeby implantologii. Jeden z&nbsp;pierwszych lekarzy, który zastosował zabieg dekortykacji
            przedortodontycznej w&nbsp;kraju za pomocą piezotomu. Członek OSIS-EDI, Piezosurgery Academy, Polskiego
            Towarzystwa Chirurgii Jamy Ustnej i&nbsp;Szczękowo-Twarzowej oraz współzałożyciel iCAT Clubu zrzeszającego i&nbsp;rozwijającego tomografię stożkową w&nbsp;Polsce na potrzeby chirurgii regeneracyjnej.</p>
        </div>)
      },
      {
        id: 4, name: "dr ALEKSANDER MAJ", fot: 'maj.jpg', desc: (<div>
          <p>Więcej informacji wkrótce...</p>
        </div>)
      },
      {
        id: 5, name: "dr n. med. LIDIA MAJEWSKA", fot: 'majewska.jpg', desc: (<div>
          <p>Absolwentka Collegium Medicum Uniwersytetu Jagiellońskiego w&nbsp;Krakowie. Członkini Polskiego Towarzystwa
            Medycyny Estetycznej i&nbsp;Anti-Aging. Ukończyła również trzyletnią Podyplomową Szkołę Medycyny Estetycznej
            Polskiego Towarzystwa Lekarskiego oraz studia podyplomowe z&nbsp;zakresu medycyny estetycznej w&nbsp;Krakowskiej
            Wyższej Szkole Promocji Zdrowia. Jest certyfikowanym lekarzem medycyny estetycznej, ekspertem estetyki
            twarzy. Posiada wieloletnie doświadczenie w&nbsp;zaawansowanej praktyce zabiegowej oraz umiejętność tworzenia
            skutecznych programów estetycznych, którą stale rozwija.</p>
          <p>Specjalizuje się w&nbsp;zabiegach z&nbsp;zakresu odmładzania i&nbsp;rewitalizacji skóry oraz korekcji i&nbsp;modelowania
            kształtu twarzy. Jest ekspertem zaawansowanych, nowoczesnych metod i&nbsp;procedur anti-agingowych, których celem
            jest osiągnięcie najbardziej naturalnego, harmonijnego wyglądu przy jednoczesnym długofalowym wzmocnieniu
            kondycji skóry. W swojej pracy często łączy różne metody dla uzyskania najwyższej efektywności terapii.
            Wykorzystuje w&nbsp;tym celu najnowocześniejsze metody i&nbsp;najskuteczniejsze, najpełniej przebadane preparaty.</p>
        </div>)
      },
      {
        id: 6, name: "dr hab. n. med. PIOTR MAJEWSKI", fot: 'majewski.jpg', desc: (<div>
          <p>Absolwent Wydziału Lekarskiego Oddziału Stomatologii Collegium Medicum Uniwersytetu Jagiellońskiego (1992
            r). Odbył studia uzupełniające na Uniwersytecie w&nbsp;Melbourne (Australia) oraz szkolenia w&nbsp;ośrodkach
            implantologicznych w&nbsp;USA, Szwecji, Włoszech, Szwajcarii i&nbsp;Niemczech. Specjalista II stopnia chirurgii
            stomatologicznej. W latach 1996-2000 asystent w&nbsp;Klinice Chirurgii Szczękowo-Twarzowej Collegium Medicum UJ,
            a&nbsp;następnie, przez kolejne trzy lata, asystent w&nbsp;Pracowni Chirurgii Stomatologicznej CMUJ oraz w&nbsp;Katedrze
            Protetyki Instytutu Stomatologii CMUJ. W roku 2003 uzyskał doktorat z&nbsp;zakresu wieloletnich obserwacji
            klinicznych zastosowania wszczepów zębowych jako filarów dla uzupełnień protetycznych. Od 2004 roku
            Kierownik Pracowni Implantologii Instytutu Stomatologii Collegium Medicum Uniwersytetu Jagiellońskiego w&nbsp;Krakowie oraz Kierownik Środkowoeuropejskiego Ośrodka Implantologicznego – CEIA (Central European Implant
            Academy). Od roku 2013 wykładowca na New York University, College of Dentistry (NYUCD), w&nbsp;ramach
            podyplomowego kształcenia w&nbsp;zakresie implantologii. W 2013 roku uzyskał tytuł doktora habilitowanego nauk
            medycznych z&nbsp;zakresu badań dotyczących problematyki jakości struktur kostnych twarzoczaszki oraz wpływu
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
          <p>W 1992 roku ukończyła studia na Oddziale Stomatologii Wydziału Lekarskiego Akademii Medycznej w&nbsp;Białymstoku. Od 1993 do 2004 roku pracowała w&nbsp;Zakładzie Stomatologii Zachowawczej i&nbsp;Periodontologii Akademii
            Medycznej w&nbsp;Białymstoku, na stanowisku adiunkta. W 1998 zdobyła specjalizację II stopnia z&nbsp;periodontolgii, w&nbsp;1996 roku obroniła pracę doktorską zaś w&nbsp;2005 rozprawę habilitacyjną. Jest pierwszym kierownikiem Zakładu
            Chorób Przyzębia i&nbsp;Błony Śluzowej Jamy Ustnej UMB, utworzonym w&nbsp;2005 roku.Po studiach wiedzę zdobywała na
            licznych stażach i&nbsp;szkoleniach głównie za granicą. Jest autorką ponad 130 publikacji naukowych i&nbsp;doniesień
            zjazdowych, za które była dziewięciokrotnie nagradzana przez Rektora Akademii Medycznej w&nbsp;Białymstoku i&nbsp;Polskie Towarzystwo Stomatologiczne. Jest współautorką monografii „Periodontologiczno-implantologiczna
            chirurgia plastyczna”, za którą autorzy otrzymali nagrodę dydaktyczną Ministra Zdrowia i&nbsp;współautorem
            książek „Atlas prac protetycznych do pracy z&nbsp;pacjentem” oraz "Leczenie zespołowe w&nbsp;implantologii. Ciągła
            wędrówka w&nbsp;poszukiwaniu spełnienia". Trzykrotnie była nagradzana prestiżową nagrodą „</p>
          <p>Tytani i&nbsp;mplantologii”. Od lat prowadzi kursy i&nbsp;wykłady w&nbsp;Polsce i&nbsp;za granicą, a&nbsp;od 20100 roku jest
            międzynarodowym wykładowcą European Federation of Periodontology. Wchodzi w&nbsp;skład zespołów redakcyjnych
            następujących czasopism: „Magazyn Stomatologiczny”, „e – Dentico” i&nbsp;„Stomatologia Estetyczna”. Jest
            członkiem Polskiego Towarzystwa Stomatologicznego, OSIS i&nbsp;Podlaskiego Stowarzyszenia Stomatologów.</p>
        </div>)
      },
      {
        id: 9, name: "dr hab. n. med. JAN PIETRUSKI", fot: 'pietruski.jpg', desc: (<div>
          <p>Ukończył studia na Akademii Medycznej w&nbsp;Białymstoku, gdzie w&nbsp;roku 1989 uzyskał dyplom lekarza, a&nbsp;w 1992
            lekarza stomatologa. Po studiach od 1992 roku przez 8 lat pracował w&nbsp;Zakładzie Protetyki Stomatologicznej,
            jako asystent i&nbsp;adiunkt. W roku 1996 obronił wyróżnioną pracę doktorską pt "Badania wybranych funkcji
            granulocytów obojętnochłonnych (PMN) krwi obwodowej, składników dopełniacza i&nbsp;przeciwciał u osób ze
            stomatopatią protetyczną powikłaną kandydiazą". W 1997 uzyskał specjalizację II stopnia z&nbsp;protetyki
            stomatologicznej. W roku 2013 uzyskał stopień doktora habilitowanego na podstawie rozprawy pt "Ocena siły
            retencji wybranych rodzajów koron podwójnych".Wiedzę zawodową zdobywał w&nbsp;kraju i&nbsp;za granicą, we Francji,
            Niemczech, Włoszech, Hiszpanii i&nbsp;USA. Obecnie również jest studentem Kois Centrer, Seattle, USA. Od początku
            kariery lekarskiej publikuje artykuły w&nbsp;czasopismach fachowych. Jest autorem kilkudziesięciu artykułów i&nbsp;wystąpień zjazdowych, monografii „Periodontologiczno-implantologiczna chirurgia plastyczna”, która ukazała
            się w&nbsp;2010r. i&nbsp;współautorem wydawnictw „Atlas prac protetycznych do pracy z&nbsp;pacjentem” oraz "Leczenie
            zespołowe w&nbsp;implantologii. Ciągła wędrówka w&nbsp;poszukiwaniu spełnienia".Za działalność naukową otrzymał szereg
            nagród, m. innymi I i&nbsp;III nagrodę Polskiego Towarzystwa Stomatologicznego za cykl prac drukowanych w&nbsp;Protetyce Stomatologicznej i&nbsp;Czasopiśmie Stomatologicznym oraz trzykrotnie nagrodę Rektora Akademii
            Medycznej w&nbsp;Białymstoku za osiągnięcia naukowe. Monografia „Periodontologiczno-implantologiczna chirurgia
            plastyczna” została wyróżniona w&nbsp;2011 roku nagrodą Ministra Zdrowia, a&nbsp;w&nbsp;2012 ukazało się jej tłumaczenie na
            język rosyjski. Trzykrotny lauret prestiżowej nagrody Tytani Implantolgii. Dr Jan Pietruski od 1999 roku
            prowadzi w&nbsp;Polsce i&nbsp;za granicą szkolenia dla stomatologów. Dotyczą one zagadnień związanych z&nbsp;protetyką
            stomatologiczną ze szczególnym uwzględnieniem dużych rekonstrukcji protetycznych, zaburzeń zwarcia i&nbsp;estetyki.Jest członkiem założycielem i&nbsp;v-ce prezydentem Polskiej Akademii Stomatologii Estetycznej, v-ce
            prezesem podlaskiego oddziału Ogólnopolskiego Stowarzyszenia Implantologii Stomatologicznej, członkiem
            Polskiego Towarzystwa Stomatologicznego i&nbsp;Podlaskiego Stowarzyszenia Stomatologów. Piastuje stanowisko
            redaktora naczelnego polskiego wydania European Journal of Esthetic Dentistry i&nbsp;wchodzi w&nbsp;skład zespołu
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
