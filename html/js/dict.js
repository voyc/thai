/*
Eng
Eng literal, thai word order
Thai
Translit
Audio
  Components
  Tags

Auto add sup tags to translit
Test, which field to make q, all other fields are answer

Thai: separate words and tilt for 

ʉ	U Bar	Say U while smiling
ö	O diaeresis	simple grunt uh
*/

/*
typ = 
	glyph
	word
	cword
	phrase
	expression
	sentence
*/

voyc.components = [
]

patterns = [
//#person ให้ #object แก่ #person	#person give #object to #person
//#person พา #person ไป หา #person		#person take #person to see #person
]

voyc.dict = [
	// hint:'2M4M-3M3M 3M4H' 1 number + 1 letter for each syllable, space to separate words, hyphen to separate word and rythym

	{id:100, typ:'glyph', ns:0, ccls:'0', end:'', tone:'', th:'ๆ', 	translit:'',	en:'(repeat)'},

	{id:500, typ:'syllable', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'อา', 	translit:'aa_M', hint:'2M', part:'', lvl:1,	en:'(prefix)'},

	{id:1001, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ใจ',	translit:'jai_M',	hint:'2M', part:'noun', lvl:9, en:'heart'},
	{id:1002, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ดี',	translit:'dii_M',	hint:'2M', part:'adjx', lvl:1, en:'good'},
	{id:1003, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'เอา',	translit:'ao_M',	hint:'3M', part:'verb', lvl:1, en:'take'},
	{id:1004, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'กิน',	translit:'kgin_M',	hint:'3M', part:'verb', lvl:9, en:'eat'},
	{id:1005, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'เขา',	translit:'kao_R',	hint:'3R', part:'pron', lvl:1, en:'he/she'},
	{id:1006, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ผม',	translit:'pom_R',	hint:'2R', part:'pron', lvl:1, en:'I (male)'},
	{id:1007, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ฉัน',	translit:'chan_R',	hint:'3R', part:'pron', lvl:1, en:'I (female)'},
	{id:1008, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ของ',	translit:'kawng_R',	hint:'3R', part:'prep', lvl:9, en:'of'},
	{id:1009, typ:'word', ns:1, cat:'anatomy', ccls:'h', end:'live', mark:'0', tone:'R', th:'หัว',	translit:'hua_R',	hint:'3R', part:'noun', lvl:9, en:'head'},
	{id:1010, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'รู',	translit:'ruu_M',	hint:'2M', part:'noun', lvl:9, en:'hole'},
	{id:1011, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ยิน',	translit:'yin_M',	hint:'3M', part:'verb', lvl:9, en:'hear'},
	{id:1012, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'คุณ',	translit:'kun_M',	hint:'3M', part:'pron', lvl:1, en:'you'},
	{id:1013, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ใน',	translit:'nai_M',	hint:'2M', part:'prep', lvl:9, en:'in'},
	{id:1014, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'เพลง',	translit:'pleeng_M',	hint:'5M', part:'noun', lvl:9, en:'song'},
	{id:1015, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'มัน',	translit:'man_M',	hint:'3M', part:'pron', lvl:9, en:'it'},
	{id:1016, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'วัด',	translit:'wad_H',	hint:'3H', part:'noun', lvl:9, en:'temple'},
	{id:1017, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'สด',	translit:'sod_L',	hint:'2L', part:'adjx', lvl:9, en:'fresh'},
	{id:1018, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'เห็น',	translit:'hen_R',	hint:'4R', part:'verb', lvl:9, en:'see'},      
	{id:1019, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'เปิด',	translit:'bpööd_L',	hint:'4L', part:'verb', lvl:9, en:'open'},     
	{id:1022, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ขม',	translit:'kom_R',	hint:'2R', part:'adj ', lvl:9, en:'bitter'},      
	{id:1023, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ยืน',	translit:'yʉʉn_M',	hint:'3M', part:'verb', lvl:9, en:'stand'},      
	{id:1024, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'รวย',	translit:'ruai_M',	hint:'3M', part:'adjx', lvl:9, en:'rich'},      
	{id:1025, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ดม',	translit:'dom_M',	hint:'2M', part:'verb', lvl:9, en:'to smell or sniff'},      
	{id:1026, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ถือ',	translit:'tʉʉ_R',	hint:'3R', part:'verb', lvl:9, en:'to hold'},      
	{id:1027, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'ลวก'	,translit:'luak_F',	hint:'3F', part:'verb', lvl:9, en:'to boil quickly'},      
	{id:1028, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'มวย'	,translit:'muai_M',	hint:'3M', part:'noun', lvl:9, en:'boxing'},      
	{id:1029, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'คืน',	translit:'kʉʉn_M',	hint:'3M', part:'noun', lvl:9, en:'night'},      
	{id:1030, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'นวด'	,translit:'nuad_F',	hint:'2F', part:'noun', lvl:9, en:'massage'},      
	{id:1031, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ฟัง',	translit:'fang_M',	hint:'3M', part:'verb', lvl:9, en:'listen'},      
	{id:1032, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'เบิก',	translit:'böök_L',	hint:'4L', part:'verb', lvl:9, en:'take'},      
	{id:1033, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'ปวด',	translit:'bpuad_L',	hint:'3L', part:'verb', lvl:9, en:'pain'},      
	{id:1034, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'มือ',	translit:'mʉʉ_M',	hint:'3M', part:'noun', lvl:9, en:'hand'},      
	{id:1035, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'กัด',	translit:'gad_L',	hint:'3L', part:'verb', lvl:9, en:'to bite'},
	{id:1036, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'วัน',	translit:'wan_M',	hint:'3M', part:'noun', lvl:9, en:'day'},
	{id:1037, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'นม',	translit:'nom_M',	hint:'2M', part:'noun', lvl:9, en:'milk'},
	{id:1038, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'จบ',	translit:'job_L',	hint:'2L', part:'verb', lvl:9, en:'to end, to finish'},
	{id:1039, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ดวง',	translit:'duang_M',	hint:'3M', part:'noun', lvl:9, en:'sphere'},
	{id:1040, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'ลบ',	translit:'lob_H',	hint:'2H', part:'verb', lvl:9, en:'to erase, minus, to delete'},
	{id:1041, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ขน',	translit:'kon_R',	hint:'2R', part:'noun', lvl:9, en:'body hair'},
	{id:1042, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'เจ็บ',	translit:'jeb_L',	hint:'3L', part:'noun', lvl:9, en:'hurt'},
	{id:1043, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'ลด',	translit:'lod_H',	hint:'2H', part:'verb', lvl:9, en:'to reduce'},
	{id:1044, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'คน',	translit:'kon_M',	hint:'2M', part:'noun', lvl:1, en:'person'},
	{id:1045, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'เดิน',	translit:'döön_M',	hint:'4M', part:'verb', lvl:9, en:'walk'},
	{id:1046, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ลม',	translit:'lom_M',	hint:'2M', part:'noun', lvl:9, en:'wind'},
	{id:1047, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'เห็ด',	translit:'hed_L',	hint:'4L', part:'noun', lvl:9, en:'mushroom'},
	{id:1049, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'เค็ม',	translit:'kem_M',	hint:'4M', part:'adjx', lvl:9, en:'salty'},
	{id:1050, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'มืด',	translit:'mʉʉd_F',	hint:'3F', part:'adjx', lvl:9, en:'dark'},
	{id:1051, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'อบ',	translit:'awb_L',	hint:'2L', part:'adjx', lvl:9, en:'baked'},
	{id:1052, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'บน',	translit:'bon_M',	hint:'2M', part:'prep', lvl:9, en:'on'},
	{id:1053, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'เติม',	translit:'dööm_M',	hint:'4M', part:'verb', lvl:9, en:'to fill'},
	{id:1054, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'มด',	translit:'mod_H',	hint:'2H', part:'noun', lvl:9, en:'ant'},
	{id:1055, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'นัด',	translit:'nad_H',	hint:'3H', part:'noun', lvl:9, en:'appointment'},
	{id:1056, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ปืน',	translit:'bpʉʉn_M',	hint:'3M', part:'noun', lvl:9, en:'gun'},
	{id:1057, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'ปลวก',	translit:'bpluak_L',	hint:'4L', part:'noun', lvl:9, en:'termite'},
	{id:1058, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'ผัด',	translit:'pad_L',	hint:'3L', part:'verb', lvl:9, en:'to stir fry'},
	{id:1059, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'ผัก',	translit:'pak_L',	hint:'3L', part:'noun', lvl:9, en:'vegetable'},
	{id:1060, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'เป็น',	translit:'bpen_M',	hint:'4M', part:'verb', lvl:1, en:'is'},
	{id:1062, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'คือ',	translit:'kʉʉ_M',	hint:'3M', part:'verb', lvl:9, en:'is'},
	{id:1061, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'สวน',	translit:'suan_R',	hint:'3R', part:'noun', lvl:9, en:'garden'},
	{id:1063, typ:'word', ns:1, cat:'anatomy', ccls:'l', end:'live', mark:'0', tone:'M', th:'ฟัน',	translit:'fan_M',	hint:'3M', part:'noun', lvl:9, en:'tooth'},
	{id:1064, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ฝัน',	translit:'fan_R',	hint:'3R', part:'noun', lvl:9, en:'dream'},
	{id:1065, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ฝน',	translit:'fon_R',	hint:'2R', part:'noun', lvl:9, en:'rain'},
	{id:1066, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'ตก',	translit:'dtok_L',	hint:'2L', part:'verb', lvl:9, en:'to fall'},
	{id:1067, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'ชื่อ',	translit:'chʉʉ_F',	hint:'4F', part:'noun', lvl:1, en:'name'},
	{id:1068, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'เพิ่ม',	translit:'pööm_F',	hint:'4F', part:'verb', lvl:9, en:'to add'},
	{id:1069, typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', th:'ดื่ม',	translit:'dʉʉm_L',	hint:'4L', part:'verb', lvl:9, en:'drink'},
	{id:1070, typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', th:'อื่น',	translit:'ʉʉn_L',	hint:'4L', part:'adjx', lvl:9, en:'different'},
	{id:1071, typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', th:'ส่าย',	translit:'saai_L',	hint:'4L', part:'verb', lvl:9, en:'to sway'},
	{id:1072, typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', th:'ใหม่',	translit:'mai_L',	hint:'4L', part:'adjx', lvl:9, en:'new'},
	{id:1073, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'ไม่',	translit:'mai_F',	hint:'3F', part:'adjx', lvl:1, en:'not'},
	{id:1074, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'ที่',	translit:'tii_F',	hint:'3F', part:'prep', lvl:1, en:'at/a place'},
	{id:1075, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'นี้',	translit:'nii_H',	hint:'3H', part:'pron', lvl:9, en:'this'},
	{id:1076, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'นั่ง',	translit:'nang_F',	hint:'4F', part:'verb', lvl:9, en:'sit'},
	{id:1077, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'แม่',	translit:'mae_F',	hint:'3F', part:'noun', lvl:9, en:'mom'},
	{id:1078, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'พ่อ',	translit:'paw_F',	hint:'3F', part:'noun', lvl:9, en:'dad'},
	{id:1079, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'เล่น',	translit:'len_F',	hint:'4F', part:'verb', lvl:9, en:'play'},
	{id:1080, typ:'word', ns:1, ccls:'m', end:'live', mark:'2', tone:'F', th:'ได้',	translit:'dai_F',	hint:'3F', part:'verb', lvl:1, en:'can'},
	{id:1081, typ:'word', ns:1, ccls:'m', end:'live', mark:'2', tone:'F', th:'ด้วย',	translit:'duaai_F',	hint:'4F', part:'conj', lvl:9, en:'also'},
	{id:1082, typ:'word', ns:1, ccls:'h', end:'live', mark:'2', tone:'F', th:'เข้า',	translit:'kao_F',	hint:'4F', part:'verb', lvl:9, en:'enter'},
	{id:1083, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'รู้',	translit:'ruu_H',	hint:'2H', part:'verb', lvl:9, en:'know'},
	{id:1084, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'น้ำ',	translit:'naam_H',	hint:'4H', part:'noun', lvl:9, en:'water'},
	{id:1085, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'ช้า',	translit:'chaa_H',	hint:'3H', part:'advx', lvl:1, en:'slowly'},
	{id:1086, typ:'word', ns:1, cat:'anatomy', ccls:'l', end:'live', mark:'2', tone:'H', th:'เท้า',	translit:'tao_H',	hint:'4H', part:'noun', lvl:9, en:'foot'},
	{id:1087, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'จัก',	translit:'jak_L',	hint:'3L', part:'verb', lvl:9, en:'split'},
	{id:1088, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'กับ',	translit:'gab_L',	hint:'3L', part:'prep', lvl:9, en:'with'},
	{id:1091, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'อีก',	translit:'iik_L',	hint:'3L', part:'advx', lvl:9, en:'more/again'},
	{id:1094, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'อยาก',	translit:'yaak_L',	hint:'4L', part:'verb', lvl:1, en:'want'},
	{id:1095, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'พบ',	translit:'pob_H',	hint:'2H', part:'verb', lvl:9, en:'to find'},
	{id:1096, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'ครับ',	translit:'krap_H',	hint:'4H', part:'intj', lvl:9, en:'(polite)'},
	{id:1097, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'รถ',	translit:'rot_H',	hint:'2H', part:'noun', lvl:9, en:'vehicle'},	
	{id:1098, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'พูด',	translit:'puud_F',	hint:'3F', part:'verb', lvl:1, en:'speak'},
	{id:1099, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'ชอบ',	translit:'chawb_F',	hint:'3F', part:'verb', lvl:1, en:'like'},
	{id:1100, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'เงียบ',	translit:'ngiab_F',	hint:'5F', part:'adjx', lvl:9, en:'quiet'},
	{id:1101, typ:'word', ns:1, ccls:'h', end:'live', mark:'2', tone:'F', th:'ขึ้น',	translit:'kʉn_F',	hint:'4F', part:'advx', lvl:9, en:'up'},
	{id:1102, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ลง',	translit:'long_M',	hint:'2M', part:'advx', lvl:9, en:'down'},
	{id:1103, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'แพง',	translit:'paeng_M',	hint:'3M', part:'adjx', lvl:1, en:'expensive'},
	{id:1104, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'ถูก',	translit:'tuuk_L',	hint:'3L', part:'adjx', lvl:9, en:'cheap'},
	{id:1105, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'ยาก',	translit:'yaak_F',	hint:'3F', part:'adjx', lvl:9, en:'difficult'},
	{id:1106, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'ง่าย',	translit:'ngaai_F',	hint:'4F', part:'adjx', lvl:9, en:'easy'},
	{id:1107, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'แย่',	translit:'yae_F',	hint:'3F', part:'adjx', lvl:9, en:'bad'},
	{id:1108, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'L', th:'หนัก',	translit:'nak_L',	hint:'4L', part:'adjx', lvl:9, en:'heavy'},
	{id:1109, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'เบา',	translit:'bao_M',	hint:'3M', part:'adjx', lvl:9, en:'light'},
	{id:1110, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ไกล',	translit:'glai_M',	hint:'3M', part:'advx', lvl:1, en:'far'},
	{id:1111, typ:'word', ns:1, ccls:'m', end:'live', mark:'2', tone:'F', th:'ใกล้',	translit:'glai_F',	hint:'3F', part:'advx', lvl:1, en:'near'},
	{id:1112, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'มาก',	translit:'maak_F',	hint:'3F', part:'adjx', lvl:1, en:'many (much)'},
	{id:1113, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'น้อย',	translit:'nawi_H',	hint:'4H', part:'adjx', lvl:9, en:'few (little)'},
	{id:1114, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'หรือ',	translit:'rʉʉ_R',	hint:'4R', part:'conj', lvl:9, en:'or'},
	{id:1115, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ดาว',	translit:'daao_M',	hint:'3M', part:'noun', lvl:9, en:'star'},
	{id:1116, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'เงิน',	translit:'ngön_M',	hint:'4M', part:'noun', lvl:9, en:'money'},
	{id:1117, typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', th:'แต่',	translit:'dtaae_L',	hint:'3L', part:'conj', lvl:9, en:'but'},
	{id:1118, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'ร้าน',	translit:'raan_H',	hint:'4H', part:'noun', lvl:9, en:'shop'},
	{id:1119, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ไทย',	translit:'tai_M',	hint:'3M', part:'adjx', lvl:9, en:'Thai'},
	{id:1120, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ไหล',	translit:'lai_R',	hint:'3R', part:'verb', lvl:9, en:'flow'},
	{id:1121, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'จาก',	translit:'jak_L',	hint:'3L', part:'prep', lvl:9, en:'from'},
	{id:1122, typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', th:'ต่อ',	translit:'daw_L',	hint:'3L', part:'prep', lvl:9, en:'to'},
	{id:1123, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ดอย',	translit:'dawi_M',	hint:'3M', part:'noun', lvl:9, en:'mountain'},
	{id:1124, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'มี',	translit:'mii_M',	hint:'2M', part:'verb', lvl:1, en:'have'},
	{id:1125, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'เลี้ยว',	translit:'liao_H',	hint:'6H', part:'verb', lvl:1, en:'turn'},
	{id:1126, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ขวา',	translit:'kwaa_R',	hint:'3R', part:'advx', lvl:1, en:'right'},
	{id:1127, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'ซ้าย',	translit:'saai_H',	hint:'4H', part:'advx', lvl:1, en:'left'},
	{id:1128, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ไป',	translit:'bai_M',	hint:'2M', part:'verb', lvl:1, en:'go to'},
	{id:1129, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ตรง',	translit:'dtrong_M',	hint:'3M', part:'advx', lvl:1, en:'straight/directly to a point'},
	{id:1130, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'หยุด',	translit:'hut_L',	hint:'4L', part:'verb', lvl:1, en:'stop'},
	{id:1131, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'เชิญ',	translit:'chön_M',	hint:'4M', part:'verb', lvl:9, en:'invite'},
	{id:1132, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ตาม',	translit:'dtaam_M',	hint:'3M', part:'prep', lvl:9, en:'according'},
	{id:1133, typ:'word', ns:1, ccls:'m', end:'live', mark:'2', tone:'F', th:'ต้อง',	translit:'dtawng_F',	hint:'4F', part:'verb', lvl:9, en:'must'},
	{id:1134, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'เกรง',	translit:'greng_M',	hint:'4M', part:'verb', lvl:9, en:'fear'},
	{id:1135, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'H', th:'ขอ',	translit:'kaw_H',	hint:'2M', part:'verb', lvl:9, en:'ask'},
	{id:1136, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'โทษ',	translit:'toot_F',	hint:'3F', part:'verb', lvl:9, en:'fear'},
	{id:1137, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ไหน',	translit:'nai_R',	hint:'3R', part:'advx', lvl:1, en:'where'},
	{id:1138, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'มา',	translit:'ma_M',	hint:'2M', part:'verb', lvl:1, en:'come'},
	{id:1139, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'แล้ว',	translit:'laew_H',	hint:'H',	part:'advx',	lvl:1, en:'already (tense marker)'},
	{id:1140, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'อยู่',	translit:'yuu_F',	hint:'F',	part:'verb',	lvl:1, en:'residing at a point'},
	{id:1141, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'สวย',	translit:'suay_R',	hint:'R',	part:'adjx',	lvl:1, en:'beautiful, attractive, pretty'},
	{id:1142, typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', th:'ใหญ่',	translit:'yai_L',	hint:'L',	part:'adjx',	lvl:1, en:'big'},
	{id:1143, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ทำ',	translit:'tam_M',	hint:'M',	part:'verb',	lvl:1, en:'do, make'},
	{id:1144, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'หมอ',	translit:'maw_R',	hint:'R',	part:'noun',	lvl:1, en:'doctor'},
	{id:1145, typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', th:'อย่า',	translit:'yaa_L',	hint:'L',	part:'verb',	lvl:1, en:'don’t!'},
	{id:1146, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'เร็ว',	translit:'reo_M',	hint:'M',	part:'advx',	lvl:1, en:'fast'},
	{id:1147, typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', th:'อิ่ม',	translit:'im_L',	hint:'L',	part:'adjx',	lvl:1, en:'full (food)'},
	{id:1148, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'รับ',	translit:'rap_R',	hint:'H',	part:'verb',	lvl:1, en:'get, receive, accept'},
	{id:1149, typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', th:'ช่วย',	translit:'chuay_L',	hint:'L',	part:'verb',	lvl:1, en:'help, aid, assist [v]'},
	{id:1150, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'H', th:'เผ็ด',	translit:'pet_H',	hint:'H',	part:'adjx',	lvl:1, en:'hot (spicy)'},
	{id:1151, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'ร้อน',	translit:'rawn_H',	hint:'H',	part:'adjx',	lvl:1, en:'hot (temperature)'},
	{id:1152, typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', th:'กี่',	translit:'gii_L',	hint:'L',	part:'advx',	lvl:1, en:'how much, how many'},
	{id:1153, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'ทราบ',	translit:'raap_F',	hint:'F',	part:'verb',	lvl:1, en:'know (something)'},
	{id:1154, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ดู',	translit:'doo_M',	hint:'M',	part:'verb',	lvl:1, en:'look, see, appear, seem, watch'},
	{id:1155, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'จอด',	translit:'jawt_L',	hint:'L',	part:'verb',	lvl:1, en:'stop, park'},
	{id:1156, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'บาท',	translit:'baat_L',	hint:'L',	part:'noun',	lvl:1, en:'Thai currency'},
	{id:1157, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'นั่น',	translit:'nan_F',	hint:'F',	part:'pron',	lvl:1, en:'that'},
	{id:1158, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'คิด',	translit:'kit_H',	hint:'H',	part:'verb',	lvl:1, en:'think, calculate'},
	{id:1159, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'นี่',	translit:'nii_F',	hint:'F',	part:'pron',	lvl:1, en:'this, these'},
	{id:1160, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'เหนื่อย',	translit:'nʉʉay_F',	hint:'F',	part:'adjx',	lvl:1, en:'tired'},
	{id:1161, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'เรา',	translit:'rao_M',	hint:'M',	part:'pron',	lvl:1, en:'we, us, our'},
	{id:1162, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ใคร',	translit:'krai_M',	hint:'M',	part:'pron',	lvl:1, en:'who, someone, anyone'},
	{id:1163, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'เขียน',	translit:'kian_R',	hint:'R',	part:'verb',	lvl:1, en:'write'},
	{id:1164, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ไร',	translit:'rai_M',	hint:'2M',	part:'noun',	lvl:1, en:'mite'},
	{id:1165, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ยัง',	translit:'yang_M',	hint:'3M',	part:'advx',	lvl:1, en:'yet'},
	{id:1166, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ไง',	translit:'ngai_M',	hint:'2M',	part:'advx',	lvl:1, en:'how'},
	{id:1167, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'หิว',	translit:'hiu_M',	hint:'3R',	part:'advx',	lvl:1, en:'hungry'},
	{id:1168, typ:'word', ns:1, ccls:'h', end:'live', mark:'2', tone:'L', th:'ข้าว',	translit:'kaao_M',	hint:'4L',	part:'noun',	lvl:1, en:'rice'},
	{id:1169, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'ขอบ',	translit:'kawp_L',	hint:'3L',	part:'noun',	lvl:1, en:'edge'},
	{id:1170, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'เย็น',	translit:'yen_M',	hint:'4M',	part:'adjx',	lvl:1, en:'cool'},
	{id:1171, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'นิด', 	translit:'nit_H', hint:'3H',	part:'adjx',	lvl:1, en:'tiny'},
	{id:1172, typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', th:'หน่อย', 	translit:'naai_L', hint:'5L',	part:'noun',	lvl:1, en:'little bit'},
	{id:1173, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'บาด', 	translit:'baat_L', hint:'3M',	part:'verb',	lvl:1, en:'wound'},
	{id:1174, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ตำ', 	translit:'dtam_M', hint:'2M',	part:'verb',	lvl:1, en:'beat'},
	{id:1176, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'หลง', 	translit:'long_R', hint:'3R',	part:'adjx',	lvl:1, en:'lost'},
	{id:1177, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ทาง', 	translit:'taang_M', hint:'3M',	part:'noun',	lvl:1, en:'way'},
	{id:1180, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'โรง', 	translit:'roong_M', hint:'3M',	part:'noun',	lvl:1, en:'building'},
	{id:1181, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'แรม', 	translit:'raem_M', hint:'3M',	part:'noun',	lvl:1, en:'a period of time'},
	{id:1182, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'จริง', 	translit:'_M', hint:'4M',	part:'noun',	lvl:1, en:'truthful'},
	{id:1184, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'M', th:'แน่', 	translit:'naae_F', hint:'3F',	part:'adjx',	lvl:1, en:'certain'},
	{id:1186, typ:'word', ns:1, ccls:'h', end:'live', mark:'2', tone:'F', th:'ห้อง', 	translit:'hawng_F', hint:'4F',	part:'noun',	lvl:1, en:'room'},
	{id:1187, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'พรุ่ง', 	translit:'prung_F', hint:'5F',	part:'advx',	lvl:1, en:'next day'},
	{id:1188, typ:'word', ns:1, ccls:'m', end:'dead', mark:'2', tone:'L', th:'กลับ', 	translit:'glap_L', hint:'4L',	part:'verb',	lvl:1, en:'go back, return'},
	{id:1190, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'F', th:'เมื่อ', 	translit:'meuua_F', hint:'4F',	part:'prep',	lvl:1, en:'a time'},
	{id:1191, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ไหร่', 	translit:'_M', hint:'2M',	part:'noun',	lvl:1, en:''},
	{id:1192, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ไม', 	translit:'_M', hint:'2M',	part:'noun',	lvl:1, en:''},
	{id:1194, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'วาน', 	translit:'_M', hint:'2M',	part:'noun',	lvl:1, en:''},

	{id:1195, typ:'word', ns:1, ccls:'m', end:'live', mark:'2', tone:'F', th:'ใต้',	translit:'dai_F',	hint:'3F',	part:'prep',	lvl:2, en:'under'},
	{id:1196, typ:'word', ns:1, cat:'anatomy', ccls:'h', end:'live', mark:'2', tone:'F', th:'หน้า',	translit:'naa_F',	hint:'4F',	part:'prep',	lvl:2, en:'front, face'},
	{id:1197, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'หลัง',	translit:'lang_R',	hint:'4R',	part:'prep',	lvl:2, en:'back'},
	{id:1198, typ:'word', ns:1, ccls:'h', end:'live', mark:'2', tone:'F', th:'ข้าง',	translit:'kaang_F',	hint:'4F',	part:'prep',	lvl:2, en:'side'},
	{id:1199, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'H', th:'และ',	translit:'lae_H',	hint:'3H',	part:'conj',	lvl:1, en:'and'},
	{id:1200, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'ซื้อ',	translit:'sʉʉ_H',	hint:'4H',	part:'verb',	lvl:1, en:'buy'},
	{id:1201, typ:'word', ns:1, ccls:'h', end:'live', mark:'2', tone:'F', th:'เสื้อ',	translit:'sʉʉa_F',	hint:'5F',	part:'noun',	lvl:1, en:'shirt'},
	{id:1202, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'หนาว',	translit:'naao_R',	hint:'4R',	part:'noun',	lvl:1, en:'cold'},
	{id:1203, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ปี',	translit:'bpii_M',	hint:'2M',	part:'noun',	lvl:1, en:'year'},	
	{id:1204, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'เพรอะ',	translit:'praw_H',	hint:'5H',	part:'conj',	lvl:1, en:'because'},
	{id:1205, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'ว่า',	translit:'waa_F',	hint:'3F',	part:'conj',	lvl:1, en:'as'},
	{id:1206, typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', th:'อุ่น',	translit:'oon_L',	hint:'4L',	part:'adjx',	lvl:1, en:'warm'},
	{id:1207, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'F', th:'ถ้า',	translit:'taa_F',	hint:'3F',	part:'conj',	lvl:1, en:'if'},
	{id:1208, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ดัง',	translit:'dang_M',	hint:'3M',	part:'advx',	lvl:1, en:'like'},
	{id:1209, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'นั้น',	translit:'nan_H',	hint:'4H',	part:'pron',	lvl:1, en:'that'},
	{id:1210, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'แม้',	translit:'mae_H',	hint:'3H',	part:'conj',	lvl:1, en:'though'},
	{id:1211, typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', th:'ก่อน',	translit:'gaawn_L',	hint:'4L',	part:'adverb',	lvl:1, en:'before'},
	{id:1212, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'กัน',	translit:'gan_M',	hint:'3M',	part:'conj',	lvl:1, en:'together'},

	{id:1213, typ:'word', ns:1, cat:'anatomy', ccls:'m', end:'dead', mark:'0', tone:'L', th:'ปาก',	translit:'bpaak_L',	hint:'3L',	part:'noun',	lvl:1, en:'mouth'},
	{id:1214, typ:'word', ns:1, cat:'anatomy', ccls:'l', end:'live', mark:'2', tone:'H', th:'ลิ้น',	translit:'lin_H',	hint:'4H',	part:'noun',	lvl:1, en:'tongue'},
	{id:1215, typ:'word', ns:1, cat:'anatomy', ccls:'h', end:'live', mark:'0', tone:'R', th:'หู',	translit:'huu_R',	hint:'2R',	part:'noun',	lvl:1, en:'ear'},
	{id:1216, typ:'word', ns:1, cat:'anatomy', ccls:'l', end:'live', mark:'0', tone:'M', th:'คาง',	translit:'kaang_M',	hint:'3M',	part:'noun',	lvl:1, en:'chin'},
	{id:1217, typ:'word', ns:1, cat:'anatomy', ccls:'m', end:'live', mark:'2', tone:'F', th:'แก้ม',	translit:'gaaem_F',	hint:'4F',	part:'noun',	lvl:1, en:'cheek'},
	{id:1218, typ:'word', ns:1, cat:'anatomy', ccls:'l', end:'live', mark:'2', tone:'H', th:'คิ้ว',	translit:'kiu_H',	hint:'4H',	part:'noun',	lvl:1, en:'eyebrow'},
	{id:1229, typ:'word', ns:1, cat:'anatomy', ccls:'l', end:'live', mark:'0', tone:'M', th:'คอ',	translit:'kaw_M',	hint:'2M',	part:'noun',	lvl:1, en:'neck/throat'},
	{id:1220, typ:'word', ns:1, cat:'anatomy', ccls:'h', end:'live', mark:'1', tone:'L', th:'ไหล่',	translit:'lai_L',	hint:'4L',	part:'noun',	lvl:1, en:'shoulder'},
	{id:1221, typ:'word', ns:1, cat:'anatomy', ccls:'h', end:'live', mark:'0', tone:'R', th:'แขน',	translit:'kaaen_R',	hint:'3R',	part:'noun',	lvl:1, en:'arm'},
	{id:1222, typ:'word', ns:1, cat:'anatomy', ccls:'h', end:'dead', mark:'0', tone:'L', th:'ศอก',	translit:'saawk_L',	hint:'3L',	part:'noun',	lvl:1, en:'elbow'},
	{id:1223, typ:'word', ns:1, cat:'anatomy', ccls:'l', end:'live', mark:'0', tone:'M', th:'มือ',	translit:'mʉʉa_M',	hint:'3M',	part:'noun',	lvl:1, en:'hand'},

	{id:5030, typ:'word', ns:2, cat:'anatomy', th:'จมูก',	translit:'ja_L muk_L',	hint:'1L3L',	part:'noun',	lvl:1, en:'nose'},
	{id:5031, typ:'word', ns:2, cat:'anatomy', th:'เหงึอก',	translit:'ja_L muk_L',	hint:'1L3L',	part:'noun',	lvl:1, en:'nose'},
	{id:5032, typ:'word', ns:2, cat:'anatomy', th:'หน้าผาก',	translit:'ja_L muk_L',	hint:'1L3L',	part:'noun',	lvl:1, en:'nose'},
	{id:5033, typ:'word', ns:2, cat:'anatomy', th:'ข้อมึอ',	translit:'ja_L muk_L',	hint:'1L3L',	part:'noun',	lvl:1, en:'nose'},
	{id:5034, typ:'word', ns:2, cat:'anatomy', th:'นิ้วมึอ',	translit:'ja_L muk_L',	hint:'1L3L',	part:'noun',	lvl:1, en:'nose'},
	{id:5035, typ:'word', ns:2, cat:'anatomy', th:'เล็บมึอ',	translit:'ja_L muk_L',	hint:'1L3L',	part:'noun',	lvl:1, en:'nose'},
	{id:5036, typ:'word', ns:2, cat:'anatomy', th:'นิ้วเท้า',	translit:'ja_L muk_L',	hint:'1L3L',	part:'noun',	lvl:1, en:'nose'},
	{id:5037, typ:'word', ns:2, cat:'anatomy', th:'เล็บเท้า',	translit:'ja_L muk_L',	hint:'1L3L',	part:'noun',	lvl:1, en:'nose'},
	//1009 head
	//1196 face
	//1063 tooth
	//1086 foot



	{id:2000, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'zero'},
	{id:2001, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'one'},
	{id:2002, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'two'},
	{id:2003, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'three'},
	{id:2004, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'four'},
	{id:2005, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'five'},
	{id:2006, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'six'},
	{id:2007, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'seven'},
	{id:2008, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'eight'},
	{id:2009, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'nine'},
	{id:2010, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'ten'},
	{id:2011, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'L', th:'สี่',	translit:'sii_F',	hint:'3F', part:'adjx', en:'eleven'},
	
	// multi-syllable without set
	{id:5000, typ:'word', ns:2, th:'อาหาร',	translit:'aa_M haan_R',	hint:'2M3R', part:'noun', en:'food'},
	{id:5001, typ:'word', ns:2, th:'ประเทศ',	translit:'bpra_L tet_L',	hint:'3L3L', part:'noun', en:'country'},
	{id:5002, typ:'word', ns:2, th:'ทิศเหนือ',	translit:'tit_H nʉʉa_L',	hint:'3H3R', part:'noun', en:'north'},
	{id:5003, typ:'word', ns:2, th:'ทิศใต้',	translit:'tit_H dai_F',	hint:'3H3F', part:'noun', en:'south'},
	{id:5004, typ:'word', ns:2, th:'ทะเล',	translit:'ta_H lee_M',	hint:'2H2M', part:'noun', en:'sea'},
	{id:5005, typ:'word', ns:2, th:'สบาย',	translit:'sa_M baai_M',	hint:'1M3M', part:'adjx', en:'comfortable'},
	{id:5006, typ:'word', ns:2, th:'สวัส',	translit:'sa_L wat_L',	hint:'1L3L', part:'noun', en:'good fortune'},
	{id:5007, typ:'word', ns:2, th:'อร่อย',	translit:'a_M roi_M',	hint:'1M4M',	part:'adjx',	lvl:1, en:'delicious'},
	{id:5008, typ:'word', ns:2, th:'เท่าไหร่',	translit:'tao_M rai_M',	hint:'4M4M',	part:'advx',	lvl:1, en:'how much, how many'},
	{id:5009, typ:'word', ns:2, th:'ตำรวจ',	translit:'dtam_M ruat_L',	hint:'2M3L',	part:'noun',	lvl:1, en:'police'},
	{id:5010, typ:'word', ns:2, th:'ตลาด',	translit:'dta_L laat_l',	hint:'1L3L',	part:'noun',	lvl:1, en:'market'},
	{id:5011, typ:'word', ns:2, th:'ที่โน่น',	translit:'tii_F noon_F',	hint:'3F4F',	part:'advx',	lvl:1, en:'there (yonder)'},
	{id:5012, typ:'word', ns:2, th:'อะไร',	translit:'a_L rai_M',	hint:'2L2M',	part:'advx',	lvl:1, en:'what?'},
	{id:5013, typ:'word', ns:2, cat:'month', th:'มกราคม',	translit:'ma_H ga_L ra_M kom_M',	hint:'1H1L2M2M', lvl:2, en:'January'},
	{id:5014, typ:'word', ns:2, cat:'month', th:'กุมภาพันธ์',	translit:'goom_M pa_M pan_M',	hint:'3M2M5M', lvl:2, en:'February'},
	{id:5015, typ:'word', ns:2, cat:'month', th:'มีนาคม',	translit:'mii_M na_M kom_M',	hint:'2M2M2M', lvl:2, en:'March'},
	{id:5016, typ:'word', ns:2, cat:'month', th:'เมษายน',	translit:'me_M sa_R yon_M',	hint:'2M2R2M', lvl:2, en:'April'},
	{id:5017, typ:'word', ns:2, cat:'month', th:'พฤษภาคม',	translit:'prit_H sa_L paa_M kom_M',	hint:'2H1L2M2M', lvl:2, en:'May'},
	{id:5018, typ:'word', ns:2, cat:'month', th:'มิถุนายน',	translit:'mi_H tu_L naa_M yon_M',	hint:'2H2L2M2M', lvl:2, en:'June'},
	{id:5019, typ:'word', ns:2, cat:'month', th:'กรกฎาคม',	translit:'ga_L ra_H ga_L daa_M kom_M',	hint:'1L1H1L2M2M', lvl:2, en:'July'},
	{id:5020, typ:'word', ns:2, cat:'month', th:'สิงหาคม',	translit:'sing_R haa_R kom_M',	hint:'3R2R2M', lvl:2, en:'August'},
	{id:5021, typ:'word', ns:2, cat:'month', th:'กันยายน',	translit:'gan_M yaa_M yon_M',	hint:'3M2M2M', lvl:2, en:'September'},
	{id:5022, typ:'word', ns:2, cat:'month', th:'ตุลาคม',	translit:'dtu_L laa_M kom_M',	hint:'2L2M2M', lvl:2, en:'October'},
	{id:5023, typ:'word', ns:2, cat:'month', th:'พฤศจิกายน',	translit:'prit_H sa_L ji_L gaa_M yon_M',	hint:'2H1L2L2M2M', lvl:2, en:'November'},
	{id:5024, typ:'word', ns:2, cat:'month', th:'ธันวาคม',	translit:'tan_M waa_M kom_M',	hint:'3M2M2M', lvl:2, en:'December'},
	{id:5025, typ:'word', ns:2, set:[1204,1205], part:'conj',	lvl:1, en:'because'},
	{id:5026, typ:'word', ns:2, set:[1208,1209], part:'conj',	lvl:1, en:'so'},
	{id:5027, typ:'word', ns:2, set:[1210,1205], part:'conj',	lvl:1, en:'although'},
	{id:5028, typ:'word', ns:2, set:[1197,1121],part:'advx',	lvl:1, en:'after'},
	{id:5029, typ:'word', ns:3, set:[1202,1212,1201],	part:'noun',	lvl:1, en:'jacket'},
	
	
	{id:10000, typ:'cword', ns:2, set:[1077,1084], part:'noun', lvl:9, en:'river'},
	{id:10001, typ:'cword', ns:2, set:[1073,1080], part:'verb', lvl:1, en:'cannot'},
	{id:10002, typ:'cword', ns:2, set:[1074,1159], part:'advx', lvl:1, en:'here'},
	{id:10003, typ:'cword', ns:2, set:[1165,1166], part:'advx', lvl:1, en:'how'},
	{id:10004, typ:'cword', ns:2, set:[1167,1168], part:'adjx', lvl:1, en:'hungry'},
	{id:10005, typ:'cword', ns:2, set:[1167,1084], part:'adjx', lvl:1, en:'thirsty'},
	{id:10006, typ:'cword', ns:2, set:[1091,1074], part:'advx', lvl:1, en:'one more time'},
	{id:10007, typ:'cword', ns:2, set:[1171,1172], part:'adjx',	lvl:1, en:'little bit'},
	{id:10008, typ:'cword', ns:2, set:[1173,1042], part:'adjx',	lvl:1, en:'injured'},
	{id:10009, typ:'cword', ns:2, set:[1174,1175], part:'noun',	lvl:1, en:'police'},
	{id:10010, typ:'cword', ns:2, set:[1176,1177], part:'advx',	lvl:1, en:'lost'},
	{id:10011, typ:'cword', ns:2, set:[1083,1087], part:'verb',	lvl:1, en:'know (someone, something, someplace)'},
	{id:10013, typ:'cword', ns:2, set:[1180,1181], part:'noun',	lvl:1, en:'hotel'},
	{id:10015, typ:'cword', ns:2, set:[1184,1001], part:'intj',	lvl:1, en:'sure'},
	{id:10016, typ:'cword', ns:2, set:[1074,1157], part:'advx',	lvl:1, en:'there'},
	{id:10018, typ:'cword', ns:2, set:[1036,1075], part:'advx',	lvl:1, en:'today'},
	{id:10019, typ:'cword', ns:2, set:[1186,1084], part:'noun',	lvl:1, en:'toilet'},
	{id:10020, typ:'cword', ns:2, set:[1187,1075], part:'advx',	lvl:1, en:'tomorrow'},
	{id:10021, typ:'cword', ns:2, set:[1082,1001], part:'verb',	lvl:1, en:'understand'},
	{id:10022, typ:'cword', ns:2, set:[1188,1097], part:'noun',	lvl:1, en:'u-turn'},
	{id:10024, typ:'cword', ns:2, set:[1190,1191], part:'advx',	lvl:1, en:'when, whenever'},
	{id:10025, typ:'cword', ns:2, set:[1074,1137], part:'advx',	lvl:1, en:'where is'},
	{id:10026, typ:'cword', ns:2, set:[1143,1192], part:'advx',	lvl:1, en:'why'},
	{id:10027, typ:'cword', ns:3, set:[1190,1194,1075], part:'advx',	lvl:1, en:'yesterday'},

	{id:10028, typ:'cword', ns:2, set:[1198,1013], part:'prep',	lvl:3, en:'inside'},
	{id:10029, typ:'cword', ns:2, set:[1198,1052], part:'prep',	lvl:3, en:'above, on top'},
	{id:10030, typ:'cword', ns:2, set:[1198,1195], part:'prep',	lvl:3, en:'beneath'},
	{id:10031, typ:'cword', ns:2, set:[1198,1196], part:'prep',	lvl:3, en:'in front'},
	{id:10032, typ:'cword', ns:2, set:[1198,1197], part:'prep',	lvl:3, en:'behind'},
	{id:10033, typ:'cword', ns:2, set:[1198,1198], part:'prep',	lvl:3, en:'beside'},
	{id:10034, typ:'cword', ns:3, set:[1201,1212,1202], part:'noun',	lvl:3, en:'sweater'},
	
	{id:20000, typ:'phrase', ns:2, set:[1118,5000], part:'noun', lvl:1, en:'food shop'},
	{id:20001, typ:'phrase', ns:2, set:[1037,1142], part:'noun', lvl:1, en:'large breast'},
	{id:20001, typ:'phrase', ns:2, set:[1004,1168], part:'noun', lvl:1, en:'dinner, meal'},
	{id:20001, typ:'phrase', ns:2, set:[1168,1170], part:'noun', lvl:1, en:'dinner, supper'},
	
	
	{id:20500, typ:'expression', ns:2, set:[1131,1096], en:'please, come in, after you'},
	{id:20501, typ:'expression', ns:2, set:[1131,1132,5005,1096], en:'Please make yourself comfortable.'},
	{id:20502, typ:'expression', ns:2, set:[1073,1133,1134,1001,1096], en:'Never mind.'},
	{id:20503, typ:'expression', ns:2, set:[1035,1036,1096], lvl:1, en:'Excuse me.'},
	{id:20504, typ:'expression', ns:2, set:[1128,1137,1096], en:'Where you go?'},
	{id:20505, typ:'expression', ns:2, set:[1128,1137,1138,1096], en:'Where you come from?'},
	{id:20506, typ:'expression', ns:2, set:[5006,1002,1096], lvl:1, en:'hello, goodbye'},
	{id:20507, typ:'expression', ns:2, set:[1073,1164,1096], lvl:1, en:'no problem'},
	{id:20508, typ:'expression', ns:2, set:[1169,1012,1096],	lvl:1, en:'thank you'},
	{id:20509, typ:'expression', ns:2, set:[5005,1002,1096],	lvl:1, en:'well, fine'},
	{id:20510, typ:'expression', ns:2, set:[1182,100], part:'intj',	lvl:1, en:'really?!'},
	{id:20512, typ:'expression', ns:2, set:[5006,1002,1203,1072,1096], part:'',	lvl:1, en:'Happy New Year'},
/*
Tan Hai aroy
ครับผม	Yes Sir
*/
	
	{id:30000, typ:'sentence', ns:2, story:0,   line:0, set:[10000,1075,1002,1117,1103]},

	{id:30001, typ:'sentence', ns:2, story:100, line:1, set:[1124,10000,2004,1013,5001,1119], en:'There are four rivers in Thailand.'},
	{id:30002, typ:'sentence', ns:2, story:100, line:2, set:[1015,1120,1121,5002,1122,5003], en:'They flow from north to south.'},
	{id:30003, typ:'sentence', ns:2, story:100, line:3, set:[1121,1123,1122,5004], en:'From the mountains to the sea.'},

	{id:30004, typ:'sentence', ns:2, story:101, line:1, set:[1125,1126], en:'Turn right.'},
	{id:30005, typ:'sentence', ns:2, story:101, line:2, set:[1125,1127], en:'Turn left.'},
	{id:30006, typ:'sentence', ns:2, story:101, line:3, set:[1128,1129], en:'Go straight.'},
	{id:30007, typ:'sentence', ns:2, story:101, line:4, set:[1130], en:'Stop.'},



	//{id:5000, typ:'word', ns:2, th:'Polite particle [f]: ค่ะ',	translit:'kâ',	hint:'',	part:'',	lvl:1, en:'P'},
	//{id:5000, typ:'word', ns:2, th:'Polite particle [m]: ครับ',	translit:'kráp',	hint:'',	part:'',	lvl:1, en:'P'},
	//{id:5000, typ:'word', ns:2, th:'Question particle: ไหม',	translit:'măi',	hint:'',	part:'',	lvl:1, en:'P'},
	//{id:5000, typ:'word', ns:2, th:'Question particle [f]: คะ',	translit:'ká',	hint:'',	part:'',	lvl:1, en:'P'},
	//{id:5000, typ:'word', ns:2, th:'Question, confirmative [m/f]: เหรอ or หรือ',	translit:'rĕr or rĕu',	hint:'',	part:'',	lvl:1, en:'P'},
	//{id:5000, typ:'word', ns:2, th:'Question, “what about …?”: ล่ะ',	translit:'lâ',	hint:'',	part:'',	lvl:1, en:'P'},
	//{id:5000, typ:'word', ns:2, th:'Softener, makes it more persuasive: นะ',	translit:'ná',	hint:'',	part:'',	lvl:1, en:'P'},
	//{id:5000, typ:'word', ns:2, th:'Softens request or command, a bit: หน่อย',	translit:'nòi',	hint:'',	part:'',	lvl:1, en:'P'},
	//{id:5000, typ:'word', ns:2, th:'Used in requests, congratulations or condolences ด้วย (ค่ะ/นะคะ)',	translit:'dûay (ka/ná-ka)',	hint:'',	part:'',	lvl:1, en:'P'},
	//{id:5000, typ:'word', ns:2, th:'key-word response, ใช่, ครับ, ค่ะ',	translit:'châi, kráp, kâ',	hint:'',	part:'',	lvl:1, en:'yes'},


/*
pattern: from ... to ...
from north to south
from mountains to sea
from here to there

หัว	hua jai  heart vs mind
เท่าไร	tao rai	how much (age, cost, price, date)
yin dii (my pleasure, you're welcome)

ได้ยิน	Pom dai yin	I have heard		

*/	
]
