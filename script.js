document.addEventListener("DOMContentLoaded", function() {
    // ==================== إعدادات خريطة السماء ====================
    const config = {
        width: window.innerWidth,
        height: window.innerHeight,
        projection: "stereographic",
        transform: "equatorial",
        center: [0, 0],
        background: { fill: "#000010", stroke: "#2c5d87", opacity: 1 },
        stars: {
            show: true,
            limit: 6,
            colors: true,
            style: { fill: "#ffffff", opacity: 1 },
            names: true,
            proper: true,
            size: 7,
        },
        mw: {
            show: true,
            style: { fill: "#ffffff", opacity: 0.15 }
        },
        constellations: {
            show: true,
            names: true,
            lines: true,
            lineStyle: { stroke: "#5577ff", width: 1, opacity: 0.6 },
        },
        planets: {
            show: true,
            symbolType: "symbol",
            names: true,
        }
    };

    // إنشاء وعرض الخريطة
    Celestial.display(config);

    // ==================== بيانات المحتوى التعليمي ====================
    const educationalContent = {
        "guide": {
            title: "دليل المستخدم",
            content: `
                <strong>مرحباً بك في مستكشف السماء!</strong><br><br>
                <strong>🎵 زر الموسيقى:</strong> شغّل أو أوقف الموسيقى الهادئة في الخلفية.<br><br>
                <strong>👁️ الوضع الليلي:</strong> حول الشاشة إلى درجات اللون الأحمر للحفاظ على رؤيتك في الظلام.<br><br>
                <strong>🧭 البوصلة:</strong> فعّل هذا الزر لربط الخريطة بمستشعرات الجهاز. ستتحرك الخريطة مع حركة هاتفك لتعكس السماء الحقيقية.<br><br>
                <strong>🛰️ محطة الفضاء:</strong> اعرض موقع محطة الفضاء الدولية على الخريطة وتحديثها في الوقت الفعلي.<br><br>
                <strong>ℹ️ المعلومات:</strong> اقرأ معلومات شيقة عن الكوكبات والأجرام السماوية.
            `
        },
        "ursa-major": {
            title: "الدب الأكبر",
            content: "واحدة من أشهر الكوكبات في سماء نصف الكرة الشمالي. أشهر جزء فيها هو 'بنات نعش الكبرى'، وهي سبعة نجوم لامعة تشكل شكل مغرفة. يمكن استخدام النجمين الأخيرين في المغرفة للإشارة إلى نجم الشمال (بولاريس). يمكن رؤيتها على مدار العام في نصف الكرة الشمالي."
        },
        "orion": {
            title: "كوكبة الجبار",
            content: "تُعرف أيضًا بـ 'الصياد'، وهي من ألمع الكوكبات ويمكن رؤيتها من جميع أنحاء العالم تقريباً. تشتهر بحزامها المكون من ثلاثة نجوم لامعة في خط مستقيم. تحتوي على نجوم عملاقة حمراء مثل بيتلجيوز وريجل. هذه الكوكبة مرئية بشكل أفضل في فصل الشتاء في نصف الكرة الشمالي."
        },
        "andromeda": {
            title: "مجرة المرأة المسلسلة",
            content: "أقرب مجرة حلزونية كبيرة إلى مجرتنا درب التبانة، على بعد حوالي 2.5 مليون سنة ضوئية. يمكن رؤيتها بالعين المجردة في الليالي الصافية كنقطة ضبابية خافتة. تحتوي على حوالي تريليون نجم. ستصطدم هذه المجرة بمجرتنا درب التبانة في غضون حوالي 4.5 مليار سنة."
        },
        "cassiopeia": {
            title: "ذات الكرسي",
            content: "كوكبة شمالية شهيرة تشبه في شكلها حرف 'W' أو 'M' حسب موقعها في السماء. مثل الدب الأكبر، يمكن رؤيتها طوال العام في نصف الكرة الشمالي. تحتوي على عدة نجوم لامعة وتقع بالقرب من نجم الشمال. سميت على اسم ملكة إثيوبيا في الأساطير اليونانية."
        },
        "vega": {
            title: "نجم النسر الواقع (Vega)",
            content: "هو ألمع نجم في كوكبة القيثارة (Lyra)، وخامس ألمع نجم في سماء الليل. يقع على بعد حوالي 25 سنة ضوئية من الأرض. كان نجم الشمال في الماضي البعيد وسيكون كذلك مرة أخرى في المستقبل بسبب حركة محور الأرض. يُستخدم كنقطة مرجعية في قياس سطوع النجوم الأخرى."
        },
        "crab-nebula": {
            title: "سديم السرطان",
            content: "بقايا انفجار نجمي (مستعر أعظم) تم تسجيله من قبل علماء الفلك الصينيين عام 1054. يقع في كوكبة الثور ويحتوي على نجم نيوتروني سريع الدوران في مركزه. يُعتبر من أشهر السدم في السماء ويمكن رؤيته بالتلسكوبات الصغيرة. يتوسع بسرعة حوالي 1500 كيلومتر في الثانية."
        },
        "milky-way": {
            title: "درب التبانة",
            content: "مجرتنا الحلزونية التي تحتوي على حوالي 100-400 مليار نجم. تحتوي على نظامنا الشمسي وتقع الأرض في أحد أذرعها. يمكن رؤية درب التبانة كشريط ضبابي أبيض يعبر السماء في الليالي الصافية بعيداً عن تلوث الضوء. تدور حول مركزها مرة واحدة كل 225-250 مليون سنة."
        },
        "jupiter": {
            title: "كوكب المشتري",
            content: "أكبر كوكب في نظامنا الشمسي وخامس كوكب من الشمس. يتميز بنطاقات ملونة وبقعة حمراء عظيمة. يمكن رؤيته بالعين المجردة ويكون من ألمع الأجرام السماوية بعد القمر والزهرة. يدور حول الشمس مرة واحدة كل 12 سنة أرضية. له 95 قمراً معروفاً."
        },
        "saturn": {
            title: "كوكب زحل",
            content: "الكوكب السادس من الشمس وأشهر كوكب بسبب حلقاته الجميلة. يمكن رؤيته بالعين المجردة ويظهر بلون أصفر فاتح. الحلقات مصنوعة من جزيئات جليدية وصخرية. له 146 قمراً معروفاً. يدور حول الشمس مرة واحدة كل 29 سنة أرضية."
        }
    };

    // ==================== التعامل مع النافذة المنبثقة ====================
    const infoModal = document.getElementById("info-modal");
    const infoButton = document.getElementById("info-button");
    const closeButton = document.querySelector(".close-button");
    const topicsList = document.getElementById("topics-list");
    const topicContent = document.getElementById("topic-content");

    // ملء قائمة المواضيع
    for (const key in educationalContent) {
        const item = educationalContent[key];
        const button = document.createElement("button");
        button.textContent = item.title;
        button.onclick = () => {
            document.querySelectorAll("#topics-list button").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            topicContent.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
        };
        topicsList.appendChild(button);
    }

    infoButton.onclick = function() {
        infoModal.classList.add("show");
    }
    closeButton.onclick = function() {
        infoModal.classList.remove("show");
    }
    window.onclick = function(event) {
        if (event.target == infoModal) {
            infoModal.classList.remove("show");
        }
    }

    // ==================== التعامل مع الموسيقى ====================
    const musicButton = document.getElementById("music-button");
    let isMusicPlaying = false;
    const sound = new Howl({
        src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
        loop: true,
        volume: 0.2,
        onload: function() {
            console.log('الموسيقى جاهزة للتشغيل');
        },
        onloaderror: function() {
            console.log('فشل تحميل الموسيقى');
        }
    });

    musicButton.addEventListener("click", () => {
        isMusicPlaying = !isMusicPlaying;
        if (isMusicPlaying) {
            sound.play();
            musicButton.classList.add("active");
        } else {
            sound.pause();
            musicButton.classList.remove("active");
        }
    });

    // ==================== التعامل مع الوضع الليلي ====================
    const nightModeButton = document.getElementById("night-mode-button");
    let isNightMode = false;

    nightModeButton.addEventListener("click", () => {
        isNightMode = !isNightMode;
        document.body.classList.toggle("night-mode");
        nightModeButton.classList.toggle("active");
    });

    // ==================== التعامل مع البوصلة والـ GPS ====================
    const gpsButton = document.getElementById("gps-button");
    let isGpsActive = false;
    let userLocation = null;
    const weatherStatusElement = document.getElementById("weather-status");

    function getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    userLocation = position.coords;
                    fetchWeatherData(userLocation.latitude, userLocation.longitude);
                },
                () => {
                    weatherStatusElement.textContent = "الطقس: تم رفض الوصول للموقع";
                }
            );
        } else {
            weatherStatusElement.textContent = "الطقس: الموقع غير مدعوم";
        }
    }

    function fetchWeatherData(latitude, longitude) {
        const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=cloud_cover`;

        fetch(weatherApiUrl)
            .then(res => res.json())
            .then(data => {
                if (data && data.current && typeof data.current.cloud_cover !== 'undefined') {
                    const cloudCover = data.current.cloud_cover;
                    updateWeatherStatus(cloudCover);
                } else {
                    weatherStatusElement.textContent = "الطقس: خطأ في جلب البيانات";
                }
            })
            .catch(() => {
                weatherStatusElement.textContent = "الطقس: فشل الاتصال";
            });
    }

    function updateWeatherStatus(cloudCover) {
        let statusText = "الطقس: ";
        if (cloudCover <= 10) {
            statusText += "صافٍ تمامًا ☀️";
        } else if (cloudCover <= 40) {
            statusText += "صافٍ جزئيًا 🌤️";
        } else if (cloudCover <= 70) {
            statusText += "غائم جزئيًا ☁️";
        } else {
            statusText += "غائم كليًا 🌥️";
        }
        weatherStatusElement.textContent = statusText;
    }

    function orientationHandler(event) {
        if (!event.alpha) return;
        const azimuth = event.alpha;
        Celestial.center({
            azimuth: azimuth,
            altitude: 45
        }, 500);
    }

    gpsButton.addEventListener("click", () => {
        isGpsActive = !isGpsActive;

        if (isGpsActive) {
            if (!userLocation) {
                alert("يرجى السماح بالوصول إلى موقعك أولاً.");
                isGpsActive = false;
                return;
            }

            if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission()
                    .then(permissionState => {
                        if (permissionState === 'granted') {
                            window.addEventListener('deviceorientation', orientationHandler);
                            gpsButton.classList.add("active");
                        } else {
                            isGpsActive = false;
                        }
                    })
                    .catch(console.error);
            } else {
                window.addEventListener('deviceorientation', orientationHandler);
                gpsButton.classList.add("active");
            }
        } else {
            window.removeEventListener('deviceorientation', orientationHandler);
            gpsButton.classList.remove("active");
        }
    });

    // ==================== التعامل مع محطة الفضاء الدولية ====================
    const issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544";
    let issInterval;
    let isIssTracking = false;
    const issButton = document.getElementById("iss-button");

    function fetchAndDrawISS() {
        fetch(issApiUrl)
            .then(res => res.json())
            .then(data => {
                const { latitude, longitude } = data;
                
                // حذف الكائن القديم إذا كان موجودًا
                Celestial.container.selectAll("#ISS").remove();
                
                // إضافة الكائن الجديد
                const issFeature = {
                    type: "Feature",
                    id: "ISS",
                    properties: {
                        name: "محطة الفضاء الدولية",
                    },
                    geometry: {
                        type: "Point",
                        coordinates: [-longitude, latitude]
                    }
                };

                // رسم النقطة على الخريطة
                const projection = Celestial.projection;
                const pos = projection([-longitude, latitude]);
                
                if (pos) {
                    Celestial.container.append("circle")
                        .attr("id", "ISS")
                        .attr("cx", pos[0])
                        .attr("cy", pos[1])
                        .attr("r", 8)
                        .attr("fill", "#ff0000")
                        .attr("opacity", 0.8)
                        .attr("stroke", "#ff6b6b")
                        .attr("stroke-width", 2);
                }
            })
            .catch(err => console.error("خطأ في جلب بيانات محطة الفضاء:", err));
    }

    issButton.addEventListener("click", () => {
        isIssTracking = !isIssTracking;

        if (isIssTracking) {
            issButton.classList.add("active");
            fetchAndDrawISS();
            issInterval = setInterval(fetchAndDrawISS, 5000);
        } else {
            issButton.classList.remove("active");
            clearInterval(issInterval);
            Celestial.container.selectAll("#ISS").remove();
        }
    });

    // ==================== بدء تحميل البيانات ====================
    getUserLocation();

    // ==================== التعامل مع تغيير حجم النافذة ====================
    window.addEventListener('resize', function() {
        Celestial.resize();
    });
});
