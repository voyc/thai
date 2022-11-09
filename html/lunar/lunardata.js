/*
To add additional lunar data:

1. copy-paste the moon phase data from here 
https://www.timeanddate.com/moon/phases/?year=2022

2. grep the pasted lines with these two substitution commands
.,+74s/^\(\d\d\d\d\)\t\(.\{-}\)\t\(.\{-}\)\t\(.\{-}\)\t\(.\{-}\)\t\(.\{-}\)\t\(.\{-}\)\t\(.\{-}\)\t\(.*\)$/lun\1: {mo:nn, m0:'\2 2022 \3', m1:'\4 2022 \5', m2:'\6 2022 \7', m3:'\8 2022 \9/
.,+74s/^\(.\{-}\)\t\(.*\)$/\t\1', du:'\2'},/

example input:
1234	26 Sep	04:54	3 Oct	07:14	10 Oct	03:54	18 Oct	00:15	29d 12h 54m
1235	25 Oct	17:48	1 Nov	13:37	8 Nov	18:02	16 Nov	20:27	29d 12h 09m

replaced with:
	lun1234: {mo:'26 Sep 2022 04:54',m1:'3 Oct 2022 07:14',m2:'10 Oct 2022 03:54',m3:'18 Oct 2022 00:15',du:'29d 12h 54m'},
	lun1235: {mo:'25 Oct 2022 17:48',m1:'1 Nov 2022 13:37',m2:'8 Nov 2022 18:02',m3:'16 Nov 2022 20:27',du:'29d 12h 09m'},

3. manually fix up the years, yr:, mo:, and column spacing.
*/

