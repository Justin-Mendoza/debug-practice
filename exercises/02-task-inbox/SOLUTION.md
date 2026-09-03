# Exercise 01 — Solution

Encoded so you don't spoil yourself by opening the file. Read it after you've fixed the bugs, or
after you've genuinely given up — but do read it either way, since the "how you'd find it" notes are
the actual point.

```bash
node scripts/reveal.mjs 01 solution
```

<!--rot13:Bug 1 (silent)-->
GUR GRKG PBZCNEVFBA BA AHZOREF

JURER: fep/gnfxf.gf, fbegGnfxf

JUNG:

    erghea pbcl.fbeg((n, o) => Fgevat(n.cevbevgl).ybpnyrPbzcner(Fgevat(o.cevbevgl)));

cevbevgl vf n ahzore. Fgevatvslvat vg naq pbzcnevat nf grkg beqref vg gur jnl n qvpgvbanel jbhyq:
"1" < "10" < "2" < "3" < "4". Fb C10 ynaqf frpbaq, orgjrra C1 naq C2.

Gur qhr-qngr oenapu guerr yvarf hc hfrf gur fnzr ybpnyrPbzcner grpuavdhr naq vf pbeerpg, juvpu vf
nyzbfg pregnvayl jurer guvf yvar pnzr sebz. VFB qngrf trg njnl jvgu vg orpnhfr gurl ner jevggra
jvqrfg-havg-svefg naq mreb-cnqqrq, fb grkg beqre naq puebabybtvpny beqre pbvapvqr. Ahzoref ner abg
mreb-cnqqrq, fb gurl qba'g.

SVK:

    erghea pbcl.fbeg((n, o) => n.cevbevgl - o.cevbevgl);

GUR PBAPRCG: guvf vf gur fnzr genc nf gur oner `.fbeg()`, juvpu lbh jvyy uvg sne zber bsgra:

    [1, 2, 10].fbeg()            // [1, 10, 2]  - qrsnhyg pbzcnengbe fgevatvsvrf
    [1, 2, 10].fbeg((n, o) => n - o)  // [1, 2, 10]

Neenl.cebgbglcr.fbeg jvgu ab pbzcnengbe pbairegf rirel ryrzrag gb n fgevat naq pbzcnerf HGS-16 pbqr
havgf. Vg vf gur fvatyr zbfg pbzzba fbegvat oht va WninFpevcg, naq vg vf vaivfvoyr hagvy lbhe qngn
pebffrf n cbjre bs gra - juvpu vf jul vg fheivirf erivrj naq gura oernxf va cebqhpgvba gur qnl
fbzrbar svyrf n C10.

UBJ GB SVAQ VG SNFG: gur flzcgbz anzrq gur rknpg funcr bs gur oht naq lbh fubhyq unir fnvq vg bhg
ybhq: "10 fbegf orgjrra 1 naq 2." Gung beqrevat vf nycunorgvpny, abg ahzrevp, naq gurer vf bayl bar
yvar va gur pbqronfr gung beqref ol cevbevgl. Gur bgure unys bs gur pyhr jnf serr: lbh jrer gbyq gur
QNGR fbeg jbexf. Gjb oenapurf bs bar shapgvba, bar jbexvat naq bar abg, vf n qvss lbh pna ernq va
svir frpbaqf.

JBEGU FNLVAT GB LBHE VAGREIVRJRE: fbegGnfxf vf cher naq gnxrf vgf vachgf nf nethzragf. Guerr yvarf
bs havg grfg - fbeg n svkgher jvgu n C2 naq n C10 naq nffreg gur beqre - jbhyq unir pnhtug guvf
orsber nalbar bcrarq n oebjfre.
<!--/rot13-->

<!--rot13:Bug 2 (silent)-->
GUR SNYFL MREB

JURER: fep/gnfxf.gf, sbezngCbvagf

JUNG:

    erghea cbvagf ? `${cbvagf} cgf` : "harfgvzngrq";

cbvagf vf glcrq `ahzore | ahyy`, jurer ahyy zrnaf "abobql unf fvmrq guvf" naq n ahzore zrnaf
"fbzrobql fvmrq vg". Ohg `0` vf snyfl, fb n gnfx qryvorengryl rfgvzngrq ng mreb cbvagf gnxrf gur
fnzr oenapu nf n gnfx abobql unf gbhpurq. "Eranzr gur flap synt" ernqf "harfgvzngrq" juvyr gur
urnqre pbhagf vg nf rfgvzngrq.

SVK - grfg sbe gur guvat lbh npghnyyl zrna:

    erghea cbvagf === ahyy ? "harfgvzngrq" : `${cbvagf} cgf`;

Abgr gung `cbvagf ?? "harfgvzngrq"` nybar vf ABG n qebc-va ercynprzrag urer - vg jbhyq erghea n
ahzore sbe n fvmrq gnfx, abg gur "5 cgf" fgevat gur pnyyref eraqre. Ernpu sbe gur rkcyvpvg ahyy
purpx jura gur gjb oenapurf cebqhpr qvssrerag funcrf.

