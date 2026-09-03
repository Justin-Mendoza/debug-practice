# Exercise 02 — Hints

Four hints, one per bug, rot13'd so you don't absorb them by accident.

```bash
node scripts/reveal.mjs 02 hint 1    # blank code blocks
node scripts/reveal.mjs 02 hint 2    # dead checkbox
node scripts/reveal.mjs 02 hint 3    # console error
node scripts/reveal.mjs 02 hint 4    # filter crash
```

Each hint escalates inside itself: it starts with where to look and ends with the line.

<!--rot13:Hint 1 — blank code blocks-->
JURER: rknpgyl bar cynpr qrpvqrf jung n oybpx ybbxf yvxr. Svaq gur pbzcbarag gung gnxrf n oybpx naq
ergheaf WFK, naq ybbx ng ubj vg oenapurf ba oybpx.glcr.

XVAQ: fbzrguvat gung fubhyq or unaqyrq vfa'g, naq n pngpu-nyy vf dhvrgyl nofbeovat vg.

YVAR: fep/OybpxEbj.gfk. Gur fjvgpu unf pnfrf sbe urnqvat, cnentencu, gbqb, pnyybhg naq qvivqre — ohg
ab `pnfr "pbqr"`. Rkrphgvba snyyf gb `qrsnhyg: erghea ahyy`, naq Ernpg eraqref ahyy nf abguvat.
Orpnhfr gurer vf n `qrsnhyg`, GlcrFpevcg unf ab ernfba gb pbzcynva: rirel pbqr cngu ergheaf n inyvq
ErnpgAbqr.
<!--/rot13-->

<!--rot13:Hint 2 — the checkbox that won't tick-->
JURER: gjb svyrf znggre — gur gbttyr unaqyre va fep/Ncc.gfk, naq gur ebj pbzcbarag va
fep/OybpxEbj.gfk. Ernq gurz gbtrgure, abg frcnengryl.

XVAQ: guvf vf abg "gur pyvpx qbrfa'g sver" — gur pbhagre cebirf vg sverf naq cebirf gur qngn
punatrq. Fb gur qngn vf evtug naq gur fperra vf fgnyr. Gur dhrfgvba vf abg "jul qvqa'g vg hcqngr"
ohg "jul qvq Ernpg qrpvqr vg qvqa'g arrq gb er-eraqre guvf ebj".

Chg n oernxcbvag be n pbafbyr.ybt vafvqr unaqyrGbttyr gb pbasvez vg ehaf naq gur inyhr syvcf. Gura
ybbx ng jung jencf OybpxEbj, naq jung vg pbzcnerf gb qrpvqr jurgure gb fxvc eraqrevat.

YVAR: OybpxEbj vf jenccrq va `zrzb`, juvpu fxvcf n er-eraqre jura vgf cebcf ner funyybj-rdhny gb
ynfg gvzr. Va Ncc.gfk'f unaqyrGbttyr, `gnetrg.purpxrq = !gnetrg.purpxrq` zhgngrf gur rkvfgvat oybpx
bowrpg va cynpr. Gur neenl vf arj (`[...pheerag]`), fb Ncc er-eraqref naq gur pbhagre erpbzchgrf —
ohg gur oybpx bowrpg vf gur fnzr ersrerapr vg jnf orsber, fb zrzb pbzcnerf byq === arj, frrf ab
punatr, naq fxvcf gur ebj.
<!--/rot13-->

<!--rot13:Hint 3 — the console error-->
JURER: bcra QriGbbyf naq ernq gur zrffntr. Vg anzrf gur ceboyrz va gur svefg fragrapr naq yvaxf gb
gur qbpf. Gura svaq gur .znc() gung ohvyqf n yvfg bs ryrzragf jvgubhg tvivat rnpu bar na vqragvgl.

YVAR: fep/SvygreOne.gfk. `bcgvbaf.znc((bcgvba) => <ohggba ...>)` ergheaf ohggbaf jvgu ab `xrl` cebc.
Rirel neenl bs ryrzragf Ernpg eraqref arrqf n fgnoyr xrl fb vg pna gryy vgrzf ncneg npebff eraqref.
<!--/rot13-->

<!--rot13:Hint 4 — the white screen on the Callout filter-->
JURER: gur penfu unccraf juvyr eraqrevat, fb ernq gur fgnpx genpr gb gur svefg senzr va fep/. Jung
vf qvssrerag nobhg gur Pnyybhg svygre pbzcnerq gb rirel bgure svygre? (Gurer ner ab pnyybhg oybpxf
va gur qbphzrag — fb gur neenl orvat unaqrq qbja vf rzcgl.)

XVAQ: n pbyyrpgvba bcrengvba gung unf ab nafjre sbe gur rzcgl pnfr.

YVAR: fep/oybpxf.gf, va qbphzragFgngf. Gur jbeq pbhag erqhpr cnffrf na vavgvny inyhr bs 0, fb vg vf
svar. Gur `ybatrfg` erqhpr qbrf abg cnff bar:

    pbafg ybatrfg = oybpxf.erqhpr((punzcvba, oybpx) => ...);

Jvgu ab vavgvny inyhr, erqhpr hfrf gur svefg ryrzrag nf gur frrq — naq na rzcgl neenl unf ab svefg
ryrzrag, fb vg guebjf "Erqhpr bs rzcgl neenl jvgu ab vavgvny inyhr". Guebja qhevat eraqre, Ernpg
hazbhagf gur jubyr gerr, juvpu vf jul gur ragver ncc tbrf juvgr vafgrnq bs whfg gur fgngf cnary.
<!--/rot13-->
