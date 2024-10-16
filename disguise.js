// platforms
const platforms = ['Win32', 'Win16', 'SunOS', 'MacIntel', 'Linux', 'Android', 'Linux x86_64'];
Object.defineProperty(navigator, 'platform',
	{
		get: function() {
		   return platforms[Math.floor(Math.random() * platforms.length)];
		}
	}
);

// doNotTrack
Object.defineProperty(navigator, 'doNotTrack', 
    {
        value: 1,
        writable: false,
    }
);

// operating system
const opsystems = ['Windows NT 6.0', 'Windows NT 6.0; Win64; x64', 'Intel Mac OS 13', 'Intel Mac OS 14', 'Intel Mac OS 15'];
Object.defineProperty(navigator, 'oscpu', 
    {
        get: function() {
            return opsystems[Math.floor(Math.random() * opsystems.length)];
        }
    }
);

// languages
const languages = ['en-US', 'zh-CH', 'ja-JP', 'fr-FR'];
Object.defineProperty(navigator, 'language',
    {
        get:function() {
            return languages[Math.floor(Math.random() * languages.length)];
        }
    }
);

Object.defineProperty(navigator, 'languages', 
    {
        value: languages,
    }
);

// cores
Object.defineProperty(navigator, 'hardwareConcurrency',
    {
        value: Math.pow(2, Math.floor(Math.random() * 4) + 1),
    }
);

// if you like you can add more navigator property randomization!