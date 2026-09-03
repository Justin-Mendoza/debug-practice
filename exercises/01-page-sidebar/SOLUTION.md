# Exercise 01 — Solution

Encoded so you don't spoil yourself by opening the file. Read it after you've fixed the bugs, or
after you've genuinely given up — but do read it either way, since the "how you'd find it" notes are
the actual point.

```bash
node scripts/reveal.mjs 01 solution
```

<!--rot13:Bug 1 (silent)-->
GUR ZVFFVAT ERGHEA

JURER: fep/CntrYvfg.gfk, vafvqr cntrf.znc(...)

JUNG: gur nepuvirq oenapu ergheaf vgf <yv>. Gur yvir-cntr WFK haqrearngu vf jevggra nf n oner
rkcerffvba fgngrzrag naq arire erghearq, fb gur pnyyonpx ergheaf haqrsvarq sbe rirel aba-nepuvirq
cntr. Ernpg eraqref haqrsvarq nf abguvat ng nyy — ab reebe, ab jneavat, ab oynax fcnpr.

SVK: nqq gur erghea.

    erghea (
      <yv xrl={cntr.vq}>
        <ohggba pynffAnzr={pynffAnzr} baPyvpx={() => baFryrpg(cntr.vq)}>
          ...
        </ohggba>
      </yv>
    );

JUL GLCRFPEVCG QVQA'G PNGPU VG: gur pnyyonpx'f vasreerq erghea glcr orpnzr
`WFK.Ryrzrag | haqrsvarq`. `haqrsvarq` vf n cresrpgyl yrtny ErnpgAbqr, fb `{cntrf.znc(...)}` fgvyy
glcrpurpxf. Fgevpg zbqr qbrf abg fnir lbh urer; bayl ernqvat gur pbqr qbrf.

GUR PBAPRCG: na neebj shapgvba jvgu n oenpr obql ergheaf haqrsvarq hayrff lbh jevgr `erghea`. Na
neebj shapgvba jvgu na rkcerffvba obql ergheaf gur rkcerffvba. Gurfr gjb ybbx nyzbfg vqragvpny:

    cntrf.znc((cntr) => <yv>{cntr.gvgyr}</yv>)      // ergheaf gur ryrzrag
    cntrf.znc((cntr) => { <yv>{cntr.gvgyr}</yv> })  // ergheaf haqrsvarq

UBJ GB SVAQ VG SNFG: gur urnqre fnvq "6 cntrf" juvyr gur yvfg fubjrq 1. Gung pbagenqvpgvba vf gur
jubyr vairfgvtngvba — gur qngn vf cebinoyl cerfrag, fb gur snhyg vf orgjrra qngn naq QBZ. Gur bar
ebj gung qvq eraqre jnf nepuvirq, juvpu gryyf lbh gur ebj pbqr unf n oenapu naq bayl bar fvqr bs vg
jbexf. Ernpg QriGbbyf pbasvezf CntrYvfg erprvirq 6 vgrzf va cebcf juvyr rzvggvat 1 puvyq.
<!--/rot13-->

<!--rot13:Bug 2 (silent)-->
GUR NFLZZRGEVP PBZCNEVFBA

JURER: fep/frnepu.gf, svygreCntrf

JUNG: `cntr.gvgyr.gbYbjrePnfr().vapyhqrf(gevzzrq)` abeznyvmrf gur gvgyr ohg abg gur dhrel. Fb
"ebnqznc" zngpurf "Ebnqznc 2026" (gvgyr ybjrepnfrq gb "ebnqznc 2026") ohg "Ebnqznc" zngpurf abguvat,
orpnhfr gur ybjrepnfrq gvgyr pbagnvaf ab pncvgny E.

SVK:

    pbafg arrqyr = gevzzrq.gbYbjrePnfr();
    erghea cntrf.svygre((cntr) => cntr.gvgyr.gbYbjrePnfr().vapyhqrf(arrqyr));

GUR PBAPRCG: jurarire lbh abeznyvmr sbe pbzcnevfba, abeznyvmr OBGU fvqrf, naq qb vg bapr bhgfvqr gur
ybbc engure guna cre vgrz. Guvf vf gur fvatyr zbfg pbzzba "frnepu vf oebxra" oht va erny pbqr.

UBJ GB SVAQ VG SNFG: "frnepu qbrfa'g jbex" vf abg n flzcgbz, vg'f n pngrtbel. Gur cerpvfr flzcgbz
jnf "ybjrepnfr jbexf, pncvgnyvmrq qbrfa'g", juvpu cbvagf ng pnfr unaqyvat naq abguvat ryfr. Bayl bar
shapgvba qrpvqrf zngpuvat, fb vg vf n gra-frpbaq ernq bapr lbh'ir fgngrq gur flzcgbz cebcreyl.

JBEGU FNLVAT GB LBHE VAGREIVRJRE: guvf shapgvba vf cher naq gnxrf vgf vachgf nf nethzragf, fb vg vf
gevivnyyl havg-grfgnoyr — n guerr-yvar grfg jbhyq unir pnhtug guvf. Gung vf rknpgyl gur xvaq bs
"vzcebir grfg pbirentr" bofreingvba Abgvba fnlf gurl jnag gb urne.
<!--/rot13-->

