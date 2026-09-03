# Exercise 03 — Hints

Five hints, one per bug. Take the blocker (hint 4) early if the crash is stopping you from seeing
anything else — that's not cheating, that's triage.

```bash
node scripts/reveal.mjs 03 hint 1    # depth stops at 2
node scripts/reveal.mjs 03 hint 2    # search misses deep pages
node scripts/reveal.mjs 03 hint 3    # wrong "contains N pages" badges
node scripts/reveal.mjs 03 hint 4    # Maximum update depth exceeded
node scripts/reveal.mjs 03 hint 5    # the typecheck failure
```

<!--rot13:Hint 1 — nothing renders below depth 2-->
JURER: bar shapgvba gheaf gur gerr vagb gur syng yvfg bs ebjf gur fvqrone eraqref. Rirelguvat lbh
frr ba fperra pbzrf bhg bs vg. Bcra fep/gerr.gf naq ernq vg.

XVAQ: gur shapgvba jnyxf n yriry. Vg qbrf abg jnyx gur yriry orybj gung. Nfx lbhefrys: sbe guvf gb
ernpu qrcgu 3, jung jbhyq guvf shapgvba unir gb qb gung vg pheeragyl arire qbrf?

YVAR: synggraGerr chfurf rnpu abqr, gura — vs gur abqr vf rkcnaqrq — ybbcf bire abqr.puvyqera naq
chfurf rnpu puvyq qverpgyl. Vg arire pnyyf synggraGerr ba gubfr puvyqera, fb gur jnyx fgbcf bar
yriry qbja, ab znggre ubj qrrc gur qngn tbrf. Gur `qrcgu` cnenzrgre vf n fgebat gryy: vg rkvfgf gb
or cnffrq gb n erphefvir pnyy gung vfa'g gurer.

SVK FUNCR: ercynpr gur vaare chfu-ybbc jvgu n erphefvir pnyy jubfr erfhyg lbh nccraq, cnffvat
qrcgu + 1.
<!--/rot13-->

<!--rot13:Hint 2 — search only finds shallow pages-->
JURER: orsber lbh tb ybbxvat sbe n frpbaq oht, ernq frnepuGerr va fep/gerr.gf naq nfx jung vg vf
ohvyg ba gbc bs.

GUR CBVAG: frnepuGerr pnyyf synggraGerr(abqrf, "nyy") naq svygref gur erfhyg. Vg unf ab genirefny
ybtvp bs vgf bja. Fb vg pna bayl rire svaq cntrf gung synggraGerr cebqhprq — juvpu, jvgu oht 1 va
cynpr, vf rirelguvat qbja gb qrcgu 2 naq abguvat orybj.

Guvf vf bar oht jvgu gjb snprf. Svk synggraGerr naq frnepu fgnegf svaqvat qrrc cntrf jvgu ab punatr
gb frnepuGerr ng nyy. Irevsl gung orsber lbh gbhpu frnepuGerr: svkvat gur fnzr oht gjvpr, va gjb
cynprf, vf n erny jnl gb znxr pbqr jbefr haqre vagreivrj cerffher.
<!--/rot13-->

<!--rot13:Hint 3 — the "contains N pages" badges are too small-->
JURER: fep/gerr.gf, pbhagQrfpraqnagf. Vg'f n gjb-yvar shapgvba.

XVAQ: vg nafjref n funyybjre dhrfgvba guna gur bar orvat nfxrq. Gur onqtr fnlf "pbagnvaf A cntrf",
zrnavat rirelguvat haqrearngu ng nal qrcgu; gur shapgvba ergheaf ubj znal qverpg puvyqera gurer ner.

YVAR: `erghea abqr.puvyqera.yratgu;` — gurer vf ab erphefvba ng nyy. Rnpu puvyq pbagevohgrf 1, naq
pbagevohgrf abguvat sbe vgf bja fhogerr.

