# Exercise 03 — Hints

Five hints, one per bug, encoded so your eyes can't grab them by accident. Take them one at a time.

```bash
node scripts/reveal.mjs 03 hint 1     # the activity log
node scripts/reveal.mjs 03 hint 2     # undo
node scripts/reveal.mjs 03 hint 3     # the due badges
node scripts/reveal.mjs 03 hint 4     # the white screen
node scripts/reveal.mjs 03 hint 5     # the type error
```

Fix the white screen first — hint 4 — if it's stopping you seeing anything else.

<!--rot13:Hint 1 - the activity log forgets-->
JURER: fep/Ncc.gfk, va gur zbir unaqyre. Bar yvar hcqngrf gur obneq naq bar yvar hcqngrf gur ybt.
Gur obneq yvar vf pbeerpg naq gur ybt yvar vf abg, fb ernq gurz nf n cnve naq nfx jung gur obneq
yvar qbrf gung gur ybt yvar qbrfa'g.

XVAQ: gur unaqyre vf jenccrq va fbzrguvat gung qrpvqrf jura gur shapgvba trgf erohvyg. Vs vg arire
trgf erohvyg, gura gur inyhrf vg pybfrq bire ba gur svefg eraqre ner gur inyhrf vg jvyy hfr sberire.
Gur obneq hcqngr fvqrfgrcf guvf ol nfxvat Ernpg sbe gur pheerag inyhr vafgrnq bs hfvat gur pncgherq
bar. Gur ybt hcqngr hfrf gur pncgherq bar.

Nfx lbhefrys jung `npgvivgl` vf, rirel fvatyr gvzr gung unaqyre ehaf. Gura ybbx ng jung gur ybt
fubjf: rknpgyl bar ragel. Jung fgnegvat inyhr jbhyq cebqhpr rknpgyl bar ragel, ab znggre ubj znal
zbirf lbh znxr?

GUR YVAR: ybbx ng gur qrcraqrapl neenl ba unaqyrZbir, naq ng jung frgNpgvivgl vf fcernqvat.
<!--/rot13-->

<!--rot13:Hint 2 - undo can't reach the start-->
JURER: fep/Ncc.gfk. Haqb vf n cbvagre vagb na neenl bs obneq fancfubgf. Gurer ner guerr rkcerffvbaf
jbegu ernqvat: gur bar gung zbirf gur cbvagre, gur bar gung qrpvqrf jurgure Haqb vf pyvpxnoyr, naq
gur bar gung nccraqf n fancfubg.

XVAQ: na bss-ol-bar ba n obhaqnel. Bayl bar bs gubfr guerr rkcerffvbaf vf jebat, naq vg vf abg gur
bar gung zbirf gur cbvagre - haqb() vgfrys vf svar.

Jbex vg bhg ba cncre orsber lbh ernq gur pbqr. Gur fancfubg neenl fgnegf jvgu gur vavgvny obneq ng
vaqrk 0. Nsgre bar zbir gurer ner gjb fancfubgf naq gur cbvagre vf ng 1. Sebz gurer, ubj znal gvzrf
fubhyq lbh or noyr gb cerff Haqb? Jung vf gur ybjrfg vaqrk lbh fubhyq or nyybjrq gb ernpu? Abj tb
ybbx ng jung gur pbqr pbzcnerf gur vaqrk ntnvafg.

GUR YVAR: gur `pnaHaqb` rkcerffvba.
<!--/rot13-->

<!--rot13:Hint 3 - every card is due in about a month-->
JURER: fep/obneq.gf. Bar urycre gheaf gur "2026-09-14" fgevatf vagb Qngr bowrpgf; rirelguvat ryfr
nobhg gur onqtr vf nevguzrgvp ba gbc bs vg.