<!--rot13:Bug 3 (crash)-->
GUR HATHNEQRQ NPPRFF

JURER: fep/CntrQrgnvy.gfk — `cntr.gntf.wbva(", ")`
EBBG PNHFR: fep/qngn.gf — `rkcbeg pbafg CNTRF = NCV_ERFCBAFR nf Cntr[]`

JUNG: gur "Jrrxyl Flap Ntraqn" ragel va gur frrq cnlybnq unf ab `gntf` xrl. `Cntr` qrpynerf
`gntf: fgevat[]` nf erdhverq, fb gur pbzcvyre oryvrirf `cntr.gntf` vf nyjnlf na neenl naq yrgf lbh
pnyy `.wbva` ba vg. Ng ehagvzr vg vf haqrsvarq: "Pnaabg ernq cebcregvrf bs haqrsvarq (ernqvat
'wbva')". Guebja qhevat eraqre, fb Ernpg hazbhagf gur jubyr gerr — urapr n juvgr fperra engure guna
bar oebxra cnar.

SVK: gurer ner gjb, naq lbh fubhyq zragvba obgu.

  Ybpny (fgbcf gur oyrrqvat):

      <c pynffAnzr="qrgnvy__gntf">Gntf: {cntr.gntf?.yratgu ? cntr.gntf.wbva(", ") : "abar"}</c>

  Ebbg pnhfr (gur erny svk): gur qngn vf ylvat nobhg vgf glcr. Rvgure znex gur svryq bcgvbany va
  glcrf.gf (`gntf?: fgevat[]`), juvpu znxrf gur pbzcvyre sbepr lbh gb unaqyr gur rzcgl pnfr
  rireljurer, be abeznyvmr ng gur obhaqnel va qngn.gf fb gur erfg bs gur ncc pna gehfg gur glcr:

      rkcbeg pbafg CNTRF: Cntr[] = (NCV_ERFCBAFR nf EnjCntr[]).znc((enj) => ({
        ...enj,
        gntf: enj.gntf ?? [],
      }));

GUR PBAPRCG: `nf` vf abg n pbairefvba. Vg qbrf abg purpx, pbrepr, be inyvqngr nalguvat — vg gryyf
gur pbzcvyre gb fgbc nethvat. Rirel `nf` ng n qngn obhaqnel vf n cebzvfr lbh ner znxvat ba orunys bs
qngn lbh qvq abg vafcrpg, naq guvf vf jung vg pbfgf jura gur cebzvfr vf jebat.

UBJ GB SVAQ VG SNFG: ernq gur fgnpx genpr gbc-qbja gb gur svefg senzr va fep/ — gung anzrf obgu gur
svyr naq gur cebcregl. Gura nfx gur dhrfgvba gung npghnyyl penpxf vg: "bgure cntrf bcra svar, fb
jung vf qvssrerag nobhg GUVF bar?" Ybt gur cntr bowrpg, frr `gntf: haqrsvarq`, jnyx onpx gb jurer
CNTRF vf ohvyg.
<!--/rot13-->

<!--rot13:Debrief-->
1. Guerr flzcgbzf qvq abg zrna guerr zlfgrevrf. Fcyvggvat gurz ncneg orsber gbhpuvat pbqr xrcg rnpu
   bar n svir-zvahgr ceboyrz. Fnl guvf bhg ybhq va gur vagreivrj; vg ernqf nf zrgubq, abg yhpx.

2. Gur gjb fvyrag ohtf jrer sbhaq ol pbagenqvpgvba, abg ol ernqvat pbqr gbc gb obggbz. "Gur pbhag
   fnlf 6 ohg V frr 1" naq "ybjrepnfr jbexf ohg pncvgnyvmrq qbrfa'g" rnpu aneebjrq gur frnepu gb n
   fvatyr shapgvba orsber n fvatyr svyr jnf bcrarq. Trg va gur unovg bs fgngvat gur pbagenqvpgvba.

3. N pyrna glcrpurpx cebirf abguvat nobhg orunivbe. Rkrepvfr 01 pbzcvyrf cresrpgyl naq vf oebxra va
   guerr cynprf. Pbairefryl, jura lbh QB trg n glcr reebe, ernq vg — gur arkg rkrepvfrf unir bar
   jurer gur glcr reebe naq gur ehagvzr oht ner yvgrenyyl gur fnzr oht.

4. Vzcebirzragf jbegu synttvat gb na vagreivrjre urer: svygreCntrf naq fbegCntrf ner cher naq
   hagrfgrq; gur `nf Cntr[]` pnfg va qngn.gf vf n inyvqngvba tnc gung jbhyq or pnhtug ol cnefvat gur
   cnlybnq vafgrnq bs nffregvat vg; naq gur zvffvat-erghea oht jbhyq unir orra pnhtug ol gur
   `pbafvfgrag-erghea` / `neenl-pnyyonpx-erghea` yvag ehyrf, juvpu guvf cebwrpg qbrfa'g eha.
<!--/rot13-->