GUR PBAPRCG: `||` naq n oner gehguvarff grfg nfx "vf guvf snyfl?", juvpu yhzcf gbtrgure 0, "",
AnA, snyfr, ahyy naq haqrsvarq. `??` naq na rkcyvpvg `=== ahyy` nfx "vf guvf nofrag?". Jurarire n
svryq pna yrtvgvzngryl ubyq 0 be na rzcgl fgevat, gehguvarff vf gur jebat dhrfgvba. Guvf vf gur oht
gung `??` jnf nqqrq gb gur ynathntr gb svk.

Jngpu sbe vg va nyy vgf qvfthvfrf:

    pbafg pbhag = cebcf.pbhag || 10;        // 0 orpbzrf 10
    pbafg ynory = hfre.avpxanzr || "Naba";  // "" orpbzrf "Naba"
    vs (!vgrzf.yratgu) erghea "abar";       // svar - yratgu 0 VF gur rzcgl pnfr

ABGR jung znqr guvf svaqnoyr: fhzznevmr() va gur fnzr svyr nfxf gur evtug dhrfgvba -
`gnfx.cbvagf !== ahyy`. Gjb shapgvbaf, bar svyr, gjb qvssrerag qrsvavgvbaf bs "rfgvzngrq". Gung
qvfnterrzrag vf jung gur urnqre-irefhf-ebj pbagenqvpgvba npghnyyl jnf.

UBJ GB SVAQ VG SNFG: "gur urnqre fnlf 5 naq V pbhag 4" vf n pbagenqvpgvba orgjrra gjb ahzoref
qrevirq sebz gur fnzr qngn, fb gur oht vf va bar bs gur gjb qrevingvbaf - naq obgu yvir va
fep/gnfxf.gf. Gura: juvpu gnfx vf gur bqq bar bhg? Gur bar fvmrq ng mreb. Ng gung cbvag lbh ner
ybbxvat sbe gur jbeq "mreb" va n obbyrna pbagrkg, naq gurer vf rknpgyl bar.
<!--/rot13-->

<!--rot13:Bug 3 (crash)-->
GUR HAPURPXRQ YBBXHC

JURER: fep/GnfxQrgnvy.gfk - `pbafg nffvtarr = CRBCYR[gnfx.nffvtarrVq];`
EBBG PNHFR: fep/qngn.gf - gnfx g1 vf nffvtarq gb "h-znepb", juvpu vf abg n xrl va CRBCYR.

JUNG: vaqrkvat n Erpbeq<fgevat, Crefba> jvgu n xrl gung vfa'g gurer ergheaf haqrsvarq ng ehagvzr.
Gur arkg yvar ernqf `nffvtarr.vavgvnyf` naq guebjf "Pnaabg ernq cebcregvrf bs haqrsvarq (ernqvat
'vavgvnyf')". Vg guebjf qhevat eraqre, fb Ernpg hazbhagf gur jubyr gerr - n juvgr fperra, abg bar
oebxra cnar.

GlcrFpevcg qvq abg jnea lbh, naq guvf vf gur cneg jbegu haqrefgnaqvat: ol qrsnhyg, GlcrFpevcg glcrf
`Erpbeq<fgevat, Crefba>` vaqrkvat nf `Crefba`, abg `Crefba | haqrsvarq`. Vg nffhzrf lbh xabj gur xrl
rkvfgf. Gur pbzcvyre vf abg orvat fybccl; vg vf borlvat n qrsnhyg gung jnf pubfra orsber nalbar unq
zhpu rkcrevrapr jvgu ubj bsgra guvf ovgrf.

SVK: gurer ner gjb, naq lbh fubhyq zragvba obgu.

  Ybpny (fgbcf gur oyrrqvat):

      pbafg nffvtarr = CRBCYR[gnfx.nffvtarrVq];
      ...
      <qq>{nffvtarr ? nffvtarr.anzr : "Hanffvtarq"}</qq>

  Ebbg pnhfr (gur erny svk): znxr gur ybbxhc ubarfg, fb gur pbzcvyre sbeprf gur purpx rireljurer.
  Rvgure glcr gur urycre gung qbrf gur ybbxhc:

      shapgvba svaqCrefba(vq: fgevat): Crefba | haqrsvarq {
        erghea CRBCYR[vq];
      }

  be ghea ba `abHapurpxrqVaqrkrqNpprff` va gfpbasvt, juvpu znxrf RIREL vaqrk npprff erghea
  `G | haqrsvarq` naq fhesnprf guvf pynff bs oht npebff gur jubyr pbqronfr ng ohvyq gvzr.

  Naq frcnengryl: n qrcnegrq grnzzngr yrnivat qnatyvat nffvtarrVqf vf n qngn ceboyrz. Erny flfgrzf
  rvgure gbzofgbar gur hfre erpbeq be ernffvta ba bssobneqvat. Fnlvat gung bhg ybhq vf cebqhpg
  guvaxvat, juvpu vf rkcyvpvgyl cneg bs jung guvf ebhaq vf fpberq ba.