XVAQ: ernq gur reebe orsber lbh ernq gur pbqr. Rirel pneq vf jebat ol ebhtuyl gur fnzr nzbhag, naq
gung nzbhag vf ebhtuyl guvegl qnlf. N pbafgnag bssfrg bs nobhg n zbagu zrnaf bar havg vf bss ol bar -
abg gur qnl, abg gur lrne.

Abj ybbx ng gur urycre'f nethzragf. Pbzcner ubj vg ohvyqf n Qngr sebz cnegf ntnvafg ubj fep/qngn.gf
ohvyqf GBQNL sebz cnegf. Obgu hfr gur fnzr pbafgehpgbe. Bar bs gurz unf n pbzzrag rkcynvavat n
qrgnvy nobhg gung pbafgehpgbe. Gur bgure qbrf abg sbyybj vg.

GUR YVAR: gur `arj Qngr(...)` pnyy vafvqr gbYbpnyQngr.
<!--/rot13-->

<!--rot13:Hint 4 - the fourth card white-screens-->
JURER: ernq gur reebe. Ernpg anzrf gur pnhfr va gur zrffntr vgfrys naq vg vf pbeerpg. Gura bcra
fep/Ncc.gfk naq ybbx ng jung unccraf va gur pbzcbarag obql - abg va n unaqyre, abg va na rssrpg, ohg
va gur obql gung ehaf ba rirel eraqre.

XVAQ: n fgngr hcqngr gung unccraf qhevat eraqrevat. Ernpg er-eraqref jura fgngr punatrf, fb na
hcqngr cresbezrq qhevat eraqre fpurqhyrf nabgure eraqre, juvpu cresbezf gur hcqngr ntnva. Ernpg
pbhagf gurfr naq tvirf hc.

Gur ernfba vg qbrfa'g ybbc ba ybnq vf gung gur hcqngr vf oruvaq n pbaqvgvba, naq gur pbaqvgvba vf
snyfr hagvy n pbyhza tbrf bire vgf yvzvg. Bapr vg'f gehr, nfx: qbrf ehaavat guvf hcqngr znxr gur
pbaqvgvba snyfr ntnva? Naq frcnengryl - rira vs gur PBAGRAGF ner vqragvpny rnpu gvzr, vf gur INYHR
orvat cnffrq gur fnzr inyhr? Ernpg pbzcnerf jvgu Bowrpg.vf.

GUR YVAR: gur `vs (bire.yratgu > 0)` oybpx naq gur fgngr vg frgf. Gura nfx jurgure gung fgngr arrqf
gb rkvfg ng nyy, tvira gung `bire` vf nyernql pbzchgrq ba rirel eraqre.
<!--/rot13-->

<!--rot13:Hint 5 - the type error-->
JURER: eha `acz eha glcrpurpx:03`. Vg tvirf lbh gur svyr, gur yvar, naq obgu glcrf.

XVAQ: n inyhr gung GlcrFpevcg xabjf bayl nf `fgevat` orvat unaqrq gb fbzrguvat gung erdhverf bar bs
guerr fcrpvsvp fgevatf. Gur dhrfgvba gb nfx vf: jurer qvq gung `fgevat` pbzr sebz, naq jul vf vg abg
aneebjre?

Ybbx hc jung Bowrpg.xrlf ergheaf sbe na bowrpg jubfr xrlf ner n havba bs fgevat yvgrenyf. Gur nafjre
fhecevfrf crbcyr, naq gur ernfba vf yrtvgvzngr - na bowrpg ng ehagvzr pna pneel xrlf vgf glcr arire
cebzvfrq, orpnhfr n jvqre bowrpg vf nffvtanoyr gb n aneebjre bar.

GUR SVK VF ABG N PNFG. Gurer vf nyernql n inyhr va fep/glcrf.gf gung vf rknpgyl gur yvfg bs pbyhzaf,
va gur beqre gurl fubhyq nccrne, pbeerpgyl glcrq. Hfr vg naq gur reebe tbrf njnl nybat jvgu n
sentvyvgl lbh qvqa'g xabj lbh unq.
<!--/rot13-->