var lunations = {
        //                m0: new moon            m1: first quarter       m2: full moon           m3: third quarter       du: duration
	lun1172: {yr:2017, mo:11, m0:'20 Sep 2017 12:29', m1:'28 Sep 2017 09:53', m2:'06 Oct 2017 01:40', m3:'12 Oct 2017 19:25', du:'29d 13h 42m'},
	lun1173: {yr:2017, mo:12, m0:'20 Oct 2017 02:12', m1:'28 Oct 2017 05:22', m2:'04 Nov 2017 12:22', m3:'11 Nov 2017 03:36', du:'29d 16h 30m'}, // Loi Krathong 3 Nov 2017 *** 4

	lun1174: {yr:2017, mo:01, m0:'18 Nov 2017 18:42', m1:'27 Nov 2017 00:02', m2:'03 Dec 2017 22:46', m3:'10 Dec 2017 14:51', du:'29d 18h 48m'},
	lun1175: {yr:2018, mo:02, m0:'18 Dec 2017 13:30', m1:'26 Dec 2017 16:20', m2:'02 Jan 2018 09:24', m3:'09 Jan 2018 05:25', du:'29d 19h 47m'},
	lun1176: {yr:2018, mo:03, m0:'17 Jan 2018 09:17', m1:'25 Jan 2018 05:20', m2:'31 Jan 2018 20:26', m3:'07 Feb 2018 22:53', du:'29d 18h 48m'},
	lun1177: {yr:2018, mo:04, m0:'16 Feb 2018 04:05', m1:'23 Feb 2018 15:09', m2:'02 Mar 2018 07:51', m3:'09 Mar 2018 18:19', du:'29d 16h 06m'},	
	lun1178: {yr:2018, mo:05, m0:'17 Mar 2018 20:11', m1:'24 Mar 2018 22:35', m2:'31 Mar 2018 19:36', m3:'08 Apr 2018 14:17', du:'29d 12h 46m'},
	lun1179: {yr:2018, mo:06, m0:'16 Apr 2018 08:57', m1:'23 Apr 2018 04:45', m2:'30 Apr 2018 07:58', m3:'08 May 2018 09:08', du:'29d 09h 51m'},
	lun1180: {yr:2018, mo:07, m0:'15 May 2018 18:47', m1:'22 May 2018 10:49', m2:'29 May 2018 21:19', m3:'07 Jun 2018 01:31', du:'29d 07h 55m'},
	lun1181: {yr:2018, mo:08, m0:'14 Jun 2018 02:43', m1:'20 Jun 2018 17:50', m2:'28 Jun 2018 11:53', m3:'06 Jul 2018 14:50', du:'29d 07h 05m'},
	lun1182: {yr:2018, mo:8.2,m0:'13 Jul 2018 09:47', m1:'20 Jul 2018 02:52', m2:'28 Jul 2018 03:20', m3:'05 Aug 2018 01:17', du:'29d 07h 10m'}, // leap month
	lun1183: {yr:2018, mo:09, m0:'11 Aug 2018 16:57', m1:'18 Aug 2018 14:48', m2:'26 Aug 2018 18:56', m3:'03 Sep 2018 09:37', du:'29d 08h 04m'},
	lun1184: {yr:2018, mo:10, m0:'10 Sep 2018 01:01', m1:'17 Sep 2018 06:14', m2:'25 Sep 2018 09:52', m3:'02 Oct 2018 16:45', du:'29d 09h 45m'},
	lun1185: {yr:2018, mo:11, m0:'09 Oct 2018 10:46', m1:'17 Oct 2018 01:01', m2:'24 Oct 2018 23:45', m3:'31 Oct 2018 23:40', du:'29d 12h 15m'},
	lun1186: {yr:2018, mo:12, m0:'07 Nov 2018 23:01', m1:'15 Nov 2018 21:54', m2:'23 Nov 2018 12:39', m3:'30 Nov 2018 07:18', du:'29d 15h 18m'}, // Loi Krathong 23 Nov 2018

	lun1187: {yr:2019, mo:01, m0:'07 Dec 2018 14:20', m1:'15 Dec 2018 18:49', m2:'23 Dec 2018 00:48', m3:'29 Dec 2018 16:34', du:'29d 18h 08m'},
	lun1188: {yr:2019, mo:02, m0:'06 Jan 2019 08:28', m1:'14 Jan 2019 13:45', m2:'21 Jan 2019 12:16', m3:'28 Jan 2019 04:10', du:'29d 19h 35m'},
	lun1189: {yr:2019, mo:03, m0:'05 Feb 2019 04:03', m1:'13 Feb 2019 05:26', m2:'19 Feb 2019 22:53', m3:'26 Feb 2019 18:27', du:'29d 19h 00m'},
	lun1190: {yr:2019, mo:04, m0:'06 Mar 2019 23:03', m1:'14 Mar 2019 17:27', m2:'21 Mar 2019 08:42', m3:'28 Mar 2019 11:09', du:'29d 16h 47m'},
	lun1191: {yr:2019, mo:05, m0:'05 Apr 2019 15:50', m1:'13 Apr 2019 02:05', m2:'19 Apr 2019 18:12', m3:'27 Apr 2019 05:18', du:'29d 13h 55m'},
	lun1192: {yr:2019, mo:06, m0:'05 May 2019 05:45', m1:'12 May 2019 08:12', m2:'19 May 2019 04:11', m3:'26 May 2019 23:33', du:'29d 11h 16m'},
	lun1193: {yr:2019, mo:07, m0:'03 Jun 2019 17:01', m1:'10 Jun 2019 12:59', m2:'17 Jun 2019 15:30', m3:'25 Jun 2019 16:46', du:'29d 09h 14m'},
	lun1194: {yr:2019, mo:08, m0:'03 Jul 2019 02:16', m1:'09 Jul 2019 17:54', m2:'17 Jul 2019 04:38', m3:'25 Jul 2019 08:18', du:'29d 07h 56m'},
	lun1195: {yr:2019, mo:09, m0:'01 Aug 2019 10:11', m1:'08 Aug 2019 00:30', m2:'15 Aug 2019 19:29', m3:'23 Aug 2019 21:56', du:'29d 07h 25m'},
	lun1196: {yr:2019, mo:10, m0:'30 Aug 2019 17:37', m1:'06 Sep 2019 10:10', m2:'14 Sep 2019 11:32', m3:'22 Sep 2019 09:40', du:'29d 07h 49m'},
	lun1197: {yr:2019, mo:11, m0:'29 Sep 2019 01:26', m1:'05 Oct 2019 23:47', m2:'14 Oct 2019 04:07', m3:'21 Oct 2019 19:39', du:'29d 09h 12m'},
	lun1198: {yr:2019, mo:12, m0:'28 Oct 2019 10:38', m1:'04 Nov 2019 17:23', m2:'12 Nov 2019 20:34', m3:'20 Nov 2019 04:10', du:'29d 11h 27m'}, // Loi Krathong 12 Nov 2019

	lun1199: {yr:2020, mo:01, m0:'26 Nov 2019 22:05', m1:'04 Dec 2019 13:58', m2:'12 Dec 2019 12:12', m3:'19 Dec 2019 11:57', du:'29d 14h 08m'},
	lun1200: {yr:2020, mo:02, m0:'26 Dec 2019 12:13', m1:'03 Jan 2020 11:45', m2:'11 Jan 2020 02:21', m3:'17 Jan 2020 19:58', du:'29d 16h 29m'},
	lun1201: {yr:2020, mo:03, m0:'25 Jan 2020 04:42', m1:'02 Feb 2020 08:41', m2:'09 Feb 2020 14:33', m3:'16 Feb 2020 05:17', du:'29d 17h 50m'},
	lun1202: {yr:2020, mo:04, m0:'23 Feb 2020 22:32', m1:'03 Mar 2020 02:57', m2:'10 Mar 2020 00:47', m3:'16 Mar 2020 16:34', du:'29d 17h 56m'},
	lun1203: {yr:2020, mo:05, m0:'24 Mar 2020 16:28', m1:'01 Apr 2020 17:21', m2:'08 Apr 2020 09:35', m3:'15 Apr 2020 05:56', du:'29d 16h 58m'},
	lun1204: {yr:2020, mo:06, m0:'23 Apr 2020 09:25', m1:'01 May 2020 03:38', m2:'07 May 2020 17:45', m3:'14 May 2020 21:02', du:'29d 15h 13m'},
	lun1205: {yr:2020, mo:07, m0:'23 May 2020 00:38', m1:'30 May 2020 10:29', m2:'06 Jun 2020 02:12', m3:'13 Jun 2020 13:23', du:'29d 13h 03m'},
	lun1206: {yr:2020, mo:08, m0:'21 Jun 2020 13:41', m1:'28 Jun 2020 15:15', m2:'05 Jul 2020 11:44', m3:'13 Jul 2020 06:28', du:'29d 10h 51m'},
	lun1207: {yr:2020, mo:09, m0:'21 Jul 2020 00:32', m1:'27 Jul 2020 19:32', m2:'03 Aug 2020 22:58', m3:'11 Aug 2020 23:44', du:'29d 09h 09m'},
	lun1208: {yr:2020, mo:10, m0:'19 Aug 2020 09:41', m1:'26 Aug 2020 00:57', m2:'02 Sep 2020 12:22', m3:'10 Sep 2020 16:25', du:'29d 08h 19m'},
	lun1209: {yr:2020, mo:11, m0:'17 Sep 2020 18:00', m1:'24 Sep 2020 08:54', m2:'02 Oct 2020 04:05', m3:'10 Oct 2020 07:39', du:'29d 08h 31m'},
	lun1210: {yr:2020, mo:12, m0:'17 Oct 2020 02:31', m1:'23 Oct 2020 20:22', m2:'31 Oct 2020 21:49', m3:'08 Nov 2020 20:46', du:'29d 09h 36m'}, // Loi Krathong 31 Oct 2020

	lun1211: {yr:2020, mo:01, m0:'15 Nov 2020 12:07', m1:'22 Nov 2020 11:45', m2:'30 Nov 2020 16:29', m3:'08 Dec 2020 07:36', du:'29d 11h 09m'},
	lun1212: {yr:2021, mo:02, m0:'14 Dec 2020 23:16', m1:'22 Dec 2020 06:41', m2:'30 Dec 2020 10:28', m3:'06 Jan 2021 16:37', du:'29d 12h 44m'},
	lun1213: {yr:2021, mo:03, m0:'13 Jan 2021 12:00', m1:'21 Jan 2021 04:01', m2:'29 Jan 2021 02:16', m3:'05 Feb 2021 00:37', du:'29d 14h 06m'},
	lun1214: {yr:2021, mo:04, m0:'12 Feb 2021 02:05', m1:'20 Feb 2021 01:47', m2:'27 Feb 2021 15:17', m3:'06 Mar 2021 08:30', du:'29d 15h 15m'},
	lun1215: {yr:2021, mo:05, m0:'13 Mar 2021 17:21', m1:'21 Mar 2021 21:40', m2:'29 Mar 2021 01:48', m3:'04 Apr 2021 17:02', du:'29d 16h 10m'},
	lun1216: {yr:2021, mo:06, m0:'12 Apr 2021 09:30', m1:'20 Apr 2021 13:58', m2:'27 Apr 2021 10:31', m3:'04 May 2021 02:50', du:'29d 16h 29m'},
	lun1217: {yr:2021, mo:07, m0:'12 May 2021 01:59', m1:'20 May 2021 02:12', m2:'26 May 2021 18:13', m3:'02 Jun 2021 14:24', du:'29d 15h 53m'},
	lun1218: {yr:2021, mo:08, m0:'10 Jun 2021 17:52', m1:'18 Jun 2021 10:54', m2:'25 Jun 2021 01:39', m3:'02 Jul 2021 04:10', du:'29d 14h 24m'},
	lun1219: {yr:2021, mo:8.2,m0:'10 Jul 2021 08:16', m1:'17 Jul 2021 17:10', m2:'24 Jul 2021 09:36', m3:'31 Jul 2021 20:15', du:'29d 12h 34m'}, // leap month
	lun1220: {yr:2021, mo:09, m0:'08 Aug 2021 20:50', m1:'15 Aug 2021 22:19', m2:'22 Aug 2021 19:01', m3:'30 Aug 2021 14:13', du:'29d 11h 02m'},
	lun1221: {yr:2021, mo:10, m0:'07 Sep 2021 07:51', m1:'14 Sep 2021 03:39', m2:'21 Sep 2021 06:54', m3:'29 Sep 2021 08:57', du:'29d 10h 14m'},
	lun1222: {yr:2021, mo:11, m0:'06 Oct 2021 18:05', m1:'13 Oct 2021 10:25', m2:'20 Oct 2021 21:56', m3:'29 Oct 2021 03:05', du:'29d 10h 09m'},
	lun1223: {yr:2021, mo:12, m0:'05 Nov 2021 04:14', m1:'11 Nov 2021 19:45', m2:'19 Nov 2021 15:57', m3:'27 Nov 2021 19:27', du:'29d 10h 28m'}, // Loi Krathong 19 Nov 2021

	lun1224: {yr:2022, mo:01, m0:'04 Dec 2021 14:43', m1:'11 Dec 2021 08:35', m2:'19 Dec 2021 11:35', m3:'27 Dec 2021 09:23', du:'29d 10h 51m'},
	lun1225: {yr:2022, mo:02, m0:'03 Jan 2022 01:33', m1:'10 Jan 2022 01:11', m2:'18 Jan 2022 06:48', m3:'25 Jan 2022 20:40', du:'29d 11h 12m'},
	lun1226: {yr:2022, mo:03, m0:'01 Feb 2022 12:46', m1:'08 Feb 2022 20:50', m2:'16 Feb 2022 23:56', m3:'24 Feb 2022 05:32', du:'29d 11h 49m'},
	lun1227: {yr:2022, mo:04, m0:'03 Mar 2022 00:34', m1:'10 Mar 2022 17:45', m2:'18 Mar 2022 14:17', m3:'25 Mar 2022 12:37', du:'29d 12h 50m'},
	lun1228: {yr:2022, mo:05, m0:'01 Apr 2022 13:24', m1:'09 Apr 2022 13:47', m2:'17 Apr 2022 01:55', m3:'23 Apr 2022 18:56', du:'29d 14h 04m'},
	lun1229: {yr:2022, mo:06, m0:'01 May 2022 03:28', m1:'09 May 2022 07:21', m2:'16 May 2022 11:14', m3:'23 May 2022 01:43', du:'29d 15h 02m'},
	lun1230: {yr:2022, mo:07, m0:'30 May 2022 18:30', m1:'07 Jun 2022 21:48', m2:'14 Jun 2022 18:51', m3:'21 Jun 2022 10:10', du:'29d 15h 22m'},
	lun1231: {yr:2022, mo:08, m0:'29 Jun 2022 09:52', m1:'07 Jul 2022 09:14', m2:'14 Jul 2022 01:37', m3:'20 Jul 2022 21:18', du:'29d 15h 03m'},
	lun1232: {yr:2022, mo:09, m0:'29 Jul 2022 00:54', m1:'05 Aug 2022 18:06', m2:'12 Aug 2022 08:35', m3:'19 Aug 2022 11:36', du:'29d 14h 22m'},
	lun1233: {yr:2022, mo:10, m0:'27 Aug 2022 15:17', m1:'04 Sep 2022 01:07', m2:'10 Sep 2022 16:59', m3:'18 Sep 2022 04:52', du:'29d 13h 37m'},
	lun1234: {yr:2022, mo:11, m0:'26 Sep 2022 04:54', m1:'03 Oct 2022 07:14', m2:'10 Oct 2022 03:54', m3:'18 Oct 2022 00:15', du:'29d 12h 54m'},
	lun1235: {yr:2022, mo:12, m0:'25 Oct 2022 17:48', m1:'01 Nov 2022 13:37', m2:'08 Nov 2022 18:02', m3:'16 Nov 2022 20:27', du:'29d 12h 09m'}, // Loi Krathong 8 Nov 2022

	lun1236: {yr:2022, mo:01, m0:'24 Nov 2022 05:57', m1:'30 Nov 2022 21:36', m2:'08 Dec 2022 11:08', m3:'16 Dec 2022 15:56', du:'29d 11h 20m'},
	lun1237: {yr:2023, mo:02, m0:'23 Dec 2022 17:16', m1:'30 Dec 2022 08:20', m2:'07 Jan 2023 06:07', m3:'15 Jan 2023 09:10', du:'29d 10h 36m'},
	lun1238: {yr:2023, mo:03, m0:'22 Jan 2023 03:53', m1:'28 Jan 2023 22:18', m2:'06 Feb 2023 01:28', m3:'13 Feb 2023 23:00', du:'29d 10h 13m'},
	lun1239: {yr:2023, mo:04, m0:'20 Feb 2023 14:05', m1:'27 Feb 2023 15:05', m2:'07 Mar 2023 19:40', m3:'15 Mar 2023 09:08', du:'29d 10h 17m'},
	lun1240: {yr:2023, mo:05, m0:'22 Mar 2023 00:23', m1:'29 Mar 2023 09:32', m2:'06 Apr 2023 11:34', m3:'13 Apr 2023 16:11', du:'29d 10h 49m'},
	lun1241: {yr:2023, mo:06, m0:'20 Apr 2023 11:12', m1:'28 Apr 2023 04:19', m2:'06 May 2023 00:34', m3:'12 May 2023 21:28', du:'29d 11h 41m'},
	lun1242: {yr:2023, mo:07, m0:'19 May 2023 22:53', m1:'27 May 2023 22:22', m2:'04 Jun 2023 10:41', m3:'11 Jun 2023 02:31', du:'29d 12h 44m'},
	lun1243: {yr:2023, mo:08, m0:'18 Jun 2023 11:37', m1:'26 Jun 2023 14:49', m2:'03 Jul 2023 18:38', m3:'10 Jul 2023 08:47', du:'29d 13h 55m'},
	lun1244: {yr:2023, mo:8.2,m0:'18 Jul 2023 01:31', m1:'26 Jul 2023 05:06', m2:'02 Aug 2023 01:31', m3:'08 Aug 2023 17:28', du:'29d 15h 06m'}, // leap month
	lun1245: {yr:2023, mo:09, m0:'16 Aug 2023 16:38', m1:'24 Aug 2023 16:57', m2:'31 Aug 2023 08:35', m3:'07 Sep 2023 05:21', du:'29d 16h 02m'},
	lun1246: {yr:2023, mo:10, m0:'15 Sep 2023 08:39', m1:'23 Sep 2023 02:31', m2:'29 Sep 2023 16:57', m3:'06 Oct 2023 20:47', du:'29d 16h 15m'},
	lun1247: {yr:2023, mo:11, m0:'15 Oct 2023 00:55', m1:'22 Oct 2023 10:29', m2:'29 Oct 2023 03:24', m3:'05 Nov 2023 15:36', du:'29d 15h 32m'},
	lun1248: {yr:2023, mo:12, m0:'13 Nov 2023 16:27', m1:'20 Nov 2023 17:49', m2:'27 Nov 2023 16:16', m3:'05 Dec 2023 12:49', du:'29d 14h 05m'}, // Loi Krathong 27 Nov 2023

	lun1249: {yr:2024, mo:01, m0:'13 Dec 2023 06:32', m1:'20 Dec 2023 01:39', m2:'27 Dec 2023 07:33', m3:'04 Jan 2024 10:30', du:'29d 12h 25m'},
	lun1250: {yr:2024, mo:02, m0:'11 Jan 2024 18:57', m1:'18 Jan 2024 10:52', m2:'26 Jan 2024 00:54', m3:'03 Feb 2024 06:18', du:'29d 11h 02m'},
	lun1251: {yr:2024, mo:03, m0:'10 Feb 2024 05:59', m1:'16 Feb 2024 22:00', m2:'24 Feb 2024 19:30', m3:'03 Mar 2024 22:23', du:'29d 10h 01m'},
	lun1252: {yr:2024, mo:04, m0:'10 Mar 2024 16:00', m1:'17 Mar 2024 11:10', m2:'25 Mar 2024 14:00', m3:'02 Apr 2024 10:14', du:'29d 09h 20m'},
	lun1253: {yr:2024, mo:05, m0:'09 Apr 2024 01:20', m1:'16 Apr 2024 02:13', m2:'24 Apr 2024 06:48', m3:'01 May 2024 18:27', du:'29d 09h 01m'},
	lun1254: {yr:2024, mo:06, m0:'08 May 2024 10:21', m1:'15 May 2024 18:48', m2:'23 May 2024 20:53', m3:'31 May 2024 00:12', du:'29d 09h 16m'},
	lun1255: {yr:2024, mo:07, m0:'06 Jun 2024 19:37', m1:'14 Jun 2024 12:18', m2:'22 Jun 2024 08:07', m3:'29 Jun 2024 04:53', du:'29d 10h 20m'},
	lun1256: {yr:2024, mo:08, m0:'06 Jul 2024 05:57', m1:'14 Jul 2024 05:48', m2:'21 Jul 2024 17:17', m3:'28 Jul 2024 09:51', du:'29d 12h 16m'},
	lun1257: {yr:2024, mo:09, m0:'04 Aug 2024 18:13', m1:'12 Aug 2024 22:18', m2:'20 Aug 2024 01:25', m3:'26 Aug 2024 16:25', du:'29d 14h 42m'},
	lun1258: {yr:2024, mo:10, m0:'03 Sep 2024 08:55', m1:'11 Sep 2024 13:05', m2:'18 Sep 2024 09:34', m3:'25 Sep 2024 01:49', du:'29d 16h 54m'},
	lun1259: {yr:2024, mo:11, m0:'03 Oct 2024 01:49', m1:'11 Oct 2024 01:55', m2:'17 Oct 2024 18:26', m3:'24 Oct 2024 15:03', du:'29d 17h 58m'},
	lun1260: {yr:2024, mo:12, m0:'01 Nov 2024 19:47', m1:'09 Nov 2024 12:55', m2:'16 Nov 2024 04:28', m3:'23 Nov 2024 08:27', du:'29d 17h 34m'}, // Loi Krathong 16 Nov 2024

	lun1261: {yr:2025, mo:01, m0:'01 Dec 2024 13:21', m1:'08 Dec 2024 22:26', m2:'15 Dec 2024 16:01', m3:'23 Dec 2024 05:18', du:'29d 16h 05m'},
	lun1262: {yr:2025, mo:02, m0:'31 Dec 2024 05:26', m1:'07 Jan 2025 06:56', m2:'14 Jan 2025 05:26', m3:'22 Jan 2025 03:30', du:'29d 14h 09m'},
	lun1263: {yr:2025, mo:03, m0:'29 Jan 2025 19:35', m1:'05 Feb 2025 15:02', m2:'12 Feb 2025 20:53', m3:'21 Feb 2025 00:32', du:'29d 12h 09m'},
	lun1264: {yr:2025, mo:04, m0:'28 Feb 2025 07:44', m1:'06 Mar 2025 23:31', m2:'14 Mar 2025 13:54', m3:'22 Mar 2025 18:29', du:'29d 10h 13m'},
	lun1265: {yr:2025, mo:05, m0:'29 Mar 2025 17:57', m1:'05 Apr 2025 09:14', m2:'13 Apr 2025 07:22', m3:'21 Apr 2025 08:35', du:'29d 08h 33m'},
	lun1266: {yr:2025, mo:06, m0:'28 Apr 2025 02:31', m1:'04 May 2025 20:51', m2:'12 May 2025 23:55', m3:'20 May 2025 18:58', du:'29d 07h 31m'},
	lun1267: {yr:2025, mo:07, m0:'27 May 2025 10:02', m1:'03 Jun 2025 10:40', m2:'11 Jun 2025 14:43', m3:'19 Jun 2025 02:19', du:'29d 07h 29m'},
	lun1268: {yr:2025, mo:08, m0:'25 Jun 2025 17:31', m1:'03 Jul 2025 02:30', m2:'11 Jul 2025 03:36', m3:'18 Jul 2025 07:37', du:'29d 08h 40m'},
	lun1269: {yr:2025, mo:09, m0:'25 Jul 2025 02:11', m1:'01 Aug 2025 19:41', m2:'09 Aug 2025 14:55', m3:'16 Aug 2025 12:12', du:'29d 10h 55m'},
	lun1270: {yr:2025, mo:10, m0:'23 Aug 2025 13:06', m1:'31 Aug 2025 13:25', m2:'08 Sep 2025 01:08', m3:'14 Sep 2025 17:32', du:'29d 13h 48m'},
	lun1271: {yr:2025, mo:11, m0:'22 Sep 2025 02:54', m1:'30 Sep 2025 06:53', m2:'07 Oct 2025 10:47', m3:'14 Oct 2025 01:12', du:'29d 16h 31m'},
	lun1272: {yr:2025, mo:12, m0:'21 Oct 2025 19:25', m1:'29 Oct 2025 23:20', m2:'05 Nov 2025 20:19', m3:'12 Nov 2025 12:28', du:'29d 18h 22m'}, // Loi Krathong 06 Nov 2025 *** 5

	lun1273: {yr:2026, mo:01, m0:'20 Nov 2025 13:47', m1:'28 Nov 2025 13:58', m2:'05 Dec 2025 06:14', m3:'12 Dec 2025 03:51', du:'29d 18h 56m'},
	lun1274: {yr:2026, mo:02, m0:'20 Dec 2025 08:43', m1:'28 Dec 2025 02:09', m2:'03 Jan 2026 17:02', m3:'10 Jan 2026 22:48', du:'29d 18h 09m'},
	lun1275: {yr:2026, mo:03, m0:'19 Jan 2026 02:51', m1:'26 Jan 2026 11:47', m2:'02 Feb 2026 05:09', m3:'09 Feb 2026 19:43', du:'29d 16h 09m'},
	lun1276: {yr:2026, mo:04, m0:'17 Feb 2026 19:01', m1:'24 Feb 2026 19:27', m2:'03 Mar 2026 18:37', m3:'11 Mar 2026 16:38', du:'29d 13h 22m'},
	lun1277: {yr:2026, mo:05, m0:'19 Mar 2026 08:23', m1:'26 Mar 2026 02:17', m2:'02 Apr 2026 09:11', m3:'10 Apr 2026 11:51', du:'29d 10h 28m'},
	lun1278: {yr:2026, mo:06, m0:'17 Apr 2026 18:51', m1:'24 Apr 2026 09:31', m2:'02 May 2026 00:23', m3:'10 May 2026 04:10', du:'29d 08h 09m'},
	lun1279: {yr:2026, mo:07, m0:'17 May 2026 03:01', m1:'23 May 2026 18:10', m2:'31 May 2026 15:45', m3:'08 Jun 2026 17:00', du:'29d 06h 53m'},
	lun1280: {yr:2026, mo:08, m0:'15 Jun 2026 09:54', m1:'22 Jun 2026 04:55', m2:'30 Jun 2026 06:56', m3:'08 Jul 2026 02:28', du:'29d 06h 50m'},
	lun1281: {yr:2026, mo:8.2,m0:'14 Jul 2026 16:43', m1:'21 Jul 2026 18:05', m2:'29 Jul 2026 21:35', m3:'06 Aug 2026 09:21', du:'29d 07h 53m'}, // leap month
	lun1282: {yr:2026, mo:09, m0:'13 Aug 2026 00:36', m1:'20 Aug 2026 09:46', m2:'28 Aug 2026 11:18', m3:'04 Sep 2026 14:51', du:'29d 09h 50m'},
	lun1283: {yr:2026, mo:10, m0:'11 Sep 2026 10:27', m1:'19 Sep 2026 03:43', m2:'26 Sep 2026 23:49', m3:'03 Oct 2026 20:25', du:'29d 12h 23m'},
	lun1284: {yr:2026, mo:11, m0:'10 Oct 2026 22:50', m1:'18 Oct 2026 23:12', m2:'26 Oct 2026 11:11', m3:'02 Nov 2026 03:28', du:'29d 15h 12m'},
	lun1285: {yr:2026, mo:12, m0:'09 Nov 2026 14:02', m1:'17 Nov 2026 18:47', m2:'24 Nov 2026 21:53', m3:'01 Dec 2026 13:08', du:'29d 17h 50m'}, // Loi Krathong 25 Nov 2026 *** 24

	lun1286: {yr:2027, mo:01, m0:'09 Dec 2026 07:51', m1:'17 Dec 2026 12:42', m2:'24 Dec 2026 08:28', m3:'31 Dec 2026 01:59', du:'29d 19h 32m'},
	lun1287: {yr:2027, mo:02, m0:'08 Jan 2027 03:24', m1:'16 Jan 2027 03:34', m2:'22 Jan 2027 19:17', m3:'29 Jan 2027 17:55', du:'29d 19h 32m'},
	lun1288: {yr:2027, mo:03, m0:'06 Feb 2027 22:56', m1:'14 Feb 2027 14:58', m2:'21 Feb 2027 06:23', m3:'28 Feb 2027 12:16', du:'29d 17h 33m'},
	lun1289: {yr:2027, mo:04, m0:'08 Mar 2027 16:29', m1:'15 Mar 2027 23:25', m2:'22 Mar 2027 17:43', m3:'30 Mar 2027 07:53', du:'29d 14h 22m'},
	lun1290: {yr:2027, mo:05, m0:'07 Apr 2027 06:51', m1:'14 Apr 2027 05:56', m2:'21 Apr 2027 05:27', m3:'29 Apr 2027 03:17', du:'29d 11h 07m'},
	lun1291: {yr:2027, mo:06, m0:'06 May 2027 17:58', m1:'13 May 2027 11:43', m2:'20 May 2027 17:59', m3:'28 May 2027 20:57', du:'29d 08h 42m'},
	lun1292: {yr:2027, mo:07, m0:'05 Jun 2027 02:40', m1:'11 Jun 2027 17:56', m2:'19 Jun 2027 07:44', m3:'27 Jun 2027 11:54', du:'29d 07h 22m'},
	lun1293: {yr:2027, mo:08, m0:'04 Jul 2027 10:02', m1:'11 Jul 2027 01:39', m2:'18 Jul 2027 22:44', m3:'26 Jul 2027 23:54', du:'29d 07h 03m'},
	lun1294: {yr:2027, mo:09, m0:'02 Aug 2027 17:05', m1:'09 Aug 2027 11:54', m2:'17 Aug 2027 14:28', m3:'25 Aug 2027 09:27', du:'29d 07h 36m'},
	lun1295: {yr:2027, mo:10, m0:'01 Sep 2027 00:41', m1:'08 Sep 2027 01:31', m2:'16 Sep 2027 06:03', m3:'23 Sep 2027 17:20', du:'29d 08h 55m'},
	lun1296: {yr:2027, mo:11, m0:'30 Sep 2027 09:36', m1:'07 Oct 2027 18:47', m2:'15 Oct 2027 20:47', m3:'23 Oct 2027 00:29', du:'29d 11h 00m'},
	lun1297: {yr:2027, mo:12, m0:'29 Oct 2027 20:36', m1:'06 Nov 2027 14:59', m2:'14 Nov 2027 10:25', m3:'21 Nov 2027 07:48', du:'29d 13h 48m'}, // Loi Krathong 14 Nov 2027

	lun1298: {yr:2028, mo:01, m0:'28 Nov 2027 10:24', m1:'06 Dec 2027 12:22', m2:'13 Dec 2027 23:08', m3:'20 Dec 2027 16:10', du:'29d 16h 48m'},
	lun1299: {yr:2028, mo:02, m0:'28 Dec 2027 03:12', m1:'05 Jan 2028 08:40', m2:'12 Jan 2028 11:03', m3:'19 Jan 2028 02:25', du:'29d 19h 00m'},
	lun1300: {yr:2028, mo:03, m0:'26 Jan 2028 22:12', m1:'04 Feb 2028 02:10', m2:'10 Feb 2028 22:03', m3:'17 Feb 2028 15:07', du:'29d 19h 25m'},
	lun1301: {yr:2028, mo:04, m0:'25 Feb 2028 17:37', m1:'04 Mar 2028 16:02', m2:'11 Mar 2028 08:06', m3:'18 Mar 2028 06:22', du:'29d 17h 54m'},
	lun1302: {yr:2028, mo:05, m0:'26 Mar 2028 11:31', m1:'03 Apr 2028 02:15', m2:'09 Apr 2028 17:26', m3:'16 Apr 2028 23:36', du:'29d 15h 16m'},
	lun1303: {yr:2028, mo:06, m0:'25 Apr 2028 02:46', m1:'02 May 2028 09:25', m2:'09 May 2028 02:48', m3:'16 May 2028 17:43', du:'29d 12h 29m'},
	lun1304: {yr:2028, mo:07, m0:'24 May 2028 15:16', m1:'31 May 2028 14:36', m2:'07 Jun 2028 13:08', m3:'15 Jun 2028 11:27', du:'29d 10h 11m'},
	lun1305: {yr:2028, mo:08, m0:'23 Jun 2028 01:27', m1:'29 Jun 2028 19:10', m2:'07 Jul 2028 01:10', m3:'15 Jul 2028 03:56', du:'29d 08h 34m'},
	lun1306: {yr:2028, mo:09, m0:'22 Jul 2028 10:01', m1:'29 Jul 2028 00:40', m2:'05 Aug 2028 15:09', m3:'13 Aug 2028 18:45', du:'29d 07h 42m'},
	lun1307: {yr:2028, mo:10, m0:'20 Aug 2028 17:43', m1:'27 Aug 2028 08:35', m2:'04 Sep 2028 06:47', m3:'12 Sep 2028 07:45', du:'29d 07h 40m'},
	lun1308: {yr:2028, mo:11, m0:'19 Sep 2028 01:23', m1:'25 Sep 2028 20:10', m2:'03 Oct 2028 23:25', m3:'11 Oct 2028 18:56', du:'29d 08h 33m'},
	lun1309: {yr:2028, mo:12, m0:'18 Oct 2028 09:56', m1:'25 Oct 2028 11:53', m2:'02 Nov 2028 16:17', m3:'10 Nov 2028 04:25', du:'29d 10h 21m'}, // Loi Krathong 02 Nov 2028

	lun1310: {yr:2028, mo:01, m0:'16 Nov 2028 20:17', m1:'24 Nov 2028 07:14', m2:'02 Dec 2028 08:40', m3:'09 Dec 2028 12:38', du:'29d 12h 48m'},
	lun1311: {yr:2029, mo:02, m0:'16 Dec 2028 09:06', m1:'24 Dec 2028 04:44', m2:'31 Dec 2028 23:48', m3:'07 Jan 2029 20:26', du:'29d 15h 18m'},
	lun1312: {yr:2029, mo:03, m0:'15 Jan 2029 00:24', m1:'23 Jan 2029 02:23', m2:'30 Jan 2029 13:03', m3:'06 Feb 2029 04:52', du:'29d 17h 07m'},
	lun1313: {yr:2029, mo:04, m0:'13 Feb 2029 17:31', m1:'21 Feb 2029 22:09', m2:'01 Mar 2029 00:10', m3:'07 Mar 2029 14:51', du:'29d 17h 48m'},
	lun1314: {yr:2029, mo:05, m0:'15 Mar 2029 11:19', m1:'23 Mar 2029 14:33', m2:'30 Mar 2029 09:26', m3:'06 Apr 2029 02:51', du:'29d 17h 21m'},
	lun1315: {yr:2029, mo:06, m0:'14 Apr 2029 04:40', m1:'22 Apr 2029 02:50', m2:'28 Apr 2029 17:36', m3:'05 May 2029 16:48', du:'29d 16h 02m'},
	lun1316: {yr:2029, mo:07, m0:'13 May 2029 20:42', m1:'21 May 2029 11:16', m2:'28 May 2029 01:37', m3:'04 Jun 2029 08:18', du:'29d 14h 08m'},
	lun1317: {yr:2029, mo:08, m0:'12 Jun 2029 10:50', m1:'19 Jun 2029 16:54', m2:'26 Jun 2029 10:22', m3:'04 Jul 2029 00:57', du:'29d 12h 01m'},
	lun1318: {yr:2029, mo:8.2,m0:'11 Jul 2029 22:51', m1:'18 Jul 2029 21:14', m2:'25 Jul 2029 20:35', m3:'02 Aug 2029 18:15', du:'29d 10h 05m'}, // leap month
	lun1319: {yr:2029, mo:09, m0:'10 Aug 2029 08:55', m1:'17 Aug 2029 01:55', m2:'24 Aug 2029 08:51', m3:'01 Sep 2029 11:33', du:'29d 08h 49m'},
	lun1320: {yr:2029, mo:10, m0:'08 Sep 2029 17:44', m1:'15 Sep 2029 08:29', m2:'22 Sep 2029 23:29', m3:'01 Oct 2029 03:56', du:'29d 08h 30m'},
	lun1321: {yr:2029, mo:11, m0:'08 Oct 2029 02:14', m1:'14 Oct 2029 18:08', m2:'22 Oct 2029 16:27', m3:'30 Oct 2029 18:32', du:'29d 09h 10m'},
	lun1322: {yr:2029, mo:12, m0:'06 Nov 2029 11:24', m1:'13 Nov 2029 07:35', m2:'21 Nov 2029 11:02', m3:'29 Nov 2029 06:47', du:'29d 10h 28m'}, // Loi Krathong 21 Nov 2029

	lun1323: {yr:2030, mo:01, m0:'05 Dec 2029 21:52', m1:'13 Dec 2029 00:49', m2:'21 Dec 2029 05:46', m3:'28 Dec 2029 16:49', du:'29d 11h 57m'},
	lun1324: {yr:2030, mo:02, m0:'04 Jan 2030 09:49', m1:'11 Jan 2030 21:06', m2:'19 Jan 2030 22:54', m3:'27 Jan 2030 01:14', du:'29d 13h 18m'},
	lun1325: {yr:2030, mo:03, m0:'02 Feb 2030 23:07', m1:'10 Feb 2030 18:49', m2:'18 Feb 2030 13:19', m3:'25 Feb 2030 08:57', du:'29d 14h 27m'},
	lun1326: {yr:2030, mo:04, m0:'04 Mar 2030 13:34', m1:'12 Mar 2030 15:47', m2:'20 Mar 2030 00:56', m3:'26 Mar 2030 16:51', du:'29d 15h 28m'},
	lun1327: {yr:2030, mo:05, m0:'03 Apr 2030 05:02', m1:'11 Apr 2030 09:56', m2:'18 Apr 2030 10:19', m3:'25 Apr 2030 01:38', du:'29d 16h 10m'},
	lun1328: {yr:2030, mo:06, m0:'02 May 2030 21:12', m1:'11 May 2030 00:11', m2:'17 May 2030 18:19', m3:'24 May 2030 11:57', du:'29d 16h 09m'},
	lun1329: {yr:2030, mo:07, m0:'01 Jun 2030 13:21', m1:'09 Jun 2030 10:35', m2:'16 Jun 2030 01:40', m3:'23 Jun 2030 00:19', du:'29d 15h 13m'},
	lun1330: {yr:2030, mo:08, m0:'01 Jul 2030 04:34', m1:'08 Jul 2030 18:01', m2:'15 Jul 2030 09:11', m3:'22 Jul 2030 15:07', du:'29d 13h 36m'},
	lun1331: {yr:2030, mo:09, m0:'30 Jul 2030 18:10', m1:'06 Aug 2030 23:42', m2:'13 Aug 2030 17:44', m3:'21 Aug 2030 08:15', du:'29d 11h 56m'},
	lun1332: {yr:2030, mo:10, m0:'29 Aug 2030 06:07', m1:'05 Sep 2030 04:55', m2:'12 Sep 2030 04:17', m3:'20 Sep 2030 02:56', du:'29d 10h 47m'},
	lun1333: {yr:2030, mo:11, m0:'27 Sep 2030 16:54', m1:'04 Oct 2030 10:56', m2:'11 Oct 2030 17:46', m3:'19 Oct 2030 21:50', du:'29d 10h 22m'},
	lun1334: {yr:2030, mo:12, m0:'27 Oct 2030 03:17', m1:'02 Nov 2030 18:55', m2:'10 Nov 2030 10:30', m3:'18 Nov 2030 15:32', du:'29d 10h 29m'}, // Loi Krathong 10 Nov 2030

	lun1335: {yr:2031, mo:01, m0:'25 Nov 2030 13:46', m1:'02 Dec 2030 05:56', m2:'10 Dec 2030 05:40', m3:'18 Dec 2030 07:01', du:'29d 10h 46m'},
	lun1336: {yr:2031, mo:02, m0:'25 Dec 2030 00:32', m1:'31 Dec 2030 20:36', m2:'09 Jan 2031 01:25', m3:'16 Jan 2031 19:47', du:'29d 10h 59m'},
}

