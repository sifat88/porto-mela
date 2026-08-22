/* ---------------------------------------------------------------
   OPTIONAL. You can ignore this file completely.

   The show finds images by their filename, so normally you just drop
   a picture into the right folder and it appears:

     media/porto/porto-1.jpg          media/porto/porto-2.jpg  …
     media/bangladesh/bd-1.jpg        media/bangladesh/bd-2.jpg …
     media/sponsors/sponsor-1.png     media/sponsors/sponsor-2.png …
     media/slides/extra/extra-1.png   media/slides/extra/extra-2.png …

   Gaps in the numbers are fine. jpg, jpeg, png and webp all work.

   This file is only for pictures you do NOT want to rename. Add the
   path exactly as it sits inside the folder and it gets included too.
   --------------------------------------------------------------- */
window.MELA_MEDIA = {
  porto:      [],   // e.g. "media/porto/ribeira-sunset.jpg"
  bangladesh: [],
  sponsors:   [],
  extras:     [],   // extra full-screen designed slides
  ad1:        null, // the sponsor's first screen, if not media/slides/ad-1.jpg
  ad2:        null, // the sponsor's second screen
  winner:     null  // the flight ticket winner card
};
