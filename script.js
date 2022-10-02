function getRandomHelmet() {
  let randomImage = new Array();

  randomImage[0] = "./img/helmet/achhc.webp";
  randomImage[1] = "./img/helmet/Bastion.webp";
  randomImage[2] = "./img/helmet/Kiver.webp";
  randomImage[3] = "./img/helmet/mich.webp";
  randomImage[4] = "./img/helmet/SSH.webp";
  randomImage[5] = "./img/helmet/ratnik.webp";
  randomImage[6] = "./img/helmet/TankHelm.webp";
  randomImage[7] = "./img/helmet/ulach.webp";
  randomImage[8] = "./img/helmet/UNTAR.webp";
  randomImage[9] = "./img/helmet/altyn.webp";
  randomImage[10] = "./img/helmet/Caiman.webp";
  randomImage[11] = "./img/helmet/FASTMT.webp";
  randomImage[12] = "./img/helmet/Kolpak.webp";
  randomImage[13] = "./img/helmet/maska.webp";
  randomImage[14] = "./img/helmet/PSH.webp";
  randomImage[15] = "./img/helmet/rys.webp";
  randomImage[16] = "./img/helmet/Sfera.webp";
  randomImage[17] = "./img/helmet/vulkan.webp";
  randomImage[18] = "./img/helmet/zsh.webp";
  randomImage[19] = "./img/helmet/BomberBeanie.webp";
  randomImage[20] = "./img/helmet/SHPM.webp";
  randomImage[21] = "./img/helmet/LZSH.webp";
  randomImage[22] = "./img/helmet/Ronin.webp";
  randomImage[23] = "./img/helmet/MSA.webp";
  randomImage[24] = "./img/helmet/Crye.webp";
  randomImage[25] = "./img/helmet/Team.webp";
  randomImage[26] = "./img/helmet/LSHZ.webp";
  randomImage[27] = "./img/helmet/hjelm.webp";

  let number = Math.floor(Math.random() * randomImage.length);

  document.getElementById("result-helmet").innerHTML +=
    '<img src="' +
    randomImage[number] +
    '"style="width:130px; height:130px; position:absolute; top:19%; left:46.5%; z-index: 1;" />';
}

function getRandomArmor() {
  let randomImage = new Array();

  randomImage[0] = "./img/armor/ana.webp";
  randomImage[1] = "./img/armor/flora.webp";
  randomImage[2] = "./img/armor/flora2.webp";
  randomImage[3] = "./img/armor/module.webp";
  randomImage[4] = "./img/armor/DRD.webp";
  randomImage[5] = "./img/armor/mmc.webp";
  randomImage[6] = "./img/armor/paca.webp";
  randomImage[7] = "./img/armor/untar.webp";
  randomImage[8] = "./img/armor/tv.webp";
  randomImage[9] = "./img/armor/zhuk3.webp";
  randomImage[10] = "./img/armor/kirasa.webp";
  randomImage[11] = "./img/armor/trooper.webp";
  randomImage[12] = "./img/armor/thor.webp";
  randomImage[13] = "./img/armor/6b23.webp";
  randomImage[14] = "./img/armor/korund.webp";
  randomImage[15] = "./img/armor/redut.webp";
  randomImage[16] = "./img/armor/killa.webp";
  randomImage[17] = "./img/armor/gen4.webp";
  randomImage[18] = "./img/armor/gzhel.webp";
  randomImage[19] = "./img/armor/defender.webp";
  randomImage[20] = "./img/armor/Gen4assault.webp";
  randomImage[21] = "./img/armor/redut-t5.webp";
  randomImage[22] = "./img/armor/slick.webp";
  randomImage[23] = "./img/armor/zhuk6.webp";
  randomImage[24] = "./img/armor/thoric.webp";
  randomImage[25] = "./img/armor/zabralo.webp";
  randomImage[26] = "./img/armor/6b5.webp";
  randomImage[27] = "./img/armor/avs.webp";
  randomImage[28] = "./img/armor/eclipse.webp";
  randomImage[29] = "./img/armor/strandhogg.webp";
  randomImage[30] = "./img/armor/tasmanian.webp";
  randomImage[31] = "./img/armor/a18.webp";
  randomImage[32] = "./img/armor/osprey.webp";
  randomImage[33] = "./img/armor/6b3.webp";
  randomImage[34] = "./img/armor/6b5-15.webp";
  randomImage[35] = "./img/armor/tactec.webp";
  randomImage[36] = "./img/armor/aacpc.webp";
  randomImage[37] = "./img/armor/cpc.webp";
  randomImage[38] = "./img/armor/plateframe.webp";
  randomImage[39] = "./img/armor/bagarly.webp";
  randomImage[40] = "./img/armor/hexgrid.webp";

  let number = Math.floor(Math.random() * randomImage.length);

  document.getElementById("result-armor").innerHTML +=
    '<img src="' +
    randomImage[number] +
    '" style="width:130px; height:130px; position:absolute; top:36%; left:46.5%; z-index: 1;" />';
}