SVK FUNCR: rnpu puvyq pbhagf nf vgfrys cyhf rirelguvat orarngu vg. Fhz gung bire gur puvyqera.
<!--/rot13-->

<!--rot13:Hint 4 — Maximum update depth exceeded-->
JURER: gur penfu fgnegf jura n cntr vf fryrpgrq, fb ybbx ng jung eraqref bayl gura: fep/CntrQrgnvy.gfk.

ERNQ GUR REEBE SVEFG. Ernpg fnlf: "Guvf pna unccra jura n pbzcbarag pnyyf frgFgngr vafvqr hfrRssrpg,
ohg hfrRssrpg rvgure qbrfa'g unir n qrcraqrapl neenl, be bar bs gur qrcraqrapvrf punatrf ba rirel
eraqre." Gung vf gur nafjre. Gurer VF n qrcraqrapl neenl urer — fb gur dhrfgvba vf juvpu bs vgf
qrcraqrapvrf vf qvssrerag ba rirel eraqre.

XVAQ: ersreragvny vqragvgl. Gjb inyhrf va guvf pbzcbarag ner erohvyg sebz fpengpu ba rirel eraqre:
gur fgngr orvat frg, naq bar bs gur rssrpg'f qrcraqrapvrf.

YVAR: `pbafg bcgvbaf = { vapyhqrPbhagf: gehr };` vf n oenaq-arj bowrpg yvgreny ba rirel eraqre, naq
vg vf yvfgrq va gur rssrpg'f qrcraqrapl neenl. Ernpg pbzcnerf qrcraqrapvrf jvgu Bowrpg.vf, fb n arj
bowrpg vf arire rdhny gb gur cerivbhf bar. Gur rssrpg gurersber ehaf nsgre rirel eraqre; vg pnyyf
frgFhzznel({ grkg: ... }) jvgu n oenaq-arj bowrpg, juvpu Ernpg nyfb frrf nf n punatr; gung gevttref
nabgure eraqre; juvpu ohvyqf nabgure arj `bcgvbaf`. Ebhaq naq ebhaq hagvy Ernpg tvirf hc.

Abgr jul frggvat fgngr va na rssrpg vfa'g nyjnlf n ybbc: vs lbh frg n fgngr inyhr gb gur FNZR
cevzvgvir, Ernpg onvyf bhg naq fgbcf. Obgu unyirf bs guvf ybbc unaq Ernpg n serfu bowrpg, fb abguvat
rire onvyf bhg.
<!--/rot13-->

<!--rot13:Hint 5 — the typecheck failure-->
JURER: eha vg naq ernq vg. `acz eha glcrpurpx:03` cevagf gur svyr, gur yvar, naq gur rknpg glcrf.

    Glcr 'CntrAbqr | haqrsvarq' vf abg nffvtanoyr gb glcr 'CntrAbqr'.

XVAQ: n thneq gung purpxf bar guvat naq vf nffhzrq gb cebir nabgure.

YVAR: fep/Ncc.gfk. `fryrpgrqAbqr` vf pbzchgrq jvgu svaqAbqr, juvpu ergheaf CntrAbqr | haqrsvarq
orpnhfr na vq zvtug abg or va gur gerr. Gur WFK gura thneqf ba `fryrpgrqVq !== ahyy` — n purpx ba n
QVSSRERAG inevnoyr. GlcrFpevcg pna'g hfr vg gb aneebj `fryrpgrqAbqr`, naq vg vf evtug abg gb: n
aba-ahyy vq gung vfa'g va gur gerr tvirf lbh haqrsvarq, naq CntrQrgnvy jbhyq penfu ba abqr.vpba.

SVK FUNCR: thneq ba gur inyhr lbh'er npghnyyl nobhg gb hfr, fb gur aneebjvat naq gur fnsrgl ner gur
fnzr npg. `fryrpgrqAbqr !== haqrsvarq ? <CntrQrgnvy abqr={fryrpgrqAbqr} /> : ...`
<!--/rot13-->