GUR PBAPRCG: na vaqrk npprff vf n ybbxhc gung pna zvff. Neenlf, Erpbeqf, Zncf naq dhrel erfhygf nyy
unaq lbh haqrsvarq sbe n xrl gung vfa'g gurer, naq GlcrFpevcg'f qrsnhyg frggvatf uvqr vg sbe bowrpgf
naq neenlf nyvxr (`nee[999]` vf glcrq G, abg G | haqrsvarq). Rirel hathneqrq `znc[xrl].fbzrguvat` vf
n yngrag juvgr fperra jnvgvat sbe bar onq vq.

UBJ GB SVAQ VG SNFG: ernq gur fgnpx genpr gbc-qbja gb gur svefg senzr va fep/ - vg anzrf gur svyr
naq gur cebcregl. Gura nfx gur dhrfgvba gung npghnyyl penpxf vg: "rirel bgure gnfx bcraf svar, fb
jung vf qvssrerag nobhg GUVF bar?" Ybt gur gnfx, ybbx ng nffvtarrVq, pbzcner vg gb gur xrlf bs
CRBCYR, naq lbh'er qbar. Gung pbzcnevfba gnxrf gra frpbaqf naq vf gur ragver vairfgvtngvba.

OBAHF: bar guebjvat pbzcbarag gnxvat qbja gur jubyr ncc vf vgfrys n svaqvat. Na reebe obhaqnel
nebhaq gur qrgnvy cnar jbhyq qrtenqr guvf gb "pbhyqa'g ybnq guvf gnfx" vafgrnq bs n oynax jvaqbj.
Zragvbavat gung fubjf lbh'er guvaxvat nobhg snvyher zbqrf, abg whfg guvf yvar.
<!--/rot13-->

<!--rot13:Debrief-->
1. GUERR FLZCGBZF, GUERR ZLFGREVRF - ohg bayl nsgre lbh fcyvg gurz. Ohtf 1 naq 2 fvg va gur fnzr
   sbegl-yvar svyr naq unir abguvat gb qb jvgu rnpu bgure. Ohtf 2 naq 3 ner obgu "gur qngn vfa'g
   jung gur pbqr nffhzrf" naq fgvyy arrq qvssrerag svkrf. Fcyvggvat svefg vf jung xrrcf rnpu bar n
   svir-zvahgr ceboyrz.

2. OBGU FVYRAG OHTF JRER SBHAQ OL PBAGENQVPGVBA, abg ol ernqvat pbqr gbc gb obggbz. "10 fbegf
   orgjrra 1 naq 2" vf nycunorgvpny beqrevat naabhapvat vgfrys. "Gur urnqre fnlf 5, V pbhag 4" vf
   gjb qrevingvbaf bs bar snpg qvfnterrvat. Arvgure erdhverq bcravat n svyr gb ybpngr. Trg va gur
   unovg bs fgngvat gur pbagenqvpgvba va bar fragrapr orsber lbh tb ybbxvat.

3. GUR JBEXVAT PNFR VF RIVQRAPR. Lbh jrer gbyq qngr fbeg jbexf naq cevbevgl fbeg qbrfa'g; lbh pbhyq
   frr svir gnfxf bcra naq bar penfu. Va obgu pnfrf gur jbexvat pnfr gryyf lbh jung gb qvss ntnvafg.
   Crbcyr fxvc cnfg guvf naq fgneg ernqvat gur jubyr svyr vafgrnq.

4. N PYRNA GLCRPURPX CEBIRF ABGUVAT NOBHG ORUNIVBE. Guvf rkrepvfr pbzcvyrf cresrpgyl naq vf oebxra
   va guerr cynprf. Gjb bs gur guerr jbhyq unir orra pnhtug ol fgevpgre frggvatf
   (`abHapurpxrqVaqrkrqNpprff`) be ol guerr yvarf bs havg grfg - juvpu vf gur vzcebirzrag gb envfr
   hacebzcgrq.

5. VZCEBIRZRAGF JBEGU ENVFVAT: fbegGnfxf, sbezngCbvagf naq fhzznevmr ner cher shapgvbaf bire cynva
   qngn naq pbzcyrgryl hagrfgrq; sbezngCbvagf naq fhzznevmr rapbqr gur fnzr pbaprcg ("vf guvf
   rfgvzngrq?") va gjb cynprf naq qvfnterr, juvpu vf n tbbq nethzrag sbe bar cerqvpngr hfrq ol obgu;
   naq gur CRBCYR ybbxhc vf n inyvqngvba tnc gung rvgure fgevpgre pbzcvyre frggvatf be na reebe
   obhaqnel jbhyq pbagnva.
<!--/rot13-->
