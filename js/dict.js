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
	{id:1001, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'ใจ',	translit:'jai_M',	hint:'2M', en:'heart', wo:''},
	{id:1002, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'ดี',	translit:'dii_M',	hint:'2M', en:'good', wo:''},
	{id:1003, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'เอา',	translit:'ao_M',	hint:'3M', en:'take', wo:''},
	{id:1004, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'กิน',	translit:'kgin_M',	hint:'3M', en:'eat', wo:''},
	{id:1005, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'เขา',	translit:'kao_R',	hint:'3R', en:'he/she', wo:''},
	{id:1006, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'ผม',	translit:'pom_R',	hint:'2R', en:'I (male)', wo:''},
	{id:1007, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'ฉัน',	translit:'chan_R',	hint:'3R', en:'I (female)', wo:''},
	{id:1008, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'ของ',	translit:'kawng_R',	hint:'3R', en:'of', wo:''},
	{id:1009, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'หัว',	translit:'hua_R',	hint:'3R', en:'head', wo:''},
	{id:1010, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'รู',	translit:'ruu_M',	hint:'2M', en:'hole', wo:''},
	{id:1011, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'ยิน',	translit:'yin_M',	hint:'3M', en:'hear', wo:''},
	{id:1012, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'คุณ',	translit:'kun_M',	hint:'3M', en:'you', wo:''},
	{id:1013, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'ใน',	translit:'nai_M',	hint:'2M', en:'in', wo:''},
	{id:1014, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'เพลง',	translit:'pleng_M',	hint:'5M', en:'song', wo:''},
	{id:1015, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'มัน',	translit:'man_M',	hint:'3M', en:'it', wo:''},
	{id:1016, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', t:'', th:'วัด',	translit:'wad_H',	hint:'3H', en:'measure', wo:''},
	{id:1017, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', t:'', th:'สด',	translit:'sod_L',	hint:'2L', en:'fresh', wo:''},
	{id:1018, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'เห็น',	translit:'hen_R',	hint:'4R', en:'see', wo:''},      
	{id:1019, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', t:'', th:'เปิด',	translit:'bpööd_H',	hint:'4H', en:'turns on', wo:''},     
	{id:1020, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'สน',	translit:'son_R',	hint:'2R', en:'the', wo:''},     
	{id:1022, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'ขม',	translit:'kom_R',	hint:'2R', en:'bitter', wo:''},      
	{id:1023, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'ยืน',	translit:'yʉʉn_M',	hint:'3M', en:'stand', wo:''},      
	{id:1024, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'รวย',	translit:'ruai_M',	hint:'3M', en:'rich', wo:''},      
	{id:1025, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'ดม',	translit:'dom_M',	hint:'2M', en:'smell', wo:''},      
	{id:1026, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'ถือ',	translit:'tʉʉ_R',	hint:'3R', en:'hold', wo:''},      
	{id:1027, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', t:'', th:'ลวก'	,translit:'luak_F',	hint:'3F', en:'roughly', wo:''},      
	{id:1028, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'มวย'	,translit:'muai_M',	hint:'3M', en:'boxing', wo:''},      
	{id:1029, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'คืม',	translit:'kʉʉn_M',	hint:'3M', en:'what?', wo:''},      
	{id:1030, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'นวด'	,translit:'nuad_M',	hint:'2M', en:'massage', wo:''},      
	{id:1031, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'ฟัง',	translit:'fang_M',	hint:'3M', en:'listen', wo:''},      
	{id:1032, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'เบิก',	translit:'böök_L',	hint:'4L', en:'take', wo:''},      
	{id:1033, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'ปวด',	translit:'bpuad_L',	hint:'3L', en:'pain', wo:''},      
	{id:1034, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'มือ',	translit:'mʉʉ_M',	hint:'3M', en:'hand', wo:''},      
	{id:1035, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'กัด',	translit:'gad_L',	hint:'3L', en:'bite', wo:''},
	{id:1036, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'วัน',	translit:'wan_M',	hint:'3M', en:'day', wo:''},
	{id:1037, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'นม',	translit:'nom_M',	hint:'2M', en:'milk', wo:''},
	{id:1038, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'จบ',	translit:'job_L',	hint:'2L', en:'end', wo:''},
	{id:1039, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'ดวง',	translit:'duang_M',	hint:'3M', en:'the', wo:''},
	{id:1040, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', t:'', th:'ลบ',	translit:'lob_H',	hint:'2H', en:'delete', wo:''},
	{id:1041, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'ขน',	translit:'kon_R',	hint:'2R', en:'hair', wo:''},
	{id:1042, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'เจบ',	translit:'jeb_L',	hint:'3L', en:'Punjab', wo:''},
	{id:1043, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', t:'', th:'ลด',	translit:'lod_H',	hint:'2H', en:'reduce', wo:''},
	{id:1044, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'คน',	translit:'kon_M',	hint:'2M', en:'person', wo:''},
	{id:1045, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'เดิน',	translit:'döön_M',	hint:'4M', en:'walk', wo:''},
	{id:1046, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'ลม',	translit:'lom_M',	hint:'2M', en:'wind', wo:''},
	{id:1047, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', t:'', th:'เห็ด',	translit:'hed_L',	hint:'4L', en:'mushroom', wo:''},
	{id:1049, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'เค็ม',	translit:'kem_M',	hint:'4M', en:'salty', wo:''},
	{id:1050, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', t:'', th:'มืด',	translit:'mʉʉd_F',	hint:'3F', en:'dark', wo:''},
	{id:1051, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', t:'', th:'อบ',	translit:'awb_L',	hint:'2L', en:'baked', wo:''},
	{id:1052, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'บน',	translit:'bon_M',	hint:'2M', en:'on', wo:''},
	{id:1053, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'เติม',	translit:'dööm_M',	hint:'4M', en:'fill', wo:''},
	{id:1054, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', t:'', th:'มด',	translit:'mod_H',	hint:'2H', en:'ant', wo:''},
	{id:1055, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', t:'', th:'นัด',	translit:'nad_H',	hint:'3H', en:'shot', wo:''},
	{id:1056, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'ปืน',	translit:'bpʉʉn_M',	hint:'3M', en:'gun', wo:''},
	{id:1057, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'ปลวก',	translit:'bpluak_L',hint:'4L', en:'termite', wo:''},
	{id:1058, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', t:'', th:'ผัด',	translit:'pad_L',	hint:'3L', en:'puff', wo:''},
	{id:1059, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', t:'', th:'ผัก',	translit:'pak_L',	hint:'3L', en:'vegetable', wo:''},
	{id:1060, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'เป็น',	translit:'bpen_M',	hint:'4M', en:'is', wo:''},
	{id:1061, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'สวน',	translit:'suan_R',	hint:'3R', en:'garden', wo:''},
	{id:1062, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'คือ',	translit:'kʉʉ_M',	hint:'3M', en:'is', wo:''},
	{id:1063, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'ฟัน',	translit:'fan_M',	hint:'3M', en:'teeth', wo:''},
	{id:1064, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'ฝัน',	translit:'fan_R',	hint:'3R', en:'dream', wo:''},
	{id:1065, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'0', tone:'R', t:'', th:'ฝน',	translit:'fon_R',	hint:'2R', en:'rain', wo:''},
	{id:1066, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'ตก',	translit:'dtak_L',	hint:'2L', en:'fall', wo:''},
	{id:1067, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', t:'', th:'ชื่อ',	translit:'chʉʉ_L',	hint:'4L', en:'name', wo:''},
	{id:1068, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', t:'', th:'เพิ่ม',	translit:'pööm_F',	hint:'4F', en:'add', wo:''},
	{id:1069, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', t:'', th:'ดื่ม',	translit:'dʉʉm_L',	hint:'4L', en:'drink', wo:''},
	{id:1070, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'1', tone:'L', t:'', th:'อื่น',	translit:'ʉon_L',	hint:'4L', en:'different', wo:''},
	{id:1071, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', t:'', th:'ส่าย',	translit:'saai_L',	hint:'4L', en:'sway', wo:''},
	{id:1072, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'1', tone:'L', t:'', th:'ใหม่',	translit:'mai_L',	hint:'4L', en:'new', wo:''},
	{id:1073, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', t:'', th:'ไม่',	translit:'mai_F',	hint:'3F', en:'not', wo:''},
	{id:1074, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', t:'', th:'ที่',	translit:'tii_F',	hint:'3F', en:'at', wo:''},
	{id:1075, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', t:'', th:'นี่',	translit:'nii_F',	hint:'3F', en:'this', wo:''},
	{id:1076, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', t:'', th:'นั่ง',	translit:'nang_F',	hint:'4F', en:'sit', wo:''},
	{id:1077, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', t:'', th:'แม่',	translit:'mae_F',	hint:'3F', en:'mom', wo:''},
	{id:1078, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', t:'', th:'พ่อ',	translit:'paw_F',	hint:'3F', en:'dad', wo:''},
	{id:1079, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', t:'', th:'เล่น',	translit:'len_F',	hint:'4F', en:'play', wo:''},
	{id:1080, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'2', tone:'F', t:'', th:'ได้',	translit:'dai_F',	hint:'3F', en:'have', wo:''},
	{id:1081, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'2', tone:'F', t:'', th:'ด้วย',	translit:'duaai_F',	hint:'4F', en:'with', wo:''},
	{id:1082, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'2', tone:'F', t:'', th:'เข้า',	translit:'kao_F',	hint:'4F', en:'enter', wo:''},
	{id:1083, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', t:'', th:'รู้',	translit:'ruu_H',	hint:'3H', en:'hole', wo:''},
	{id:1084, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', t:'', th:'น้ำ',	translit:'naam_H',	hint:'4H', en:'water', wo:''},
	{id:1085, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', t:'', th:'ช้า',	translit:'chaa_H',	hint:'3H', en:'slowly', wo:''},
	{id:1086, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', t:'', th:'เค้า',	translit:'tao_H',	hint:'4H', en:'feet', wo:''},
	{id:1087, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'จัก',	translit:'jak_L',	hint:'3L', en:'will', wo:''},
	{id:1088, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'กับ',	translit:'gab_L',	hint:'3L', en:'with', wo:''},
	{id:1089, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'จบ',	translit:'job_L',	hint:'2L', en:'over/end', wo:''},
	{id:1090, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'เจ็บ',	translit:'jeb_L',	hint:'4L', en:'hurt', wo:''},
	{id:1091, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'อีก',	translit:'iik_L',	hint:'3L', en:'more/again', wo:''},
	{id:1092, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'dead', mark:'0', tone:'L', t:'', th:'เปิด',	translit:'böt_L',	hint:'4L', en:'open', wo:''},
	{id:1093, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', t:'', th:'ผัก',	translit:'pak_L',	hint:'3L', en:'vegetable', wo:''},
	{id:1094, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', t:'', th:'อยาก',	translit:'yaak_L',	hint:'4L', en:'want', wo:''},
	{id:1095, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', t:'', th:'พบ',	translit:'pob_H',	hint:'2H', en:'find', wo:''},
	{id:1096, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', t:'', th:'ครับ',	translit:'krap_H',	hint:'4H', en:'(polite)', wo:''},
	{id:1097, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'H', t:'', th:'รถ',	translit:'rot_H',	hint:'2H', en:'car', wo:''},	
	{id:1098, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', t:'', th:'พูด',	translit:'puud_F',	hint:'3F', en:'speak', wo:''},
	{id:1099, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', t:'', th:'ชอบ',	translit:'chawb_F',	hint:'3F', en:'like', wo:''},
	{id:1100, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', t:'', th:'เงียบ',	translit:'ngiab_F',	hint:'5F', en:'quiet', wo:''},
	{id:1101, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'live', mark:'2', tone:'F', t:'', th:'ขึ้น',	translit:'kʉn_F',	hint:'4F', en:'up', wo:''},
	{id:1102, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'ลง',	translit:'long_M',	hint:'2M', en:'down', wo:''},
	{id:1103, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'M', t:'', th:'แพง',	translit:'paeng_M',	hint:'3M', en:'expensive', wo:''},
	{id:1104, c:['syllable'], typ:'word', ns:1, ccls:'h', end:'dead', mark:'0', tone:'L', t:'', th:'ถูก',	translit:'tuuk_L',	hint:'3L', en:'cheap', wo:''},
	{id:1105, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', t:'', th:'ยาก',	translit:'yaak_F',	hint:'3F', en:'difficult', wo:''},
	{id:1106, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', t:'', th:'ง่าย',	translit:'ngaai_F',	hint:'4F', en:'easy', wo:''},
	{id:1107, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'1', tone:'F', t:'', th:'แย่',	translit:'yae_F',	hint:'3F', en:'bad', wo:''},
	{id:1108, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'L', t:'', th:'หนัก',	translit:'nak_L',	hint:'4L', en:'heavy', wo:''},
	{id:1109, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'เบา',	translit:'bao_M',	hint:'3M', en:'light', wo:''},
	{id:1110, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'0', tone:'M', t:'', th:'ไกล',	translit:'glai_M',	hint:'3M', en:'near', wo:''},
	{id:1111, c:['syllable'], typ:'word', ns:1, ccls:'m', end:'live', mark:'2', tone:'F', t:'', th:'ใกล้',	translit:'glai_F',	hint:'3F', en:'far', wo:''},
	{id:1112, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'dead', mark:'0', tone:'F', t:'', th:'มาก',	translit:'maak_F',	hint:'3F', en:'many (much)', wo:''},
	{id:1113, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'2', tone:'H', t:'', th:'น้อย',	translit:'nawi_H',	hint:'4H', en:'few (little)', wo:''},
	{id:1114, c:['syllable'], typ:'word', ns:1, ccls:'l', end:'live', mark:'0', tone:'H', t:'', th:'หรือ',	translit:'rʉʉ_H',	hint:'4H', en:'or', wo:''},
]