function getRandomWeapon() {
  let randomImage = new Array();
  randomImage[0] = "./img/weapon/300.webp";
  randomImage[1] = "./img/weapon/ADAR2.webp";
  randomImage[2] = "./img/weapon/AK-74.webp";
  randomImage[3] = "./img/weapon/AK101.webp";
  randomImage[4] = "./img/weapon/AKm.webp";
  randomImage[5] = "./img/weapon/Akmn.webp";
  randomImage[6] = "./img/weapon/Akms.webp";
  randomImage[7] = "./img/weapon/Akn.webp";
  randomImage[8] = "./img/weapon/AKS-74.webp";
  randomImage[9] = "./img/weapon/Aks74u.webp";
  randomImage[10] = "./img/weapon/ASh_12.webp";
  randomImage[11] = "./img/weapon/Asval.webp";
  randomImage[12] = "./img/weapon/AXMC.webp";
  randomImage[13] = "./img/weapon/B.webp";
  randomImage[14] = "./img/weapon/DS.webp";
  randomImage[15] = "./img/weapon/DT_MDR_308.webp";
  randomImage[16] = "./img/weapon/DT_MDR_5.56x45.webp";
  randomImage[17] = "./img/weapon/Dvl10.webp";
  randomImage[18] = "./img/weapon/FNGL40.webp";
  randomImage[19] = "./img/weapon/G36.webp";
  randomImage[20] = "./img/weapon/HK_MP5K-N.webp";
  randomImage[21] = "./img/weapon/HK.webp";
  randomImage[22] = "./img/weapon/HK416.webp";
  randomImage[23] = "./img/weapon/HK416.webp";
  randomImage[24] = "./img/weapon/HKMP7A1.webp";
  randomImage[25] = "./img/weapon/HKMP7A2.webp";
  randomImage[26] = "./img/weapon/Kedr.webp";
  randomImage[27] = "./img/weapon/Kedrb.webp";
  randomImage[28] = "./img/weapon/Klin.webp";
  randomImage[29] = "./img/weapon/KS.webp";
  randomImage[30] = "./img/weapon/KT.webp";
  randomImage[31] = "./img/weapon/M4a1.webp";
  randomImage[32] = "./img/weapon/M32A1.webp";
  randomImage[33] = "./img/weapon/M590A1.webp";
  randomImage[34] = "./img/weapon/M700.webp";
  randomImage[35] = "./img/weapon/M870.webp";
  randomImage[36] = "./img/weapon/Mk18.webp";
  randomImage[37] = "./img/weapon/Mk47.webp";
  randomImage[38] = "./img/weapon/Mosin.webp";
  randomImage[39] = "./img/weapon/MosinInfantry.webp";
  randomImage[40] = "./img/weapon/MP-155.webp";
  randomImage[41] = "./img/weapon/MP.webp";
  randomImage[42] = "./img/weapon/MP5.webp";
  randomImage[43] = "./img/weapon/MP9.webp";
  randomImage[44] = "./img/weapon/MP18.webp";
  randomImage[45] = "./img/weapon/Mp153.webp";
  randomImage[46] = "./img/weapon/Mpx.webp";
  randomImage[47] = "./img/weapon/Mr133.webp";
  randomImage[48] = "./img/weapon/MTs.webp";
  randomImage[49] = "./img/weapon/Pp19.webp";
  randomImage[50] = "./img/weapon/PPSH.webp";
  randomImage[51] = "./img/weapon/RD.webp";
  randomImage[52] = "./img/weapon/RPK-16.webp";
  randomImage[53] = "./img/weapon/Rsass.webp";
  randomImage[54] = "./img/weapon/SAG.webp";
  randomImage[55] = "./img/weapon/Saiga9.webp";
  randomImage[56] = "./img/weapon/Saiga12.webp";
  randomImage[57] = "./img/weapon/SCAR-L.webp";
  randomImage[58] = "./img/weapon/ScarH.webp";
  randomImage[59] = "./img/weapon/Sks.webp";
  randomImage[60] = "./img/weapon/SR-25.webp";
  randomImage[61] = "./img/weapon/STM.webp";
  randomImage[62] = "./img/weapon/Sv98.webp";
  randomImage[63] = "./img/weapon/SVD-S.webp";
  randomImage[64] = "./img/weapon/T-5000.webp";
  randomImage[65] = "./img/weapon/Toz.webp";
  randomImage[66] = "./img/weapon/TX-15.webp";
  randomImage[67] = "./img/weapon/UMP45.webp";
  randomImage[68] = "./img/weapon/Vector.webp";
  randomImage[69] = "./img/weapon/VeprHunter.webp";
  randomImage[70] = "./img/weapon/VPO-215.webp";
  randomImage[71] = "./img/weapon/Vpo136.webp";
  randomImage[72] = "./img/weapon/Vpo209.webp";
  randomImage[73] = "./img/weapon/Vss.webp";

  let number = Math.floor(Math.random() * randomImage.length);

  document.getElementById("result-weapon").innerHTML +=
    '<img src="' +
    randomImage[number] +
    '" style="width:306px; height:130px; position:absolute; top:52%; left:37%; z-index: 1;" />';
}

function getLoadout () {
getRandomArmor()
getRandomHelmet()
getRandomWeapon()
document.getElementById("result-loadout").innerHTML
}