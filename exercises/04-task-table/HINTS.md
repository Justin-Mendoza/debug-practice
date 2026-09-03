# Exercise 02 — Hints

Four hints, one per bug, encoded so your eyes can't grab them by accident. Take them one at a time.

```bash
node scripts/reveal.mjs 02 hint 1
node scripts/reveal.mjs 02 hint 2
node scripts/reveal.mjs 02 hint 3
node scripts/reveal.mjs 02 hint 4
```

Each hint goes where to look, then what kind of bug, then the line.

<!--rot13:Hint 1 - the open notes land on the wrong row-->
JURER: gur abgrf cnary vf bcra/pybfrq fgngr gung yvirf vafvqr gur ebj pbzcbarag, naq gur ebjf ner
eraqrerq ol n yvfg va fep/Ncc.gfk. Ybbx ng ubj gung yvfg gryyf Ernpg juvpu eraqrerq ebj pbeerfcbaqf
gb juvpu erpbeq.

XVAQ: Ernpg arrqf na vqragvgl sbe rnpu vgrz va n yvfg fb vg pna zngpu guvf eraqre'f vgrzf ntnvafg
ynfg eraqre'f. Vs gur vqragvgl lbh tvir vg vf gur vgrz'f CBFVGVBA, gura erbeqrevat gur qngn qbrfa'g
zbir nalguvat - Ernpg guvaxf vgrz 0 vf fgvyy vgrz 0, xrrcf gur pbzcbarag vafgnapr gung jnf gurer,
naq whfg unaqf vg qvssrerag cebcf. Gur pbzcbarag xrrcf vgf bja fgngr; bayl gur cebcf zbir.

Gung vf rknpgyl gur flzcgbz: gur abgrf grkg (n cebc) sbyybjf gur qngn, gur bcra synt (fgngr) fgnlf
chg.

GUR YVAR: fep/Ncc.gfk, va ivfvoyr.znc(...) - ybbx ng jung vf cnffrq nf `xrl`. Abgr gung gur ebj unf
n cresrpgyl tbbq fgnoyr vqragvsvre fvggvat ba vg nyernql.
<!--/rot13-->

<!--rot13:Hint 2 - Clear sort doesn't restore the order-->
JURER: fep/gnoyr.gf. Gjb shapgvbaf eha ba rirel eraqre - bar aneebjf gur yvfg, bar beqref vg. Ernq
gurz gbtrgure.

XVAQ: fbzrguvat vf orvat zbqvsvrq va cynpr gung jnf fhccbfrq gb or ernq-bayl. Ybbx hc jurgure
Neenl.cebgbglcr.fbeg ergheaf n arj neenl be erbeqref gur bar lbh pnyyrq vg ba. Gura nfx jurer gur
neenl vg jnf pnyyrq ba pnzr sebz.

GUR DHNYVSVRE VF GUR PYHR, naq gur gvpxrg unaqrq vg gb lbh: vg bayl oernxf ba "Nyy". Ernq
svygreEbjf naq nfx jung vf qvssrerag nobhg gur inyhr vg ergheaf jura gur svygre vf "nyy" irefhf
jura vg vf n erny fgnghf. Bar bs gubfr gjb cnguf unaqf onpx n serfu neenl naq bar unaqf onpx gur
neenl vg jnf tvira.

GUR YVAR: `erghea ebjf.fbeg(...)` va fbegEbjf, ernpurq jvgu gur neenl gung VF gur pbzcbarag'f fgngr.
<!--/rot13-->

<!--rot13:Hint 3 - the console error-->
JURER: bcra QriGbbyf, ernq gur zrffntr, naq abgr gung Ernpg anzrf gur pbzcbarag. Gung vf gur ragver
grpuavdhr sbe guvf bar.

XVAQ: n yvfg eraqrerq jvgubhg gur vqragvgl cebc Ernpg nfxf sbe. Fnzr snzvyl nf oht 1 - naq jbegu
ubyqvat gur gjb fvqr ol fvqr, orpnhfr gurl snvy qvssreragyl. Oht 1 tvirf Ernpg n JEBAT vqragvgl naq
pbeehcgf fgngr fvyragyl. Guvf bar tvirf Ernpg AB vqragvgl, naq Ernpg gryyf lbh bhg ybhq.

GUR YVAR: fep/GnoyrSbbgre.gfk, va Bowrpg.ragevrf(tebhcf).znc(...). Rirel bgure yvfg va guvf ncc
cnffrf n xrl; guvf bar qbrfa'g.
<!--/rot13-->

<!--rot13:Hint 4 - In review white-screens-->
JURER: ernq gur fgnpx genpr gbc-qbja gb gur svefg senzr va fep/. Vg anzrf gur svyr naq gur rknpg
bcrengvba. Gura jbex bhg jul GUVF fgnghf naq ab bgure.

XVAQ: fbzrguvat vf ybbxvat hc n ohpxrg ol anzr naq hfvat vg jvgubhg purpxvat gung gur ohpxrg rkvfgf.
Pbzcner gur yvfg bs fgnghfrf gur ncc fhccbegf (fep/glcrf.gf) ntnvafg gur bowrpg gung vf orvat
vaqrkrq.

GUR YVAR: fep/gnoyr.gf, tebhcOlFgnghf. Gur npphzhyngbe vf unaq-jevggra jvgu guerr xrlf. Gur Fgnghf
havba unf sbhe zrzoref. `tebhcf[ebj.fgnghf].chfu(ebj)` guebjf gur zbzrag n ebj pneevrf gur sbhegu.

Gura nfx gur sbyybj-hc gung znggref: jul qvq GlcrFpevcg abg pngpu n zvffvat xrl va n unaq-jevggra
bowrpg? Ybbx ng gur erghea glcr ba gung shapgvba naq jung vg cebzvfrf nobhg vaqrkvat.
<!--/rot13-->
