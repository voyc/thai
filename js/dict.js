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

voyc.components = [
]

patterns = [
//#person ให้ #object แก่ #person	#person give #object to #person
//#person พา #person ไป หา #person		#person take #person to see #person
]

voyc.dict = [
	// hint:'2M4M-3M3M 3M4H' 1 number + 1 letter for each syllable, space to separate words, hyphen to separate word and rythym
	//{id:'1001', c:['syllable'], typ:'word', ns:1, ccls:' ', end:'    ', mark:'0', tone:' ', t:'', th:'',	translit:'',	hint:'', en:'', wo:''},
	{id:1001, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ใจ',	translit:'jai_M',	hint:'2M', part:'noun', en:'heart', wo:''},
	{id:1002, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ดี',	translit:'dii_M',	hint:'2M', part:'adj' , en:'good', wo:''},
	{id:1003, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'เอา',	translit:'ao_M',	hint:'3M', part:'verb', en:'take', wo:''},
	{id:1004, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'กิน',	translit:'kgin_M',	hint:'3M', part:'verb', en:'eat', wo:''},
	{id:1005, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'เขา',	translit:'kao_R',	hint:'3R', part:'pron', en:'he/she', wo:''},
	{id:1006, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ผม',	translit:'pom_R',	hint:'2R', part:'pron', en:'I (male)', wo:''},
	{id:1007, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ฉัน',	translit:'chan_R',	hint:'3R', part:'pron', en:'I (female)', wo:''},
	{id:1008, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ของ',	translit:'kawng_R',	hint:'3R', part:'prep', en:'of', wo:''},
	{id:1009, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'หัว',	translit:'hua_R',	hint:'3R', part:'noun', en:'head', wo:''},
	{id:1010, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'รู',	translit:'ruu_M',	hint:'2M', part:'noun', en:'hole', wo:''},
	{id:1011, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ยิน',	translit:'yin_M',	hint:'3M', part:'verb', en:'hear', wo:''},
	{id:1012, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'คุณ',	translit:'kun_M',	hint:'3M', part:'pron', en:'you', wo:''},
	{id:1013, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ใน',	translit:'nai_M',	hint:'2M', part:'prep', en:'in', wo:''},
	{id:1014, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'เพลง',	translit:'pleeng_M',	hint:'5M', part:'noun', en:'song', wo:''},
	{id:1015, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'มัน',	translit:'man_M',	hint:'3M', part:'pron', en:'it', wo:''},
	{id:1016, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'วัด',	translit:'wad_H',	hint:'3H', part:'noun', en:'temple', wo:''},
	{id:1017, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'สด',	translit:'sod_L',	hint:'2L', part:'adj' , en:'fresh', wo:''},
	{id:1018, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'เห็น',	translit:'hen_R',	hint:'4R', part:'verb', en:'see', wo:''},      
	{id:1019, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'เปิด',	translit:'bpööd_L',	hint:'4L', part:'verb', en:'open', wo:''},     
	{id:1022, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ขม',	translit:'kom_R',	hint:'2R', part:'adj ', en:'bitter', wo:''},      
	{id:1023, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ยืน',	translit:'yʉʉn_M',	hint:'3M', part:'verb', en:'stand', wo:''},      
	{id:1024, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'รวย',	translit:'ruai_M',	hint:'3M', part:'adj' , en:'rich', wo:''},      
	{id:1025, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ดม',	translit:'dom_M',	hint:'2M', part:'verb', en:'to smell or sniff', wo:''},      
	{id:1026, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ถือ',	translit:'tʉʉ_R',	hint:'3R', part:'verb', en:'to hold', wo:''},      
	{id:1027, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'ลวก'	,translit:'luak_F',	hint:'3F', part:'verb', en:'to boil quickly', wo:''},      
	{id:1028, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'มวย'	,translit:'muai_M',	hint:'3M', part:'noun', en:'boxing', wo:''},      
	{id:1029, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'คืน',	translit:'kʉʉn_M',	hint:'3M', part:'noun', en:'night', wo:''},      
	{id:1030, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'นวด'	,translit:'nuad_F',	hint:'2F', part:'noun', en:'massage', wo:''},      
	{id:1031, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ฟัง',	translit:'fang_M',	hint:'3M', part:'verb', en:'listen', wo:''},      
	{id:1032, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'เบิก',	translit:'böök_L',	hint:'4L', part:'verb', en:'take', wo:''},      
	{id:1033, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'ปวด',	translit:'bpuad_L',	hint:'3L', part:'verb', en:'pain', wo:''},      
	{id:1034, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'มือ',	translit:'mʉʉ_M',	hint:'3M', part:'noun', en:'hand', wo:''},      
	{id:1035, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'กัด',	translit:'gad_L',	hint:'3L', part:'verb', en:'to bite', wo:''},
	{id:1036, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'วัน',	translit:'wan_M',	hint:'3M', part:'noun', en:'day', wo:''},
	{id:1037, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'นม',	translit:'nom_M',	hint:'2M', part:'noun', en:'milk', wo:''},
	{id:1038, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'จบ',	translit:'job_L',	hint:'2L', part:'verb', en:'to end, to finish', wo:''},
	{id:1039, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ดวง',	translit:'duang_M',	hint:'3M', part:'noun', en:'sphere', wo:''},
	{id:1040, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'ลบ',	translit:'lob_H',	hint:'2H', part:'verb', en:'to erase, minus, to delete', wo:''},
	{id:1041, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ขน',	translit:'kon_R',	hint:'2R', part:'noun', en:'hair', wo:''},
	{id:1042, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'เจ็บ',	translit:'jeb_L',	hint:'3L', part:'noun', en:'hurt', wo:''},
	{id:1043, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'ลด',	translit:'lod_H',	hint:'2H', part:'verb', en:'to reduce', wo:''},
	{id:1044, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'คน',	translit:'kon_M',	hint:'2M', part:'noun', en:'person', wo:''},
	{id:1045, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'เดิน',	translit:'döön_M',	hint:'4M', part:'verb', en:'walk', wo:''},
	{id:1046, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ลม',	translit:'lom_M',	hint:'2M', part:'noun', en:'wind', wo:''},
	{id:1047, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'เห็ด',	translit:'hed_L',	hint:'4L', part:'noun', en:'mushroom', wo:''},
	{id:1049, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'เค็ม',	translit:'kem_M',	hint:'4M', part:'adj' , en:'salty', wo:''},
	{id:1050, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'มืด',	translit:'mʉʉd_F',	hint:'3F', part:'adj' , en:'dark', wo:''},
	{id:1051, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'อบ',	translit:'awb_L',	hint:'2L', part:'adj' , en:'baked', wo:''},
	{id:1052, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'บน',	translit:'bon_M',	hint:'2M', part:'prep', en:'on', wo:''},
	{id:1053, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'เติม',	translit:'dööm_M',	hint:'4M', part:'verb', en:'to fill', wo:''},
	{id:1054, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'มด',	translit:'mod_H',	hint:'2H', part:'noun', en:'ant', wo:''},
	{id:1055, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'นัด',	translit:'nad_H',	hint:'3H', part:'noun', en:'shot (clf)', wo:''},
	{id:1056, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ปืน',	translit:'bpʉʉn_M',	hint:'3M', part:'noun', en:'gun', wo:''},
	{id:1057, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'ปลวก',	translit:'bpluak_L',hint:'4L', part:'noun', en:'termite', wo:''},
	{id:1058, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'ผัด',	translit:'pad_L',	hint:'3L', part:'verb', en:'to stir fry', wo:''},
	{id:1059, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'ผัก',	translit:'pak_L',	hint:'3L', part:'noun', en:'vegetable', wo:''},
	{id:1060, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'เป็น',	translit:'bpen_M',	hint:'4M', part:'verb', en:'is', wo:''},
	{id:1062, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'คือ',	translit:'kʉʉ_M',	hint:'3M', part:'verb', en:'is', wo:''},
	{id:1061, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'สวน',	translit:'suan_R',	hint:'3R', part:'noun', en:'garden', wo:''},
	{id:1063, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ฟัน',	translit:'fan_M',	hint:'3M', part:'noun', en:'teeth', wo:''},
	{id:1064, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ฝัน',	translit:'fan_R',	hint:'3R', part:'noun', en:'dream', wo:''},
	{id:1065, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'ฝน',	translit:'fon_R',	hint:'2R', part:'noun', en:'rain', wo:''},
	{id:1066, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'ตก',	translit:'dtak_L',	hint:'2L', part:'verb', en:'to fall', wo:''},
	{id:1067, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'ชื่อ',	translit:'chʉʉ_F',	hint:'4F', part:'noun', en:'name', wo:''},
	{id:1068, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'เพิ่ม',	translit:'pööm_F',	hint:'4F', part:'verb', en:'to add', wo:''},
	{id:1069, typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', th:'ดื่ม',	translit:'dʉʉm_L',	hint:'4L', part:'verb', en:'drink', wo:''},
	{id:1070, typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', th:'อื่น',	translit:'ʉʉn_L',	hint:'4L', part:'adj' , en:'different', wo:''},
	{id:1071, typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', th:'ส่าย',	translit:'saai_L',	hint:'4L', part:'verb', en:'to sway', wo:''},
	{id:1072, typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', th:'ใหม่',	translit:'mai_L',	hint:'4L', part:'adj' , en:'new', wo:''},
	{id:1073, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'ไม่',	translit:'mai_F',	hint:'3F', part:'adj' , en:'not', wo:''},
	{id:1074, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'ที่',	translit:'tii_F',	hint:'3F', part:'prep', en:'at', wo:''},
	{id:1075, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'นี้',	translit:'nii_H',	hint:'3H', part:'pron', en:'this', wo:''},
	{id:1076, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'นั่ง',	translit:'nang_F',	hint:'4F', part:'verb', en:'sit', wo:''},
	{id:1077, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'แม่',	translit:'mae_F',	hint:'3F', part:'noun', en:'mom', wo:''},
	{id:1078, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'พ่อ',	translit:'paw_F',	hint:'3F', part:'noun', en:'dad', wo:''},
	{id:1079, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'เล่น',	translit:'len_F',	hint:'4F', part:'verb', en:'play', wo:''},
	{id:1080, typ:'word', ns:1, ccls:'m', end:'live', mark:'2', tone:'F', th:'ได้',	translit:'dai_F',	hint:'3F', part:'verb', en:'have', wo:''},
	{id:1081, typ:'word', ns:1, ccls:'m', end:'live', mark:'2', tone:'F', th:'ด้วย',	translit:'duaai_F',	hint:'4F', part:'adv' , en:'also', wo:''},
	{id:1082, typ:'word', ns:1, ccls:'h', end:'live', mark:'2', tone:'F', th:'เข้า',	translit:'kao_F',	hint:'4F', part:'verb', en:'enter', wo:''},
	{id:1083, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'รู้',	translit:'ruu_H',	hint:'3H', part:'noun', en:'hole', wo:''},
	{id:1084, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'น้ำ',	translit:'naam_H',	hint:'4H', part:'noun', en:'water', wo:''},
	{id:1085, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'ช้า',	translit:'chaa_H',	hint:'3H', part:'adv' , en:'slowly', wo:''},
	{id:1086, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'เค้า',	translit:'tao_H',	hint:'4H', part:'noun', en:'feet', wo:''},
	{id:1087, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'จัก',	translit:'jak_L',	hint:'3L', part:'verb', en:'must', wo:''},
	{id:1088, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'กับ',	translit:'gab_L',	hint:'3L', part:'prep', en:'with', wo:''},
	{id:1091, typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', th:'อีก',	translit:'iik_L',	hint:'3L', part:'adv' , en:'more/again', wo:''},
	{id:1094, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'อยาก',	translit:'yaak_L',	hint:'4L', part:'verb', en:'want', wo:''},
	{id:1095, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'พบ',	translit:'pob_H',	hint:'2H', part:'verb', en:'to find', wo:''},
	{id:1096, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'ครับ',	translit:'krap_H',	hint:'4H', part:'intj', en:'(polite)', wo:''},
	{id:1097, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', th:'รถ',	translit:'rot_H',	hint:'2H', part:'noun', en:'vehicle', wo:''},	
	{id:1098, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'พูด',	translit:'puud_F',	hint:'3F', part:'verb', en:'speak', wo:''},
	{id:1099, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'ชอบ',	translit:'chawb_F',	hint:'3F', part:'verb', en:'like', wo:''},
	{id:1100, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'เงียบ',	translit:'ngiab_F',	hint:'5F', part:'adj' , en:'quiet', wo:''},
	{id:1101, typ:'word', ns:1, ccls:'h', end:'live', mark:'2', tone:'F', th:'ขึ้น',	translit:'kʉn_F',	hint:'4F', part:'adv' , en:'up', wo:''},
	{id:1102, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'ลง',	translit:'long_M',	hint:'2M', part:'adv' , en:'down', wo:''},
	{id:1103, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'แพง',	translit:'paeng_M',	hint:'3M', part:'adj' , en:'expensive', wo:''},
	{id:1104, typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', th:'ถูก',	translit:'tuuk_L',	hint:'3L', part:'adj' , en:'cheap', wo:''},
	{id:1105, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'ยาก',	translit:'yaak_F',	hint:'3F', part:'adj' , en:'difficult', wo:''},
	{id:1106, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'ง่าย',	translit:'ngaai_F',	hint:'4F', part:'adj' , en:'easy', wo:''},
	{id:1107, typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', th:'แย่',	translit:'yae_F',	hint:'3F', part:'adj' , en:'bad', wo:''},
	{id:1108, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'L', th:'หนัก',	translit:'nak_L',	hint:'4L', part:'adj' , en:'heavy', wo:''},
	{id:1109, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'เบา',	translit:'bao_M',	hint:'3M', part:'adj' , en:'light', wo:''},
	{id:1110, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ไกล',	translit:'glai_M',	hint:'3M', part:'adv' , en:'near', wo:''},
	{id:1111, typ:'word', ns:1, ccls:'m', end:'live', mark:'2', tone:'F', th:'ใกล้',	translit:'glai_F',	hint:'3F', part:'adv' , en:'far', wo:''},
	{id:1112, typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', th:'มาก',	translit:'maak_F',	hint:'3F', part:'adj' , en:'many (much)', wo:''},
	{id:1113, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'น้อย',	translit:'nawi_H',	hint:'4H', part:'adj' , en:'few (little)', wo:''},
	{id:1114, typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', th:'หรือ',	translit:'rʉʉ_R',	hint:'4R', part:'conj', en:'or', wo:''},
	{id:1115, typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', th:'ดาว',	translit:'daao_M',	hint:'3M', part:'noun', en:'star', wo:''},
	{id:1116, typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', th:'เงิน',	translit:'ngön_M',	hint:'4M', part:'noun', en:'money', wo:''},
	{id:1117, typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', th:'แต่',	translit:'dtaae_L',	hint:'3L', part:'intj', en:'but', wo:''},
	{id:1118, typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', th:'ร้าน',	translit:'raan_H',	hint:'4H', part:'noun', en:'shop', wo:''},

	{id:5000, typ:'word', ns:2, th:'อาหาร',	translit:'aa_M haan_R',	hint:'2M3R', part:'noun', en:'food', wo:''},
	
	{id:10000, typ:'phrase', set:[1118,5000]},
	{id:20000, typ:'sentence', set:[10000,1075,1002,1117,1103]},
]
