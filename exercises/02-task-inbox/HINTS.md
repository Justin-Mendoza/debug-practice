# Exercise 01 — Hints

Three hints, encoded so your eyes can't grab them by accident. Take them one at a time, and only
after you've spent a real attempt on your own.

```bash
node scripts/reveal.mjs 01 hint 1
node scripts/reveal.mjs 01 hint 2
node scripts/reveal.mjs 01 hint 3
```

Hint 1 tells you where to look. Hint 2 names the category of bug. Hint 3 gives you the line.

<!--rot13:Hint 1 - where to look-->
Fcyvg gur guerr flzcgbzf ncneg naq punfr gurz bar ng n gvzr.

Gur fbeg: bar shapgvba qrpvqrf gur beqre, naq vg unf gjb oenapurf - bar cre fbeg xrl. Gur oenapu lbh
jrer gbyq vf svar naq gur oenapu lbh jrer gbyq vf oebxra fvg guerr yvarf ncneg. Ernq gurz gbtrgure
naq nfx jung gur jbexvat bar eryvrf ba gung gur oebxra bar qbrf abg.

Gur zvffvat rfgvzngr: gur urnqre naq gur ebj qvfnterr nobhg gur fnzr gnfx. Bayl bar bs gurz pna or
evtug, naq gurl ner pbzchgrq ol gjb qvssrerag shapgvbaf va gur fnzr svyr. Svaq obgu, naq jbex bhg
juvpu inyhr rnpu bar vf npghnyyl grfgvat.

Gur juvgr fperra: pyvpx gur gnfx, ernq gur reebe va gur Ivgr bireynl be gur pbafbyr, naq ybbx ng gur
svefg senzr gung cbvagf vagb fep/. Gura nfx gur dhrfgvba gung penpxf vg - rirel bgure gnfx bcraf
svar, fb jung vf qvssrerag nobhg guvf bar'f qngn?
<!--/rot13-->

<!--rot13:Hint 2 - what kind of bug each one is-->
Oht 1 vf n pbzcnevfba qbar ba gur jebat glcr. Gur inyhrf orvat beqrerq ner ahzoref, ohg gur
pbzcnevfba orvat hfrq vf n grkg pbzcnevfba, naq grkg beqrevat vf abg ahzore beqrevat: "10" pbzrf
orsber "2" orpnhfr "1" pbzrf orsber "2". Gur qhr-qngr oenapu trgf njnl jvgu gur fnzr grpuavdhr
orpnhfr VFB qngrf ner jevggra jvqrfg-havg-svefg ba checbfr.

Oht 2 vf n snyfvarff grfg fgnaqvat va sbe na rkvfgrapr grfg. Gur svryq pna yrtvgvzngryl ubyq n inyhr
gung vf snyfl ohg cresrpgyl erny, naq gur purpx guebjf vg va jvgu gur rzcgl pnfr.

Oht 3 vf na hathneqrq ybbxhc. Fbzr pbqr vaqrkrf n erpbeq ol n xrl naq vzzrqvngryl ernqf n cebcregl
bss gur erfhyg, jvgubhg pbafvqrevat gung gur xrl zvtug abg or va gur erpbeq. Ybbx ng gur frrq qngn
sbe gur gnfx gung penfurf naq pbzcner vgf nffvtarr vq gb gur xrlf va gur qverpgbel.
<!--/rot13-->

<!--rot13:Hint 3 - the lines-->
Oht 1 vf va fep/gnfxf.gf, va fbegGnfxf:

    erghea pbcl.fbeg((n, o) => Fgevat(n.cevbevgl).ybpnyrPbzcner(Fgevat(o.cevbevgl)));

cevbevgl vf n ahzore. Fgevatvslvat vg naq pbzcnevat nf grkg beqref 1, 10, 2, 3, 4. Fhogenpg vafgrnq.

Oht 2 vf va fep/gnfxf.gf, va sbezngCbvagf:

    erghea cbvagf ? `${cbvagf} cgf` : "harfgvzngrq";

cbvagf vf `ahzore | ahyy`. Mreb vf n ahzore, naq mreb vf snyfl, fb n gnfx fvmrq ng 0 gnxrf gur
"harfgvzngrq" oenapu. Pbzcner ntnvafg ahyy rkcyvpvgyl. Abgr gung fhzznevmr() va gur fnzr svyr trgf
guvf evtug - vg grfgf `gnfx.cbvagf !== ahyy` - juvpu vf rknpgyl jul gur urnqre naq gur ebj qvfnterr.

Oht 3 vf va fep/GnfxQrgnvy.gfk:

    pbafg nffvtarr = CRBCYR[gnfx.nffvtarrVq];

gura `nffvtarr.vavgvnyf` naq `nffvtarr.anzr`. Va fep/qngn.gf gur gnfx "Fuvc gur zvtengvba ehaobbx"
vf nffvtarq gb "h-znepb", naq CRBCYR unf ab fhpu xrl - Znepb yrsg. GlcrFpevcg glcrf gur ybbxhc nf
Crefba engure guna Crefba | haqrsvarq, fb vg arire jneaf lbh. Ybbx hc jung `abHapurpxrqVaqrkrqNpprff`
qbrf orsber lbh qrpvqr ba n svk.
<!--/rot13-->