/*
Source of solar data:
https://www.timeanddate.com/calendar/seasons.html
*/

var solar = [
//	 spring equinox       summer solstice      autumn equinox       winter solstice
	'20 Mar 2017 17:28', '21 Jun 2017 11:24', '23 Sep 2017 03:01', '21 Dec 2017 23:27',
	'20 Mar 2018 23:15', '21 Jun 2018 17:07', '23 Sep 2018 08:54', '22 Dec 2018 05:22',
	'21 Mar 2019 04:58', '21 Jun 2019 22:54', '23 Sep 2019 14:50', '22 Dec 2019 11:19',
	'20 Mar 2020 10:49', '21 Jun 2020 04:43', '22 Sep 2020 20:30', '21 Dec 2020 17:02',
	'20 Mar 2021 16:37', '21 Jun 2021 10:32', '23 Sep 2021 02:21', '21 Dec 2021 22:59',
	'20 Mar 2022 22:33', '21 Jun 2022 16:13', '23 Sep 2022 08:03', '22 Dec 2022 04:48',
 	'21 Mar 2023 04:24', '21 Jun 2023 21:57', '23 Sep 2023 13:50', '22 Dec 2023 10:27',
 	'20 Mar 2024 10:06', '21 Jun 2024 03:50', '22 Sep 2024 19:43', '21 Dec 2024 16:20',
 	'20 Mar 2025 16:01', '21 Jun 2025 09:42', '23 Sep 2025 01:19', '21 Dec 2025 22:03',
 	'20 Mar 2026 21:45', '21 Jun 2026 15:24', '23 Sep 2026 07:05', '22 Dec 2026 03:50',
 	'21 Mar 2027 03:24', '21 Jun 2027 21:10', '23 Sep 2027 13:01', '22 Dec 2027 09:42',
	'20 Mar 2028 09:17', '21 Jun 2028 03:01', '22 Sep 2028 18:45', '21 Dec 2028 15:19',
	'20 Mar 2029 15:02', '21 Jun 2029 08:48', '23 Sep 2029 00:38', '21 Dec 2029 21:14',
	'20 Mar 2030 20:51', '21 Jun 2030 14:31', '23 Sep 2030 06:26', '22 Dec 2030 03:09',
]

