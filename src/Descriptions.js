import React from 'react';

const descriptions = {
  'duel': <span>
    Każdy wybiera 1 kartę do pojedynku. Najsłabszy bierze wszystko.<br/><b className="action">Akcje</b> i&nbsp;<b className="monster">Potwory</b> = 1&nbsp;punkt.
  </span>,
  'headshot': <span>
    Natychmiast zabij dowolnego <b className="monster">Potwora</b>. Zrzuć na cmentarz.
  </span>,
  'evasion': <span>
    Przenieś <b className="monster">Potwora</b> z&nbsp;dowolnego pola, na inne najsłabsze, niekoniecznie swoje.
  </span>,
  'landmine': <span>
    Wybierz kto bierze 5&nbsp;kart. Może się obronić <b className="attack">Atakiem</b> lub <b className="monster">Potworem</b>. Bierze ze stosu tyle, ile jest na jego karcie.
  </span>,
}

export default descriptions