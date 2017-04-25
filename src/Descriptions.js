import React from 'react';

const descriptions = {
  'duel': <span>
    Każdy wybiera 1 kartę do pojedynku. Ten, kto wybrał najsłabszą kartę, bierze wszystko.<br/><b className="action">Akcje</b> mają wartość "1".
  </span>,
  'headshot': <span>
    Zabij <b className="monster">Potwora</b> z dowolnego pola bitwy. Zrzuć na cmentarz.
  </span>,
  'evasion': <span>
    Przenieś <b className="monster">Potwora</b> z&nbsp;dowolnego pola bitwy, na inne.
  </span>,
  'landmine': <span>
    Wybierz kto bierze 5&nbsp;kart. Gracz może się "obronić" zrzucając <b className="attack">Atak</b> lub <b className="monster">Potwora</b>. Bierze ze stosu tyle, ile jest na jego karcie.
  </span>,
  'thief': <span>
    Ukradnij przeciwnikowi to, co wyrzucił na stos ucieczki. Jego zagrane karty nie dają żadnego efektu. Gracz traci swój ruch.
  </span>,
}

export default descriptions