var holidays = [
	'songkran',  // new year, april 13 (solar)
	'loy krathong', // lunar, twelfth full moon
]

var loy_krathong = [ // 12th full moon of the year
	'2016 14 Nov',
	'2017 03 Nov',
	'2018 23 Nov',
	'2019 13 Nov',
	'2020 31 Oct',
	'2021 19 Nov',
	'2022 08 Nov',
	'2023 28 Nov',
	'2024 16 Nov',
	'2025 06 Nov',
	'2026 25 Nov',
	'2027 14 Nov',
	'2028 02 Nov',
	'2029 21 Nov',
	'2030 10 Nov',
]

/* 
lunar months
http://www.thaibis.com/a-z/t/tc/traditional-calendar

Chantarakati is the way to keep dates by using the Moon's orbital cycle around the Earth. 
Each cycle is 29 days, 12 hours, 44 minutes. 
Chantarakati month is therefore 30 days or 29 days alternately for the whole year.

Each month begins on Wan Kuen Nueng Kham (first day of the waxing moon). 
Wan Kuen Sib Ha Kham (day of the full moon) is the middle of the month. 
Wan Dub is last day of the month which is either Wan Ram 15 Kham or Wan Ram 14 Kham 
depending on whether that month has 30 or 29 days.

Because each month is 30 or 29 days long, 
the Lunar-year days will be shorter by about 12 days than the actual time the Earth circles the Sun. 
To be synchronous with the seasonal changes, 
every two or three years another month is added to Duen Pad (the Eighth month) 
and called Duen Pad Lung (the latter Eighth month). 
Such year with two Duen Pads is called ATHIKAMAS.
 

The Chantarakati months are named from one to twelve: -
ai (one), yi (two), sam (three), si (four), ha (five), hok (six), 
jed (seven), pad (eight), kao (nine), sib (ten), sib-ed (eleven), sib-song (twelve).

The first month on Prokatimas year (ordinary year) falls in November 
but in Athikamas year (year with two Duen Pad's) it falls in December.


chantarakati - a system of months based on the lunar orbit

sidereal period = 27.3217 days =             = orbital period
synodic period  = 29.5305 days = 29d 12h 44m = appearance to human observer of phases

longer because earth is also moving = time between same phases 

Also the phases

this is the appearance to a human observer of moon phases.
longer because earth is also moving, revolving around the sun

The data above is plotted for Nakhon Ratchasima, Thailand.
Each lunation appears to have a different length, from 29d 8h to 29d 

day    rotation of the earth
month  orbit of the moon around the earth 
year   orbit of earth around the sun

btw, the rotation of the moon = orbit of moon around the earth
That's why the same side of the moon always faces the earth, 
and evidence of the formation of earth and moon.

The day, month, and year systems are unrelated to one another.
So we use a leap year to keep days and years in synch.
Solar months are arbitrarily defined to fit 12 of them into one year.

Lunar months are based on the orbit and
there are 29 or 30 days in each month.

All the human time-keeping systems agree on day and night.
And also on the year, because of weather and growing seasons.

Solar months. 
Arbitrarily defined with 12 months per year.
With a leap day sometimes inserted into month 2.


Lunar months. 
one month = one lunation = alternating between 29 and 30 days in length.
With a leap day sometime inserted into month 7.

Some years have 12 months, numbered 1 thru 12.
Some years have 13 months, numbered 1 thru 12, including a second month 8.

Prokatimas - a 12 month year
Athikamas - a 13 month year (with two month 8s)

The first month on Prokatimas year (ordinary year) falls in November 
but in Athikamas year (year with two Duen Pad's) it falls in December.

In a prokatimas year, the first month starts in November.   IMPOSSIBLE
In an athikamas year, the first month starts in December.


Prokatimas Athikamas

https://calendars.fandom.com/wiki/Thai_lunar_calendar
http://www.thaibis.com/a-z/t/tc/traditional-calendar
https://sciencing.com/moon-phases-occur-5365874.html

*/


/*
new lunar calendar based on known dates for Loi Krathong

start with first Loi Krathong in our data
go forward 14 days

backup 15 days

mon

waxing, new to full, always 15 days
waning, full to new, 14 or 15


*/
