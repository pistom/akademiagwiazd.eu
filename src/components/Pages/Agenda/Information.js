import React from 'react';
import c from './Agenda.css'

const information = [
  {
    icon: "01",
    iconTitle: 'Implanty i&nbsp;tkanki miękkie',
    title: "PODSTAWY PLANOWANIA LECZENIA IMPLANTOPROTETYCZNEGO",
    author: "prof. dr hab. MAŁGORZATA PIETRUSKA",
    desc: (<div>
      <p>Uzupełnienie braków zębowych z użyciem implantów jest obecnie standardem leczenia stomatologicznego. Pogrążenie
        implantu nie jest jednak na ogółzabiegiem prostym, z uwagi na obecność różnego typu deformacji tkanek kostnej i&nbsp;
        miękkich, które powstały na skutek patologii będących przyczyną utraty zębów. Dlatego osiągniecie optymalnej
        estetyki uzupełnień protetycznych wspartych na implantach może stanowić poważne wyzwanie, w&nbsp;związku z czym
        leczenie implantologiczne musi być poparte wnikliwą, interdyscyplinarną diagnostyką i&nbsp;planowaniem. Planowanie
        procesu terapeutycznego wymaga rozważenia różnorodnych metod, nie tylko z zakresu chirurgii tkanki kostnej i&nbsp;
        miękkich, ale i&nbsp;ortodoncji czy protetyki. Celem wykładu będzie przedstawienie najważniejszych:</p>
      <ul>
        <li>kryteriów wyboru uzupełnienia protetycznego (klasyczne/wsparte na implantach)</li>
        <li>zasad doboru uzupełnienia implantoprotetycznego w&nbsp;zależności od indywidualnych warunków</li>
        <li>informacji na temat 3D pozycjonowania implantu oraz rozmieszczenia i&nbsp;liczby implantów</li>
        <li>danych dotyczących oceny warunków kostnych i&nbsp;statusu tkanek miękkich pod kątem konieczności zastosowania
          technik augmentacyjnych lub z zakresu ortodoncji
        </li>
        <li>komplikacji leczenia rzutujących na funkcję i&nbsp;estetykę uzębienia protetycznego.</li>
      </ul>
    </div>)
  },

  {
    icon: "05",
    iconTitle: "Okluzja",
    title: "OKLUZJA",
    author: "dr hab. n. med. JAN PIETRUSKI",
    desc: (<div>
      <p>Niezależnie od specjalności, zasady diagnostyki i&nbsp;planowania leczenia w&nbsp;stomatologii oparte są na tych samych
        zasadach. Cel zawsze pozostaje taki sam – osiągnięcie stabilności narządu żucia. Przez pojęcie to rozumiemy
        funkcję, jaką dla narządu zaprojektowała natura, która trwa i&nbsp;nie prowadzi do jego destrukcji. Dotyczy to
        wszystkich struktur poczynając od zębów, poprzez przyzębie i&nbsp;kość na stawach skroniowo-żuchwowych i&nbsp;otaczających
        je strukturach skończywszy. W wykładach przedstawiony zostanie zarys postępowania na etapie diagnostyki,
        planowania i&nbsp;prowadzenia leczenia stomatologicznego mającego na celu zapewnienie stabilnej funkcji narządu
        żucia.
        Analiza wyjściowej sytuacji pozwala na wstępie określić jakie specjalności stomatologiczne będą niezbędne, aby
        leczenie mogło zostać zakończone sukcesem.</p>
    </div>)
  },

  {
    icon: "01",
    iconTitle: "Implanty i&nbsp;tkanki miękkie",
    title: "LECZENIE IMPLANTOPROTETYCZNE - POPRAWA JAKOŚCI ŻYCIA, CZY ZAGROŻENIE DLA PACJENTA ? MOŻLIWOŚCI I OGRANICZENIA IMPLANTOLOGI ZĘBOWEJ",
    author: "dr hab. n. med. Piotr MAJEWSKI",
    desc: (<div>
      <p>Współczesna implantoprotetyka, to intensywnie rozwijająca się dziedzina stomatologii. Wykorzystywane są różne
        techniki zabiegowe, materiały i&nbsp;biomateriały do regeneracji, leczenia protetycznego. Prawidłowy rezultat
        leczenia zależy od wielu czynników, w&nbsp;tym jednym z najważniejszych jest właściwa diagnoza i&nbsp;kwalifikacja do
        leczenia adekwatnego i&nbsp;indywidualnie dopasowanego do każdego przypadku klinicznego. W wykładzie autor, na
        podstawie własnego, obszernego materiału klinicznego przedstawi różne warianty leczenia implantoprotetycznego,
        ze szczególnym uwzględnieniem wskazań i&nbsp;przeciwskazań do natychmiastowej implantacji i&nbsp;obciążenia wszczepów
        w&nbsp;strefie estetycznej oraz przypadków leczenia bezzębia. W wykładzie zostaną przedstawione zasady kwalifikacji,
        aspekty funkcji i&nbsp;estetyki uzupełnień protetycznych, fazy chirurgiczne, przygotowania podłoża dla implantów,
        a&nbsp;także możliwości zastosowania uzupełnień protetycznych w&nbsp;zależności od kwalifikacji. Zostaną również poruszone
        kwestie współpracy chirurga z lekarzem protetykiem oraz zasady długoterminowego utrzymania prawidłowego
        rezultatu leczenia implantoprotetycznego. Zostaną również przedstawione metody leczenia powikłań po leczeniu
        implantoprotetycznym, oraz profilaktyki periimplantitis.</p>
    </div>)
  },

  {
    icon: "04",
    iconTitle: "Medycyna estetyczna",
    title: "MEDYCYNA ESTETYCZNA",
    author: "dr n. med. LIDIA MAJEWSKA",
    desc: (<div>
      <ol>
        <li>
          <p>Zastosowanie toksyny botulinowej w&nbsp;medycynie estetycznej (45 min)</p>
          <ul>
            <li>Wskazania i&nbsp;przeciwwskazania</li>
            <li>Dawkowanie</li>
            <li>Protokół zabiegowy</li>
          </ul>
        </li>
        <li>
          <p>Zastosowanie kwasu hialuronowego w&nbsp;wybranych zabiegach medycyny estetycznej (45 min)</p>
          <ul>
            <li>Dobór wypełniacza a&nbsp;obszar leczenia</li>
            <li>Wskazania i&nbsp;przeciwwskazania</li>
            <li>Procedury zabiegowe w&nbsp;okolicy ust i&nbsp;wokół ust</li>
          </ul>
        </li>
        <li>
          <p>Osocze i&nbsp;fibryna bogatopłytkowa jako przykład nowoczesnej terapii autogennej w&nbsp;stomatologii i&nbsp;medycynie
            estetycznej. (45 min) Wykład jest połączony z pokazem praktycznego zastosowania osocza i&nbsp;fibryny
            bogatopłytkowej w&nbsp;zabiegach medycyny estetycznej. (45 min)</p>
        </li>
      </ol>
    </div>)
  },

  {
    icon: "03",
    iconTitle: "Kompozyty",
    title: "KOMPOZYTY",
    author: "dr ALEKSANDER MAJ",
    desc: (<div>
      <p>„Jest mi niezmiernie miło wystąpić na tej konferencji i&nbsp;poprowadzić panel kompozytowy. Przedstawię na nim
        najnowsze nowinki oraz sprawdzone rozwiązania dotyczące adhezji oraz materiałów kompozytowych używanych
        w&nbsp;gabinecie stomatologicznym na co dzień. Nie zabraknie również informacji na temat prac pośrednich wykonanych
        z&nbsp;kompozytu laboratoryjnego oraz związanej z tym „mało-inwazyjności” Zapraszam.”</p>
    </div>)
  },

  {
    icon: "03",
    iconTitle: "Kompozyty",
    title: "ODBUDOWY KOMPOZYTOWE BEZPOŚREDNIE, UZPEŁNIENIA TYMCZASOWE",
    author: "DDS DDT IVAN RONALD HUANCA",
    desc: (<div>
      <p>W dzisiejszym świecie słowa odmłodzenie, dobre samopoczucie i&nbsp;równowaga są stale cytowane w&nbsp;różnych mediach.
        Oprócz tego pacjenci są coraz bardziej wymagający. Co w&nbsp;takim razie zrobić, aby temu sprostać? Ten wykład
        pokazuje w&nbsp;sposób obiektywny i&nbsp;intensywny każdemu uczestnikowi, jak oceniać, planować i&nbsp;wykonywać prace
        tymczasowe pośrednie na wysokim poziomie, a&nbsp;następnie prace bezpośrednie w&nbsp;odcinku
        przednim i&nbsp;bocznym, aby uzyskać doskonały efekt estetyczny i&nbsp;funkcjonalny. Umożliwia specjalistom uzyskanie
        w&nbsp;sposób naturalny tymczasowych uzupełnień z żywicy akrylowej i&nbsp;żywic kompozytowych, pokazuje ich właściwe
        zastosowanie, wychodząc naprzeciw przede wszystkim potrzebom pacjentów.</p>
    </div>)
  },

  {
    icon: "02",
    iconTitle: "DSD i&nbsp;ortodoncja",
    title: "„THE SMILE JOURNEY” - TWORZENIE NATURALNIE PIĘKNYCH UŚMIECHÓW Z WYKORZYSTANIEM TECHNOLOGI CYFROWYCH",
    author: "dr n. med. BARTOSZ CERKASKI",
    desc: (<div>
      <p>Odkryj Koncept DSD i&nbsp;wykorzystaj korzyści Emocjonalnej, Interdyscyplinarnej i&nbsp;Cyfrowej Stomatologii. Dynamiczne
        spotkanie z Digital Smile Design wprowadzające w&nbsp;świat procesów cyfrowych z pokazem na żywo.</p>

      <h4 className={c.white}>KORZYŚCI</h4>
      <p>W trakcie prezentacji dowiesz się jak czym jest Cyfrowe ProjektowanieUśmiechu — Digital Smile Design (DSD)
        i&nbsp;jak współczesna technologia pozwalana osiągnięcie doskonałości w&nbsp;codziennej stomatologii funkcjonalnej
        i&nbsp;estetycznej.</p>

      <p>Dowiesz się jak współczesna technologia zmienia Sztukę Kreowania Uśmiechu, aby w&nbsp;sposób świadomy realizować
        pragnienia pacjentów o naturalnym, pięknym uśmiechu, harmonizującym z cechami ich psychiki i&nbsp;osobowością.
        Przekonasz się w&nbsp;jaki sposób DSD może pomóc usystematyzować Proces Leczenia Stomatologicznego i&nbsp;osiągnąć
        konsekwentne podejście do diagnostyki, komunikacji, planowania leczenia, jego realizacji i&nbsp;opieki nad pacjentem
        po zakończeniu leczenia Posmakujesz Stomatologii Emocjonalnej - Zobaczysz na żywo czym jest Wizualizacja
        Estetyczna i&nbsp;Wizualna Komunikacja oraz na czym polega magia efektu WOW Zrozumiesz Klasyfikację Leczenia
        z&nbsp;Perspektywy Cyfrowej Ramy Uśmiechu DSD z przykładami klinicznymi, która optymalizuje codzienną pracę
        kliniczną</p>

      <h4 className={c.white}>DLA KOGO ?</h4>
      <p>Lekarze dentyści, Technicy dentystyczni, właściciele klinik i&nbsp;kadra zarządzająca zespołami klinicznymi,
        studenci stomatologii i&nbsp;profesjonaliści stomatologiczni</p>
      <ul>
        <li>oferujący wysokiej jakości leczenie estetyczne, którym zależy na poprawie skuteczności klinicznej
          i&nbsp;przewidywalności osiąganych wyników dzięki zastosowaniu technologii cyfrowej
        </li>
        <li>pragnący poznać zalety procesu Dynamicznej Analizy Estetycznej i&nbsp;Projektowania Uśmiechu</li>
        <li>zainteresowani poprawą skuteczności prezentacji planu leczenia pacjentowi i&nbsp;tym samym akceptacji przez niego
          proponowanych rozwiązań.
        </li>
        <li>chcący udoskonalić komunikację między członkami zespołu i&nbsp;laboratorium technicznym i&nbsp;zoptymalizować proces
          podejmowania decyzji i&nbsp;kompleksowego planowania leczenia.
        </li>
        <li>Potrzebujących skutecznych i&nbsp;sprawdzonych rozwiązań do osiągnięcia sukcesu swojej praktyki</li>
      </ul>
    </div>)
  }


];

export default information;


