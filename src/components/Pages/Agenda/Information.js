import React from 'react';
import c from './Agenda.css'

const information = [
  {
    icon: "01",
    iconTitle: 'Implanty i tkanki miękkie',
    title: "PODSTAWY PLANOWANIA LECZENIA IMPLANTOPROTETYCZNEGO",
    author: "prof. dr hab. MAŁGORZATA PIETRUSKA",
    desc: (<div>
      <p>Uzupełnienie braków zębowych z użyciem implantów jest obecnie standardem leczenia stomatologicznego. Pogrążenie
        implantu nie jest jednak na ogółzabiegiem prostym, z uwagi na obecność różnego typu deformacji tkanek kostnej i
        miękkich, które powstały na skutek patologii będących przyczyną utraty zębów. Dlatego osiągniecie optymalnej
        estetyki uzupełnień protetycznych wspartych na implantach może stanowić poważne wyzwanie, w związku z czym
        leczenie implantologiczne musi być poparte wnikliwą, interdyscyplinarną diagnostyką i planowaniem. Planowanie
        procesu terapeutycznego wymaga rozważenia różnorodnych metod, nie tylko z zakresu chirurgii tkanki kostnej i
        miękkich, ale i ortodoncji czy protetyki. Celem wykładu będzie przedstawienie najważniejszych:</p>
      <ul>
        <li>kryteriów wyboru uzupełnienia protetycznego (klasyczne/wsparte na implantach)</li>
        <li>zasad doboru uzupełnienia implantoprotetycznego w zależności od indywidualnych warunków</li>
        <li>informacji na temat 3D pozycjonowania implantu oraz rozmieszczenia i liczby implantów</li>
        <li>danych dotyczących oceny warunków kostnych i statusu tkanek miękkich pod kątem konieczności zastosowania
          technik augmentacyjnych lub z zakresu ortodoncji
        </li>
        <li>komplikacji leczenia rzutujących na funkcję i estetykę uzębienia protetycznego.</li>
      </ul>
    </div>)
  },

  {
    icon: "05",
    iconTitle: "Okluzja",
    title: "OKLUZJA",
    author: "dr hab. n. med. JAN PIETRUSKI",
    desc: (<div>
      <p>Niezależnie od specjalności, zasady diagnostyki i planowania leczenia w stomatologii oparte są na tych samych
        zasadach. Cel zawsze pozostaje taki sam – osiągnięcie stabilności narządu żucia. Przez pojęcie to rozumiemy
        funkcję, jaką dla narządu zaprojektowała natura, która trwa i nie prowadzi do jego destrukcji. Dotyczy to
        wszystkich struktur poczynając od zębów, poprzez przyzębie i kość na stawach skroniowo-żuchwowych i otaczających
        je strukturach skończywszy. W wykładach przedstawiony zostanie zarys postępowania na etapie diagnostyki,
        planowania i prowadzenia leczenia stomatologicznego mającego na celu zapewnienie stabilnej funkcji narządu
        żucia.
        Analiza wyjściowej sytuacji pozwala na wstępie określić jakie specjalności stomatologiczne będą niezbędne, aby
        leczenie mogło zostać zakończone sukcesem.</p>
    </div>)
  },

  {
    icon: "01",
    iconTitle: "Implanty i tkanki miękkie",
    title: "LECZENIE IMPLANTOPROTETYCZNE - POPRAWA JAKOŚCI ŻYCIA, CZY ZAGROŻENIE DLA PACJENTA ? MOŻLIWOŚCI I OGRANICZENIA IMPLANTOLOGI ZĘBOWEJ",
    author: "dr hab. n. med. Piotr MAJEWSKI",
    desc: (<div>
      <p>Współczesna implantoprotetyka, to intensywnie rozwijająca się dziedzina stomatologii. Wykorzystywane są różne
        techniki zabiegowe, materiały i biomateriały do regeneracji, leczenia protetycznego. Prawidłowy rezultat
        leczenia zależy od wielu czynników, w tym jednym z najważniejszych jest właściwa diagnoza i kwalifikacja do
        leczenia adekwatnego i indywidualnie dopasowanego do każdego przypadku klinicznego. W wykładzie autor, na
        podstawie własnego, obszernego materiału klinicznego przedstawi różne warianty leczenia implantoprotetycznego,
        ze szczególnym uwzględnieniem wskazań i przeciwskazań do natychmiastowej implantacji i obciążenia wszczepów w
        strefie estetycznej oraz przypadków leczenia bezzębia. W wykładzie zostaną przedstawione zasady kwalifikacji,
        aspekty funkcji i estetyki uzupełnień protetycznych, fazy chirurgiczne, przygotowania podłoża dla implantów, a
        także możliwości zastosowania uzupełnień protetycznych w zależności od kwalifikacji. Zostaną również poruszone
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
          <p>Zastosowanie toksyny botulinowej w medycynie estetycznej (45 min)</p>
          <ul>
            <li>Wskazania i przeciwwskazania</li>
            <li>Dawkowanie</li>
            <li>Protokół zabiegowy</li>
          </ul>
        </li>
        <li>
          <p>Zastosowanie kwasu hialuronowego w wybranych zabiegach medycyny estetycznej (45 min)</p>
          <ul>
            <li>Dobór wypełniacza a obszar leczenia</li>
            <li>Wskazania i przeciwwskazania</li>
            <li>Procedury zabiegowe w okolicy ust i wokół ust</li>
          </ul>
        </li>
        <li>
          <p>Osocze i fibryna bogatopłytkowa jako przykład nowoczesnej terapii autogennej w stomatologii i medycynie
            estetycznej. (45 min) Wykład jest połączony z pokazem praktycznego zastosowania osocza i fibryny
            bogatopłytkowej w zabiegach medycyny estetycznej. (45 min)</p>
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
      <p>„Jest mi niezmiernie miło wystąpić na tej konferencji i poprowadzić panel kompozytowy. Przedstawię na nim
        najnowsze nowinki oraz sprawdzone rozwiązania dotyczące adhezji oraz materiałów kompozytowych używanych w
        gabinecie stomatologicznym na co dzień. Nie zabraknie również informacji na temat prac pośrednich wykonanych z
        kompozytu laboratoryjnego oraz związanej z tym „mało-inwazyjności” Zapraszam.”</p>
    </div>)
  },

  {
    icon: "03",
    iconTitle: "Kompozyty",
    title: "ODBUDOWY KOMPOZYTOWE BEZPOŚREDNIE, UZPEŁNIENIA TYMCZASOWE",
    author: "DDS DDT IVAN RONALD HUANCA",
    desc: (<div>
      <p>W dzisiejszym świecie słowa odmłodzenie, dobre samopoczucie i równowaga są stale cytowane w różnych mediach.
        Oprócz tego pacjenci są coraz bardziej wymagający. Co w takim razie zrobić, aby temu sprostać? Ten wykład
        pokazuje w sposób obiektywny i intensywny każdemu uczestnikowi, jak oceniać, planować i wykonywać prace
        tymczasowe pośrednie na wysokim poziomie, a następnie prace bezpośrednie w odcinku
        przednim i bocznym, aby uzyskać doskonały efekt estetyczny i funkcjonalny. Umożliwia specjalistom uzyskanie w
        sposób naturalny tymczasowych uzupełnień z żywicy akrylowej i żywic kompozytowych, pokazuje ich właściwe
        zastosowanie, wychodząc naprzeciw przede wszystkim potrzebom pacjentów.</p>
    </div>)
  },

  {
    icon: "02",
    iconTitle: "DSD i ortodoncja",
    title: "„THE SMILE JOURNEY” - TWORZENIE NATURALNIE PIĘKNYCH UŚMIECHÓW Z WYKORZYSTANIEM TECHNOLOGI CYFROWYCH",
    author: "dr n. med. BARTOSZ CERKASKI",
    desc: (<div>
      <p>Odkryj Koncept DSD i wykorzystaj korzyści Emocjonalnej, Interdyscyplinarnej i Cyfrowej Stomatologii. Dynamiczne
        spotkanie z Digital Smile Design wprowadzające w świat procesów cyfrowych z pokazem na żywo.</p>

      <h4 className={c.white}>KORZYŚCI</h4>
      <p>W trakcie prezentacji dowiesz się jak czym jest Cyfrowe ProjektowanieUśmiechu — Digital Smile Design (DSD) i
        jak współczesna technologia pozwalana osiągnięcie doskonałości w codziennej stomatologii funkcjonalnej i
        estetycznej.</p>

      <p>Dowiesz się jak współczesna technologia zmienia Sztukę Kreowania Uśmiechu, aby w sposób świadomy realizować
        pragnienia pacjentów o naturalnym, pięknym uśmiechu, harmonizującym z cechami ich psychiki i osobowością.
        Przekonasz się w jaki sposób DSD może pomóc usystematyzować Proces Leczenia Stomatologicznego i osiągnąć
        konsekwentne podejście do diagnostyki, komunikacji, planowania leczenia, jego realizacji i opieki nad pacjentem
        po zakończeniu leczenia Posmakujesz Stomatologii Emocjonalnej - Zobaczysz na żywo czym jest Wizualizacja
        Estetyczna i Wizualna Komunikacja oraz na czym polega magia efektu WOW Zrozumiesz Klasyfikację Leczenia z
        Perspektywy Cyfrowej Ramy Uśmiechu DSD z przykładami klinicznymi, która optymalizuje codzienną pracę
        kliniczną</p>

      <h4 className={c.white}>DLA KOGO ?</h4>
      <p>Lekarze dentyści, Technicy dentystyczni, właściciele klinik i kadra zarządzająca zespołami klinicznymi,
        studenci stomatologii i profesjonaliści stomatologiczni</p>
      <ul>
        <li>oferujący wysokiej jakości leczenie estetyczne, którym zależy na poprawie skuteczności klinicznej i
          przewidywalności osiąganych wyników dzięki zastosowaniu technologii cyfrowej
        </li>
        <li>pragnący poznać zalety procesu Dynamicznej Analizy Estetycznej i Projektowania Uśmiechu</li>
        <li>zainteresowani poprawą skuteczności prezentacji planu leczenia pacjentowi i tym samym akceptacji przez niego
          proponowanych rozwiązań.
        </li>
        <li>chcący udoskonalić komunikację między członkami zespołu i laboratorium technicznym i zoptymalizować proces
          podejmowania decyzji i kompleksowego planowania leczenia.
        </li>
        <li>Potrzebujących skutecznych i sprawdzonych rozwiązań do osiągnięcia sukcesu swojej praktyki</li>
      </ul>
    </div>)
  }


];

export default information;


