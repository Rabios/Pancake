pancake.os = {};
pancake.os.iOS = navigator.userAgent.match(/iPhone|iPad|iPod|Apple-iPhone/i) != null;
pancake.os.ANDROID = navigator.userAgent.match(/Android/i) != null;
pancake.os.OSX = navigator.userAgent.match(/Macintosh|Intel Mac OS X/i) != null;
pancake.os.WINDOWS = navigator.userAgent.match(/Windows|Windows NT/i) != null;
pancake.os.WINDOWS_PHONE = navigator.userAgent.match(/Windows Phone/i) != null;
pancake.os.LINUX = navigator.userAgent.match(/Linux|X11/i) != null;
pancake.os.UBUNTU = navigator.userAgent.match(/Ubuntu/i) != null;
pancake.os.PLAYSTATION = navigator.userAgent.match(/PlayStation/i) != null;
pancake.os.XBOX = navigator.userAgent.match(/Xbox|XBOX_ONE_ED|Xbox One/i) != null;
pancake.os.BLACKBERRY = navigator.userAgent.match(/Blackberry|BB/i) != null;
pancake.os.CHROMECAST = navigator.userAgent.match(/CrKey/i) != null;
pancake.os.CHROME_OS = navigator.userAgent.match(/CrOS/i) != null;
pancake.os.PS4 = navigator.userAgent.match(/PlayStation 4/i) != null;
pancake.os.PSVITA = navigator.userAgent.match(/PlayStation Vita/i) != null;
pancake.os.XBOX_ONE = navigator.userAgent.match(/Xbox One/i) != null;
pancake.os.XBOX_ONE_S = navigator.userAgent.match(/XBOX_ONE_ED/i) != null;
pancake.os.NINTENDO = navigator.userAgent.match(/Nintendo/i) != null;
pancake.os.N3DS = navigator.userAgent.match(/Nintendo 3DS/i) != null;
pancake.os.WII_U = navigator.userAgent.match(/Nintendo WiiU/i) != null;
pancake.os.FIRE_TV = navigator.userAgent.match(/AFTS/i) != null;
pancake.os.ROKU_ULTRA = navigator.userAgent.match(/Roku4640X/i) != null;
pancake.os.ROKU = navigator.userAgent.match(/Roku/i) != null;
pancake.os.NEXUS_PLAYER = navigator.userAgent.match(/Nexus Player/i) != null;
pancake.os.MINIX_NEO_X5 = navigator.userAgent.match(/NEO-X5/i) != null;
pancake.os.APPLE_TV = navigator.userAgent.match(/AppleTV/i) != null;
pancake.os.KINDLE = navigator.userAgent.match(/Kindle/i) != null;
